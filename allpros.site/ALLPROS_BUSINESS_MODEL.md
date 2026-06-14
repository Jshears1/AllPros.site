# AllPros — Complete Business Model & Automation Blueprint
## Shears Unlimited Holdings LLC · June 2026

---

## The Architecture in One Sentence

AllPros is a multi-vertical commercial technology network running on the AllPros brand,
with D&H Distributing as the wholesale backbone, automation handling everything repeatable,
and humans (you) only touching high-margin B2B decisions.

---

## Brand & Domain Structure

| Domain | Business | Revenue Model |
|--------|----------|---------------|
| allpros.site | Hub / parent brand | SEO, routing to verticals |
| av.allpros.site | Pro A/V & Commercial Sound | D&H install + services (35–47%) |
| it.allpros.site | Managed IT & Cloud | D&H Cloud Marketplace (recurring) |
| build.allpros.site | Construction & Remodel Leads | Lead-gen fees from contractors |
| shop.allpros.site | Hardware Catalog | D&H dropship (12–25%) |

All subdomains run on Cloudflare Pages — zero additional hosting cost.
Each is its own brand visually but shares the AllPros identity system.

---

## Revenue Stream Map

### Stream 1 — Pro A/V Installations (av.allpros.site)
**The flagship. Highest margin. Build this first.**

- Customers: restaurants, gyms, churches, schools, offices, retail
- Sales motion: Free site assessment → 3-tier quote → install + service contract
- Margin: 35–47% blended (hardware + labor + service contract)
- Automation level: Quote tool generates estimate automatically. You close and manage install.
- Recurring: Annual service contract attached to every install ($600–$1,920/yr per client)
- D&H leverage: Wholesale hardware pricing, white-label installation services

**Lead sources:**
- Local SEO: "restaurant sound system installer Atlanta" — low competition, high intent
- Google Business Profile (free, immediate)
- Direct outreach: walk-in or email 10–20 local businesses with bad/no audio
- Referral program: pay $100–$200 per closed referral

### Stream 2 — Managed IT & Cloud (it.allpros.site / attach to AV clients)
**The recurring engine. Attach to every AV and hardware customer.**

- Products: Microsoft 365, endpoint backup, managed security, monitoring
- Source: D&H Cloud Marketplace (white-labeled)
- Margin: 15–30% recurring monthly, auto-renews
- Automation level: D&H Cloud Marketplace handles provisioning and billing
- Math: 50 seats × $22/month × 30% margin = $330/month passive from one client

**Critical play:** Every AV install customer is a M365 + backup + security prospect.
Land the hardware, attach the cloud. One conversation after the install is done.

### Stream 3 — Construction & Trades Leads (build.allpros.site)
**Pure lead-gen. Zero D&H dependency. Runs parallel.**

- Model: Directory + verified lead delivery to local contractors
- Customers (your customers): Remodelers, electricians, HVAC, plumbers, painters
- Revenue: $25–$75/lead OR $150–$300/month directory listing
- Automation level: High — lead capture form, auto-routing, Stripe billing
- Build cost: One Cloudflare Worker + D1 database + Stripe = ~$0/month

**How it works:**
1. Homeowner fills out "Get a Contractor Quote" form on build.allpros.site
2. Lead is sold/routed to 1–3 contractors in that trade + geography
3. Contractor pays per lead OR monthly flat fee for priority listing
4. You never touch the project — pure margin on the connection

**Monetization tiers:**
- Free listing: basic directory entry, no leads
- Standard ($150/mo): 5 leads/month in their trade/area
- Premium ($300/mo): unlimited leads, featured placement, badge
- Pay-per-lead: $35–$75 depending on job size signal

### Stream 4 — Hardware Dropship (shop.allpros.site + Amazon/eBay/Walmart)
**Cash flow engine. Automated. Low-touch.**

- Model: D&H catalog → daily feed sync → marketplace listings
- Channels: Amazon (volume), eBay (odd SKUs), Walmart (less competition), Shopify (margin)
- Automation: Spark Shipping or Inventory Source handles price/inventory/order sync
- Gem filter: Only list SKUs with 18%+ net margin after fees (your existing filter: ~1,300 SKUs)
- Your role: Set up the feed, monitor the filter, escalate gem SKUs to Pro A/V catalog

**Channel math on a $280 speaker (D&H cost $200):**
- Amazon 15%: $38 net (13.6%)
- Walmart 12%: $46 net (16.4%)
- Shopify 3%: $72 net (25.7%)

**Rule:** Marketplace listings drive volume and reviews. Repeat/B2B buyers migrate to Shopify for better margin.

