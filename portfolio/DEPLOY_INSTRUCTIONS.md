# 🚀 Deploy "Piyush Portfolio" to Vercel

## Step-by-Step Deployment Guide

### Step 1: Create New GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `piyush-portfolio` (or `portfolio`)
3. **Description**: "Portfolio website of Piyush Molawade - Data Analyst & Full Stack Developer"
4. **Visibility**: Public (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license
6. **Click "Create repository"**

### Step 2: Push Portfolio to New Repository

Open PowerShell and run:

```powershell
# Navigate to portfolio folder
cd "d:\Piyush\Documents\New folder (2)\portfolio"

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Piyush Portfolio website"

# Add new repository as remote
git remote add origin https://github.com/piyushm04/piyush-portfolio.git

# Push to GitHub
git push -u origin main
```

**Note**: Replace `piyushm04/piyush-portfolio` with your actual GitHub username and repository name.

### Step 3: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account (use: molawadepiyush19@gmail.com)
3. **Click "Add New Project"** (or "New Project")
4. **Import Repository**:
   - Select `piyushm04/piyush-portfolio` (or your repository name)
   - Click "Import"

5. **Configure Project**:
   - **Project Name**: `piyush-portfolio` (or "Piyush Portfolio")
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: Leave empty (since portfolio is now the root)
   - **Build Command**: Leave empty (auto-detect)
   - **Output Directory**: Leave empty (auto-detect)
   - **Install Command**: Leave empty (auto-detect)

6. **Environment Variables**: None needed for this project

7. **Click "Deploy"**

### Step 4: Wait for Deployment

- Deployment takes 1-2 minutes
- You'll see build progress in real-time
- Once complete, you'll get a live URL

### Step 5: Your Live URL

Your portfolio will be live at:
- `https://piyush-portfolio.vercel.app`
- Or: `https://piyush-portfolio-xxxxx.vercel.app`

## ✅ Verification

After deployment:

1. **Check deployment status**:
   - Should show ✅ Green (Success)
   - No errors in build logs

2. **Test your site**:
   - Open the live URL
   - Verify all sections load
   - Test navigation
   - Check all links work

3. **Update project name** (if needed):
   - Go to Vercel Dashboard → Your Project → Settings → General
   - Change "Project Name" to "Piyush Portfolio"
   - Save changes

## 🔧 If You Want to Keep Current Repository

If you prefer to keep everything in `new-project` repository:

1. **Go to Vercel Dashboard**
2. **Select your existing project** (or create new)
3. **Settings → General**:
   - **Project Name**: `Piyush Portfolio`
   - **Root Directory**: `portfolio`
   - **Framework**: Next.js
4. **Redeploy**

## 📝 Quick Commands

### Create and Push to New Repository

```powershell
cd "d:\Piyush\Documents\New folder (2)\portfolio"
git init
git add .
git commit -m "Initial commit: Piyush Portfolio"
git remote add origin https://github.com/piyushm04/piyush-portfolio.git
git branch -M main
git push -u origin main
```

### Update Existing Deployment

```powershell
cd "d:\Piyush\Documents\New folder (2)\portfolio"
git add .
git commit -m "Update portfolio"
git push origin main
```

## 🎯 Project Settings in Vercel

After deployment, verify these settings:

- ✅ **Project Name**: `Piyush Portfolio` or `piyush-portfolio`
- ✅ **Framework**: Next.js
- ✅ **Root Directory**: Empty (if separate repo) or `portfolio` (if in new-project)
- ✅ **Auto-deployments**: Enabled
- ✅ **Production Branch**: `main`

## 🔗 Important Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub**: https://github.com/piyushm04
- **Your Portfolio**: Will be at `https://piyush-portfolio.vercel.app`

---

**Your portfolio will be live as "Piyush Portfolio"!** 🎉
