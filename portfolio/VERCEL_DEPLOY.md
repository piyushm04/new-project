# 🚀 Vercel Deployment Guide

Your portfolio code has been pushed to GitHub at: `https://github.com/piyushm04/new-project`

## Option 1: Deploy Portfolio as Separate Repository (Recommended)

Since your portfolio is in a subdirectory, it's better to create a separate repository for cleaner deployment.

### Step 1: Create New GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `portfolio` (or `piyush-portfolio`)
3. **Don't** initialize with README, .gitignore, or license

### Step 2: Push Portfolio to New Repository

```bash
cd "d:\Piyush\Documents\New folder (2)\portfolio"
git remote remove origin
git remote add origin https://github.com/piyushm04/portfolio.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import the `portfolio` repository
5. Vercel will auto-detect Next.js
6. Click **"Deploy"**

Your site will be live at: `https://portfolio-xxxxx.vercel.app`

---

## Option 2: Deploy from Current Repository (Subdirectory)

If you want to keep everything in one repository:

### Step 1: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**
4. Import the `new-project` repository
5. In **"Root Directory"**, set it to: `portfolio`
6. Vercel will auto-detect Next.js
7. Click **"Deploy"**

### Step 2: Configure Build Settings (if needed)

If auto-detection doesn't work:
- **Framework Preset**: Next.js
- **Root Directory**: `portfolio`
- **Build Command**: `npm run build` (runs in portfolio folder)
- **Output Directory**: `.next`
- **Install Command**: `npm install`

---

## Option 3: Quick Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from portfolio directory:
   ```bash
   cd "d:\Piyush\Documents\New folder (2)\portfolio"
   vercel
   ```

4. Follow the prompts:
   - Link to existing project or create new
   - Confirm settings
   - Deploy!

---

## ✅ After Deployment

1. **Custom Domain** (Optional):
   - Go to your project settings on Vercel
   - Add your custom domain (e.g., `piyushmolawade.com`)
   - Follow DNS configuration instructions

2. **Environment Variables** (if needed):
   - Add any API keys or environment variables in project settings

3. **Automatic Deployments**:
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

---

## 🔗 Quick Links

- **GitHub Repository**: https://github.com/piyushm04/new-project
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Documentation**: https://vercel.com/docs

---

## 🎉 Your Portfolio Will Be Live!

Once deployed, share your portfolio URL:
- `https://your-portfolio.vercel.app`
- Or your custom domain

---

**Need Help?**
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs
