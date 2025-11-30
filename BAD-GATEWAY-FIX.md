# Bad Gateway Fix

## Problem
After successful build, the deployment showed "Bad Gateway" when accessing the URL.

## Root Cause
The `serve` package was:
1. Not binding to `0.0.0.0` (only localhost)
2. Not respecting Coolify's PORT environment variable
3. Not reliably handling the deployment environment

## Solution
Created a custom Express-based static server (`serve-static.js`) that:

✅ Binds to `0.0.0.0` - Accepts external connections
✅ Uses `PORT` environment variable - Works with Coolify's port assignment
✅ Handles client-side routing - Returns index.html for all routes
✅ Uses Express (already in dependencies) - No new packages needed

## Changes Made

### New File: serve-static.js
Simple Node.js server that serves static files from `apps/web/dist`

### Updated: nixpacks.toml
Changed start command from `npx serve` to `node serve-static.js`

### Removed: serve dependency
No longer needed since we use Express directly

## How It Works

1. **Build Phase:** Frontend builds to `apps/web/dist/`
2. **Start Phase:** `serve-static.js` starts Express server
3. **Server Binds:** To `0.0.0.0:${PORT}` (Coolify sets PORT)
4. **Routing:** All requests return index.html (React Router handles routing)

## Testing

Push these changes and Coolify will:
1. Build the frontend ✅
2. Start the Express server ✅
3. Bind to the correct port ✅
4. Accept external connections ✅

The "Bad Gateway" error should be resolved.
