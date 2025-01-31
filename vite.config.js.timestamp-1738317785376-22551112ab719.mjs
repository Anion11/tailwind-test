// vite.config.js
import path, { resolve } from "node:path";
import url from "node:url";
import { defineConfig } from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite/dist/node/index.js";
import viteMultipage from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-multipage/index.js";
import vitePug from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-pug-transformer/src/index.js";
import viteEslint from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteStylelint from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-stylelint/dist/index.mjs";
import viteSassGlob from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";
import viteImagemin from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-imagemin/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/1/Desktop/tailwind-test/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/1/Desktop/tailwind-test/vite.config.js";
var root = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "src");
var outDir = resolve(path.dirname(url.fileURLToPath(__vite_injected_original_import_meta_url)), "dist");
var vite_config_default = defineConfig({
  root,
  base: "./",
  clearScreen: false,
  build: {
    outDir,
    emptyOutDir: true,
    minify: "terser",
    chunkSizeWarningLimit: "1024",
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
          } else if (extType === "css") {
            extType = "styles";
          }
          return `${extType}/[name][extname]`;
        },
        chunkFileNames: "scripts/[name]-[hash].js"
      }
    }
  },
  plugins: [
    viteMultipage({
      mimeCheck: true,
      open: "/",
      pageDir: "pages",
      purgeDir: "pages",
      removePageDirs: true,
      rootPage: "index.html"
    }),
    vitePug({
      pugOptions: {
        pretty: true
      }
    }),
    // viteEslint({
    //   failOnError: false
    // }),
    // viteStylelint(),
    viteSassGlob(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      mozjpeg: {
        quality: 75
      },
      pngquant: {
        quality: [0.7, 0.7],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/images")],
      symbolId: "[name]",
      inject: "body-last",
      customDomId: "__svg__icons__dom__"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwxXFxcXERlc2t0b3BcXFxcdGFpbHdpbmQtdGVzdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcMVxcXFxEZXNrdG9wXFxcXHRhaWx3aW5kLXRlc3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLzEvRGVza3RvcC90YWlsd2luZC10ZXN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB1cmwgZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZpdGVNdWx0aXBhZ2UgZnJvbSAndml0ZS1wbHVnaW4tbXVsdGlwYWdlJ1xuaW1wb3J0IHZpdGVQdWcgZnJvbSAndml0ZS1wbHVnaW4tcHVnLXRyYW5zZm9ybWVyJ1xuaW1wb3J0IHZpdGVFc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IHZpdGVTdHlsZWxpbnQgZnJvbSAndml0ZS1wbHVnaW4tc3R5bGVsaW50J1xuaW1wb3J0IHZpdGVTYXNzR2xvYiBmcm9tICd2aXRlLXBsdWdpbi1zYXNzLWdsb2ItaW1wb3J0J1xuaW1wb3J0IHZpdGVJbWFnZW1pbiBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZW1pbidcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3ZnLWljb25zJ1xuXG5jb25zdCByb290ID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdzcmMnKVxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShwYXRoLmRpcm5hbWUodXJsLmZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdkaXN0JylcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdCxcbiAgYmFzZTogJy4vJyxcbiAgY2xlYXJTY3JlZW46IGZhbHNlLFxuICBidWlsZDoge1xuICAgIG91dERpcixcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogJzEwMjQnLFxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAwLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+IHtcbiAgICAgICAgICBsZXQgZXh0VHlwZSA9IGFzc2V0SW5mby5uYW1lLnNwbGl0KCcuJylbMV1cbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0VHlwZSkpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnaW1hZ2VzJ1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXh0VHlwZSA9PT0gJ2NzcycpIHtcbiAgICAgICAgICAgIGV4dFR5cGUgPSAnc3R5bGVzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYCR7ZXh0VHlwZX0vW25hbWVdW2V4dG5hbWVdYFxuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ3NjcmlwdHMvW25hbWVdLVtoYXNoXS5qcydcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2aXRlTXVsdGlwYWdlKHtcbiAgICAgIG1pbWVDaGVjazogdHJ1ZSxcbiAgICAgIG9wZW46ICcvJyxcbiAgICAgIHBhZ2VEaXI6ICdwYWdlcycsXG4gICAgICBwdXJnZURpcjogJ3BhZ2VzJyxcbiAgICAgIHJlbW92ZVBhZ2VEaXJzOiB0cnVlLFxuICAgICAgcm9vdFBhZ2U6ICdpbmRleC5odG1sJ1xuICAgIH0pLFxuICAgIHZpdGVQdWcoe1xuICAgICAgcHVnT3B0aW9uczoge1xuICAgICAgICBwcmV0dHk6IHRydWVcbiAgICAgIH1cbiAgICB9KSxcbiAgICAvLyB2aXRlRXNsaW50KHtcbiAgICAvLyAgIGZhaWxPbkVycm9yOiBmYWxzZVxuICAgIC8vIH0pLFxuICAgIC8vIHZpdGVTdHlsZWxpbnQoKSxcbiAgICB2aXRlU2Fzc0dsb2IoKSxcbiAgICB2aXRlSW1hZ2VtaW4oe1xuICAgICAgZ2lmc2ljbGU6IHtcbiAgICAgICAgb3B0aW1pemF0aW9uTGV2ZWw6IDcsXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgbW96anBlZzoge1xuICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgfSxcbiAgICAgIHBuZ3F1YW50OiB7XG4gICAgICAgIHF1YWxpdHk6IFswLjcsIDAuN10sXG4gICAgICAgIHNwZWVkOiA0XG4gICAgICB9LFxuICAgICAgc3Znbzoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncmVtb3ZlRW1wdHlBdHRycycsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSksXG4gICAgY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvaW1hZ2VzJyldLFxuICAgICAgc3ltYm9sSWQ6ICdbbmFtZV0nLFxuICAgICAgaW5qZWN0OiAnYm9keS1sYXN0JyxcbiAgICAgIGN1c3RvbURvbUlkOiAnX19zdmdfX2ljb25zX19kb21fXydcbiAg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
