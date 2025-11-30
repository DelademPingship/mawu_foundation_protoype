# Rollup WASM Fix for Coolify Deployment

## Problem
The deployment was failing because Rollup was trying to load native bindings (`@rollup/rollup-linux-x64-gnu`) which weren't available in the build environment, even though the WASM fallback (`@rollup/wasm-node`) was installed.

## Solution Applied

### 1. Enhanced fix-rollup.js
- Now completely replaces `rollup/dist/native.js` with a simple module that directly requires the WASM bindings
- Checks both root and workspace node_modules directories
- More aggressive patching approach that prevents native module loading entirely

### 2. Updated nixpacks.toml
- Removed `--omit=optional` flag to ensure all dev dependencies install properly
- Runs fix-rollup.js twice: once after install and once before build
- Maintains `ROLLUP_USE_WASM=true` environment variable

### 3. Updated vite.config.ts
- Added rollupOptions to suppress native binding warnings
- Provides cleaner build output

## Files Modified
- `fix-rollup.js` - Complete rewrite for more aggressive patching
- `nixpacks.toml` - Updated install phase and build commands
- `apps/web/vite.config.ts` - Added rollup configuration

## How It Works
1. Dependencies install (including `@rollup/wasm-node` from devDependencies)
2. fix-rollup.js patches rollup's native.js to use WASM directly
3. Build runs with ROLLUP_USE_WASM=true environment variable
4. Rollup uses WASM bindings instead of trying to load native modules

## Testing
Push these changes to trigger a new Coolify deployment. The build should now complete successfully using Rollup's WASM bindings.
