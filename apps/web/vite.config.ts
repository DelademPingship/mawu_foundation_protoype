import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true
  },
  preview: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true
  },
  build: {
    rollupOptions: {
      // Force use of WASM bindings in production builds
      onwarn(warning, warn) {
        // Suppress rollup native binding warnings
        if (warning.code === 'MODULE_NOT_FOUND' && warning.message?.includes('@rollup/rollup-')) {
          return;
        }
        warn(warning);
      }
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts',
  }
});
