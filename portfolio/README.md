# Piyush Molawade - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcasing projects, skills, experience, and contact information.

## 🚀 Features

- **Modern Design**: Clean, professional design similar to altamsh.me
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Clickable Links**: All social media, project, and contact links are fully functional
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Next.js for optimal performance

## 📋 Sections

1. **Hero Section**: Introduction with social media links
2. **About**: Personal background and expertise
3. **Skills**: Technical skills organized by category
4. **Projects**: Featured projects with GitHub and demo links
5. **Experience**: Work experience and internships
6. **Education**: Academic background and coursework
7. **Certifications**: Professional certifications
8. **Contact**: Contact information and social links

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 📦 Installation

1. **Clone the repository** (or navigate to the portfolio folder):
   ```bash
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and deploy

3. **Your site will be live at**: `https://your-project.vercel.app`

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder, or
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`

### Deploy to Other Platforms

- **GitHub Pages**: Use `next export` (static export)
- **AWS Amplify**: Connect repository
- **DigitalOcean App Platform**: Connect repository

## ✏️ Customization

### Update Personal Information

Edit `app/page.tsx` and update:
- Name and title in Hero section
- About section content
- Skills array
- Projects array
- Experience array
- Education array
- Certifications array
- Contact information

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#1f77b4',    // Main brand color
  secondary: '#ff7f0e',  // Secondary color
  accent: '#2ca02c',     // Accent color
}
```

### Add More Projects

Add new project objects to the `projects` array in `app/page.tsx`:
```typescript
{
  title: 'Project Name',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/username/repo',
  demo: 'https://demo-url.com',
  image: '/project-image.jpg'
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔗 Links

All links in the portfolio are clickable:
- **GitHub**: Links to your GitHub profile and repositories
- **LinkedIn**: Links to your LinkedIn profile
- **Email**: Opens default email client
- **Phone**: Initiates phone call (on mobile)
- **Project Demos**: Links to live project demos
- **Project Code**: Links to GitHub repositories

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Piyush Sunil Molawade**
- GitHub: [@piyushm04](https://github.com/piyushm04)
- LinkedIn: [Piyush Molawade](https://www.linkedin.com/in/piyushmolawade)
- Email: piyushm56042@gmail.com

## 🙏 Acknowledgments

- Design inspired by modern portfolio websites
- Built with Next.js and React
- Icons from React Icons
- Animations by Framer Motion

---

⭐ **Star this repo if you find it helpful!**
