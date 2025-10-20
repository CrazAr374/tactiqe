# Deploy via Vercel CLI

## Install Vercel CLI
```bash
npm install -g vercel
```

## Deploy from your project directory
```bash
cd tactiqe
vercel --prod
```

This bypasses the GitHub integration and deploys directly from your local machine.

## Alternative: Use Different Branch
Sometimes switching branches helps:
```bash
git checkout -b deployment
git push origin deployment
```
Then connect the new branch in Vercel dashboard.