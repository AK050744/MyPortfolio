# GitHub Pages Deployment Guide

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Update Repository Name (if needed)

If your GitHub repository name is **not** "MyPortfolio", you need to update the base path in `vite.config.ts`:

```typescript
base: process.env.GITHUB_PAGES === "true" ? "/YOUR_REPO_NAME/" : "/",
```

Replace `YOUR_REPO_NAME` with your actual repository name.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 3. Push Your Code

1. Make sure all your changes are committed:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   ```

2. Push to your main/master branch:
   ```bash
   git push origin main
   # or
   git push origin master
   ```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

## How It Works

- **GitHub Actions Workflow**: Located at `.github/workflows/deploy.yml`
  - Automatically builds your site when you push to main/master
  - Deploys the built files to GitHub Pages

- **Build Script**: `npm run build:gh-pages`
  - Sets the `GITHUB_PAGES` environment variable
  - Builds with the correct base path for GitHub Pages

- **404.html**: Handles client-side routing
  - Redirects all routes to your React app
  - Ensures React Router works correctly on GitHub Pages

## Troubleshooting

### Site shows 404 or blank page
- Check that the repository name in `vite.config.ts` matches your actual repository name
- Verify GitHub Pages is enabled and using "GitHub Actions" as the source
- Check the Actions tab for any build errors

### Routes not working
- The `404.html` file should be in the `public/` directory (it will be copied during build)
- Make sure the base path in `vite.config.ts` is correct

### Build fails
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Try running `npm run build:gh-pages` locally to test

## Custom Domain (Optional)

If you want to use a custom domain:

1. Update `vite.config.ts` to use `base: "/"` instead of `"/MyPortfolio/"`
2. Add a `CNAME` file in the `public/` directory with your domain name
3. Configure your DNS settings as per GitHub Pages documentation

