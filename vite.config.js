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
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
