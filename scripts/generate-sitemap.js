
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://memobaut.de';

// ── All 20 premium location slugs (synced with src/core/locations/) ──
const LOCATION_SLUGS = [
    'werdorf', 'asslar', 'wetzlar', 'dillenburg', 'herborn',
    'haiger', 'ehringshausen', 'leun', 'solms', 'braunfels',
    'giessen', 'linden', 'langgoens', 'butzbach', 'bad-nauheim',
    'lahnau', 'huettenberg', 'weilburg', 'schoeffengrund', 'pohlheim'
];

const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];

    // ── Static pages ──
    const staticPages = [
        { route: '/', priority: '1.0', changefreq: 'weekly' },
        { route: '/services', priority: '0.9', changefreq: 'monthly' },
        { route: '/contact', priority: '0.9', changefreq: 'monthly' },
        { route: '/gallery', priority: '0.8', changefreq: 'weekly' },
        { route: '/about', priority: '0.8', changefreq: 'monthly' },
        { route: '/produkte', priority: '0.8', changefreq: 'monthly' },
        { route: '/standorte', priority: '0.8', changefreq: 'monthly' },
        { route: '/impressum', priority: '0.3', changefreq: 'yearly' },
        { route: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
        { route: '/agb', priority: '0.3', changefreq: 'yearly' },
        { route: '/cookie-richtlinie', priority: '0.2', changefreq: 'yearly' },
        { route: '/barrierefreiheit', priority: '0.2', changefreq: 'yearly' }
    ];

    // ── Dynamic location pages (20 cities) ──
    const locationPages = LOCATION_SLUGS.map(slug => ({
        route: `/standorte/${slug}`,
        priority: '0.8',
        changefreq: 'monthly'
    }));

    const allPages = [...staticPages, ...locationPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(item => `    <url>
        <loc>${BASE_URL}${item.route}</loc>
        <lastmod>${today}</lastmod>
        <changefreq>${item.changefreq}</changefreq>
        <priority>${item.priority}</priority>
    </url>`).join('\n')}
</urlset>`;

    const publicDir = path.join(__dirname, '../public');

    if (!fs.existsSync(publicDir)) {
        console.error('Public directory not found at:', publicDir);
        process.exit(1);
    }

    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap.trim());
    console.log(`Sitemap generated with ${allPages.length} routes (${staticPages.length} static + ${locationPages.length} locations) at ${path.join(publicDir, 'sitemap.xml')}`);
};

try {
    generateSitemap();
} catch (error) {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
}