### Stream 5 — As-a-Service Bundles
**Closes large deals. Locks in multi-year contracts.**

- Model: Hardware + software + service as one monthly payment
- Example: "Conference room for $399/month, 36 months" = $14,364 total
- Finance: Customer leasing through Dell/HP/Lenovo Financial or XaaS via D&H
- You get: Hardware margin upfront (D&H/finance pays you) + service margin monthly
- Best for: Schools, government, SMB offices — buyers who prefer OpEx over CapEx

---

## Automation Stack — Layer by Layer

### Layer 1 — Catalog (Daily, Zero Touch)
- D&H API → price + inventory → Spark Shipping/Inventory Source → Amazon, eBay, Walmart, Shopify
- Out-of-stock items hide automatically
- Your D&H MCP server already handles search_catalog, get_product, filter_profitable
- Next step: wire Spark Shipping to pull from MCP server filter (1,300 gem SKUs only)

### Layer 2 — Quote Generation (Instant, Customer-Facing)
- Customer visits quote tool on allpros.site
- Selects vertical → configures space/needs → gets itemized estimate in 60 seconds
- No email required to see quote (reduces friction)
- Quote submission → Cloudflare D1 (lead_quotes table) + email to you + Notion task
- Your role: respond within 24 hours with official quote + schedule assessment

### Layer 3 — Lead Routing (build.allpros.site, Automated)
- Homeowner submits project → auto-matched to contractors by trade + zip code
- Stripe billing auto-charges contractors monthly or per lead
- Cloudflare Worker handles all routing logic — no third-party CRM needed at launch
- Your role: onboard contractors initially, monitor quality

### Layer 4 — Cloud/Recurring Billing (D&H Cloud Marketplace)
- M365, backup, security subscriptions auto-renew monthly
- D&H handles provisioning; you collect the margin
- Your role: attach during A/V proposals, check dashboard monthly

### Layer 5 — Order Fulfillment (Dropship, Fully Automated)
- Customer orders on any channel → Spark Shipping routes to D&H → D&H ships blind
- Tracking syncs back to the marketplace automatically
- Your role: handle exceptions (returns, lost packages) only

### Layer 6 — Lead Nurture (Future Phase)
- Quote submissions that don't close go into a simple email sequence
- 3 emails: follow-up → case study → seasonal offer
- Tools: Cloudflare D1 as the list, Workers cron job to send, Mailgun/Sendgrid for delivery
- Cost: ~$0/month at your current volume

---

## 90-Day Launch Sequence

### Days 1–15: Foundation
- [ ] Register allpros.site in Cloudflare (already set up per memory)
- [ ] Deploy allpros_homepage.html to allpros.site via Cloudflare Pages
- [ ] Deploy allpros_quote_tool.html to allpros.site/quote
- [ ] Set up Cloudflare Pages subdomain routing (av., build., shop.)
- [ ] Confirm D&H credit line + ACE pre-qualification (credit@dandh.com)
- [ ] Set up EFT auto-pay on D&H account
- [ ] Rotate hardcoded admin password in worker.js BEFORE quote form goes live
- [ ] Claim/update Google Business Profile for AllPros Atlanta

### Days 15–45: A/V Revenue Engine
- [ ] Build av.allpros.site with Pro A/V solutions page + quote tool (pre-filled for A/V)
- [ ] Contact D&H rep: request ProAV division access + design support
- [ ] Identify and contact install partner (local low-voltage contractor for rev-share)
- [ ] Approach 10–15 local businesses (restaurants/gyms/churches) with bad audio
- [ ] Build /portfolio placeholder — even 1 entry creates credibility
- [ ] Goal: 1 closed A/V installation in this window

### Days 30–60: Dropship Cash Flow
- [ ] Connect D&H gem filter (1,300 SKUs) to Spark Shipping or Inventory Source
- [ ] Launch Amazon listings for top 50 gem SKUs (use marketplace-listing-generator skill)
- [ ] Add eBay for odd/overstock SKUs
- [ ] Walmart Marketplace application (if not already approved)
- [ ] Goal: $2,000–$5,000/month dropship revenue running on autopilot

### Days 45–75: Build Lead Gen Network
- [ ] Launch build.allpros.site with contractor lead gen form
- [ ] Onboard 5–10 local contractors (free listing to start, pitch monthly plan)
- [ ] Set up Stripe for per-lead or monthly billing
- [ ] Goal: 5 paying contractors at $150/month = $750/month recurring

