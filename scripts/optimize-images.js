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
    input: "public/personal-website.png",
    output: "public/personal-website.webp",
    widths: [480, 768, 960],
  },
  { input: "public/calibrate-ai.png", output: "public/calibrate-ai.webp", widths: [480, 768, 960] },
  { input: "public/calibrate-ai-1.png", output: "public/calibrate-ai-1.webp", widths: [480, 768, 960] },
  { input: "public/calibrate-ai-2.png", output: "public/calibrate-ai-2.webp", widths: [480, 768, 960] },
  { input: "public/chirper.png", output: "public/chirper.webp", widths: [480, 768, 960] },
  { input: "public/chirper-1.png", output: "public/chirper-1.webp", widths: [480, 768, 960] },
  { input: "public/chirper-2.png", output: "public/chirper-2.webp", widths: [480, 768, 960] },
  { input: "public/devlog.png", output: "public/devlog.webp", widths: [480, 768, 960] },
  { input: "public/devlog-1.png", output: "public/devlog-1.webp", widths: [480, 768, 960] },
  { input: "public/devlog-2.png", output: "public/devlog-2.webp", widths: [480, 768, 960] },
  { input: "public/devlog-3.png", output: "public/devlog-3.webp", widths: [480, 768, 960] },
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
