# Deployment Ready ✅

## Status
The Mawu Foundation project is now configured for static deployment on Coolify.

## What Was Fixed

### Rollup Build Issue ✅
- Replaced native Rollup bindings with WASM version
- Frontend now builds successfully using `@rollup/wasm-node`

### Simplified Deployment ✅
- Removed backend build steps (not needed for static demo)
- Configured to serve static files only
- Uses `serve` package for production hosting

### TypeScript Issues ✅
- Fixed storage-factory module exports
- Updated Stripe API version to latest

## Deployment Configuration

**Build Output:** `apps/web/dist/`
**Port:** Uses `PORT` environment variable (defaults to 3000)
**Server:** Express static file server (serve-static.js)
**Binding:** 0.0.0.0 (accepts external connections)

## Next Steps

1. **Push to Git** - Commit and push these changes
2. **Coolify Will:**
   - Install dependencies
   - Patch Rollup for WASM
   - Build frontend static assets
   - Serve on port 3000

## Environment Variables (Optional)

For the static demo, no environment variables are required. The frontend works standalone.

If you want to enable Stripe checkout in the future:
- `VITE_STRIPE_PUBLIC_KEY` - Your Stripe publishable key

## Files Changed
- `fix-rollup.js` - Rollup WASM patcher
- `nixpacks.toml` - Build configuration
- `package.json` - Added serve dependency
- `server/storage-factory.ts` - Module exports
- `server/routes.ts` - Stripe API version
- `apps/web/vite.config.ts` - Rollup config

## Testing Locally

```bash
# Install dependencies
npm install

# Build frontend
npm run build --workspace @mawu/web

# Serve static files
node serve-static.js
```

Visit http://localhost:3000 to preview the static site.

## Troubleshooting

**Bad Gateway Error:**
- The server now binds to 0.0.0.0 to accept external connections
- Uses PORT environment variable (Coolify sets this automatically)
- Express handles client-side routing properly