### Days 60–90: Recurring Revenue Layer
- [ ] Activate D&H Cloud Marketplace access
- [ ] Set up white-labeled M365 + backup storefront
- [ ] Attach cloud to every A/V client closed in days 15–45
- [ ] Draft email sequence for quote leads that didn't close
- [ ] Goal: 10 cloud/IT seats recurring = $220/month + growing

---

## Financial Model (Conservative 12-Month Projection)

| Stream | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|
| A/V Installations (1–2/mo) | $3,000 | $6,000 | $12,000 |
| Service Contracts (cumulative) | $300 | $900 | $2,400 |
| Dropship (Amazon/eBay/Walmart) | $1,500 | $3,000 | $5,000 |
| Build Lead Gen | $0 | $750 | $2,000 |
| Cloud/Managed IT | $0 | $330 | $1,200 |
| **Total Monthly** | **$4,800** | **$10,980** | **$22,600** |

These are conservative. One school or government A/V deal (ACE-financed) can double a month's number.

---

## Lead Research — Top Prospect Segments (Atlanta)

### Highest Priority (A/V + Install)
**Restaurants:** Search "restaurants opened in Atlanta 2024–2026" — new openings need fresh systems.
- Decision maker: Owner or GM
- Pain point: No audio system or old broken system
- Open line: "We noticed your location opened recently — we do free audio assessments for restaurants."

**Gyms:** Search "new gym openings Atlanta" — boutique fitness studios opening constantly.
- Decision maker: Owner
- Pain point: Consumer Bluetooth speakers, dead zones, no paging
- Open line: "Your members can't hear the instructor in zone 3."

**Churches:** Search "churches Atlanta" — high density, word-of-mouth referrals compound.
- Decision maker: Facilities director or pastor
- Pain point: Outdated, feedback-prone systems, no streaming
- Open line: "We help churches sound as good as they look."

### Build Lead Gen Prospects (Contractor Clients)
Top contractor categories in Atlanta metro:
1. Residential remodelers ($50K–$200K jobs) — highest lead value
2. HVAC contractors — high volume, recurring service
3. Electricians — large trade, many small operators
4. Painters / interior — high volume, low lead cost
5. General contractors — premium leads, harder to convert

**Outreach:** Atlanta Chamber of Commerce directory, Angi/HomeAdvisor contractor lists,
NextDoor Neighborhood business listings. Cold email + follow-up phone call.

---

## Key D&H Contacts & Programs to Activate

| Program | Contact | Action |
|---------|---------|--------|
| Credit line review | credit@dandh.com | Email: request line increase + ACE pre-qualification |
| ACE program | credit@dandh.com | Request setup BEFORE you need it |
| ProAV division | Your D&H rep | Ask for ProAV access, design tools, vendor lines |
| Cloud Marketplace | Your D&H rep | Request access + Cloud Essentials training |
| EFT auto-pay | financialservices@dandh.com | Set up to eliminate COD fees |
| API/data feed | apisupport@dandh.com | Confirm feed access for Spark Shipping integration |

---

## Security Note (Critical — From Prior Session)

Admin password is hardcoded in `/home/user1/shears-unlimited/api-scripts/dandh/docs/dandh-mcp/shearsunlimitedholdingsllc/src/worker.js`

**Rotate this BEFORE:**
- The quote form goes live (public-facing POST endpoint)
- build.allpros.site launches (contractor data)
- Any Stripe integration goes live

Use Cloudflare Secrets/Environment Variables for all credentials going forward.

---

## The Flywheel

```
Local SEO → Atlanta business finds AllPros
         ↓
Free assessment form → quote tool generates estimate instantly
         ↓
You follow up → close A/V install (47% margin)
         ↓
Attach M365 + service contract (recurring)
         ↓
Satisfied client → referral → portfolio case study
         ↓
Case study → more SEO authority → more leads
         ↓
ACE financing → chase school/gov deal ($40K+)
         ↓
Build.allpros.site running in parallel → contractor revenue compounds
         ↓
Repeat. Each client worth 3–8x a dropship customer.
```

---

## Five Things That Make Or Break This

1. **ACE pre-qualification** — Without it, you can't chase institutional deals. Set it up now.
2. **The quote tool** — Reduces friction from "I wonder what this costs" to "I have a real number" in 60 seconds. More leads convert.
3. **Install partner** — You need boots on the ground for A/V before you can sell Tier 3. Find one subcontractor in week 1.
4. **Google Business Profile** — Free, takes 30 minutes, and "commercial sound installer Atlanta" is genuinely low competition right now.
5. **Never list a SKIP item** — Your dropship cash flow depends on the gem filter. $9 margin items cost more in support and account health than they earn.
