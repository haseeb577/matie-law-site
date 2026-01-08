# Gavel Legal Services Website

A professional, responsive website for Gavel Legal Services - Pakistan's trusted tax litigation and consultancy firm.

## Features

- **Responsive Design**: Fully responsive across laptops, desktops, tablets, and mobile devices
- **Modern UI/UX**: Clean, professional design matching the golden/gray theme
- **SEO Optimized**: Built with Next.js 14 for optimal SEO performance
- **Fast Performance**: Optimized for speed and scalability
- **Interactive Components**: Smooth animations and transitions using Framer Motion

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions

## Pages

1. **Home** (`/`) - Hero section, company introduction, trust indicators, and tax calculator CTA
2. **Services** (`/services`) - Complete list of all services offered
3. **About** (`/about`) - Company history, mission, why choose us, and FAQs
4. **Contact** (`/contact`) - Contact form and contact information
5. **Free Quote** (`/quote`) - Tax refund estimation calculator

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── quote/          # Free quote page
│   ├── services/        # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation component
├── public/              # Static assets
└── package.json         # Dependencies
```

## Key Features

### Responsive Navigation
- Sticky header with smooth scroll behavior
- Mobile-friendly hamburger menu
- Quick access to WhatsApp contact

### Contact Integration
- Direct WhatsApp integration for instant communication
- Phone number links for easy calling
- Contact form that opens WhatsApp with pre-filled message

### SEO Optimization
- Proper metadata for all pages
- Semantic HTML structure
- Optimized for search engines

### Performance
- Server-side rendering with Next.js
- Optimized images and assets
- Fast page loads

## Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`:
- Gold colors: `gold-*` (primary brand color)
- Gray background: `gray-custom`

### Contact Information
Update contact details in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- Individual page components

## Deployment

This website can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Next.js and configure settings

## License

© 2024 Gavel Legal Services. All rights reserved.

## Support

For support, contact:
- Phone: +92 323 666 1110
- WhatsApp: [Click here](https://wa.me/923236661110)

