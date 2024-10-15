import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'
// https://vitejs.dev/config/

export default defineConfig({
  base: '/bicycle-shop/',
  resolve: {
    // eslint-disable-next-line no-undef
    alias: { '@': join(__dirname, './src/') },
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.css',
      '.scss',
      '.svg'
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/scss/variable.scss" as *;`
      }
    }
  },
  plugins: [react()]
})
