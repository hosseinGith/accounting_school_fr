// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import {} from "eslint-plugin-react-hooks";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "/images/logo.webp",
        "/fonts/iranyekan-bold.woff2",
        "/fonts/iranyekan-regular.woff2",
        "/fonts/VAZIR BOLD.TTF",
        "/fonts/VAZIR REGULAR.TTF",
      ],
      manifest: {
        name: "حضور غیاب دبیرستان شهید تندگویان",
        short_name: "حضور غیاب دبیرستان شهید تندگویان",
        description: "حضور غیاب دبیرستان شهید تندگویان",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/images/logo.webp",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            //
            urlPattern: () => false,
            handler: "NetworkFirst",
            options: {
              cacheName: "all-resources",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 روز
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true, // در حالت توسعه غیرفعال
      },
    }),
  ],
});
