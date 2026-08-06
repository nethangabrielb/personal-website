// scripts/optimize-images.js
import sharp from "sharp";

// The largest width in each list is the canonical file (no suffix);
// smaller widths are emitted as `-<width>.webp` for srcset.
const images = [
  { input: "public/hero-me.jpg", output: "public/hero-me.webp", widths: [1086] },
  {
    input: "public/hero-me-new.png",
    output: "public/hero-me-new.webp",
    widths: [540, 768, 1086],
  },
  {
    input: "public/calibrate-screenshot.png",
    output: "public/calibrate-screenshot.webp",
    widths: [480, 768, 960],
  },
  {
    input: "public/chirper-screenshot.png",
    output: "public/chirper-screenshot.webp",
    widths: [480, 768, 960],
  },
  {
    input: "public/personal-website.png",
    output: "public/personal-website.webp",
    widths: [480, 768, 960],
  },
];

for (const { input, output, widths } of images) {
  const maxWidth = Math.max(...widths);
  for (const width of widths) {
    const suffix = width === maxWidth ? "" : `-${width}`;
    const path = output.replace(/\.webp$/, `${suffix}.webp`);
    await sharp(input).resize({ width }).webp({ quality: 95 }).toFile(path);
    console.log(`Done: ${path}`);
  }
}
