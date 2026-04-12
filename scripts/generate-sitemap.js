
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://memobaut.de'; // Updated domain

const generateSitemap = () => {
    const sitemapData = [
        { route: '/', priority: '1.0', changefreq: 'weekly' },
        { route: '/services', priority: '0.9', changefreq: 'monthly' },
        { route: '/contact', priority: '0.9', changefreq: 'monthly' },
        { route: '/gallery', priority: '0.8', changefreq: 'weekly' },
        { route: '/about', priority: '0.8', changefreq: 'monthly' },
        { route: '/produkte', priority: '0.8', changefreq: 'monthly' },
        { route: '/standorte', priority: '0.7', changefreq: 'monthly' },
        { route: '/impressum', priority: '0.3', changefreq: 'yearly' },
        { route: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
        { route: '/agb', priority: '0.3', changefreq: 'yearly' },
        { route: '/cookie-richtlinie', priority: '0.2', changefreq: 'yearly' },
        { route: '/barrierefreiheit', priority: '0.2', changefreq: 'yearly' }
    ];

    const today = new Date().toISOString().split('T')[0];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapData.map(item => `    <url>
        <loc>${BASE_URL}${item.route}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${item.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    const publicDir = path.join(__dirname, '../public');

    // Ensure public dir exists (it should)
    if (!fs.existsSync(publicDir)) {
        console.error('Public directory not found at:', publicDir);
        process.exit(1);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.trim());
    console.log(`Sitemap generated with ${sitemapData.length} routes at ${path.join(publicDir, 'sitemap.xml')}`);
};

try {
    generateSitemap();
} catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
}
