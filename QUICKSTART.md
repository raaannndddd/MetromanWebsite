# Quick Start Guide

Get the MetroMan memecoin website running in 3 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- pnpm ([Install](https://pnpm.io/installation))
- Git ([Download](https://git-scm.com/))

## Installation

```bash
# 1. Navigate to the client directory
cd client

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

## Access the Website

Open your browser and go to:
```
http://localhost:3000/
```

## Available Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linter
pnpm lint

# Type check
pnpm type-check
```

## Features

- ✅ Bilingual support (English/Chinese)
- ✅ Responsive design
- ✅ Meme-themed styling
- ✅ Smooth animations
- ✅ Fast performance with Vite

## Project Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable UI components
│   ├── contexts/    # React contexts
│   ├── lib/         # Utilities
│   ├── pages/       # Page components
│   ├── App.tsx      # Main app
│   └── index.css    # Global styles
├── package.json
└── vite.config.ts
```

## Customization

### Change Colors

Edit `client/src/index.css` and modify the CSS variables:

```css
:root {
  --background: #FFD700;  /* Yellow */
  --foreground: #1a1a1a;  /* Black */
  /* ... more variables ... */
}
```

### Update Content

Edit `client/src/lib/translations.ts` to change text in English and Chinese.

### Modify Layout

Edit `client/src/pages/Home.tsx` to change the page structure.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Deploy!

## Troubleshooting

### Port 3000 already in use?

```bash
pnpm dev -- --port 3001
```

### Dependencies not installing?

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Hot reload not working?

Restart the dev server:
```bash
# Press Ctrl+C to stop
# Then run again
pnpm dev
```

## Need Help?

- See [README.md](./README.md) for detailed documentation
- See [GITHUB_SETUP.md](./GITHUB_SETUP.md) for GitHub and deployment guides
- Check [Vite docs](https://vitejs.dev/)
- Check [React docs](https://react.dev/)

## License

MIT License - See [LICENSE](./LICENSE) file

---

Happy coding! 🚀
