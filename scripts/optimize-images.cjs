
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_DIR = path.join(__dirname, '../public/images/final');
const OUTPUT_DIR = path.join(__dirname, '../public/images/final/optimized');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImages() {
    console.log(`Starting optimization of images in ${INPUT_DIR}...`);

    const files = fs.readdirSync(INPUT_DIR).filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    let totalSavedBytes = 0;

    for (const file of files) {
        const inputPath = path.join(INPUT_DIR, file);
        const outputPath = path.join(OUTPUT_DIR, file);

        try {
            const metadata = await sharp(inputPath).metadata();
            const originalSize = fs.statSync(inputPath).size;

            console.log(`Processing ${file} (${(originalSize / 1024 / 1024).toFixed(2)} MB)...`);

            // Strategy: Max width 1920px, Quality 80%, MozJPEG active
            await sharp(inputPath)
                .resize(1920, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .jpeg({
                    quality: 80,
                    mozjpeg: true
                })
                .toFile(outputPath);

            const newSize = fs.statSync(outputPath).size;
            const saved = originalSize - newSize;
            totalSavedBytes += saved;

            console.log(`  -> Optimized: ${(newSize / 1024 / 1024).toFixed(2)} MB (Saved ${(saved / 1024 / 1024).toFixed(2)} MB)`);

        } catch (error) {
            console.error(`  x Error processing ${file}:`, error.message);
        }
    }

    console.log('---');
    console.log(`Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Optimized images are in: ${OUTPUT_DIR}`);
    console.log('To apply changes, replace the originals with these files.');
}

optimizeImages();
