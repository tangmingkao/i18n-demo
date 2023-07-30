import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/i18n-demo/",
  build: {
    outDir: "docs",
  },
  server: {
    host: "0.0.0.0",
    port: 8088,
    cors: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    }
  },
  define: {
    'process.env': {},
    global: "globalThis",
  }
})
