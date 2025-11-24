# 🚀 Simple Deployment Instructions
## For Non-Technical Team Members

---

## ⚠️ IMPORTANT: Read This First!

This website is currently set up for **TESTING ONLY** on a temporary address:
```
https://miguelmalungo.github.io/sotkissite/
```

When you move to your **REAL production website** (like `www.sotkis.com`), your developer MUST update 6 files with your new address.

---

## 📋 What Your Developer Needs to Change

### Give this list to your web developer or IT team:

**"Please update our production domain in these 6 files before deploying:"**

1. ✏️ **vite.config.ts** (Line 7)
   - Change: `base: '/sotkissite/'`
   - To: `base: '/'`

2. ✏️ **src/utils/seoConfig.ts** (Multiple lines)
   - Find & Replace: `https://miguelmalungo.github.io/sotkissite`
   - With: `https://www.sotkis.com` (your real domain)

3. ✏️ **src/components/common/SEO.tsx** (Line ~22)
   - Change: `const baseUrl = 'https://miguelmalungo.github.io/sotkissite'`
   - To: `const baseUrl = 'https://www.sotkis.com'` (your real domain)

4. ✏️ **public/sitemap.xml** (All URLs)
   - Find & Replace: `https://miguelmalungo.github.io/sotkissite`
   - With: `https://www.sotkis.com` (your real domain)

5. ✏️ **public/robots.txt** (Line 5)
   - Change: `Sitemap: https://miguelmalungo.github.io/sotkissite/sitemap.xml`
   - To: `Sitemap: https://www.sotkis.com/sitemap.xml` (your real domain)

6. ✏️ **index.html** (Lines 25, 28, 35-38, 55-60)
   - Find & Replace: `https://miguelmalungo.github.io/sotkissite`
   - With: `https://www.sotkis.com` (your real domain)

---

## 🎯 Quick Developer Instructions

**For your developer - 3 simple steps:**

### Step 1: Update URLs
```bash
# Use Find & Replace in your code editor:
Find:    https://miguelmalungo.github.io/sotkissite
Replace: https://www.sotkis.com

# Also change in vite.config.ts:
Find:    base: '/sotkissite/',
Replace: base: '/',
```

### Step 2: Build
```bash
npm install
npm run build
```

### Step 3: Deploy
Upload the entire `dist/` folder to your web server.

---

## ✅ After Deployment - Marketing Team Tasks

Once your developer says "site is live", do these tasks:

### 1. Verify the Website Works
Visit these pages and check they load:
- ✅ Home: https://www.sotkis.com/
- ✅ Platform: https://www.sotkis.com/platform
- ✅ Access: https://www.sotkis.com/access
- ✅ Level: https://www.sotkis.com/level
- ✅ DRS: https://www.sotkis.com/drs
- ✅ Paylt: https://www.sotkis.com/paylt
- ✅ Contact: https://www.sotkis.com/contact

### 2. Check These Files Are Accessible
- ✅ Sitemap: https://www.sotkis.com/sitemap.xml
- ✅ Robots: https://www.sotkis.com/robots.txt

### 3. Submit to Google (Takes 5 minutes)

**Google Search Console:**
1. Go to: https://search.google.com/search-console
2. Sign in with company Google account
3. Click "Add Property"
4. Enter: `https://www.sotkis.com`
5. Verify ownership (ask developer to help)
6. Go to "Sitemaps" in left menu
7. Enter: `sitemap.xml`
8. Click "Submit"

**Done!** ✅ Google will start indexing your site.

### 4. Submit to Bing (Takes 3 minutes)

**Bing Webmaster Tools:**
1. Go to: https://www.bing.com/webmasters
2. Sign in with company Microsoft account
3. Click "Add a site"
4. Enter: `https://www.sotkis.com`
5. Verify ownership
6. Add sitemap: `https://www.sotkis.com/sitemap.xml`

**Done!** ✅ Bing will start indexing your site.

---

## 📊 Test Your SEO (Use These Free Tools)

### Test 1: Google PageSpeed Insights
**What it checks:** Website speed and performance
**Goal:** Score 90+ (green)

1. Visit: https://pagespeed.web.dev/
2. Enter your website URL
3. Click "Analyze"
4. Wait for results
5. Share results with developer if score is below 90

### Test 2: Rich Results Test
**What it checks:** If Google can read your product information correctly

1. Visit: https://search.google.com/test/rich-results
2. Enter your website URL
3. Click "Test URL"
4. Should see: "Page is eligible for rich results"
5. Test these pages:
   - Home page
   - /access
   - /level
   - /drs
   - /paylt

