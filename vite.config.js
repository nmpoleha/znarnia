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
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
