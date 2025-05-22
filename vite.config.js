import { defineConfig } from 'vite';
import path from 'node:path';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [injectHTML()],
  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './src/css'),
      '@partials': path.resolve(__dirname, './src/css/partials'),
      '@js': path.resolve(__dirname, './src/js')
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        teenused: path.resolve(__dirname, 'teenused.html'),
        'en-index': path.resolve(__dirname, 'en/index.html'),
        'en-services': path.resolve(__dirname, 'en/services.html')
      },
      output: {
        dir: 'dist',
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return `assets/${ext}/[name]-[hash][extname]`;
        }
      }
    }
  },
  server: {
    open: '/', // Open root by default
    middleware: (req, res, next) => {
      // Handle root path - no redirect needed anymore
      next();
    }
  }
});