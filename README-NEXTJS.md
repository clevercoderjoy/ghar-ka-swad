# Ghar Ka Swad 🍽️

A modern food delivery application built with Next.js, Tailwind CSS, and shadcn/ui.

## ✨ Features

- **Next.js 15** with App Router for modern React development
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** components for beautiful UI elements
- **TypeScript** for type safety
- **Framer Motion** for smooth animations
- **Dark/Light mode** theme support
- **Responsive design** for all devices

## 🚀 Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx          # Home page
│   ├── about/            # Example route
│   └── globals.css       # Global styles with Tailwind
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── providers/       # Theme provider
│   ├── lib/            # Utility functions
│   └── hooks/          # Custom React hooks
├── public/             # Static assets
└── next.config.js     # Next.js configuration
```

## 🎨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with a custom configuration including:
- Dark mode support
- Custom color scheme (orange/amber theme)
- Glass morphism utilities
- Custom animations

### shadcn/ui
Components are configured to use the root `components/` directory with proper TypeScript paths.

## 🌙 Theme Support

The app includes dark/light mode toggle functionality:
- Uses `next-themes` for theme management
- Custom theme toggle component
- Persistent theme preference

## 📱 Responsive Design

All components are built with mobile-first responsive design using Tailwind CSS breakpoints.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Animation**: Framer Motion
- **Theme**: next-themes

## 🌐 App-Based Routing

The project uses Next.js App Router with file-based routing:
- `/` - Home page (main landing page)
- `/about` - About page (example route)
- Each route can have its own `layout.tsx`, `page.tsx`, `loading.tsx`, etc.

Add new routes by creating folders in the `app/` directory with a `page.tsx` file.