### Test 3: Mobile-Friendly Test
**What it checks:** If website works well on phones

1. Visit: https://search.google.com/test/mobile-friendly
2. Enter your website URL
3. Should see: "Page is mobile friendly"

### Test 4: Facebook Sharing Preview
**What it checks:** How your site looks when shared on Facebook/LinkedIn

1. Visit: https://developers.facebook.com/tools/debug/
2. Enter your website URL
3. Click "Debug"
4. Check the preview image and title look good

---

## 🎯 Target Keywords We Optimized For

Your website is now optimized for these search terms:

### Portuguese (Main)
- Sistemas Inteligentes
- Cidades Inteligentes
- Sensor / Sensores
- Controlos de Acesso
- Contentores Enterrados de Resíduos
- Gestão de Resíduos
- Reciclagem
- Sistema de Gestão de Resíduos
- Ambiente

### English (Secondary)
- Intelligent Systems
- Smart Cities
- Sensor
- Access Controls
- Underground Waste Containers
- Waste Management System
- Recycling
- Environment

### Product Names
- Sotkis
- Sotkis Access
- Sotkis Level
- Sotkis DRS
- Sotkis P(L)AYT
- Sotkon

---

## 📅 When Will We See Results?

### Week 1-2
- Google/Bing discover your site
- Start indexing pages

### Month 1
- Appear in search results
- Initial ranking positions

### Month 2-3
- Rankings improve
- More organic traffic
- Better visibility in Google

### Month 4-6
- Significant ranking improvements
- Measurable increase in website visitors from Google
- Better leads from organic search

---

## 📈 Monthly Monitoring Tasks

**Assign to:** Marketing Manager / SEO Specialist

### Every Month:
1. Check Google Search Console for errors
2. Review which keywords are ranking
3. Track organic traffic in Google Analytics
4. Note any ranking improvements
5. Check if any pages have errors

**Time required:** 30 minutes per month

---

## 🆘 Something Wrong? Common Issues

### "My pages show 404 errors"
**Solution:** Ask developer to configure server for React Router
**File to reference:** `PRODUCTION_DEPLOYMENT_GUIDE.md` (Apache/Nginx section)

### "Images aren't loading"
**Solution:** Developer needs to check `vite.config.ts` - `base` should be `'/'`

### "Google can't find my site"
**Solution:** 
1. Check sitemap was submitted to Search Console
2. Wait 2-3 days for initial indexing
3. Verify robots.txt is accessible

### "Site is slow"
**Solution:** 
1. Test with PageSpeed Insights
2. Ask developer to enable compression
3. Check if images are optimized

---

## 📞 Who to Contact

### Technical Issues (Developer)
- File changes
- Build and deployment
- Server configuration
- Performance optimization

**Reference:** `PRODUCTION_DEPLOYMENT_GUIDE.md` (detailed technical guide)

### SEO Questions (Marketing/SEO Team)
- Search rankings
- Google Search Console
- Content optimization
- Keyword strategy

**Reference:** `SEO_OPTIMIZATION_SUMMARY.md` (complete SEO documentation)

---

## ✅ Final Checklist for Launch Day

Print this and check each item:

### Before Launch
- [ ] Developer updated all 6 files with production domain
- [ ] Developer built the site (`npm run build`)
- [ ] Developer deployed to production server
- [ ] HTTPS is working (website has padlock 🔒)
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Mobile version looks good

### Launch Day
- [ ] Submitted sitemap to Google Search Console
- [ ] Submitted sitemap to Bing Webmaster Tools
- [ ] Tested with PageSpeed Insights (90+ score)
- [ ] Tested with Rich Results Test (passed)
- [ ] Tested with Mobile-Friendly Test (passed)
- [ ] Tested Facebook sharing preview
- [ ] Posted about launch on social media
- [ ] Informed sales team

### First Week
- [ ] Monitor Google Search Console for errors
- [ ] Check website traffic in analytics
- [ ] Verify all pages are indexed
- [ ] Test contact form submissions
- [ ] Collect feedback from team

---

## 🎉 You're Ready to Launch!

**Remember:**
1. Have your developer update the 6 files with your real domain
2. Deploy to your production server
3. Submit to Google and Bing
4. Monitor and celebrate! 🎊

---

**Questions?**
Refer to `PRODUCTION_DEPLOYMENT_GUIDE.md` for detailed technical instructions
or `SEO_OPTIMIZATION_SUMMARY.md` for SEO details.

**Last Updated:** November 19, 2025
**Status:** Ready for Production Deployment 🚀





