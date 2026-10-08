import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = fileURLToPath(new URL("../../public/favicon.png", import.meta.url));
const destination = fileURLToPath(new URL("../../public/favicon-circle.png", import.meta.url));
const size = 512;
const mask = Buffer.from(`<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" r="256" fill="white"/></svg>`);

await sharp(source)
  .resize(size, size)
  .composite([{ input: mask, blend: "dest-in" }])
  .png()
  .toFile(destination);
