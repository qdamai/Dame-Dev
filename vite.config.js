import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
  resolve: {
    alias: {
      // Allows: import x from '@/components/...' or import.meta.glob('@/assets/...')
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Ensure Vite can serve large binary assets from the assets/design directories
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.mov'],
})
