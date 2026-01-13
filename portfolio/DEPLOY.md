# 🚀 Deploy Your Portfolio to Vercel

Your portfolio code is now on GitHub: **https://github.com/piyushm04/new-project**

## Quick Deploy Steps

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New Project"**
4. **Import Repository**: Select `piyushm04/new-project`
5. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: Click "Edit" and set to: `portfolio`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)
6. **Click "Deploy"**

⏱️ Deployment takes 1-2 minutes. Your site will be live at: `https://your-project.vercel.app`

---

### Method 2: Create Separate Repository (Recommended for Clean Setup)

If you want a dedicated repository for your portfolio:

#### Step 1: Create New GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio` or `piyush-portfolio`
3. Make it **Public** (or Private if you prefer)
4. **Don't** initialize with README

#### Step 2: Push Portfolio Code
```powershell
cd "d:\Piyush\Documents\New folder (2)\portfolio"
git remote remove origin
git remote add origin https://github.com/piyushm04/portfolio.git
git push -u origin main
```

#### Step 3: Deploy on Vercel
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import `portfolio` repository
4. Vercel auto-detects Next.js
5. Click "Deploy"

---

### Method 3: Deploy via Vercel CLI

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Navigate to portfolio folder
cd "d:\Piyush\Documents\New folder (2)\portfolio"

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No (create new)
# - Project name: portfolio
# - Directory: ./
# - Override settings? No
```

---

## ✅ After Deployment

### 1. Get Your Live URL
Your portfolio will be available at:
- `https://your-project-name.vercel.app`
- Or a custom domain if you add one

### 2. Automatic Deployments
- Every push to `main` branch = automatic deployment
- Pull requests = preview deployments

### 3. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain (e.g., `piyushmolawade.com`)
3. Follow DNS configuration instructions

---

## 🔧 Troubleshooting

### Build Fails?
- Make sure `Root Directory` is set to `portfolio` in Vercel settings
- Check that `package.json` exists in portfolio folder
- Verify all dependencies are in `package.json`

### Port Already in Use (Local Testing)?
```powershell
npm run dev -- -p 3001
```

### Need to Update?
Just push changes to GitHub:
```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```
Vercel will automatically redeploy!

---

## 📝 Next Steps

1. ✅ Deploy on Vercel
2. ✅ Share your portfolio URL
3. ✅ Add custom domain (optional)
4. ✅ Update links in portfolio if needed

---

## 🎉 Your Portfolio is Ready!

Once deployed, your portfolio will be live and accessible worldwide!

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
