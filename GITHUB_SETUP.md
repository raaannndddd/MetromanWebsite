# MetroMan Memecoin - GitHub & Local Setup Guide

This guide will help you download the project locally and push it to GitHub.

## 📥 Option 1: Download as ZIP File

### Step 1: Export the Project

If you have access to the Manus platform where the project was created:

1. Go to your project dashboard
2. Click the "Download" or "Export" button
3. Select "ZIP" format
4. Save the file to your computer

### Step 2: Extract the ZIP File

```bash
# On macOS/Linux
unzip metroman-memecoin.zip
cd metroman-memecoin

# On Windows
# Right-click the ZIP file → Extract All
# Then open the extracted folder in your terminal/command prompt
```

### Step 3: Install Dependencies

```bash
cd client
pnpm install
```

### Step 4: Run Locally

```bash
pnpm dev
```

Visit `http://localhost:3000/` in your browser.

---

## 🐙 Option 2: Push to GitHub (Recommended)

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Name it: `metroman-memecoin`
5. Add description: "A modern, meme-themed memecoin website with bilingual support"
6. Choose **Public** (so others can see it)
7. **Do NOT** initialize with README (we already have one)
8. Click **Create repository**

### Step 2: Initialize Git Locally

After downloading the project, open a terminal in the project root directory and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: MetroMan memecoin website"
```

### Step 3: Connect to GitHub

Copy the commands from your GitHub repository page (they'll look like this):

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/metroman-memecoin.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Verify on GitHub

Go to your repository URL: `https://github.com/YOUR_USERNAME/metroman-memecoin`

You should see all your files there!

---

## 🔄 Option 3: Clone from GitHub (For Others)

If you've already pushed to GitHub, others can clone the project with:

```bash
git clone https://github.com/YOUR_USERNAME/metroman-memecoin.git
cd metroman-memecoin
cd client
pnpm install
pnpm dev
```

---

## 📝 Making Changes & Pushing Updates

After making changes locally:

```bash
# Check what changed
git status

# Stage all changes
git add .

# Commit with a message
git commit -m "Add new feature or fix"

# Push to GitHub
git push origin main
```

### Commit Message Examples

- `git commit -m "Add new tokenomics section"`
- `git commit -m "Fix mobile responsiveness"`
- `git commit -m "Update translations for Chinese"`
- `git commit -m "Enhance meme styling"`

---

## 🚀 Deploying from GitHub

### Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Configure:
   - **Framework**: Vite
   - **Build Command**: `cd client && pnpm build`
   - **Output Directory**: `client/dist`
   - **Install Command**: `pnpm install`
5. Click **Deploy**

Your site will be live at a URL like: `metroman-memecoin.vercel.app`

### Deploy to Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Select GitHub and authorize
4. Choose your repository
5. Configure:
   - **Build command**: `cd client && pnpm build`
   - **Publish directory**: `client/dist`
6. Click **Deploy site**

---

## 📁 Project Structure on GitHub

```
metroman-memecoin/
├── client/
│   ├── public/
│   │   ├── metroman.webp
│   │   └── metroman1.jpg
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   │   ├── LanguageContext.tsx
│   │   │   └── ThemeContext.tsx
│   │   ├── lib/
│   │   │   └── translations.ts
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
├── README.md
├── GITHUB_SETUP.md (this file)
└── .gitignore
```

---

## ⚙️ Important: .gitignore File

Create a `.gitignore` file in the root directory to avoid uploading unnecessary files:

```
# Dependencies
node_modules/
pnpm-lock.yaml
npm-debug.log
yarn-error.log

# Build output
dist/
build/
.next/

# Environment variables
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/
```

---

## 🔐 GitHub Best Practices

### 1. Add a License

Add a `LICENSE` file to your repository. For open-source projects, MIT license is popular:

```
MIT License

Copyright (c) 2025 MetroMan Memecoin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

### 2. Add GitHub Topics

On your repository page:
1. Click **About** (gear icon on the right)
2. Add topics: `memecoin`, `crypto`, `website`, `react`, `tailwind`

### 3. Create a GitHub Actions Workflow (Optional)

For automated testing and deployment, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'pnpm'
      - run: cd client && pnpm install && pnpm build
```

---

## 🆘 Troubleshooting

### "Git is not installed"

**macOS**: `brew install git`
**Windows**: Download from [git-scm.com](https://git-scm.com)
**Linux**: `sudo apt-get install git`

### "Permission denied (publickey)"

You need to set up SSH keys:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: Settings → SSH and GPG keys → New SSH key
# Paste the contents of ~/.ssh/id_ed25519.pub
```

### "fatal: not a git repository"

Make sure you're in the correct directory:

```bash
cd metroman-memecoin
git status
```

### "Changes not being tracked"

Ensure `.gitignore` is in the root directory and run:

```bash
git add .
git commit -m "Your message"
git push origin main
```

---

## 📚 Useful Git Commands

```bash
# View commit history
git log

# See what changed
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branches
git merge feature/new-feature

# View all branches
git branch -a
```

---

## 🎯 Next Steps

1. **Download the project** using Option 1 or 2
2. **Test locally** with `pnpm dev`
3. **Push to GitHub** for version control
4. **Deploy to Vercel/Netlify** for live hosting
5. **Share the link** with your community!

---

## 📞 Need Help?

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Git Tutorial: https://git-scm.com/book/en/v2

Happy coding! 🚀

