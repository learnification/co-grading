import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";

import manifest from "./manifest.json";
import devManifest from "./manifest.dev.json";
import pkg from "./package.json";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");
const baseDir = resolve(__dirname);

const isDev = process.env.__DEV__ === "true";

const extensionManifest = {
  ...manifest,
  ...(isDev ? devManifest : ({} as ManifestV3Export)),
  name: isDev ? `DEV: ${manifest.name}` : manifest.name,
  version: pkg.version,
};

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
      "@base": baseDir,
    },
  },
  plugins: [
    react(),
    crx({
      manifest: extensionManifest as ManifestV3Export,
      browser: "chrome",
      contentScripts: {
        injectCss: true,
      },
    }),
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: !isDev,
  },
});
