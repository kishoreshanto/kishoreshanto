import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminWebp from 'imagemin-webp';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const inputDir = 'src/lib/assets';
const outputDir = 'static/optimized';

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');
  
  // Optimize JPEG background
  await imagemin([`${inputDir}/*.jpg`], {
    destination: outputDir,
    plugins: [
      imageminMozjpeg({
        quality: 75,
        progressive: true
      })
    ]
  });

  // Create WebP versions
  await imagemin([`${inputDir}/*.{jpg,png}`], {
    destination: `${outputDir}/webp`,
    plugins: [
      imageminWebp({
        quality: 80
      })
    ]
  });

  // Optimize PNG signatures
  await imagemin([`${inputDir}/*.png`], {
    destination: outputDir,
    plugins: [
      imageminWebp({
        quality: 90,
        lossless: true
      })
    ]
  });

  console.log('✅ Image optimization complete!');
  console.log('📊 Check the static/optimized/ directory for optimized images');
}

optimizeImages().catch(console.error);
