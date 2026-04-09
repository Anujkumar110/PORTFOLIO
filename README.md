# 🚀 Personal Portfolio Website

A modern, responsive, and fully customizable portfolio website built with **React + Vite + Tailwind CSS**.

## ✨ Features

- ⚡ **Blazing fast** — Vite-powered dev server & build
- 🌗 **Dark / Light mode** — persists across sessions
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🎨 **Modern design** — glassmorphism, gradients, animations
- ✍️ **One-file customization** — edit `src/data/portfolioData.js`
- 📧 **Contact form** — EmailJS (no backend required)
- 🔍 **SEO-ready** — meta tags, Open Graph, Twitter cards

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## 🎨 Customization Guide

**All content lives in one file:**

```
src/data/portfolioData.js
```

| What to change | Key to edit |
|---|---|
| Name, role, tagline | `personalInfo` |
| About text & stats | `aboutData` |
| Skills & icons | `skillsData` |
| Projects | `projectsData` |
| Work / Education | `experienceData` |
| Social links | `personalInfo.socialLinks` |
| Contact form keys | `contactData` |

### Add a Project
```js
// In projectsData array:
{
  title: "My New Project",
  description: "What it does...",
  image: "/projects/my-project.png",   // Put image in public/projects/
  techStack: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://my-project.vercel.app",
  featured: true,
}
```

### Add a Skill
```js
// In skillsData array:
{ name: "Docker", icon: "SiDocker", category: "DevOps", color: "#2496ED" }
```
> Icon names come from [react-icons/si](https://react-icons.github.io/react-icons/icons/si/)

---

## 📧 Setting Up the Contact Form (EmailJS)

1. Go to [emailjs.com](https://emailjs.com) and create a free account
2. Create a **Service** (e.g. Gmail) and a **Template**
3. Copy your **Service ID**, **Template ID**, and **Public Key**
4. Paste them in `src/data/portfolioData.js`:
```js
export const contactData = {
  emailjsServiceId: "service_xxxxx",
  emailjsTemplateId: "template_xxxxx",
  emailjsPublicKey: "xxxxxxxxxxxxxx",
};
```

---

## 🖼️ Assets

| Asset | Path |
|---|---|
| Profile photo | `public/profile.jpg` |
| Resume PDF | `public/resume.pdf` |
| Project images | `public/projects/project1.png`, etc. |
| Favicon | `public/favicon.svg` |

---

## 🎨 Changing Colors

Edit `tailwind.config.js` → `theme.extend.colors.primary`:
```js
primary: {
  500: '#6366f1',  // ← Change this to your brand color
  ...
}
```

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) → New Project.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [Vite](https://vitejs.dev) | Build tool |
| [Tailwind CSS v3](https://tailwindcss.com) | Styling |
| [Framer Motion](https://framer.com/motion) | Animations |
| [React Icons](https://react-icons.github.io) | Icon library |
| [EmailJS](https://emailjs.com) | Contact form |

---

Made with ❤️ — customize it and make it yours!
