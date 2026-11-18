import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { runScanner } from './scripts/scan-clients.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Run auto-discovery scanner on start
const discoveredProfiles = runScanner();

// Enable static vCard & WebP MIME type headers
app.use((req, res, next) => {
  if (req.url.endsWith('.vcf')) {
    res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  } else if (req.url.endsWith('.webp')) {
    res.setHeader('Content-Type', 'image/webp');
  }
  next();
});

// Serve static files
app.use(express.static(__dirname));

// API Endpoint to fetch all discovered client profiles
app.get('/api/clients', (req, res) => {
  const clients = runScanner();
  res.json(clients);
});

// Dynamic Client Routing
app.get('/:clientFolder', (req, res, next) => {
  const folder = req.params.clientFolder;
  const targetIndex = path.join(__dirname, folder, 'index.html');
  if (path.resolve(targetIndex).startsWith(__dirname) && fsExists(targetIndex)) {
    return res.sendFile(targetIndex);
  }
  next();
});

function fsExists(p) {
  try {
    return path.isAbsolute(p) && import('fs').then;
  } catch {
    return false;
  }
}

app.listen(PORT, () => {
  console.log(`\n🚀 NFC Contact Card Server running at: http://localhost:${PORT}/`);
  console.log(`🌐 Qubytz NFC Base Portal: http://localhost:${PORT}/`);
  discoveredProfiles.forEach(p => {
    console.log(`🏢 ${p.name} (${p.category}): http://localhost:${PORT}${p.url}`);
  });
});

