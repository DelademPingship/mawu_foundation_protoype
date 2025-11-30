# Coolify Deployment Troubleshooting

## Current Issue: "No server available"

This means the Node.js server isn't starting. Here's how to diagnose:

## Check Coolify Logs

1. Go to your Coolify dashboard
2. Click on your application
3. Go to "Logs" tab
4. Look for these messages:

### ✅ Success Messages (what you want to see):
```
🚀 Starting static server...
📁 Dist directory: /app/apps/web/dist
✅ Build files found
✅ Static server running on http://0.0.0.0:PORT
🌐 Ready to accept connections
```

### ❌ Error Messages (what to look for):

**If you see: "Dist directory not found"**
- The build didn't complete
- Check build logs for Vite errors

**If you see: "index.html not found"**
- Build completed but output is wrong
- Check if Vite is outputting to correct location

**If you see: "Cannot find module 'express'"**
- Dependencies didn't install correctly
- Check install phase logs

## Build Verification

The build phase now includes verification:
```bash
✅ index.html found  # Good!
❌ index.html missing!  # Problem with build
```

## Common Fixes

### 1. Port Issues
The server uses `process.env.PORT` which Coolify sets automatically.
No manual port configuration needed.

### 2. Build Output Location
Build outputs to: `apps/web/dist/`
Server serves from: `apps/web/dist/`
These must match!

### 3. Node Version
Using Node.js 20 (set in nixpacks.toml)

## Manual Testing

To test locally:
```bash
# Install
npm install

# Build
npm run build --workspace @mawu/web

# Check output
ls -la apps/web/dist/
cat apps/web/dist/index.html

# Start server
node serve-static.js
```

## Health Check

Once running, test the health endpoint:
```bash
curl http://your-domain.com/health
```

Should return:
```json
{"status":"ok","timestamp":"2024-..."}
```

## Next Steps

1. **Check Coolify logs** - Look for the error messages above
2. **Verify build completed** - Look for "✅ index.html found" in logs
3. **Check server startup** - Look for "✅ Static server running" in logs
4. **Share logs** - If still failing, share the relevant log section

## Updated Files

The following files now have better error handling:
- `serve-static.js` - Validates build output before starting
- `nixpacks.toml` - Verifies build output after completion
