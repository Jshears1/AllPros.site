# Shears Unlimited — Site Restructure Implementation Plan
## Based on D&H Monetization Playbook · June 2026

---

## The Core Strategic Shift

**Before:** Generic ecommerce store. Dropship products. Consumer-store framing.
**After:** Commercial technology solutions provider. B2B-first. Hardware + Install + Cloud + Services.

Same D&H account. Same products. Different positioning = 13% margins → 35–47% margins.

---

## Phase 1 — Foundation (Week 1–2)
### What to build in your existing Cloudflare Worker/React stack

### 1.1 Homepage Hero Rewrite
**File:** `src/pages/Home.tsx` (or equivalent)

Replace current hero with:
- Headline: "We Supply. Install. Support."
- Subheadline: Commercial technology solutions for Atlanta-area businesses
- Primary CTA: "Get a Free Site Assessment" → links to /quote
- Secondary CTA: "Explore Solutions" → scrolls to solutions section
- 3 stat blocks: 100+ Vendor Lines / 6 Solution Avenues / $0 Down on Qualified Deals

### 1.2 Navigation Restructure
Replace flat product-store nav with:

```
[Logo]  Solutions▾  Industries▾  Hardware  Financing  Portfolio  [Get Free Assessment →]

Solutions dropdown:
  - Pro A/V & Commercial Sound
  - Managed IT & Cloud Services
  - As-a-Service Bundles
  - Installation & Integration
  - Professional Services

Industries dropdown:
  - Restaurants & Bars
  - Gyms & Fitness Studios
  - Houses of Worship
  - Schools & Education
  - SMB Offices
  - Government & Municipal
```

### 1.3 Language Audit — Find/Replace Across All Pages
| Kill This | Use This |
|-----------|----------|
| "Buy products" | "Get a quote" / "Request assessment" |
| "Add to cart" (primary) | Keep but make secondary to "Get quote" |
| "Our store" | "Our solutions" |
| "Shop now" | "Explore solutions" |
| "Products" (nav) | "Hardware" |
| Any consumer-facing copy | B2B framing ("your business," "your team") |

### 1.4 Quote/Assessment Form — /quote
Single most important new page. Captures:
- Business name & type (dropdown: Restaurant / Gym / Worship / School / Office / Government / Other)
- What they need (multi-select: A/V System / IT Services / Hardware Procurement / Cloud/M365 / Financing / Not sure)
- Rough timeline (ASAP / 1–3 months / Planning ahead)
- Notes (free text)
- Name, email, phone

Route to: jessen@shearsunlimitedholdingsllc.com + Notion task DB (you already have Notion connected)

---

## Phase 2 — Solutions Pages (Week 3–6)

### 2.1 /solutions/pro-av
**The most important new page. This is where 47% margin lives.**

Sections:
1. Hero: "Commercial Sound Systems, Designed & Installed"
2. Who it's for: restaurants, gyms, worship, retail, offices
3. Three-tier pricing table:
   | Tier | What you get | Starting from |
   |------|-------------|---------------|
   | Hardware Supply | Equipment sourced & shipped | Contact for pricing |
   | Designed System | Full spec + hardware | Contact for pricing |
   | Installed + Service Contract | Design, supply, install, annual service | Contact for pricing |
4. Example project breakdown (4-zone restaurant: $6,520 total, $3,070 profit)
5. "Request a Free Site Assessment" form

### 2.2 /solutions/managed-services
**The recurring revenue engine.**

Sections:
1. Hero: "Your IT, Handled Monthly"
2. Services included: Microsoft 365, backup, endpoint security, monitoring, helpdesk
3. Simple monthly pricing table (per seat or per business tiers)
4. "Attach to every hardware/AV customer" — mention during proposals
5. CTA: "Add IT services to your quote"

### 2.3 /solutions/as-a-service
**Closes the deal-size objection.**

Hero concept: "Conference room for $399/month." 
Show a bundle example:
- Displays + audio + M365 + support = $X/month for 36 months
- No capital expense, operating budget, one bill

### 2.4 /financing
**Removes the last objection for big deals.**

Explain in plain customer language:
- Monthly payment options available (no large upfront cost)
- Government/school purchases can be structured through ACE (no deposit required)
- Leasing through Dell/HP/Lenovo Financial for qualified buyers
- XaaS bundles — hardware + software + service as one monthly line

CTA: "Ask us about financing on your project" → routes to /quote with financing pre-selected

---

