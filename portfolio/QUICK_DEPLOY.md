# ⚡ Quick Deploy: Piyush Portfolio

## 🎯 Goal
Deploy your portfolio as **"Piyush Portfolio"** on Vercel using GitHub.

## 📋 Two Options

### Option 1: Separate Repository (Recommended) ⭐

**Best for**: Clean, dedicated portfolio repository

#### Step 1: Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `piyush-portfolio`
3. Make it **Public**
4. **Don't** initialize with README
5. Click **"Create repository"**

#### Step 2: Push Code
```powershell
cd "d:\Piyush\Documents\New folder (2)\portfolio"
git init
git add .
git commit -m "Initial commit: Piyush Portfolio"
git remote add origin https://github.com/piyushm04/piyush-portfolio.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Vercel
1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import `piyush-portfolio` repository
5. **Project Name**: `Piyush Portfolio`
6. **Root Directory**: Leave empty (auto)
7. Click **"Deploy"**

✅ **Result**: `https://piyush-portfolio.vercel.app`

---

### Option 2: Use Existing Repository

**Best for**: Keep everything in one place

#### Step 1: Deploy on Vercel
1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import `piyushm04/new-project` repository
5. **Project Name**: `Piyush Portfolio`
6. **Root Directory**: `portfolio` ⚠️ IMPORTANT!
7. Click **"Deploy"**

✅ **Result**: `https://piyush-portfolio.vercel.app`

---

## ✅ After Deployment

1. **Check Status**: Green = Success ✅
2. **Test URL**: Open your live site
3. **Verify**: All sections load correctly
4. **Update Name** (if needed):
   - Settings → General → Project Name → "Piyush Portfolio"

## 🔗 Your Live Site

Will be available at:
- `https://piyush-portfolio.vercel.app`
- Or custom domain if you add one

---

**Ready to deploy!** 🚀
