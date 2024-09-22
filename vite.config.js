import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  base: "./",
//   build: {
//     chunkSizeWarningLimit: 1024 * 1024, // 1 MB (default is 500 kB)
//   },
  plugins: [
    ViteImageOptimizer({
      jpeg: {
        quality: 90,
      },
      png: {
        quality: 90,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
});
