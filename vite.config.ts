import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://p4cm4n890.github.io/laboratorio_sistemas/",
  build: {
    outDir: './docs'
  }
})
