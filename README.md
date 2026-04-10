# 📊 Data Science Portfolio Website

A modern, responsive, and visually impressive personal portfolio built with **Next.js 15**, **React 18**, **Tailwind CSS**, and **Framer Motion**. Perfect for showcasing Data Science, Machine Learning, and Analytics expertise.

## ✨ Features

### 🎨 Design & UX
- **Modern Glassmorphism Design** - Sleek glass cards with backdrop blur effects
- **Dark/Light Mode Toggle** - Seamless theme switching with persistent storage
- **Smooth Animations** - Framer Motion animations for engaging interactions
- **Responsive Design** - Mobile-first approach works perfectly on all devices
- **Gradient Accents** - Beautiful gradient text and backgrounds
- **Custom Tailwind Components** - Reusable component classes

### 🏗️ Sections
1. **Navbar** - Sticky navigation with smooth scrolling and mobile menu
2. **Hero Section** - Attention-grabbing introduction with CTA buttons
3. **About Me** - Professional summary with key highlights and education
4. **Skills** - Categorized technical skills with proficiency bars
5. **Projects** - Detailed project cards with tech stack and impact metrics
6. **Experience** - Timeline view of professional experience with achievements
7. **Contact** - Contact form and social links
8. **Footer** - Clean footer with quick links and social media

### ⚡ Performance
- **Optimized for SEO** - Meta tags, Open Graph, and structured data
- **Fast Load Times** - Next.js optimization and code splitting
- **Smooth Scrolling** - Native CSS scroll-behavior
- **Lazy Loading** - Images and components load on demand
- **TypeScript** - Full type safety throughout the project

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or higher
- npm, yarn, or pnpm

### Installation

1. **Navigate to the project directory**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

## 📝 Customization Guide

### 1. **Update Personal Information**

**File: `src/components/Hero.tsx`**
```typescript
// Update tagline
Transforming raw data into actionable insights through machine learning...
```

**File: `src/components/Navbar.tsx`**
```typescript
// Update logo
<motion.div className="text-2xl font-bold gradient-text">
  DS  {/* Change to your initials */}
</motion.div>
```

### 2. **Update Contact Information**

**File: `src/components/Contact.tsx`**
```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',  // ← Update
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',  // ← Update
    href: 'https://linkedin.com/in/yourprofile',
  },
  // ... rest of contacts
];
```

### 3. **Update Project Information**

**File: `src/components/Projects.tsx`**
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    impact: 'Key impact metric...',
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/your-repo',
    live: 'https://project-live-link.com',
  },
  // ... more projects
];
```

### 4. **Update Experience**

**File: `src/components/Experience.tsx`**
```typescript
const experiences = [
  {
    company: 'Company Name',
    role: 'Your Role',
    duration: 'Start – End',
    type: 'Current',
    description: 'What you did...',
    achievements: ['Achievement 1', 'Achievement 2'],
    skills: ['Skill1', 'Skill2'],
  },
];
```

### 5. **Update Skills**

**File: `src/components/Skills.tsx`**
```typescript
const skillCategories = [
  {
    category: 'Category Name',
    icon: '🔧',  // Use emoji or import icon
    skills: ['Skill1', 'Skill2'],
  },
];
```

### 6. **Update Metadata & SEO**

**File: `src/app/layout.tsx`**
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description...',
  keywords: ['Your', 'Keywords'],
  // ... update other metadata
};
```

### 7. **Add Resume PDF**

1. Place your resume PDF in the public folder: `public/resume.pdf`
2. Update the download link in `src/components/Hero.tsx`:
```typescript
<motion.a
  href="/resume.pdf"
  download
  // ...
>
  Download Resume <Download size={20} />
</motion.a>
```

### 8. **Customize Colors & Theme**

**File: `tailwind.config.js`**
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Change primary color
      secondary: '#8b5cf6',  // Change secondary color
      accent: '#ec4899',     // Change accent color
    },
  },
}
```

**File: `src/globals.css`**
```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent;
}
/* Adjust gradient colors here */
```

## 🎨 Component Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page with all sections
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Experience timeline
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── context/
│   └── ThemeContext.tsx    # Dark/light mode context
├── globals.css             # Global styles
└── (config files)
```

## 🚢 Deployment

### Deploy on Vercel (Recommended)

Vercel is the official deployment platform for Next.js. It's free, fast, and includes automatic deployments.

**Option 1: Using Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Option 2: Using GitHub Integration**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

### Deploy on GitHub Pages

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Create `.github/workflows/deploy.yml`**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**Step 3: Update `next.config.js`**
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Change to your repo name
  // ... rest of config
};
```

### Deploy on Netlify

**Step 1: Connect your GitHub repo**
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Select your GitHub repository

**Step 2: Configure build settings**
- Build command: `npm run build`
- Publish directory: `.next`
- Click "Deploy"

### Deploy on AWS Amplify

**Step 1: Connect your GitHub repo**
```bash
npm install -g @aws-amplify/cli
amplify init
amplify add hosting
amplify publish
```

## 📊 Performance Optimization

### Lighthouse Scores Target
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Optimization Checklist
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ CSS optimization with Tailwind
- ✅ Font optimization
- ✅ Metadata for SEO
- ✅ Mobile responsiveness
- ✅ Smooth animations with Framer Motion

## 🔧 Build & Production

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm run start
```

**Lint code:**
```bash
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Technologies Used

### Core
- **Next.js 15** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS

### Animation & Interactions
- **Framer Motion 11** - Smooth animations
- **Lucide React** - Icons

### Development Tools
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility
- **ESLint** - Code linting

## 🌐 SEO Best Practices

✅ Implemented features:
- Meta tags and Open Graph
- Sitemap and robots.txt ready
- Semantic HTML
- Mobile-friendly design
- Fast Core Web Vitals
- Structured data markup ready
- Social sharing optimization

## 🔐 Security

- No sensitive data in frontend
- CORS-safe external requests
- Content Security Policy ready
- Input validation on contact form

## 📈 Analytics Ready

To add Google Analytics:

1. **Update `src/app/layout.tsx`**
```typescript
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    `,
  }}
/>
```

## 🤝 Contributing

Want to improve this portfolio template? Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips & Best Practices

### Content Tips
- Keep project descriptions concise (2-3 lines)
- Use quantifiable metrics in impact statements
- Update portfolio every 3-6 months
- Include GitHub links and live demos where possible

### Customization Tips
- Test dark mode thoroughly
- Optimize images before adding
- Check mobile responsiveness
- Use consistent color scheme
- Maintain consistent typography

### Performance Tips
- Keep animations subtle and purposeful
- Lazy load heavy content
- Use optimized images
- Minimize external requests
- Monitor Core Web Vitals

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dark Mode Not Working
Clear browser storage and cache:
```javascript
localStorage.clear()
location.reload()
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🙌 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component documentation
3. Check GitHub issues
4. Contact me via the portfolio contact form

## 📧 Get in Touch

This portfolio is designed for you to showcase your work. Customize it, add your projects, and share it with the world!

---

**Made with ❤️ for Data Scientists and Analytics Professionals**

Last Updated: 2026 | Version 1.0.0
