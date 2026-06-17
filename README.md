# AllPros.site

**Shears Unlimited Holdings LLC** — Professional Trade Services & IT Solutions

Built with: React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui  
Deployed via: GitHub → Cloudflare Pages

---

## 🚀 Cloudflare Pages Deployment (Step-by-Step)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial AllPros.site build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/allpros-site.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create Application** → **Pages**
2. Connect your GitHub account and select `allpros-site`
3. Set build settings:
   - **Framework preset**: None (Vite)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank)
4. Click **Save and Deploy**

### 3. Add GitHub Secrets (for Actions CI)
In your GitHub repo → **Settings** → **Secrets and variables** → **Actions**:
- `CLOUDFLARE_API_TOKEN` — Create at dash.cloudflare.com → My Profile → API Tokens → "Edit Cloudflare Workers" template
- `CLOUDFLARE_ACCOUNT_ID` — Found in Cloudflare dashboard right sidebar

### 4. Custom Domain
In Cloudflare Pages → your project → **Custom domains**:
- Add `allpros.site`
- Add `www.allpros.site`

Since your domain is already on Cloudflare, DNS will be auto-configured.

### 5. Subdomain Pages (Optional)
To route `hvac.allpros.site` → `/trade/hvac`, add a **Transform Rule** in Cloudflare:
- Cloudflare Dashboard → your domain → **Rules** → **Transform Rules**
- Match hostname `hvac.allpros.site` → Rewrite URL path to `/#/trade/hvac`

Or add CNAME records pointing each subdomain to your Pages deployment URL, then add each as a custom domain in Pages.

---

## 🛠 Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## 📦 Build

```bash
npm run build
# Output: dist/
```

## 📁 Project Structure

```
allpros-site/
├── client/
│   ├── public/
│   │   ├── _redirects        # Cloudflare SPA routing
│   │   ├── _headers          # Security + cache headers
│   │   └── favicon.svg
│   └── src/
│       ├── components/
│       │   ├── Calculator.tsx  # Multi-variable estimator
│       │   ├── Footer.tsx
│       │   ├── LeadForm.tsx
│       │   ├── Logo.tsx
│       │   └── Nav.tsx
│       ├── lib/
│       │   └── trades.ts       # All 18 trade configs + calculator logic
│       └── pages/
│           ├── Home.tsx
│           ├── TradePage.tsx   # Dynamic — loads any trade by ID
│           ├── ITServices.tsx  # D&H section
│           ├── About.tsx
│           ├── Contact.tsx
│           └── not-found.tsx
├── .github/workflows/deploy.yml  # GitHub Actions CI/CD
├── wrangler.toml                 # Cloudflare config + subdomain notes
├── vite.config.ts
└── package.json
```

## 🏠 Trades Covered (18)
HVAC · Plumbing · Electrical · Roofing · Flooring · Painting · Fencing ·
Remodeling · Drywall · Carpentry · Landscaping · Concrete · Pest Control ·
Windows & Doors · Carpet Cleaning · Water Damage · IT Services · Pool & Spa

Each trade page includes:
- Full service listing
- Why Us section
- Certifications
- Service areas
- **Multi-variable job estimator calculator**
- Lead capture form

---

**Shears Unlimited Holdings LLC** · Tucker, GA 30084  
(404) 400-4747 · info@allpros.site
