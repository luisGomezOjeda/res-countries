import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest : {
        start_url : "./res-countries/?utm_source=web_app_manifest",
        display : "standalone",
        display_override : ["window-controls-overlay"],
        lang : "es-ES",
        name : "serch info countries",
        short_name : "COUNTRIES",
        description : "serch info countries",
        background_color : "hsl(209, 23%, 22%)",
        theme_color : "hsl(209, 23%, 22%)",
        icons : [
          {
            src : "512.png",
            sizes : "512x512",
            type : "image/png",
            purpose : "maskable",
          },
          {
            src : "256.png",
            sizes : "256x256",
            type : "image/png",
          },
          {
            src : "128.png",
            sizes : "128x128",
            type : "image/png",
            purpose : "any",
          },
          {
            src : "64.png",
            sizes : "64x64",
            type : "image/png",
          },
          {
            src : "32.png",
            sizes : "32x32",
            type : "image/png",
          },
          {
            src : "24.png",
            sizes : "24x24",
            type : "image/png",
          },
          {
            src : "16.png",
            sizes : "16x16",
            type : "image/png",
          },
        ]
      }
    })
  ],
})
