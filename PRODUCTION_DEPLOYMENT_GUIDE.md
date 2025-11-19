# Production Deployment Guide - Sotkis Website
## Instructions for Final Domain Deployment

---

## 📋 Overview

This website is currently configured for testing on GitHub Pages (`https://miguelmalungo.github.io/sotkissite/`). When deploying to your production domain, you **MUST** update several configuration files to ensure proper SEO functionality.

---

## 🚨 CRITICAL: Files That MUST Be Updated

### 1. **Update Production Domain URL**

#### File: `vite.config.ts`
**Current (GitHub Pages):**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/sotkissite/',  // ← CHANGE THIS
  // ... rest of config
})
```

**Change to (Production):**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/',  // ← Root path for production domain
  // ... rest of config
})
```

---

### 2. **Update SEO Configuration**

#### File: `src/utils/seoConfig.ts`

**Find and replace ALL instances of:**
```
https://miguelmalungo.github.io/sotkissite
```

**With your production domain:**
```
https://www.yourdomain.com
```
OR
```
https://sotkis.com
```

**Lines to update:**
- Line ~35: Organization URL
- Line ~37: Logo URL (if using absolute URL)
- All `structuredData` URLs in each page config

**Example change:**
```typescript
// BEFORE (testing)
structuredData: {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Sotkis - Sotkon Intelligent Systems',
  'url': 'https://miguelmalungo.github.io/sotkissite',  // ← CHANGE
  'logo': 'https://miguelmalungo.github.io/sotkissite/assets/logotipo-sotkon-neg-preto.webp',  // ← CHANGE
  // ...
}

// AFTER (production)
structuredData: {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Sotkis - Sotkon Intelligent Systems',
  'url': 'https://www.sotkis.com',  // ← Updated
  'logo': 'https://www.sotkis.com/assets/logotipo-sotkon-neg-preto.webp',  // ← Updated
  // ...
}
```

---

### 3. **Update SEO Component**

#### File: `src/components/common/SEO.tsx`

**Line ~22 - Update base URL:**
```typescript
// BEFORE (testing)
const baseUrl = 'https://miguelmalungo.github.io/sotkissite';

// AFTER (production)
const baseUrl = 'https://www.sotkis.com';  // ← Your production domain
```

---

### 4. **Update Sitemap**

#### File: `public/sitemap.xml`

**Find and replace ALL URLs:**

**Before (testing):**
```xml
<loc>https://miguelmalungo.github.io/sotkissite/</loc>
<loc>https://miguelmalungo.github.io/sotkissite/platform</loc>
<loc>https://miguelmalungo.github.io/sotkissite/access</loc>
<!-- etc. -->
```

**After (production):**
```xml
<loc>https://www.sotkis.com/</loc>
<loc>https://www.sotkis.com/platform</loc>
<loc>https://www.sotkis.com/access</loc>
<!-- etc. -->
```

**Also update the lastmod dates to your deployment date:**
```xml
<lastmod>2025-01-20</lastmod>  <!-- Use actual deployment date -->
```

---

### 5. **Update Robots.txt**

#### File: `public/robots.txt`

**Line 5 - Update sitemap URL:**
```
# BEFORE (testing)
Sitemap: https://miguelmalungo.github.io/sotkissite/sitemap.xml

# AFTER (production)
Sitemap: https://www.sotkis.com/sitemap.xml
```

---

### 6. **Update Base Index.html** (Optional but Recommended)

#### File: `index.html`

Update the canonical URL and other absolute URLs if present:

**Lines ~25, 35, 37, 55-57, 60:**
```html
<!-- BEFORE (testing) -->
<meta property="og:url" content="https://miguelmalungo.github.io/sotkissite/" />
<meta property="og:image" content="https://miguelmalungo.github.io/sotkissite/Hero1.webp" />
<meta property="twitter:url" content="https://miguelmalungo.github.io/sotkissite/" />
<link rel="alternate" hreflang="pt" href="https://miguelmalungo.github.io/sotkissite/" />
<link rel="canonical" href="https://miguelmalungo.github.io/sotkissite/" />

<!-- AFTER (production) -->
<meta property="og:url" content="https://www.sotkis.com/" />
<meta property="og:image" content="https://www.sotkis.com/Hero1.webp" />
<meta property="twitter:url" content="https://www.sotkis.com/" />
<link rel="alternate" hreflang="pt" href="https://www.sotkis.com/" />
<link rel="canonical" href="https://www.sotkis.com/" />
```

