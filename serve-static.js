#!/usr/bin/env node

/**
 * Simple static file server for production deployment
 * Serves the built frontend from apps/web/dist
 */

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'apps', 'web', 'dist');

console.log('🚀 Starting static server...');
console.log(`📁 Dist directory: ${DIST_DIR}`);
console.log(`🔌 Port: ${PORT}`);

// Check if dist directory exists
if (!fs.existsSync(DIST_DIR)) {
  console.error(`❌ ERROR: Dist directory not found: ${DIST_DIR}`);
  console.error('Make sure the build completed successfully.');
  process.exit(1);
}

// Check if index.html exists
const indexPath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error(`❌ ERROR: index.html not found: ${indexPath}`);
  console.error('Make sure the build completed successfully.');
  process.exit(1);
}

console.log('✅ Build files found');

// Serve static files with proper MIME types
app.use(express.static(DIST_DIR, {
  maxAge: '1d',
  etag: true
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Handle client-side routing - catch all routes and return index.html
// Express 5 doesn't support '*' so we use a middleware instead
app.use((req, res, next) => {
  // If the request is for a file that doesn't exist, serve index.html
  // This allows React Router to handle the routing
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Internal Server Error');
    }
  });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Static server running on http://0.0.0.0:${PORT}`);
  console.log(`📁 Serving files from: ${DIST_DIR}`);
  console.log(`🌐 Ready to accept connections`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
