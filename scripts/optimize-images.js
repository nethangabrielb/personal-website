// scripts/optimize-images.js
import sharp from "sharp";

const images = [
  { input: "public/hero-me.jpg", output: "public/hero-me.webp", width: 570 },
  {
    input: "public/calibrate-screenshot.png",
    output: "public/calibrate-screenshot.webp",
    width: 960,
  },
  {
    input: "public/chirper-screenshot.png",
    output: "public/chirper-screenshot.webp",
    width: 960,
  },
];

for (const { input, output, width } of images) {
  await sharp(input).resize({ width }).webp({ quality: 80 }).toFile(output);
  console.log(`Done: ${output}`);
}