---

## 🔄 Quick Find & Replace Guide

### Use your code editor's "Find & Replace in Files" feature:

**Find:** `https://miguelmalungo.github.io/sotkissite`
**Replace:** `https://www.sotkis.com` (or your actual production domain)

**Files to search:**
- `src/utils/seoConfig.ts`
- `src/components/common/SEO.tsx`
- `public/sitemap.xml`
- `public/robots.txt`
- `index.html`

**Important:** Also update `base: '/sotkissite/'` to `base: '/'` in `vite.config.ts`

---

## 📦 Build and Deploy Steps

### 1. **Update All URLs** (as described above)

### 2. **Update Package.json** (if using deployment scripts)

#### File: `package.json`

If your deploy script references GitHub Pages, update or remove it:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    // Remove or update these for production:
    "predeploy": "npm run build",  // Keep if needed
    "deploy": "gh-pages -d dist"   // Replace with your deployment method
  }
}
```

### 3. **Clean Build**
```bash
# Remove old build artifacts
rm -rf dist/

# Install dependencies (if needed)
npm install

# Build for production
npm run build
```

### 4. **Test Build Locally**
```bash
npm run preview
```
Visit `http://localhost:4173` and verify:
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Navigation works
- ✅ No console errors

### 5. **Deploy to Production Server**

Upload the **entire `dist/` folder** to your production server.

**Common deployment methods:**
- **FTP/SFTP**: Upload `dist/` contents to web root
- **Hosting Panel**: Upload via cPanel, Plesk, etc.
- **CI/CD**: Use GitHub Actions, GitLab CI, etc.
- **Cloud**: Deploy to AWS, Azure, Google Cloud, Netlify, Vercel, etc.

---

## ✅ Post-Deployment Verification

### 1. **Test All Pages**
Visit each page and verify they load:
- ✅ https://www.sotkis.com/
- ✅ https://www.sotkis.com/platform
- ✅ https://www.sotkis.com/access
- ✅ https://www.sotkis.com/level
- ✅ https://www.sotkis.com/drs
- ✅ https://www.sotkis.com/paylt
- ✅ https://www.sotkis.com/contact

### 2. **Verify Files are Accessible**

Check these URLs in your browser:
```
https://www.sotkis.com/sitemap.xml
https://www.sotkis.com/robots.txt
```

Both should display without errors.

### 3. **Verify Meta Tags**

Open each page and view source (Ctrl+U or Cmd+U):
- ✅ Check `<title>` tag
- ✅ Check meta description
- ✅ Check Open Graph tags have correct domain
- ✅ Check canonical URL has correct domain

### 4. **Test with SEO Tools**

#### Google Rich Results Test
1. Visit: https://search.google.com/test/rich-results
2. Enter your homepage URL
3. Verify structured data is detected
4. Test product pages too

#### Google PageSpeed Insights
1. Visit: https://pagespeed.web.dev/
2. Enter your homepage URL
3. Target score: 90+ (both mobile and desktop)

#### Mobile-Friendly Test
1. Visit: https://search.google.com/test/mobile-friendly
2. Enter your homepage URL
3. Verify it passes

#### Facebook Sharing Debugger
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter your homepage URL
3. Verify Open Graph image and info appear correctly

#### Twitter Card Validator
1. Visit: https://cards-dev.twitter.com/validator
2. Enter your homepage URL
3. Verify Twitter Card displays correctly

---

## 🔍 Search Engine Submission

### 1. **Google Search Console**

**Setup:**
1. Visit: https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership (use HTML tag method or DNS)
4. Submit sitemap: `https://www.sotkis.com/sitemap.xml`

**Monitor:**
- Indexing status
- Search performance
- Mobile usability
- Core Web Vitals

### 2. **Bing Webmaster Tools**

**Setup:**
1. Visit: https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap: `https://www.sotkis.com/sitemap.xml`

### 3. **Google Business Profile** (if applicable)

If you have a physical location:
1. Create/claim your Google Business Profile
2. Add your website URL
3. Keep NAP (Name, Address, Phone) consistent

