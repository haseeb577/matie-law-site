# Website Deploy Karne Ke Steps

## Option 1: Vercel (Recommended - Free & Easy)

### Steps:

1. **GitHub Account Banayein (agar nahi hai)**
   - https://github.com par jayein
   - Free account banayein

2. **GitHub Repository Banayein**
   - GitHub par nayi repository banayein
   - Repository name: `gavel-legal-services` (ya kuch bhi)

3. **Code GitHub Par Push Karein**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gavel-legal-services.git
   git push -u origin main
   ```

4. **Vercel Par Deploy Karein**
   - https://vercel.com par jayein
   - "Sign Up" karein (GitHub se login karein)
   - "Add New Project" click karein
   - Apni GitHub repository select karein
   - "Deploy" button click karein
   - 2-3 minutes mein deploy ho jayega
   - Aapko free URL milega jaise: `https://gavel-legal-services.vercel.app`

### Vercel Ke Fayde:
- ✅ Bilkul FREE
- ✅ Automatic HTTPS
- ✅ Fast CDN
- ✅ Custom domain (optional)
- ✅ Automatic deployments jab bhi code push karein

---

## Option 2: Netlify (Alternative - Free)

1. **Netlify Account Banayein**
   - https://netlify.com par jayein
   - Free account banayein

2. **GitHub Repository Connect Karein**
   - "New site from Git" click karein
   - GitHub repository select karein
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`

3. **Deploy Karein**
   - "Deploy site" click karein
   - Free URL milega: `https://your-site.netlify.app`

---

## Option 3: Railway (Alternative)

1. **Railway Account**
   - https://railway.app par jayein
   - GitHub se login karein

2. **New Project**
   - "New Project" > "Deploy from GitHub repo"
   - Repository select karein
   - Automatic deploy ho jayega

---

## Quick Deploy (Agar GitHub nahi use karna)

### Vercel CLI Se Direct Deploy:

1. **Vercel CLI Install Karein:**
   ```bash
   npm install -g vercel
   ```

2. **Login Karein:**
   ```bash
   vercel login
   ```

3. **Deploy Karein:**
   ```bash
   vercel
   ```

4. **Production Deploy:**
   ```bash
   vercel --prod
   ```

---

## Important Notes:

- **Free Hosting**: Vercel, Netlify, Railway sab free hain testing ke liye
- **Custom Domain**: Aap apna domain bhi add kar sakte hain (optional)
- **Automatic Updates**: Jab bhi GitHub par code push karein, automatically deploy ho jayega
- **HTTPS**: Sab platforms automatically HTTPS provide karte hain

---

## Recommended: Vercel

Vercel Next.js ke liye best hai kyunki:
- Next.js ka company hai
- Zero configuration
- Fastest deployment
- Best performance

