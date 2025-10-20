# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production:
```bash
vercel --prod
```

### Option 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

## Deploy to Netlify

### Option 1: Netlify CLI
1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build your project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

### Option 2: Netlify Dashboard
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site"
3. Connect to Git and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()]
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

If you need environment variables:

1. Create `.env` file (already in .gitignore):
```
VITE_API_KEY=your_api_key_here
```

2. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add to Vercel/Netlify dashboard:
   - Go to Project Settings → Environment Variables
   - Add your variables there

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Preview Production Build Locally

```bash
npm run preview
```

## Troubleshooting

### Routing Issues
If routing doesn't work after deployment, ensure your hosting platform supports SPA routing:

- **Vercel**: Automatically handled
- **Netlify**: Add `netlify.toml`:
  ```toml
  [[redirects]]
    from = "/*"
    to = "/index.html"
    status = 200
  ```
- **GitHub Pages**: May need hash routing

### Tailwind CSS Not Working
- Ensure `tailwind.config.js` and `postcss.config.js` are in project root
- Verify `@tailwind` directives are in `src/index.css`

### API Calls Failing
- Check CORS settings if using custom APIs
- Ensure API URLs are correct in production
- Use environment variables for API endpoints

## Post-Deployment Checklist

- [ ] Test all routes
- [ ] Verify dark mode toggle works
- [ ] Test task management features
- [ ] Check API integration
- [ ] Test responsive design on mobile
- [ ] Verify localStorage persistence
- [ ] Update README with deployment URL
- [ ] Test performance with Lighthouse

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Push to `main` branch → automatic deployment
- Push to other branches → preview deployment

## Custom Domain (Optional)

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify dashboard:
   - Go to Domain Settings
   - Add your custom domain
   - Update DNS records as instructed

---

**Happy Deploying! 🎉**
