# MetroMan Memecoin Website

A modern, sleek bilingual (English/Chinese) memecoin website for MetroMan, inspired by legendary meme culture. Built with React 19, Tailwind CSS, and TypeScript for a premium user experience.

## 🌟 Features

- **Bilingual Support**: Seamless switching between English and Chinese with a single click
- **Modern Design**: Dark theme with gold accents inspired by MetroMan's iconic aesthetic
- **Responsive Layout**: Fully responsive design that works perfectly on mobile, tablet, and desktop
- **Smooth Animations**: Subtle transitions and hover effects for enhanced interactivity
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Ready**: Semantic HTML and optimized structure for search engines
- **Accessible**: WCAG compliant with proper keyboard navigation and screen reader support

## 📋 Project Structure

```
metroman-memecoin/
├── client/
│   ├── public/
│   │   ├── metroman.webp          # MetroMan hero image
│   │   └── metroman1.jpg          # MetroMan alternative image
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── contexts/
│   │   │   ├── LanguageContext.tsx # Bilingual language management
│   │   │   └── ThemeContext.tsx   # Theme management
│   │   ├── lib/
│   │   │   └── translations.ts    # English and Chinese translations
│   │   ├── pages/
│   │   │   └── Home.tsx           # Main landing page
│   │   ├── App.tsx                # Main app component
│   │   ├── main.tsx               # React entry point
│   │   └── index.css              # Global styles with MetroMan theme
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.ts
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher) - [Download Node.js](https://nodejs.org/)
- **pnpm** (version 8.0.0 or higher) - [Install pnpm](https://pnpm.io/installation)
- **Git** (for version control) - [Download Git](https://git-scm.com/)

### Step 1: Clone or Extract the Project

If you have the project as a ZIP file, extract it to your desired location:

```bash
unzip metroman-memecoin.zip
cd metroman-memecoin
```

Or if cloning from a Git repository:

```bash
git clone <repository-url>
cd metroman-memecoin
```

### Step 2: Install Dependencies

Navigate to the client directory and install all required dependencies using pnpm:

```bash
cd client
pnpm install
```

This command will:
- Download all npm packages listed in `package.json`
- Install React 19, Tailwind CSS 4, TypeScript, and other dependencies
- Create a `node_modules` folder with all packages
- Generate a `pnpm-lock.yaml` file for dependency locking

**Note**: The first installation may take 2-5 minutes depending on your internet speed.

### Step 3: Start the Development Server

Start the Vite development server with hot module replacement (HMR):

```bash
pnpm dev
```

You should see output similar to:

```
  VITE v5.0.0  ready in 245 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

### Step 4: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000/
```

The website will automatically reload whenever you make changes to the code (hot module replacement).

## 🌐 Using the Website

### Navigation

The website features a responsive navigation bar with the following sections:

- **Home**: Hero section with MetroMan imagery and call-to-action
- **About**: Information about MetroMan and key features
- **Tokenomics**: Token supply and reward information
- **Roadmap**: Project phases and milestones
- **Contact Us**: Social media and communication links

### Language Toggle

Click the language button in the top-right corner to switch between:

- **EN** (English) - Click to switch to Chinese
- **中文** (Chinese) - Click to switch to English

The language preference persists during your session, and all content updates instantly.

### Mobile Menu

On mobile devices (screens smaller than 768px), the navigation menu collapses into a hamburger menu. Click the menu icon to expand/collapse navigation options.

## 🛠️ Development Workflow

### Making Changes

1. **Edit Components**: Modify files in `client/src/pages/` or `client/src/components/`
2. **Update Styles**: Edit `client/src/index.css` for global styles or use Tailwind classes inline
3. **Add Translations**: Update `client/src/lib/translations.ts` to add new content in both languages
4. **Hot Reload**: Changes are automatically reflected in the browser

### Adding New Sections

To add a new section to the website:

1. Create a new component in `client/src/components/`
2. Import it in `client/src/pages/Home.tsx`
3. Add translations to `client/src/lib/translations.ts`
4. Add navigation link in the nav section of `Home.tsx`
5. Add a corresponding section ID for smooth scrolling

Example:

```tsx
// In translations.ts
export const translations = {
  en: {
    newSection: {
      title: 'New Section Title',
      description: 'Section description...',
    },
  },
  zh: {
    newSection: {
      title: '新部分标题',
      description: '部分描述...',
    },
  },
};

// In Home.tsx
<section id="newsection" className="py-20 px-4">
  <h2 className="text-4xl font-black text-[#FFD700]">
    {t.newSection.title}
  </h2>
  <p className="text-white">{t.newSection.description}</p>
