import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/github-finder/',  // <-- Add your repository name here
  plugins: [
    react(),
    tailwindcss()
  ],
})
