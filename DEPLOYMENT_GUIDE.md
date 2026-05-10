# Portfolio Deployment & Git Guide

## 1. PUSH TO GITHUB (Store in Git)

### Step 1: Stage all files
```bash
cd "c:\Users\HEMANTH KUMAR\OneDrive\Documents\GitHub\portfolio"
git add .
```

### Step 2: Commit changes
```bash
git commit -m "Initial portfolio setup with hero, projects, and contact sections"
```

### Step 3: Push to GitHub
```bash
git push origin main
```

**Note:** If you haven't set up a GitHub repository yet, visit https://github.com/new and create a repository, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## 2. DEPLOYMENT OPTIONS

### Option A: Deploy to Netlify (RECOMMENDED - FREE & EASY)
1. Go to https://netlify.com
2. Sign up with GitHub account
3. Click "New site from Git"
4. Select your portfolio repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (current directory)
6. Deploy!

**Your site will be live at:** `https://YOUR-PORTFOLIO-NAME.netlify.app`

---

### Option B: Deploy to Vercel (FREE)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"

**Your site will be live at:** `https://YOUR-PORTFOLIO-NAME.vercel.app`

---

### Option C: Deploy to GitHub Pages (FREE)
1. Go to your GitHub repository settings
2. Navigate to "Pages" section (left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch
5. Click "Save"

**Your site will be live at:** `https://YOUR_USERNAME.github.io/portfolio`

---

### Option D: Traditional Hosting (Paid)
- **GoDaddy, Hostinger, Bluehost:**
  1. Upload files via FTP/SFTP
  2. Or use their file manager in cPanel

- **AWS S3 + CloudFront:**
  1. Create S3 bucket
  2. Upload files
  3. Set up CloudFront distribution

---

## 3. QUICK COMMANDS REFERENCE

### Check git status
```bash
git status
```

### View git log
```bash
git log --oneline
```

### Update existing files after changes
```bash
git add .
git commit -m "Update portfolio with new features"
git push origin main
```

### Create a new branch (optional)
```bash
git checkout -b development
git push origin development
```

---

## 4. FILES IN YOUR PORTFOLIO

- **index.html** - Main structure & content
- **styles.css** - All styling & animations
- **script.js** - Interactivity & cursor effects
- **README.md** - Project description
- **.git/** - Version control

---

## 5. NEXT STEPS

1. **Push to GitHub first** (steps in Section 1)
2. **Choose a deployment platform** (Netlify/Vercel/GitHub Pages recommended)
3. **Connect your GitHub repo** to the deployment platform
4. **Your portfolio is LIVE!**

Any future updates:
- Make changes locally
- Run: `git add . && git commit -m "Description" && git push`
- Deployment platform auto-updates!

---

## 6. CUSTOM DOMAIN (Optional)

After deploying to Netlify/Vercel/GitHub Pages:

1. Buy domain from: GoDaddy, Namecheap, or Route53
2. Update nameservers to your hosting provider's nameservers
3. Your custom domain points to your portfolio!

**Example:** `https://hemanthkumar.dev` → Your deployed portfolio

---

**Questions?** Contact GitHub Support or your hosting provider's documentation.
