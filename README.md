# Usha Rao Patteti — Personal Portfolio

A modern, premium personal portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 📸 How to Add Your Profile Photo

**This is the most important first step!**

1. Save your photo as **`public/profile.jpg`** in the project root
2. It will automatically appear in the hero section
3. Recommended: square crop, face centered, minimum **400×400px**
4. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

Then, open `components/Hero.tsx` and replace the placeholder `<div>` with:

```tsx
<Image
  src="/profile.jpg"
  alt="Usha Rao Patteti"
  fill
  className="object-cover"
  priority
/>
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14 | React framework with App Router |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Utility-first styling |
| Framer Motion | 11 | Animations & transitions |
| Lucide React | 0.383 | Icons |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       ← Root layout with fonts & metadata
│   ├── page.tsx         ← Main page (assembles all sections)
│   └── globals.css      ← Global styles & custom classes
├── components/
│   ├── Navbar.tsx       ← Sticky nav with active section tracking
│   ├── Hero.tsx         ← Landing section with profile image
│   ├── Stats.tsx        ← Quick stats cards
│   ├── About.tsx        ← Bio, timeline, education
│   ├── Skills.tsx       ← Categorized skill grid
│   ├── Projects.tsx     ← Featured project cards
│   ├── Experience.tsx   ← Work + education timeline
│   ├── Certifications.tsx ← Certificate cards
│   ├── Blog.tsx         ← Article cards
│   ├── Contact.tsx      ← Contact form + links
│   ├── Footer.tsx       ← Footer with wave illustration
│   └── LoadingScreen.tsx ← Animated loading splash
└── public/
    └── profile.jpg      ← ← ← ADD YOUR PHOTO HERE
```

---

## ✏️ Personalizing the Content

### Update your email
Search for `usharao@example.com` and replace with your real email across all components.

### Update project GitHub links
In `components/Projects.tsx`, each project has a `github` field — update these to your actual repo URLs.

### Add a resume
Place your resume PDF as `public/resume.pdf` — the "Download Resume" button in the navbar will link to it automatically.

### Update social links
In `components/Hero.tsx` and `components/Footer.tsx`, update the `socialLinks` array with your actual URLs.

### Add blog posts
In `components/Blog.tsx`, update the `href` fields to link to your actual Substack/Medium/blog posts.

### Certificate links
In `components/Certifications.tsx`, update the `link` fields to your actual certificate verification URLs.

---

## 🎨 Design System

| Element | Value |
|---|---|
| Primary color | `#0ea5e9` (sky-500) |
| Display font | Space Grotesk |
| Body font | Inter |
| Name font | Dancing Script |
| Card style | Glassmorphism with soft shadows |
| Radius | 16px (cards) |

---

## 🚢 Deploying to Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com → Import repository
# 3. Click Deploy — that's it!
```

---

## 📬 Setting up Contact Form

The contact form is ready for [EmailJS](https://emailjs.com/) or [Formspree](https://formspree.io/).

**With EmailJS:**
1. Create an account at emailjs.com
2. Install: `npm install @emailjs/browser`
3. In `components/Contact.tsx`, replace the `setTimeout` with an `emailjs.send()` call

**With Formspree:**
1. Create a form at formspree.io
2. Change the form action to your Formspree endpoint

---

Built with ❤️ in Chennai, India.
