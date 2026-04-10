import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/JabbyAlicante.github.io/', // 👈 CHANGE THIS to your repo name
})