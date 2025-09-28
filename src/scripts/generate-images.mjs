// src/scripts/generate-avatar.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const inFile = "public/Avatar.jpg"; // звідси беремо оригінал
const outDir = "public/img"; // сюди кладемо деривативи
const sizes = [128, 256, 512]; // ширини (підійдуть і 96/160, але із запасом)

await mkdir(outDir, { recursive: true });

for (const w of sizes) {
  // JPEG (fallback)
  await sharp(inFile)
    .resize({ width: w, height: Math.round((w * 157) / 118), fit: "cover" }) // портретне співвідношення ~118/157
    .jpeg({ quality: 78, progressive: true })
    .toFile(`${outDir}/avatar-${w}.jpg`);

  // WEBP
  await sharp(inFile)
    .resize({ width: w, height: Math.round((w * 157) / 118), fit: "cover" })
    .webp({ quality: 76 })
    .toFile(`${outDir}/avatar-${w}.webp`);

  // AVIF (дуже маленький розмір)
  await sharp(inFile)
    .resize({ width: w, height: Math.round((w * 157) / 118), fit: "cover" })
    .avif({ quality: 45 })
    .toFile(`${outDir}/avatar-${w}.avif`);
}

console.log("✅ Avatar responsive variants generated");
