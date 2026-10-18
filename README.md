# Digvijay Deshmukh - Software Engineer Portfolio

Personal portfolio for **Digvijay Deshmukh** (Software Engineer, Ex-Google SWE Intern, IIIT Lucknow B.Tech Computer Science & Artificial Intelligence, 2023–2027). Built with pure semantic HTML5, modern Tailwind CSS, and vanilla ES6+ JavaScript. Zero build steps, zero bloated dependencies, ultra-fast performance.

---

## 🚀 Features

- **⚡ Zero Build Overhead**: Pure static web application (HTML5, CSS3, ES6+ JS). Deploys instantly anywhere.
- **📄 Direct Resume Integration**: Direct access to verified Google Drive PDF resume across nav, hero, snapshot, timeline, and terminal.
- **💻 Interactive CLI Terminal**: Functional Unix-styled terminal emulator with commands (`help`, `about`, `resume`, `skills`, `projects`, `experience`, `contact`, `sudo hire`, `clear`).
- **🌓 High-Contrast Dark & Light Mode**: Custom-engineered color palette with high contrast Slate-900 / Slate-700 typography for light mode and obsidian slate for dark mode.
- **🛠️ Authentic Engineering Architecture**: Categorized technical proficiencies without fake percentage bars, featuring operational tags (`Production`, `Proficient`, `Core`).
- **📂 Real GitHub Repositories**: Showcase for Expense Tracker (Next.js 16 + WhatsApp bot), Watch-Along (Kubernetes manifests + WebSockets), inox (Go systems engine), YouTube Backend, and Trust-to-Stake.
- **📍 Verified Career Milestones**: Google Software Engineering Internship and IIIT Lucknow Computer Science & Artificial Intelligence coursework.

---

## 📁 Repository Structure

```text
portfolio/
├── index.html          # Main HTML structure & layouts
├── css/
│   └── styles.css      # Design tokens, high-contrast themes & typography
├── js/
│   ├── data.js         # Single source of truth (personal info, projects, skills, links)
│   └── app.js          # Client interactions (theme toggle, terminal, modal, filters)
├── vercel.json         # Vercel deployment configuration
├── .gitignore          # Git ignore rules
└── README.md           # Documentation & deployment guide
```

---

## 🌐 How to Deploy (Choose Any Option)

### Option 1: Deploy with Vercel (Recommended — 2 Minutes)

#### Via GitHub (Automatic CI/CD Deploys):
1. Create a repository on GitHub (e.g. `https://github.com/digvijay-555/portfolio`).
2. Push this folder to GitHub:
   ```bash
   cd /home/deceptor/code/portfolio
   git init
   git add .
   git commit -m "feat: portfolio site with verified credentials and resume"
   git branch -M main
   git remote add origin https://github.com/digvijay-555/portfolio.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and log in.
4. Click **"Add New..."** -> **"Project"**.
5. Import your `portfolio` repository.
6. Leave Framework Preset as **Other** (it's a static site).
7. Click **"Deploy"**. Your site will be live instantly with a free `.vercel.app` domain and free SSL!

#### Via Vercel CLI (Instant from Terminal):
```bash
cd /home/deceptor/code/portfolio
npx vercel
```
Follow the prompts (accept defaults). It will provide a live deployment URL immediately.

---

### Option 2: Deploy with GitHub Pages (100% Free on GitHub)

1. Create a repository on GitHub:
   - For a custom root subdomain (`https://digvijay-555.github.io`), name the repo: `digvijay-555.github.io`
   - Or name it `portfolio` to be hosted at `https://digvijay-555.github.io/portfolio`
2. Push your code:
   ```bash
   cd /home/deceptor/code/portfolio
   git init
   git add .
   git commit -m "feat: portfolio release"
   git branch -M main
   git remote add origin https://github.com/digvijay-555/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** -> **Pages** (under Code and automation).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
4. In ~60 seconds, your site will be live!

---

### Option 3: Deploy with Netlify (Drag & Drop or Git)

1. Go to [app.netlify.com](https://app.netlify.com).
2. Go to **Sites** -> drag and drop the `portfolio` folder directly into the upload area.
3. Your site goes live in 5 seconds with a custom `.netlify.app` URL.
