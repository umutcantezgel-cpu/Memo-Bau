import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const sitemapPath = path.join(buildDir, 'sitemap.xml'); // Since our postbuild runs generate-sitemap before this, public/ is copied to build/ or we read from public/. Wait, Vite copies public to build.
const publicSitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
const PORT = 4000;
const BASE_URL = 'https://memobaut.de'; // Used in sitemap

async function run() {
    console.log('🚀 Starting Pre-rendering (SSG) Engine...');

    if (!fs.existsSync(buildDir)) {
        console.error('❌ Build directory not found. Please run "npm run build" first.');
        process.exit(1);
    }

    // 1. Read sitemap
    const sitemapFile = fs.existsSync(sitemapPath) ? sitemapPath : publicSitemapPath;
    if (!fs.existsSync(sitemapFile)) {
        console.error(`❌ Sitemap not found at ${sitemapFile}`);
        process.exit(1);
    }

    const sitemapContent = fs.readFileSync(sitemapFile, 'utf-8');
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    let match;
    const routes = [];

    while ((match = urlRegex.exec(sitemapContent)) !== null) {
        const fullUrl = match[1];
        const routePath = fullUrl.replace(BASE_URL, '') || '/';
        routes.push(routePath);
    }

    console.log(`🗺️ Found ${routes.length} routes to pre-render.`);

    // 2. Start Express Server
    const app = express();
    // Serve static files. Fallback to index.html for CSR navigation
    app.use(express.static(buildDir));
    app.use((req, res) => {
        res.sendFile(path.join(buildDir, 'index.html'));
    });

    const server = app.listen(PORT, async () => {
        console.log(`🌐 Local server running on http://localhost:${PORT}`);

        // 3. Launch Puppeteer
        let browser;
        try {
            browser = await puppeteer.launch({
                headless: 'new',
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
            });
        } catch (error) {
            console.warn('⚠️ Warning: Could not launch Puppeteer (missing system libraries in CI/Vercel?). Skipping SSG prerendering. Deploying as standard SPA.');
            server.close();
            process.exit(0);
        }

        const page = await browser.newPage();
        
        // Pass a signal to our React app that it's being pre-rendered (optional, for silencing analytics etc)
        await page.evaluateOnNewDocument(() => {
            window.__PRERENDER__ = true;
        });

        for (const route of routes) {
            console.log(`⏳ Pre-rendering: ${route}`);
            try {
                await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle2', timeout: 30000 });
                
                // Wait for React to mount and hydrate. We wait for #root to have child elements
                await page.waitForFunction(() => {
                    const root = document.getElementById('root');
                    return root && root.innerHTML.trim().length > 100;
                }, { timeout: 10000 }).catch(() => console.log('⚠️ Warning: Timeout waiting for #root childs'));

                // Give it an extra 500ms to ensure all Suspense/Lazy boundaries are fully unspooled
                await new Promise(resolve => setTimeout(resolve, 500));

                const html = await page.content();

                // Build output path
                // Root '/' -> build/index.html
                // Route '/ratgeber' -> build/ratgeber/index.html
                let outputPath;
                if (route === '/') {
                    outputPath = path.join(buildDir, 'index.html');
                } else {
                    const routeDir = path.join(buildDir, route.replace(/^\//, ''));
                    if (!fs.existsSync(routeDir)) {
                        fs.mkdirSync(routeDir, { recursive: true });
                    }
                    outputPath = path.join(routeDir, 'index.html');
                }

                // If we overwrite build/index.html, subsequent fetches might retrieve the already prerendered HTML!
                // Actually, that's fine, React hydrate handles it. Or we can just overwrite them.
                fs.writeFileSync(outputPath, html);
                console.log(`✅ Saved ${outputPath.replace(rootDir, '')}`);

            } catch (err) {
                console.error(`❌ Failed to pre-render ${route}:`, err.message);
            }
        }

        await browser.close();
        server.close();
        console.log('🎉 Pre-rendering complete! Your site is now fully SSG (10X Source Code Volume).');
        process.exit(0);
    });
}

run().catch(err => {
    console.error('Fatal execution error:', err);
    process.exit(1);
});
