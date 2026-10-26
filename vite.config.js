import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // relative asset paths + classic (IIFE) script so dist/index.html also runs
  // when opened straight from disk — ES modules are CORS-blocked on file://
  base: './',
  plugins: [vue()],
  build: {
    modulePreload: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true
      }
    }
  },
  server: {
    port: 5173,
    open: false
  }
})
