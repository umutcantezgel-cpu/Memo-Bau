import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'public/images/final');

async function processImages() {
    try {
        const files = fs.readdirSync(directoryPath);

        for (const file of files) {
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                const inputPath = path.join(directoryPath, file);
                const outputFileName = file.replace(/\.(jpg|jpeg)$/i, '.webp');
                const outputPath = path.join(directoryPath, outputFileName);

                console.log(`Converting ${file} to ${outputFileName}...`);

                await sharp(inputPath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(outputPath);

                console.log(`Successfully converted ${file}.`);
            }
        }
        console.log('All images processed successfully.');
    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages();
