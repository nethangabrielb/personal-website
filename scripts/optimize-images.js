// scripts/optimize-images.js
import sharp from "sharp";

const images = [
  { input: "public/hero-me.jpg", output: "public/hero-me.webp", width: 1086 },
  {
    input: "public/hero-me-new.png",
    output: "public/hero-me-new.webp",
    width: 1086,
  },
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
  {
    input: "public/personal-website.png",
    output: "public/personal-website.webp",
    width: 960,
  },
];

for (const { input, output, width } of images) {
  await sharp(input).resize({ width }).webp({ quality: 95 }).toFile(output);
  console.log(`Done: ${output}`);
}
