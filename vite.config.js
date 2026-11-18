import { defineConfig } from 'vite';
import { resolve, relative } from 'path';
import fs from 'fs';

function getHtmlInputs() {
  const inputs = {
    main: resolve(__dirname, 'index.html')
  };

  const ignoreDirs = new Set(['node_modules', 'dist', 'public', '.git', '.agent', 'scripts']);

  function scan(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = resolve(dir, entry.name);
      if (entry.isDirectory() && !ignoreDirs.has(entry.name)) {
        scan(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html') && fullPath !== resolve(__dirname, 'index.html')) {
        const relKey = relative(__dirname, fullPath).replace(/[\/\\]/g, '_').replace('.html', '');
        inputs[relKey] = fullPath;
      }
    }
  }

  scan(__dirname);
  return inputs;
}

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
  build: {
    rollupOptions: {
      input: getHtmlInputs()
    }
  }
});