---

## 📊 Analytics Setup (Recommended)

### Google Analytics 4

**Add to `index.html` before `</head>`:**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your actual GA4 measurement ID.

---

## 🛡️ Security Checklist

### SSL Certificate
- ✅ Ensure HTTPS is enabled
- ✅ Redirect HTTP to HTTPS
- ✅ Verify certificate is valid

### Security Headers (configure in your server)
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 🔧 Server Configuration

### Apache (.htaccess)

Create `.htaccess` in your web root:
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# React Router - Redirect all to index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Caching for assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType video/mp4 "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### Nginx

Add to your nginx config:
```nginx
server {
    listen 443 ssl http2;
    server_name www.sotkis.com sotkis.com;
    
    root /path/to/dist;
    index index.html;
    
    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Redirect to www (optional)
    if ($host = sotkis.com) {
        return 301 https://www.sotkis.com$request_uri;
    }
    
    # React Router
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(webp|mp4|jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
    gzip_vary on;
}

# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name www.sotkis.com sotkis.com;
    return 301 https://www.sotkis.com$request_uri;
}
```

---

## 📝 Quick Deployment Checklist

Print this and check off each item:

### Before Deployment
- [ ] Updated `vite.config.ts` (change `base: '/sotkissite/'` to `base: '/'`)
- [ ] Updated all URLs in `src/utils/seoConfig.ts`
- [ ] Updated base URL in `src/components/common/SEO.tsx`
- [ ] Updated all URLs in `public/sitemap.xml`
- [ ] Updated lastmod dates in `public/sitemap.xml`
- [ ] Updated sitemap URL in `public/robots.txt`
- [ ] Updated URLs in `index.html` (optional)
- [ ] Run `npm run build` successfully
- [ ] Test build locally with `npm run preview`

### After Deployment
- [ ] Verified all pages load correctly
- [ ] Checked `sitemap.xml` is accessible
- [ ] Checked `robots.txt` is accessible
- [ ] HTTPS is working and forced
- [ ] Tested with Google Rich Results Test
- [ ] Tested with PageSpeed Insights (90+ score)
- [ ] Tested with Mobile-Friendly Test
- [ ] Tested Facebook Open Graph
- [ ] Tested Twitter Cards
- [ ] Submitted sitemap to Google Search Console
- [ ] Submitted sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Configured server caching and compression

---

## 🆘 Troubleshooting

### Issue: 404 errors on page refresh
**Solution:** Configure server for SPA (see Apache/Nginx configs above)

### Issue: Assets not loading
**Solution:** Check `base` in `vite.config.ts` is set to `'/'`

### Issue: Wrong URLs in meta tags
**Solution:** Double-check `seoConfig.ts` and `SEO.tsx` have correct domain

### Issue: Sitemap not found
**Solution:** Ensure `sitemap.xml` is in the root of `dist/` folder and deployed

### Issue: Slow page load
**Solution:** 
- Enable gzip/brotli compression on server
- Enable browser caching (see server configs)
- Verify CDN is working (if using)

---

## 📞 Support

### Documentation Files
- `SEO_OPTIMIZATION_SUMMARY.md` - Complete SEO implementation details
- `SEO_CHECKLIST.md` - Ongoing maintenance checklist
- This file - Deployment guide

### Key Configuration Files
- `vite.config.ts` - Build configuration
- `src/utils/seoConfig.ts` - SEO data
- `src/components/common/SEO.tsx` - SEO component
- `public/sitemap.xml` - Site structure
- `public/robots.txt` - Crawler directives

---

## 🎯 Summary

**3 MOST CRITICAL CHANGES:**

1. **vite.config.ts**: Change `base: '/sotkissite/'` → `base: '/'`

2. **src/utils/seoConfig.ts**: Replace ALL `https://miguelmalungo.github.io/sotkissite` with your production domain

3. **public/sitemap.xml**: Update ALL URLs to your production domain

Then build (`npm run build`) and deploy the `dist/` folder.

---

**Deployment Date**: _________________

**Production URL**: _________________

**Deployed by**: _________________

**Notes**: _________________

---

**Good luck with your deployment! 🚀**

For questions about the SEO implementation, refer to `SEO_OPTIMIZATION_SUMMARY.md`


