import sharp from "sharp";
import { readFileSync } from "fs";

const svg = readFileSync("public/nethan-icon.svg");

await sharp(svg).resize(192, 192).png().toFile("public/favicon-192.png");
await sharp(svg).resize(32, 32).png().toFile("public/favicon-32.png");

console.log("Favicons generated.");