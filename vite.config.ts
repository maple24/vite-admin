import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        ws: true
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
      // Proxying websockets or socket.io: ws://localhost:5173/ws -> ws://localhost:8000/ws
      // '/ws': {
      //   target: 'ws://localhost:8000',
      //   ws: true,
      //   // rewrite: (path) => path.replace(/^\/ws/, ''),
      // },
    },
  },
});