</section>
```

## 🎨 Customization

### Color Scheme

The website uses MetroMan's iconic yellow and black theme. To customize colors:

1. Edit `client/src/index.css`
2. Modify CSS variables in the `:root` selector:

```css
:root {
  --primary: #FFD700;           /* Gold/Yellow */
  --primary-foreground: #1a1a1a; /* Black */
  --background: #1a1a1a;         /* Dark background */
  --foreground: #ffffff;         /* White text */
}
```

### Typography

Tailwind CSS provides responsive typography. Common classes:

- `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, etc. for font sizes
- `font-light`, `font-normal`, `font-semibold`, `font-bold`, `font-black` for weights
- `leading-tight`, `leading-normal`, `leading-relaxed` for line heights

### Spacing

Use Tailwind's spacing utilities:

- `p-4` (padding), `m-4` (margin), `gap-4` (gap between flex items)
- `py-20` (vertical padding), `px-4` (horizontal padding)
- `mb-8` (margin bottom), `mt-4` (margin top)

## 📦 Building for Production

### Create Production Build

Generate an optimized production build:

```bash
pnpm build
```

This creates a `dist/` folder with:
- Minified and bundled JavaScript
- Optimized CSS files
- Compressed images and assets
- Source maps for debugging

### Preview Production Build

Test the production build locally:

```bash
pnpm preview
```

This serves the production build at `http://localhost:4173/`

### Build Output

The `dist/` folder contains all files needed for deployment:

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── index-xxxxx.js  # Bundled JavaScript
│   ├── index-xxxxx.css # Bundled CSS
│   └── metroman-xxxxx.webp # Optimized images
└── robots.txt          # SEO robots file
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel offers free hosting for static sites with automatic deployments:

1. **Create Vercel Account**: Go to [vercel.com](https://vercel.com) and sign up
2. **Connect Git Repository**: Import your GitHub repository
3. **Configure Build Settings**:
   - Framework: Vite
   - Build Command: `pnpm build`
   - Output Directory: `dist`
4. **Deploy**: Click "Deploy" and your site goes live!

### Deploy to Netlify

1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com) and sign up
2. **Connect Repository**: Link your GitHub/GitLab repository
3. **Configure Settings**:
   - Build Command: `cd client && pnpm build`
   - Publish Directory: `client/dist`
4. **Deploy**: Netlify automatically deploys on every push

### Deploy to GitHub Pages

1. **Update vite.config.ts**:

```ts
export default defineConfig({
  base: '/metroman-memecoin/',
  // ... rest of config
});
```

2. **Build and Deploy**:

```bash
pnpm build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. **Enable GitHub Pages**: Go to repository Settings → Pages → Select `main` branch and `/dist` folder

### Manual Deployment (Any Web Host)

1. **Build the project**:

```bash
pnpm build
```

2. **Upload `dist/` folder** to your web hosting provider (FTP, cPanel, etc.)

3. **Configure server** to serve `index.html` for all routes (for client-side routing)

## 🔧 Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use:

```bash
# Use a different port
pnpm dev -- --port 3001
```

Then access the site at `http://localhost:3001/`

### Dependencies Not Installing

Clear cache and reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Hot Module Replacement Not Working

Restart the development server:

```bash
# Stop the server (Ctrl+C)
# Then restart
pnpm dev
```

### Build Fails

Check for TypeScript errors:

```bash
pnpm type-check
```

Fix any reported errors and rebuild.

### Images Not Loading

Ensure images are in `client/public/` directory:

```bash
ls -la client/public/
```

Reference images with absolute paths:

```tsx
<img src="/metroman.webp" alt="MetroMan" />
```

## 📱 Browser Support

The website supports all modern browsers:

- Chrome/Chromium (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Security

### Content Security Policy

The website includes security headers to prevent XSS attacks. No sensitive data is stored in the browser.

### External Links

All external links (social media, contact) open in new tabs with `rel="noopener noreferrer"` for security.

## 📊 Performance

### Metrics

- **First Contentful Paint (FCP)**: < 1 second
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3 seconds

### Optimization Techniques

- Image optimization with WebP format
- CSS and JavaScript minification
- Code splitting for faster initial load
- Lazy loading for images
- Efficient Tailwind CSS purging

## 🤝 Contributing

To contribute to the MetroMan website:

1. **Fork the repository** (if applicable)
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test thoroughly
4. **Commit changes**: `git commit -m 'Add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request** with a clear description

## 📄 License

This project is provided as-is for MetroMan memecoin community use.

## 🎯 Roadmap

Future enhancements planned for the website:

- **Phase 1**: Add token purchase integration
- **Phase 2**: Implement real-time price ticker
- **Phase 3**: Add community voting system
- **Phase 4**: Integrate wallet connection (MetaMask, WalletConnect)
- **Phase 5**: Add staking dashboard

## 💬 Support & Contact

For questions or issues:

- **Email**: hello@metroman.com
- **Twitter**: [@metroman](https://twitter.com/metroman)
- **Telegram**: [t.me/metroman](https://t.me/metroman)
- **Discord**: [discord.gg/metroman](https://discord.gg/metroman)

## 🙏 Acknowledgments

- Built with [React 19](https://react.dev/)
- Styled with [Tailwind CSS 4](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)
- UI Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Happy coding! 🚀 Let's make MetroMan the next big thing in crypto memes!**

