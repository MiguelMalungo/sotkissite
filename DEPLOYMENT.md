# GitHub Pages Deployment Guide

## Initial Setup (One-Time Only)

Your repository has been successfully initialized and pushed to GitHub! Now you need to enable GitHub Pages:

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/MiguelMalungo/sotkissite
2. Click on **Settings** (top navigation)
3. Navigate to **Pages** (left sidebar under "Code and automation")
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the changes

### 2. First Deployment

The GitHub Actions workflow will automatically trigger on your next push to the `main` branch. To trigger the first deployment:

```bash
# Make a small change or just trigger the workflow
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

Alternatively, you can trigger it manually:
1. Go to **Actions** tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select the `main` branch and click "Run workflow"

### 3. Access Your Site

Once deployed, your site will be available at:
**https://miguelmalungo.github.io/sotkissite/**

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

Every time you push to the `main` branch, GitHub Actions will automatically build and deploy your site.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Then check the **Actions** tab to monitor the deployment progress.

### Method 2: Manual Deployment using gh-pages

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Push the `dist` folder to the `gh-pages` branch

**Note:** If using this method, you'll need to change the GitHub Pages source to deploy from the `gh-pages` branch instead of GitHub Actions.

## Troubleshooting

### Deployment Failed
- Check the **Actions** tab for error logs
- Ensure all dependencies are correctly listed in `package.json`
- Verify that the build completes successfully locally with `npm run build`

### 404 Error on Routes
- React Router requires proper configuration for GitHub Pages
- The `base: '/sotkissite/'` in `vite.config.ts` handles this
- Ensure your router uses `BrowserRouter` with the correct basename

### Assets Not Loading
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that asset paths are relative or use the public folder

## Development Workflow

1. **Local Development:**
   ```bash
   npm run dev
   ```
   Access at: http://localhost:3000

2. **Build Locally:**
   ```bash
   npm run build
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```

4. **Deploy:**
   ```bash
   git push origin main
   ```

## Configuration Files

- **vite.config.ts**: Contains base path configuration for GitHub Pages
- **.github/workflows/deploy.yml**: GitHub Actions workflow for automatic deployment
- **package.json**: Contains deployment scripts

## Important Notes

- The site is configured to deploy from the `main` branch
- Build files are generated in the `dist` folder (ignored by git)
- The base URL is set to `/sotkissite/` to match your repository name
- First deployment may take 2-5 minutes to become available

