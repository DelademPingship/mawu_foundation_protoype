#!/usr/bin/env node

/**
 * Fix for Rollup native module issues in deployment
 * Completely replaces native.js to use WASM bindings
 */

const fs = require('fs');
const path = require('path');

console.log('Applying Rollup deployment fix...');

try {
  // Check both root and workspace node_modules
  const locations = [
    {
      rollup: path.join(__dirname, 'node_modules', 'rollup', 'dist', 'native.js'),
      wasm: path.join(__dirname, 'node_modules', '@rollup', 'wasm-node')
    },
    {
      rollup: path.join(__dirname, 'apps', 'web', 'node_modules', 'rollup', 'dist', 'native.js'),
      wasm: path.join(__dirname, 'apps', 'web', 'node_modules', '@rollup', 'wasm-node')
    }
  ];
  
  let patchedCount = 0;
  
  for (const loc of locations) {
    if (fs.existsSync(loc.wasm) && fs.existsSync(loc.rollup)) {
      // Completely replace native.js with WASM bindings
      const wasmBindingsCode = `// Patched by fix-rollup.js to use WASM bindings
console.log('Using Rollup WASM bindings (patched)');
module.exports = require('@rollup/wasm-node/dist/native.js');
`;
      
      fs.writeFileSync(loc.rollup, wasmBindingsCode);
      console.log(`✅ Patched: ${loc.rollup}`);
      patchedCount++;
    }
  }
  
  if (patchedCount === 0) {
    console.log('⚠️  No rollup installations found to patch');
  } else {
    console.log(`🎉 Successfully patched ${patchedCount} rollup installation(s)`);
  }
  
} catch (error) {
  console.error('❌ Error applying Rollup fix:', error.message);
  console.log('Continuing with build...');
  process.exit(0);
}