import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repository from /KBS_portal/.
  // Keep local development at the root URL.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/KBS_portal/' : '/',
  appType: 'spa',
  plugins: [react()],
})
