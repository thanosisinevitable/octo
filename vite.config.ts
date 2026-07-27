import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative paths let the same build work on a GitHub Pages project URL,
  // a username.github.io repository, or any normal static host.
  base: './',
  plugins: [react()],
  server: { port: 5173 },
  preview: { port: 4173 },
})
