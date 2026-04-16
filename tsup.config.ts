import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'tsup';

const packageJson = JSON.parse(
  readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
) as { version: string };

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  minify: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  define: {
    __EINNSYN_SDK_VERSION__: JSON.stringify(packageJson.version),
  },
});
