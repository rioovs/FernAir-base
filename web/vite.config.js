import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/FernAir-base/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        quote: resolve(__dirname, 'quote.html'),
        emergency: resolve(__dirname, 'emergency.html'),
      },
    },
  },
})
