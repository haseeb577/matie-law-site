# Quick Setup Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000`

## Adding Your Logo

To add your actual logo image:

1. Place your logo file in the `public/` folder (e.g., `public/logo.png`)
2. Update the logo in `components/Navbar.tsx` and `components/Footer.tsx`
3. Replace the SVG icon with an `<Image>` component from `next/image`

Example:
```tsx
import Image from 'next/image'

<Image 
  src="/logo.png" 
  alt="Gavel Legal Services" 
  width={48} 
  height={48} 
/>
```

## Customization

### Update Contact Information
- Phone: Search for `+92 323 666 1110` and replace throughout
- WhatsApp: Search for `923236661110` and replace throughout

### Update Colors
Edit `tailwind.config.ts` to change the gold color scheme:
```ts
gold: {
  500: '#your-color', // Main gold color
  // ... other shades
}
```

### Update Content
- Edit page files in `app/` directory
- Each page is self-contained and easy to modify

## Production Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel dashboard
3. Deploy automatically

### Other Platforms
- Ensure Node.js 18+ is available
- Run `npm run build`
- Start with `npm start`

