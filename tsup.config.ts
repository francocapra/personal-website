import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['assets/script.ts'],
  outDir: 'assets/js',
  format: ['esm'],
  target: 'esnext',
  sourcemap: true,
  clean: true,
  dts: false,
  minify: true,
  splitting: false,
  shims: false,
});
