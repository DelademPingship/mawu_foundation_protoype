#!/usr/bin/env node

/**
 * Simple static file server for production deployment
 * Serves the built frontend from apps/web/dist
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'apps', 'web', 'dist');

// Serve static files
app.use(express.static(DIST_DIR));

// Handle client-side routing - always return index.html for non-file requests
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Static server running on http://0.0.0.0:${PORT}`);
  console.log(`📁 Serving files from: ${DIST_DIR}`);
});
