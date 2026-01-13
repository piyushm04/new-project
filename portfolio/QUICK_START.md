# 🚀 Quick Start Guide

## Step 1: Install Dependencies

```bash
cd portfolio
npm install
```

## Step 2: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 3: Customize Your Portfolio

Edit `app/page.tsx` to update:
- Your name and title
- About section
- Skills
- Projects (add your GitHub links and demo URLs)
- Experience
- Education details
- Contact information

## Step 4: Deploy

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Option 2: Build for Production
```bash
npm run build
npm start
```

## 📝 Important Links to Update

Make sure all these links are correct in `app/page.tsx`:

1. **GitHub Profile**: `https://github.com/piyushm04`
2. **LinkedIn Profile**: `https://www.linkedin.com/in/piyushmolawade`
3. **Email**: `piyushm56042@gmail.com`
4. **Phone**: `+91-9028702500`
5. **Project GitHub Links**: Update with your actual repository URLs
6. **Project Demo Links**: Update with your live demo URLs

## 🎨 Customization Tips

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Fonts**: Add custom fonts in `app/globals.css`
- **Sections**: Add or remove sections in `app/page.tsx`
- **Animations**: Adjust animation delays and durations in Framer Motion components

## ✅ Checklist Before Deploying

- [ ] All links are clickable and working
- [ ] Contact information is correct
- [ ] Project links point to correct repositories
- [ ] Demo links are working (if applicable)
- [ ] All personal information is updated
- [ ] Skills list is accurate
- [ ] Experience and education details are correct
- [ ] Test on mobile devices
- [ ] Test on different browsers

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**TypeScript errors?**
Make sure all imports are correct and types are properly defined.

---

Happy coding! 🎉
