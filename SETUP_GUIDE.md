# 🚀 Data Science Portfolio - Complete Setup Guide

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Customization Walkthrough](#customization-walkthrough)
3. [Deployment Guide](#deployment-guide)
4. [Advanced Customization](#advanced-customization)
5. [FAQ & Troubleshooting](#faq--troubleshooting)

---

## Initial Setup

### Step 1: Clone/Download the Project

```bash
# If cloned from GitHub
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# OR if you have the project folder
cd portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages:
- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animations
- `lucide-react` - Icons
- `tailwindcss` - Styling
- And more...

**Estimated time**: 2-5 minutes depending on internet speed

### Step 3: Start Development Server

```bash
npm run dev
```

Output:
```
> portfolio@1.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1.2s
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the portfolio!

### Step 4: Test Features

- 🌙 Toggle dark mode (top right)
- 📱 Resize browser to test mobile responsiveness
- ✨ Scroll to see animations
- 🔗 Click navigation links to scroll sections

---

## Customization Walkthrough

### 1. Personal Information

#### Update Your Name & Title

**File**: `src/components/Navbar.tsx` (Line ~30)
```typescript
// Change from "DS" to your initials
<motion.div className="text-2xl font-bold gradient-text">
  YOUR_INITIALS  // e.g., "AB" for Aisha Bhatt
</motion.div>
```

**File**: `src/components/Hero.tsx` (Line ~45-50)
```typescript
<motion.h1 variants={itemVariants} className="...">
  <span className="gradient-text">YOUR_MAIN_TITLE</span>
  <br />
  <span className="text-slate-900 dark:text-white">YOUR_SUBTITLE</span>
</motion.h1>

<motion.p variants={itemVariants} className="...">
  YOUR_TAGLINE_HERE
</motion.p>
```

**Example for your resume:**
```typescript
<span className="gradient-text">Data-Driven</span>
<br />
<span className="text-slate-900 dark:text-white">Problem Solver</span>

// Tagline
Transforming raw data into actionable insights through machine learning, 
analytics, and geospatial intelligence
```

#### Update About Section

**File**: `src/components/About.tsx` (Line ~40-50)

```typescript
<p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
  REPLACE_WITH_YOUR_SUMMARY
</p>
```

**Suggested summary based on your resume:**
```
I'm a Data Science professional with a passion for transforming complex 
datasets into actionable business intelligence. With a strong foundation in 
machine learning, statistical analysis, and geospatial analytics, I specialize 
in building end-to-end data solutions that drive strategic decision-making.
```

### 2. Contact Information

**File**: `src/components/Contact.tsx` (Line ~15-35)

```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',  // ← UPDATE
    href: 'mailto:your.email@example.com',  // ← UPDATE
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',  // ← UPDATE
    href: 'https://linkedin.com/in/yourprofile',  // ← UPDATE
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourprofile',  // ← UPDATE
    href: 'https://github.com/yourprofile',  // ← UPDATE
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, India',  // ← UPDATE
    href: '#',
  },
];
```

Also update in **Footer** `src/components/Footer.tsx`:
```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/yourprofile', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
];
```

### 3. Skills Section

**File**: `src/components/Skills.tsx` (Line ~3-15)

```typescript
const skillCategories = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'SQL', 'R', '.NET'],  // ← UPDATE
  },
  {
    category: 'Machine Learning & AI',
    icon: '🤖',
    skills: ['Predictive Analytics', 'NLP', 'Classification', 'Regression'],  // ← UPDATE
  },
  // ... more categories
];
```

**Update proficiency bars** (Line ~90):
```typescript
[
  { skill: 'Python & Data Analysis', level: 90 },  // ← UPDATE levels
  { skill: 'Machine Learning', level: 85 },
  { skill: 'SQL & Database Design', level: 88 },
  // ... more skills
]
```

### 4. Projects Section

**File**: `src/components/Projects.tsx` (Line ~5-70)

Add your 6 projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Retrieval-Augmented Fake News Detection',  // ← Your project title
    description: 'AI-powered system using semantic search and LLMs to detect misinformation',
    technologies: ['NLP', 'LLM', 'FAISS', 'BART'],
    impact: 'Achieved 92% F1-Score with interpretable detection',
    features: [
      'Semantic retrieval using FAISS',
      'Integrated LLM for claim verification',
      'Zero-shot classification',
      'Evidence-based reasoning',
    ],
    github: 'https://github.com/yourprofile/fake-news-detection',
    live: 'https://project-demo.com',
  },
  // ... add 5 more projects
];
```

**From your resume, here are your projects:**
1. Retrieval-Augmented Fake News Detection
2. Geospatial Transit Analytics for Chennai
3. NLP-Powered Support Ticket Management
4. Machine Learning Analysis of Global Cyber Incidents
5. Forecasting Stock Closing Prices
6. Youth Behavioral Predictive Modeling

### 5. Experience Section

**File**: `src/components/Experience.tsx` (Line ~15-50)

```typescript
const experiences = [
  {
    id: 1,
    company: 'CUMTA',  // ← UPDATE
    role: 'Data Science Intern',  // ← UPDATE
    duration: 'Jan 2026 – Present',  // ← UPDATE
    type: 'Current',
    description: 'Building and deploying AI-powered geospatial analytics...',
    achievements: [
      'Deployed AI-powered geospatial analytics',
      'Constructed end-to-end data pipelines',
      'Architected NLP-driven support ticket system',
      // ... more achievements
    ],
    skills: ['Geospatial Analysis', 'NLP', 'ML', 'Python', 'GIS'],  // ← UPDATE
  },
];
```

### 6. Education Section

**File**: `src/components/About.tsx` (Line ~115-130)

```typescript
[
  {
    degree: 'MSc Data Science',  // ← Already correct
    school: 'SASTRA Deemed to be University',
    cgpa: 'CGPA: 7.84',
  },
  {
    degree: 'BSc Computer Science',
    school: 'M.O.P. Vaishnav College for Women',
    cgpa: 'CGPA: 8.1',
  },
]
```

### 7. Metadata & SEO

**File**: `src/app/layout.tsx` (Line ~5-40)

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Data Science Portfolio',  // ← UPDATE
  description: 'Data Science professional specializing in ML, Analytics & Geospatial Intelligence',  // ← UPDATE
  keywords: [
    'Data Science',
    'Machine Learning',
    'Data Analysis',
    'Your Name',  // ← ADD
  ],
  authors: [{ name: 'Your Name' }],  // ← UPDATE
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',  // ← UPDATE
    title: 'Your Name | Data Science Portfolio',  // ← UPDATE
  },
  twitter: {
    creator: '@yourhandle',  // ← UPDATE
  },
};
```

### 8. Add Your Resume

1. **Create a PDF of your resume** (export from Google Docs, Word, etc.)

2. **Place it in the public folder**:
   ```
   portfolio/
   ├── public/
   │   └── resume.pdf  ← Place it here
   ```

3. **The download button in Hero section already links to it!**
   ```typescript
   <motion.a
     href="/resume.pdf"  // ← Already correct
     download
   >
     Download Resume <Download size={20} />
   </motion.a>
   ```

---

## Deployment Guide

### Option 1: Deploy on Vercel (Recommended)

**Vercel is the official Next.js hosting platform. It's free and takes 5 minutes!**

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Portfolio website"

# Create a new repo on GitHub and push
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" (or login if you have an account)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

**That's it! Your site is live!**

Vercel will automatically give you a URL like: `https://portfolio-abc123.vercel.app`

**Custom Domain:**
1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add your custom domain (e.g., `yourname.com`)
4. Follow DNS configuration instructions

### Option 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose your portfolio repository
5. Build settings should auto-fill, click "Deploy"

### Option 3: Deploy Locally with Docker

```bash
# Create Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build and run
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Advanced Customization

### Customize Colors

**File**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3b82f6',    // Blue - change this
      secondary: '#8b5cf6',  // Purple - change this
      accent: '#ec4899',     // Pink - change this
    },
  },
}
```

**Popular color combinations:**
```javascript
// Modern Blue-Purple
primary: '#0066ff',
secondary: '#9933ff',
accent: '#ff0066',

// Professional Navy-Gold
primary: '#1e3a8a',
secondary: '#f59e0b',
accent: '#06b6d4',

// Tech Green-Blue
primary: '#0ea5e9',
secondary: '#10b981',
accent: '#f97316',
```

### Add Certifications Section

Create new file: `src/components/Certifications.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Microsoft Azure AI Essentials',
    issuer: 'Microsoft & LinkedIn',
    date: '2024',
    credentialUrl: 'https://...',
  },
  {
    name: 'SQL for Data Analysis',
    issuer: 'LinkedIn Learning',
    date: '2024',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="section-title">Certifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl"
          >
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">
              {cert.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-1">
              {cert.issuer}
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
              {cert.date}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

Then add to `src/app/page.tsx`:
```typescript
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <main>
      {/* ... other sections ... */}
      <Certifications />
      <Contact />
      {/* ... */}
    </main>
  );
}
```

### Add Blog Section

Create: `src/components/Blog.tsx`

```typescript
'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Understanding Feature Engineering',
    date: '2024-01-15',
    excerpt: 'A deep dive into feature engineering techniques...',
    slug: 'feature-engineering',
  },
  // ... more posts
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="section-title">Latest Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            whileHover={{ y: -5 }}
            className="glass-card p-6 rounded-2xl group"
          >
            <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition">
              {post.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              Read More <ArrowRight size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
```

### Customize Animations

**File**: `tailwind.config.js`

```javascript
animation: {
  float: 'float 3s ease-in-out infinite',
  'fade-in': 'fadeIn 0.5s ease-in',
  // Add more animations
  'slide-in': 'slideIn 0.5s ease-out',
  'bounce-slow': 'bounce 2s infinite',
},
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  slideIn: {
    '0%': { opacity: '0', transform: 'translateX(-50px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
}
```

---

## FAQ & Troubleshooting

### Q: How do I change the color scheme?
**A:** Edit `tailwind.config.js` and update the `primary`, `secondary`, and `accent` colors. Also update gradient backgrounds in `src/globals.css`.

### Q: Port 3000 is already in use
**A:** Run with a different port:
```bash
npm run dev -- -p 3001
```

### Q: Dark mode isn't persisting
**A:** Clear browser storage:
```javascript
// In browser console
localStorage.clear()
location.reload()
```

### Q: Images aren't loading
**A:** Make sure images are in the `public` folder:
```
public/
├── resume.pdf
├── your-image.jpg
```

### Q: Build fails with TypeScript errors
**A:** Run type check and fix:
```bash
npx tsc --noEmit
npm run build
```

### Q: How do I add email functionality?
**A:** Use Formspree:
1. Go to [formspree.io](https://formspree.io)
2. Create a new form with your email
3. Copy the form ID
4. Update Contact.tsx to submit to Formspree

### Q: How do I track visitors?
**A:** Add Google Analytics:
1. Create a Google Analytics account
2. Get your Measurement ID (G-XXXXX)
3. Add to your `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXX
```

---

## Next Steps

1. ✅ Customize all personal information
2. ✅ Add your projects and experiences
3. ✅ Update skills and proficiencies
4. ✅ Add resume PDF
5. ✅ Test all features locally
6. ✅ Deploy to Vercel
7. ✅ Share with others!

## Support

Need help? Check:
- Main README.md
- Inline code comments
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs

---

**Happy building! 🚀**
