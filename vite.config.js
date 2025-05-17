import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { plugin } from 'postcss';
export default {
  root: './', // 设置项目根目录为当前目录
  publicDir: 'public',
  plugins: [
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/demo/inrc/api': {
        // target: 'https://inrc.exworthdev.cc/',
        // target: 'http://13.208.133.63/',
        target: 'http://localhost:3000/',
        // target: 'https://inrc.exworthdev.cc/',
        changeOrigin: true
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html') // 主页
      }
    }
  }
};