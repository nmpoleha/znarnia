import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/znarnia/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        leto2026: resolve(__dirname, 'leto2026/index.html'),
        nachalka: resolve(__dirname, 'nachalka/index.html'),
        partner: resolve(__dirname, 'partner/index.html'),
        'post-leto': resolve(__dirname, 'post-leto/index.html'),
        'post-kanikuly': resolve(__dirname, 'post-kanikuly/index.html'),
        srednyaya: resolve(__dirname, 'srednyaya/index.html'),
        teens: resolve(__dirname, 'teens/index.html'),
        'oplata-srednyaya': resolve(__dirname, 'oplata-srednyaya/index.html'),
        'oplata': resolve(__dirname, 'oplata/index.html'),
        'oplata-nachalka': resolve(__dirname, 'oplata-nachalka/index.html'),
        'topics-nachalka': resolve(__dirname, 'topics-nachalka/index.html'),
        'topics-srednyaya': resolve(__dirname, 'topics-srednyaya/index.html'),
        'russian': resolve(__dirname, 'russian/index.html'),
        'info': resolve(__dirname, 'info/index.html'),
        'banner': resolve(__dirname, 'banner/index.html'),
        'courses': resolve(__dirname, 'courses/index.html'),
        'diagnostika': resolve(__dirname, 'diagnostika/index.html'),
        'diagnostika2': resolve(__dirname, 'diagnostika2/index.html'),
        'sobranie': resolve(__dirname, 'sobranie/index.html'),
        'sobranie-thanks': resolve(__dirname, 'sobranie-thanks/index.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
