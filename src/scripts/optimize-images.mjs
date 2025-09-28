import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";

async function optimize(patterns, dest) {
  const files = await imagemin(patterns, {
    destination: dest,
    plugins: [
      imageminMozjpeg({ quality: 78, progressive: true }),
      imageminPngquant({ quality: [0.65, 0.8] }),
      imageminSvgo({
        plugins: [
          { name: "preset-default" },
          { name: "removeViewBox", active: false },
        ],
      }),
    ],
  });
  return files.length;
}

const n1 = await optimize(["public/**/*.{jpg,jpeg,png,svg}"], "public");
const n2 = await optimize(["src/assets/**/*.{jpg,jpeg,png,svg}"], "src/assets");
console.log(`✅ Optimized ${n1 + n2} images`);