## Phase 3 — Industry Pages + Portfolio (Week 7–12)

### 3.1 Industry Landing Pages (for local SEO)
Create /industries/[slug] for each:
- /industries/restaurants — "Restaurant Sound Systems Atlanta"
- /industries/gyms — "Gym Audio Systems Atlanta"
- /industries/houses-of-worship — "Church Sound Systems Atlanta"
- /industries/schools — "School A/V & IT Solutions Atlanta"
- /industries/smb-offices — "Office IT & A/V Solutions Atlanta"
- /industries/government — "Government Technology Procurement Atlanta"

Each page follows the same template:
1. Headline with city + vertical
2. Specific problems this vertical has with audio/IT
3. Solutions we offer for that vertical
4. Relevant financing (schools/gov → ACE; offices → M365 monthly)
5. Testimonial placeholder (add as you get them)
6. CTA: "Get a free assessment for your [restaurant/gym/church]"

**SEO goal:** Rank for "[vertical] sound system installer Atlanta" — low competition, high intent.

### 3.2 /portfolio
Start simple. For each completed install:
- Business name & type
- What was installed
- 1–2 photos (before/after if possible)
- One-line outcome ("Clear audio in all 4 zones, no dead spots")

Even 2–3 entries creates credibility. Build as you go.

### 3.3 Managed Services / Cloud Marketplace
Once D&H Cloud Marketplace access is confirmed:
- Add Microsoft 365 resell pricing page
- Add backup & security tiers
- Attach these to every A/V and hardware quote as an add-on

---

## Cloudflare Worker Backend Changes

### New API Routes Needed
```
POST /api/quote          — Quote form submission → email + Notion
GET  /api/industries     — Industry pages (can be static initially)
```

### D1 Database — New Table
```sql
CREATE TABLE quote_requests (
  id TEXT PRIMARY KEY,
  business_name TEXT,
  business_type TEXT,
  needs TEXT,          -- JSON array of selected needs
  timeline TEXT,
  notes TEXT,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  created_at INTEGER,
  status TEXT DEFAULT 'new'
);
```

### Security Note (from prior session)
Admin password `ShearsAdmin2026!` is hardcoded in worker.js — rotate this before adding the quote form. Quote submissions will be public-facing data.

---

## Google Business Profile + Local SEO (Parallel Track)

Do these alongside the site build — they compound the site's value:

1. **Google Business Profile** — Claim/update with:
   - Category: "Audio Visual Equipment Supplier" + "IT Services"
   - Service area: Atlanta metro
   - Business description: "Commercial sound systems, managed IT, and hardware procurement for Atlanta-area businesses."
   - Add services: Pro A/V Installation, Managed IT, Cloud Services, Hardware Procurement

2. **Google Search Console** — Verify shearsunlimitedholdingsllc.com (you mentioned setup in progress)

3. **Page titles for SEO:**
   - Homepage: "Commercial Sound Systems & Managed IT | Shears Unlimited | Atlanta, GA"
   - Pro A/V: "Commercial Audio Systems, Installed | Atlanta, GA | Shears Unlimited"
   - Industries/Restaurants: "Restaurant Sound Systems Atlanta | Shears Unlimited Holdings"

---

## The Flywheel (How It Compounds)

```
Local SEO brings in a restaurant/gym/church
        ↓
Free site assessment → 3-tier A/V quote
        ↓
Close installed system deal (47% margin)
        ↓
Attach M365 + service contract (recurring)
        ↓
Case study → portfolio → more SEO + referrals
        ↓
Use ACE financing to land school / gov deal
        ↓
Repeat. Each customer worth 3–5x a dropship customer.
```

---

## What Not to Build (Yet)

- Don't build a full marketplace/shopping experience for services — keep it quote-based
- Don't add managed services pricing until D&H Cloud Marketplace access is confirmed
- Don't build a customer portal until you have 10+ recurring clients
- Don't invest in paid ads until the quote form is live and converting organic traffic

---

## Priority Stack (If You Can Only Do 5 Things)

1. **Rewrite homepage hero** — B2B positioning, assessment CTA (2 hours)
2. **Add /quote form** — primary lead capture, routes to email (4 hours)
3. **Build /solutions/pro-av** with 3-tier pricing (4 hours)
4. **Add Solutions dropdown nav** — replaces product-store nav (2 hours)
5. **Submit Google Business Profile** — free, immediate local SEO impact (1 hour)

Total: ~13 hours to transform the site's positioning and open the B2B pipeline.
