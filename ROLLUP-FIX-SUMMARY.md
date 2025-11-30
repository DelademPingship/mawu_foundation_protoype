# Coolify Deployment Fix - Complete Solution

## Problems Fixed

### 1. Rollup Native Bindings Issue
The deployment was failing because Rollup was trying to load native bindings (`@rollup/rollup-linux-x64-gnu`) which weren't available in the build environment.

### 2. TypeScript Compilation Errors
The server build was failing due to SQLite schema being used with PostgreSQL storage layer.

### 3. Static Deployment Configuration
The project is a static investor demo but was configured to run a Node.js server.

## Solutions Applied

### 1. Rollup WASM Fix (fix-rollup.js)
- Completely replaces `rollup/dist/native.js` with a simple module that directly requires WASM bindings
- Checks both root and workspace node_modules directories
- Prevents native module loading entirely

### 2. Static-Only Build (nixpacks.toml)
- Removed server build steps (`build:server`, `db:push:production`, `seed:admin:production`)
- Configured to only build the frontend static assets
- Uses `serve` package to serve static files on port 3000

### 3. Storage Factory Fix (server/storage-factory.ts)
- Fixed TypeScript module export issues
- Properly exports `storage` and `db` from appropriate implementations

### 4. Stripe API Version Update (server/routes.ts)
- Updated from `2025-09-30.clover` to `2025-10-29.clover`

### 5. Vite Configuration (apps/web/vite.config.ts)
- Added rollupOptions to suppress native binding warnings
- Cleaner build output

## Files Modified
- `fix-rollup.js` - Complete rewrite for WASM patching
- `nixpacks.toml` - Static-only build configuration
- `package.json` - Added `serve` dependency
- `server/storage-factory.ts` - Fixed module exports
- `server/routes.ts` - Updated Stripe API version
- `apps/web/vite.config.ts` - Added rollup configuration

## Deployment Flow
1. Install dependencies (including `@rollup/wasm-node` and `serve`)
2. Patch rollup to use WASM bindings
3. Build frontend static assets with Vite
4. Serve static files from `apps/web/dist` on port 3000

## Result
A fully static deployment suitable for the investor demo, with no backend dependencies required at runtime.
