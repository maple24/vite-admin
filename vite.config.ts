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
    // no proxy is needed if CORS is set in backend
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8000',
    //     changeOrigin: true,
    //     ws: true,
    //     rewrite: (path) => path.replace(/^\/dev-api/, ''),
    //   },
    // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:8000/
    // '/socket.io': {
    //   target: 'ws://localhost:8000',
    //   ws: true,
    //   rewrite: (path) => path.replace(/^\/socket.io/, ''),
    // },
    // },
  },
});
