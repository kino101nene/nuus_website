import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const outputDirectory = fileURLToPath(new URL("../../public/og/", import.meta.url));
const images = [
  { source: "../assets/home/hero-image-mobile.webp", name: "home.jpg", background: "#101010" },
  { source: "../assets/real-copy/thumbnails/IMG_8366 (1).JPG", name: "real-copy.jpg", background: "#e8e5df" },
  { source: "../assets/jijitsu/thumbnails/IMG_3734.jpg", name: "jijitsu.jpg", background: "#101010" },
  { source: "../assets/rabbit/thumbnails/scene8_5_bed.jpg", name: "rabbit.jpg", background: "#101010" }
];

await mkdir(outputDirectory, { recursive: true });
for (const { source, name, background } of images) {
  await sharp(fileURLToPath(new URL(source, import.meta.url)))
    .rotate()
    .resize(1200, 630, { fit: "contain", background })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(fileURLToPath(new URL(`../../public/og/${name}`, import.meta.url)));
}
