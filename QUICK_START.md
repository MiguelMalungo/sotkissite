# SOTKIS Website - Quick Start Guide

## 🎉 Your website is ready!

The SOTKIS website has been successfully created with all requested features and pages.

## 🚀 Getting Started

### 1. Navigate to the project directory

```bash
cd /Users/josemiguelferrazguedes/Sotkissite/sotkis-website
```

### 2. Start the development server

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is busy).

### 3. View the website

Open your browser and navigate to the local development URL. You should see:
- ✅ Sticky navigation header with SOTKIS logo
- ✅ Five navigation items: Sotkis | Platform | Paylt | Access | Level
- ✅ Mobile-responsive hamburger menu
- ✅ Beautiful hero sections on each page
- ✅ Comprehensive content for all pages
- ✅ Professional footer with links

## 📱 Test Responsive Design

1. Open browser DevTools (F12 or Cmd+Option+I)
2. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

## 🎨 Customization Tips

### Update Colors

Edit `/src/styles/variables.css` to change the color scheme:

```css
--color-primary: #2563eb;      /* Main brand color */
--color-secondary: #10b981;    /* Sustainability green */
--color-accent: #8b5cf6;       /* Accent color */
```

### Add Your Logo

Replace the text logo in `/src/components/layout/Header.tsx`:

```tsx
// Replace this:
<span className="header__logo-text">SOTKIS</span>

// With an image:
<img src="/path/to/logo.png" alt="SOTKIS" />
```

### Update Content

All page content is in `/src/pages/`:
- `Home.tsx` - Main landing page
- `Platform.tsx` - Platform information
- `Paylt.tsx` - Payment solutions
- `Access.tsx` - Access control
- `Level.tsx` - Sensor technology

### Add Images

1. Place images in `/public/images/`
2. Reference them in components:
   ```tsx
   <img src="/images/your-image.jpg" alt="Description" />
   ```

### Hero Background Images

Add background images to hero sections:

```tsx
<Hero
  title="Your Title"
  description="Your description"
  backgroundImage="/images/hero-bg.jpg"
  overlay={true}  // Adds color overlay for better text readability
/>
```

## 🏗️ Building for Production

### Create production build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

### Deploy to hosting

The `dist/` folder can be deployed to:
- **Netlify**: Drag and drop the dist folder or connect via Git
- **Vercel**: Import the project from Git
- **AWS S3 + CloudFront**: Upload dist folder to S3 bucket
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Any static hosting service**

## 📋 Checklist for Production

Before going live, make sure to:

- [ ] Add your actual logo image
- [ ] Replace placeholder contact information in Footer.tsx
- [ ] Add real background images for hero sections
- [ ] Update email and phone numbers
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Add meta tags for SEO (in index.html)
- [ ] Create favicon and other app icons
- [ ] Test all links and navigation
- [ ] Test on real mobile devices
- [ ] Check accessibility (screen readers, keyboard navigation)
- [ ] Optimize images (compress, use modern formats like WebP)
- [ ] Set up contact form backend (if needed)
- [ ] Configure domain name and SSL certificate

## 🔧 Common Customizations

### Add a Contact Form

Create `/src/pages/Contact.tsx` and add route in `App.tsx`:

```tsx
// In App.tsx
<Route path="contact" element={<Contact />} />
```

### Add More Pages

1. Create new page in `/src/pages/NewPage.tsx`
2. Add route in `/src/App.tsx`
3. Add navigation link in `/src/components/layout/Header.tsx`

### Change Font

Update in `/src/styles/variables.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

--font-family-primary: 'Your Font', sans-serif;
```

### Add Icons

Install an icon library:

```bash
npm install react-icons
```

Use in components:

```tsx
import { FaRecycle, FaChartLine } from 'react-icons/fa';

<FaRecycle className="icon" />
```

## 🐛 Troubleshooting

### Port already in use

If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### React Router 404 errors on refresh

For production deployment, configure your hosting to redirect all routes to index.html.

### Styles not loading

Make sure `/src/styles/globals.css` is imported in `main.tsx`.

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com)

## 💡 Next Steps

1. **Content**: Refine the content based on actual SOTKIS materials
2. **Images**: Add professional photography and graphics
3. **SEO**: Add meta tags, Open Graph tags, structured data
4. **Performance**: Optimize images, implement lazy loading
5. **Analytics**: Set up tracking and monitoring
6. **Testing**: Write tests for critical components
7. **CI/CD**: Set up automated deployment pipeline

---

🎊 **Congratulations!** Your SOTKIS website is ready to launch! 🚀

