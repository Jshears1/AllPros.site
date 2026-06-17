export interface Trade {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  bgColor: string;
  phone: string;
  email: string;
  services: string[];
  calculator: CalculatorConfig;
  whyUs: string[];
  serviceAreas: string[];
  certifications: string[];
}

export interface CalculatorField {
  id: string;
  label: string;
  type: 'number' | 'select' | 'checkbox';
  unit?: string;
  min?: number;
  max?: number;
  defaultValue: number | string | boolean;
  options?: { label: string; value: string | number }[];
  multiplier?: number;
  baseContribution?: number;
}

export interface CalculatorConfig {
  title: string;
  subtitle: string;
  fields: CalculatorField[];
  baseRate: number;
  formula: string; // description of how estimate is calculated
  disclaimer: string;
}

export const TRADES: Trade[] = [
  {
    id: 'hvac',
    name: 'HVAC',
    icon: '❄️',
    tagline: 'Climate Control Experts',
    description: 'Heating, ventilation, and air conditioning installation, repair, and maintenance for residential and commercial properties.',
    color: '#2563eb',
    bgColor: '#eff6ff',
    phone: '(404) 400-4747',
    email: 'hvac@allpros.site',
    services: ['AC Installation', 'Furnace Repair', 'Duct Cleaning', 'Heat Pump Service', 'Mini-Split Systems', 'Thermostat Install', 'Preventive Maintenance', 'Indoor Air Quality'],
    whyUs: ['Licensed & EPA 608 Certified', 'Same-Day Emergency Service', '10-Year Parts & Labor Warranty', 'Energy Efficiency Specialists'],
    serviceAreas: ['Tucker, GA', 'Decatur', 'Stone Mountain', 'Lithonia', 'Snellville', 'Lawrenceville'],
    certifications: ['EPA 608', 'NATE Certified', 'ACCA Member'],
    calculator: {
      title: 'HVAC Estimate Calculator',
      subtitle: 'Get an instant ballpark for your HVAC project',
      baseRate: 0,
      formula: 'Base unit cost + square footage factor + complexity multipliers',
      disclaimer: 'Estimate is approximate. Final pricing depends on site inspection, local codes, and material availability.',
      fields: [
        { id: 'sqft', label: 'Home Square Footage', type: 'number', unit: 'sq ft', min: 200, max: 10000, defaultValue: 2000, multiplier: 0 },
        { id: 'service', label: 'Service Type', type: 'select', defaultValue: 'ac_replace', options: [
          { label: 'New AC Installation', value: 'ac_install' },
          { label: 'AC Replacement', value: 'ac_replace' },
          { label: 'Furnace Installation', value: 'furnace_install' },
          { label: 'Furnace Replacement', value: 'furnace_replace' },
          { label: 'Heat Pump (Full System)', value: 'heat_pump' },
          { label: 'Mini-Split (per zone)', value: 'mini_split' },
          { label: 'Duct Cleaning', value: 'duct_clean' },
          { label: 'Repair / Diagnostic', value: 'repair' },
          { label: 'Preventive Tune-Up', value: 'tune_up' },
        ], multiplier: 0 },
        { id: 'tons', label: 'System Size (Tons)', type: 'select', defaultValue: '3', options: [
          { label: '1.5 Tons', value: '1.5' },
          { label: '2 Tons', value: '2' },
          { label: '2.5 Tons', value: '2.5' },
          { label: '3 Tons', value: '3' },
          { label: '3.5 Tons', value: '3.5' },
          { label: '4 Tons', value: '4' },
          { label: '5 Tons', value: '5' },
        ], multiplier: 0 },
        { id: 'seer', label: 'Efficiency Rating (SEER)', type: 'select', defaultValue: '16', options: [
          { label: '14 SEER (Standard)', value: '14' },
          { label: '16 SEER (Efficient)', value: '16' },
          { label: '18 SEER (High Efficiency)', value: '18' },
          { label: '20+ SEER (Premium)', value: '20' },
        ], multiplier: 0 },
        { id: 'newDucts', label: 'New Ductwork Needed', type: 'checkbox', defaultValue: false, baseContribution: 2800 },
        { id: 'electrical', label: 'Electrical Upgrade Needed', type: 'checkbox', defaultValue: false, baseContribution: 850 },
        { id: 'permit', label: 'Permit Required', type: 'checkbox', defaultValue: true, baseContribution: 250 },
      ]
    }
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    tagline: 'Licensed Master Plumbers',
    description: 'Full-service plumbing for repairs, installations, remodels, and emergencies. Water heaters, pipes, drains, and more.',
    color: '#0891b2',
    bgColor: '#ecfeff',
    phone: '(404) 400-4747',
    email: 'plumbing@allpros.site',
    services: ['Drain Cleaning', 'Water Heater Install', 'Pipe Repair/Replace', 'Bathroom Remodel', 'Fixture Install', 'Sewer Line', 'Gas Line', 'Water Filtration'],
    whyUs: ['Master Plumber Licensed', '24/7 Emergency Response', 'Flat-Rate Pricing', 'Video Camera Inspection'],
    serviceAreas: ['Tucker, GA', 'Decatur', 'Stone Mountain', 'Norcross', 'Chamblee', 'Doraville'],
    certifications: ['Master Plumber License', 'Gas Fitter Certified', 'Backflow Prevention'],
    calculator: {
      title: 'Plumbing Estimate Calculator',
      subtitle: 'Estimate plumbing repair or installation costs',
      baseRate: 0,
      formula: 'Service base + fixture count + material grade + complexity',
      disclaimer: 'Estimates vary by pipe condition, access difficulty, and local code requirements. On-site assessment provides exact pricing.',
      fields: [
        { id: 'service', label: 'Service Type', type: 'select', defaultValue: 'drain_clean', options: [
          { label: 'Drain Cleaning (per drain)', value: 'drain_clean' },
          { label: 'Water Heater Replace (40gal)', value: 'wh_40' },
          { label: 'Water Heater Replace (50gal)', value: 'wh_50' },
          { label: 'Tankless Water Heater', value: 'tankless' },
          { label: 'Toilet Install / Replace', value: 'toilet' },
          { label: 'Faucet Install / Replace', value: 'faucet' },
          { label: 'Sewer Line Repair', value: 'sewer' },
          { label: 'Sewer Line Replace', value: 'sewer_replace' },
          { label: 'Re-Pipe (Full Home)', value: 'repipe' },
          { label: 'Leak Repair', value: 'leak' },
          { label: 'Gas Line Install', value: 'gas' },
          { label: 'Water Softener Install', value: 'softener' },
        ], multiplier: 0 },
        { id: 'fixtures', label: 'Number of Fixtures', type: 'number', unit: 'fixtures', min: 1, max: 20, defaultValue: 1, multiplier: 0 },
        { id: 'material', label: 'Pipe Material', type: 'select', defaultValue: 'pex', options: [
          { label: 'PEX (Flexible)', value: 'pex' },
          { label: 'Copper', value: 'copper' },
          { label: 'CPVC', value: 'cpvc' },
          { label: 'PVC (Drain lines)', value: 'pvc' },
        ], multiplier: 0 },
        { id: 'access', label: 'Access Difficulty', type: 'select', defaultValue: 'easy', options: [
          { label: 'Easy (open walls/crawl space)', value: 'easy' },
          { label: 'Moderate (finished walls)', value: 'moderate' },
          { label: 'Difficult (slab/tight access)', value: 'difficult' },
        ], multiplier: 0 },
        { id: 'emergency', label: 'Emergency / After-Hours', type: 'checkbox', defaultValue: false, baseContribution: 200 },
        { id: 'permit', label: 'Permit Required', type: 'checkbox', defaultValue: false, baseContribution: 150 },
      ]
    }
  },
  {
    id: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    tagline: 'Master Electricians On Call',
    description: 'Panel upgrades, wiring, EV charger installation, generator hookup, lighting, and full electrical remodels.',
    color: '#d97706',
    bgColor: '#fffbeb',
    phone: '(404) 400-4747',
    email: 'electrical@allpros.site',
    services: ['Panel Upgrade', 'EV Charger Install', 'Outlet Install', 'Circuit Breaker', 'Generator Hookup', 'Ceiling Fan', 'Recessed Lighting', 'Whole-Home Rewire'],
    whyUs: ['Licensed Master Electrician', 'Pull All Permits', 'Code Compliant Work', 'Generator & EV Specialists'],
    serviceAreas: ['Tucker, GA', 'Gwinnett County', 'DeKalb County', 'Rockdale County'],
    certifications: ['Master Electrician License', 'NFPA 70 Code', 'EV Charging Certified'],
    calculator: {
      title: 'Electrical Estimate Calculator',
      subtitle: 'Estimate electrical project costs in seconds',
      baseRate: 0,
      formula: 'Service base + panel size + circuit count + upgrade factors',
      disclaimer: 'All electrical work requires permits and inspections. Final cost includes permit fees and inspection.',
      fields: [
        { id: 'service', label: 'Service Type', type: 'select', defaultValue: 'panel_upgrade', options: [
          { label: 'Panel Upgrade (100A → 200A)', value: 'panel_upgrade' },
          { label: 'Panel Upgrade (200A → 400A)', value: 'panel_400' },
          { label: 'EV Charger Install (Level 2)', value: 'ev_l2' },
          { label: 'EV Charger Install (Level 3)', value: 'ev_l3' },
          { label: 'Generator Transfer Switch', value: 'generator' },
          { label: 'Whole-Home Rewire', value: 'rewire' },
          { label: 'Outlet / Switch Add', value: 'outlet' },
          { label: 'Recessed Lighting (per room)', value: 'recessed' },
          { label: 'Ceiling Fan Install', value: 'fan' },
          { label: 'GFCI / AFCI Upgrade', value: 'gfci' },
          { label: 'Smoke / CO Detector System', value: 'detector' },
        ], multiplier: 0 },
        { id: 'circuits', label: 'Number of Circuits', type: 'number', unit: 'circuits', min: 1, max: 50, defaultValue: 5, multiplier: 0 },
        { id: 'amperage', label: 'Panel Amperage', type: 'select', defaultValue: '200', options: [
          { label: '100 Amp', value: '100' },
          { label: '150 Amp', value: '150' },
          { label: '200 Amp', value: '200' },
          { label: '400 Amp', value: '400' },
        ], multiplier: 0 },
        { id: 'home_age', label: 'Home Age', type: 'select', defaultValue: 'modern', options: [
          { label: 'Built after 2000', value: 'modern' },
          { label: 'Built 1980-2000', value: 'mid' },
          { label: 'Built 1960-1980', value: 'older' },
          { label: 'Built before 1960 (Knob & Tube)', value: 'old' },
        ], multiplier: 0 },
        { id: 'permit', label: 'Permit & Inspection', type: 'checkbox', defaultValue: true, baseContribution: 300 },
        { id: 'surge', label: 'Whole-Home Surge Protector', type: 'checkbox', defaultValue: false, baseContribution: 450 },
      ]
    }
  },
  {
    id: 'roofing',
    name: 'Roofing',
    icon: '🏠',
    tagline: 'Storm-Ready Roofing Pros',
    description: 'Full roof replacements, repairs, storm damage, gutters, and inspections. Licensed and insured for residential and commercial.',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    phone: '(404) 400-4747',
    email: 'roofing@allpros.site',
    services: ['Full Roof Replace', 'Storm Damage Repair', 'Leak Repair', 'Gutter Install', 'Skylight Install', 'Flat Roof', 'Metal Roofing', 'Roof Inspection'],
    whyUs: ['Insurance Claim Experts', 'Lifetime Warranty Options', 'Free Drone Inspections', 'Wind & Hail Certified'],
    serviceAreas: ['Tucker, GA', 'Gwinnett', 'Rockdale', 'Newton', 'DeKalb', 'Fulton'],
    certifications: ['GAF Master Elite', 'CertainTeed SELECT ShingleMaster', 'OSHA 30'],
    calculator: {
      title: 'Roofing Estimate Calculator',
      subtitle: 'Calculate your roofing project cost by square footage',
      baseRate: 0,
      formula: 'Roofing squares × material cost + pitch factor + remove/dispose + accessories',
      disclaimer: 'Roof estimates depend on pitch, current layers, deck condition, and accessory needs. Free in-person inspection recommended.',
      fields: [
        { id: 'sqft', label: 'Home Footprint (Ground Level)', type: 'number', unit: 'sq ft', min: 500, max: 8000, defaultValue: 1800, multiplier: 0 },
        { id: 'pitch', label: 'Roof Pitch', type: 'select', defaultValue: 'moderate', options: [
          { label: 'Low (2/12 – 4/12)', value: 'low' },
          { label: 'Moderate (5/12 – 7/12)', value: 'moderate' },
          { label: 'Steep (8/12 – 10/12)', value: 'steep' },
          { label: 'Very Steep (11/12+)', value: 'very_steep' },
        ], multiplier: 0 },
        { id: 'material', label: 'Roofing Material', type: 'select', defaultValue: 'arch_shingle', options: [
          { label: '3-Tab Asphalt Shingle', value: 'tab_shingle' },
          { label: 'Architectural Shingle', value: 'arch_shingle' },
          { label: 'Designer / Premium Shingle', value: 'premium_shingle' },
          { label: 'Metal (Standing Seam)', value: 'metal' },
          { label: 'Metal (Corrugated)', value: 'metal_corr' },
          { label: 'Flat / TPO / EPDM', value: 'flat' },
          { label: 'Tile (Concrete)', value: 'tile' },
          { label: 'Synthetic Slate', value: 'slate' },
        ], multiplier: 0 },
        { id: 'layers', label: 'Layers to Remove', type: 'select', defaultValue: '1', options: [
          { label: '0 (New Construction)', value: '0' },
          { label: '1 Layer', value: '1' },
          { label: '2 Layers (full tear-off)', value: '2' },
        ], multiplier: 0 },
        { id: 'stories', label: 'Stories', type: 'select', defaultValue: '1', options: [
          { label: '1 Story', value: '1' },
          { label: '2 Stories', value: '2' },
          { label: '3+ Stories', value: '3' },
        ], multiplier: 0 },
        { id: 'gutters', label: 'Add Gutters (Full Replace)', type: 'checkbox', defaultValue: false, baseContribution: 1800 },
        { id: 'skylight', label: 'Skylight (per unit)', type: 'checkbox', defaultValue: false, baseContribution: 1500 },
        { id: 'permit', label: 'Permit', type: 'checkbox', defaultValue: true, baseContribution: 200 },
      ]
    }
  },
  {
    id: 'flooring',
    name: 'Flooring',
    icon: '🪵',
    tagline: 'Premium Floors, Expert Install',
    description: 'Hardwood, LVP, tile, carpet, and laminate installation and refinishing for homes and businesses.',
    color: '#92400e',
    bgColor: '#fef3c7',
    phone: '(404) 400-4747',
    email: 'flooring@allpros.site',
    services: ['Hardwood Install', 'LVP / LVT Install', 'Tile & Stone', 'Carpet Install', 'Hardwood Refinish', 'Subfloor Repair', 'Stair Treads', 'Commercial Flooring'],
    whyUs: ['10-Year Workmanship Warranty', 'Free Samples Delivered', 'Moisture Testing Included', 'Precision Laser Measurement'],
    serviceAreas: ['Tucker, GA', 'Decatur', 'Duluth', 'Suwanee', 'Johns Creek', 'Alpharetta'],
    certifications: ['NWFA Certified', 'CFI Certified Installer', 'NALFA Member'],
    calculator: {
      title: 'Flooring Estimate Calculator',
      subtitle: 'Price out your flooring project by room size and material',
      baseRate: 0,
      formula: 'Area × material cost per sq ft + installation labor + prep work',
      disclaimer: 'Add 10% to area for waste factor. Subfloor condition affects final price.',
      fields: [
        { id: 'sqft', label: 'Area to Floor', type: 'number', unit: 'sq ft', min: 50, max: 5000, defaultValue: 500, multiplier: 0 },
        { id: 'material', label: 'Flooring Material', type: 'select', defaultValue: 'lvp', options: [
          { label: 'LVP / LVT (Luxury Vinyl)', value: 'lvp' },
          { label: 'Laminate', value: 'laminate' },
          { label: 'Hardwood (Solid)', value: 'hardwood_solid' },
          { label: 'Hardwood (Engineered)', value: 'hardwood_eng' },
          { label: 'Porcelain Tile', value: 'porcelain' },
          { label: 'Ceramic Tile', value: 'ceramic' },
          { label: 'Natural Stone', value: 'stone' },
          { label: 'Carpet (Basic)', value: 'carpet_basic' },
          { label: 'Carpet (Premium)', value: 'carpet_premium' },
        ], multiplier: 0 },
        { id: 'subfloor', label: 'Subfloor Condition', type: 'select', defaultValue: 'good', options: [
          { label: 'Good (no repairs needed)', value: 'good' },
          { label: 'Minor Repairs', value: 'minor' },
          { label: 'Major Repairs / Replace', value: 'major' },
        ], multiplier: 0 },
        { id: 'removal', label: 'Remove Existing Floor', type: 'select', defaultValue: 'none', options: [
          { label: 'No Removal (new space)', value: 'none' },
          { label: 'Remove Carpet', value: 'carpet' },
          { label: 'Remove Hardwood', value: 'hardwood' },
          { label: 'Remove Tile', value: 'tile' },
        ], multiplier: 0 },
        { id: 'stairs', label: 'Stair Treads (count)', type: 'number', unit: 'steps', min: 0, max: 40, defaultValue: 0, multiplier: 0 },
        { id: 'refinish', label: 'Hardwood Refinish Instead', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'baseboards', label: 'New Baseboards', type: 'checkbox', defaultValue: false, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'painting',
    name: 'Painting',
    icon: '🎨',
    tagline: 'Color Your World Right',
    description: 'Interior and exterior painting for homes, businesses, and commercial properties. Pressure washing included.',
    color: '#059669',
    bgColor: '#ecfdf5',
    phone: '(404) 400-4747',
    email: 'painting@allpros.site',
    services: ['Interior Painting', 'Exterior Painting', 'Cabinet Refinishing', 'Deck Staining', 'Pressure Washing', 'Texture / Drywall', 'Epoxy Floors', 'Commercial Painting'],
    whyUs: ['Sherwin-Williams Preferred', 'Color Consultation Included', 'Clean-Up Guaranteed', '2-Year Touch-Up Warranty'],
    serviceAreas: ['Tucker, GA', 'Decatur', 'Clarkston', 'Stone Mountain', 'Lithonia', 'Conyers'],
    certifications: ['PDCA Member', 'EPA Lead-Safe', 'OSHA 10'],
    calculator: {
      title: 'Painting Estimate Calculator',
      subtitle: 'Get a fast estimate for interior or exterior painting',
      baseRate: 0,
      formula: 'Wall area × coats × labor rate + prep + materials + surface adjustments',
      disclaimer: 'Paint coverage varies by surface texture and condition. Prep work (patching, priming) is included in estimates.',
      fields: [
        { id: 'type', label: 'Project Type', type: 'select', defaultValue: 'interior', options: [
          { label: 'Interior (Full Home)', value: 'interior' },
          { label: 'Interior (Per Room)', value: 'interior_room' },
          { label: 'Exterior (Full Home)', value: 'exterior' },
          { label: 'Exterior (Trim Only)', value: 'exterior_trim' },
          { label: 'Cabinet Painting', value: 'cabinets' },
          { label: 'Deck / Fence Staining', value: 'deck' },
          { label: 'Commercial Space', value: 'commercial' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Square Footage', type: 'number', unit: 'sq ft', min: 100, max: 10000, defaultValue: 1500, multiplier: 0 },
        { id: 'rooms', label: 'Number of Rooms (if applicable)', type: 'number', unit: 'rooms', min: 1, max: 20, defaultValue: 5, multiplier: 0 },
        { id: 'stories', label: 'Stories (Exterior)', type: 'select', defaultValue: '1', options: [
          { label: '1 Story', value: '1' },
          { label: '2 Stories', value: '2' },
          { label: '3 Stories', value: '3' },
        ], multiplier: 0 },
        { id: 'condition', label: 'Surface Condition', type: 'select', defaultValue: 'good', options: [
          { label: 'Good (minor prep)', value: 'good' },
          { label: 'Fair (patching needed)', value: 'fair' },
          { label: 'Poor (heavy prep/prime)', value: 'poor' },
        ], multiplier: 0 },
        { id: 'quality', label: 'Paint Quality', type: 'select', defaultValue: 'mid', options: [
          { label: 'Contractor Grade', value: 'contractor' },
          { label: 'Mid-Grade (Sherwin SuperPaint)', value: 'mid' },
          { label: 'Premium (Emerald / Cashmere)', value: 'premium' },
        ], multiplier: 0 },
        { id: 'pressure_wash', label: 'Pressure Washing (Exterior)', type: 'checkbox', defaultValue: false, baseContribution: 350 },
        { id: 'ceiling', label: 'Paint Ceilings Too', type: 'checkbox', defaultValue: true, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'fencing',
    name: 'Fencing',
    icon: '🪜',
    tagline: 'Security, Privacy & Curb Appeal',
    description: 'Wood, vinyl, chain-link, aluminum, and wrought iron fencing for residential and commercial properties.',
    color: '#65a30d',
    bgColor: '#f7fee7',
    phone: '(404) 400-4747',
    email: 'fencing@allpros.site',
    services: ['Wood Privacy Fence', 'Vinyl Fence', 'Chain-Link Fence', 'Aluminum Fence', 'Wrought Iron', 'Automatic Gates', 'Fence Repair', 'Commercial Fencing'],
    whyUs: ['Free Property Survey', 'HOA Approval Assistance', 'Pet & Pool Codes Expert', '20-Year Vinyl Warranty'],
    serviceAreas: ['Tucker, GA', 'Gwinnett County', 'DeKalb County', 'Fulton County', 'Rockdale County'],
    certifications: ['AFA Certified', 'OSHA 10', 'Licensed Contractor'],
    calculator: {
      title: 'Fencing Estimate Calculator',
      subtitle: 'Calculate total fencing cost by linear footage',
      baseRate: 0,
      formula: 'Linear feet × material rate per LF + posts + gates + labor',
      disclaimer: 'Soil type, slope, and underground utilities may affect final cost. Underground utility marking is required before install.',
      fields: [
        { id: 'linear_ft', label: 'Total Linear Footage', type: 'number', unit: 'linear ft', min: 20, max: 2000, defaultValue: 150, multiplier: 0 },
        { id: 'material', label: 'Fence Material', type: 'select', defaultValue: 'wood_privacy', options: [
          { label: 'Wood Privacy (6ft)', value: 'wood_privacy' },
          { label: 'Wood Picket (4ft)', value: 'wood_picket' },
          { label: 'Cedar Privacy', value: 'cedar' },
          { label: 'Vinyl Privacy', value: 'vinyl_privacy' },
          { label: 'Vinyl Picket', value: 'vinyl_picket' },
          { label: 'Chain-Link (4ft)', value: 'chainlink_4' },
          { label: 'Chain-Link (6ft)', value: 'chainlink_6' },
          { label: 'Aluminum (Residential)', value: 'aluminum' },
          { label: 'Wrought Iron', value: 'wrought_iron' },
        ], multiplier: 0 },
        { id: 'height', label: 'Fence Height', type: 'select', defaultValue: '6', options: [
          { label: '3 Feet', value: '3' },
          { label: '4 Feet', value: '4' },
          { label: '6 Feet', value: '6' },
          { label: '8 Feet', value: '8' },
        ], multiplier: 0 },
        { id: 'gates', label: 'Number of Gates', type: 'number', unit: 'gates', min: 0, max: 10, defaultValue: 1, multiplier: 0 },
        { id: 'terrain', label: 'Terrain / Grade', type: 'select', defaultValue: 'flat', options: [
          { label: 'Flat', value: 'flat' },
          { label: 'Slight Slope', value: 'slight' },
          { label: 'Steep / Rocky', value: 'steep' },
        ], multiplier: 0 },
        { id: 'remove_old', label: 'Remove Existing Fence', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'auto_gate', label: 'Automatic Gate Opener', type: 'checkbox', defaultValue: false, baseContribution: 1200 },
      ]
    }
  },
  {
    id: 'remodeling',
    name: 'Remodeling',
    icon: '🏗️',
    tagline: 'Transform Your Space',
    description: 'Kitchen and bathroom remodels, room additions, basement finishing, and full home renovations.',
    color: '#dc2626',
    bgColor: '#fef2f2',
    phone: '(404) 400-4747',
    email: 'remodeling@allpros.site',
    services: ['Kitchen Remodel', 'Bathroom Remodel', 'Basement Finish', 'Room Addition', 'Open Floor Plan', 'Garage Conversion', 'Accessibility Mods', 'Whole-Home Renovation'],
    whyUs: ['Licensed General Contractor', '3D Design Included', 'Pull All Permits', 'Dedicated Project Manager'],
    serviceAreas: ['Tucker, GA', 'Stone Mountain', 'Snellville', 'Lithonia', 'Conyers', 'Monroe'],
    certifications: ['Licensed GC', 'NKBA Member', 'EPA Lead-Safe', 'OSHA 30'],
    calculator: {
      title: 'Remodeling Estimate Calculator',
      subtitle: 'Get a ballpark for your renovation project',
      baseRate: 0,
      formula: 'Room type base cost × size multiplier × finish level × scope factors',
      disclaimer: 'Remodel costs vary widely based on existing conditions, structural changes, and custom finishes. Design consultation recommended.',
      fields: [
        { id: 'project', label: 'Project Type', type: 'select', defaultValue: 'bathroom_mid', options: [
          { label: 'Full Kitchen Remodel', value: 'kitchen' },
          { label: 'Kitchen Refresh (Cabinets + Counter)', value: 'kitchen_refresh' },
          { label: 'Primary Bathroom Remodel', value: 'bathroom_primary' },
          { label: 'Standard Bathroom Remodel', value: 'bathroom_mid' },
          { label: 'Half Bath / Powder Room', value: 'half_bath' },
          { label: 'Basement Finish', value: 'basement' },
          { label: 'Room Addition', value: 'addition' },
          { label: 'Garage Conversion', value: 'garage' },
          { label: 'Full Home Renovation', value: 'full_home' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Project Square Footage', type: 'number', unit: 'sq ft', min: 50, max: 5000, defaultValue: 150, multiplier: 0 },
        { id: 'finish', label: 'Finish Level', type: 'select', defaultValue: 'mid', options: [
          { label: 'Builder Grade (Economy)', value: 'budget' },
          { label: 'Mid-Range (Quality Fixtures)', value: 'mid' },
          { label: 'High-End (Premium Materials)', value: 'high' },
          { label: 'Luxury (Custom Everything)', value: 'luxury' },
        ], multiplier: 0 },
        { id: 'structural', label: 'Structural Changes', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'plumbing_move', label: 'Move Plumbing', type: 'checkbox', defaultValue: false, baseContribution: 3500 },
        { id: 'electrical_upgrade', label: 'Electrical Upgrade', type: 'checkbox', defaultValue: false, baseContribution: 2200 },
        { id: 'permit', label: 'Permits Required', type: 'checkbox', defaultValue: true, baseContribution: 500 },
      ]
    }
  },
  {
    id: 'drywall',
    name: 'Drywall',
    icon: '🧱',
    tagline: 'Smooth Walls, Perfect Finish',
    description: 'Drywall installation, repair, finishing, and texture matching for walls and ceilings.',
    color: '#6d28d9',
    bgColor: '#f5f3ff',
    phone: '(404) 400-4747',
    email: 'drywall@allpros.site',
    services: ['Drywall Install', 'Drywall Repair', 'Texture Match', 'Popcorn Removal', 'Water Damage Repair', 'Ceiling Repair', 'Fire-Rated Drywall', 'Soundproofing'],
    whyUs: ['Level 5 Finish Specialists', 'Color-Match Texture', 'Fast Turnaround', 'Dust-Free Systems'],
    serviceAreas: ['Tucker, GA', 'DeKalb County', 'Gwinnett County', 'Fulton County'],
    certifications: ['AWC Member', 'OSHA 10', 'Lead-Safe Certified'],
    calculator: {
      title: 'Drywall Estimate Calculator',
      subtitle: 'Estimate drywall installation and repair costs',
      baseRate: 0,
      formula: 'Area × sheets needed × cost per sheet + taping/finishing labor',
      disclaimer: 'Corner bead, blocking, and unusual ceiling heights may add cost.',
      fields: [
        { id: 'service', label: 'Service Type', type: 'select', defaultValue: 'install', options: [
          { label: 'New Installation', value: 'install' },
          { label: 'Repair (Small Holes)', value: 'repair_small' },
          { label: 'Repair (Large Section)', value: 'repair_large' },
          { label: 'Full Room Hang & Finish', value: 'room' },
          { label: 'Popcorn Ceiling Removal', value: 'popcorn' },
          { label: 'Texture Match / Apply', value: 'texture' },
          { label: 'Water Damage Repair', value: 'water' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Square Footage', type: 'number', unit: 'sq ft', min: 50, max: 5000, defaultValue: 400, multiplier: 0 },
        { id: 'thickness', label: 'Drywall Thickness', type: 'select', defaultValue: 'half', options: [
          { label: '3/8" (Light)', value: '38' },
          { label: '1/2" (Standard)', value: 'half' },
          { label: '5/8" (Fire-Rated / Type X)', value: '58' },
          { label: '5/8" (Soundboard)', value: 'sound' },
        ], multiplier: 0 },
        { id: 'finish_level', label: 'Finish Level', type: 'select', defaultValue: '4', options: [
          { label: 'Level 3 (Texture over)', value: '3' },
          { label: 'Level 4 (Flat paint ready)', value: '4' },
          { label: 'Level 5 (Gloss/enamel ready)', value: '5' },
        ], multiplier: 0 },
        { id: 'ceiling', label: 'Ceiling Height', type: 'select', defaultValue: 'standard', options: [
          { label: 'Standard (8-9 ft)', value: 'standard' },
          { label: 'Tall (10-12 ft)', value: 'tall' },
          { label: 'Vaulted / Cathedral', value: 'vaulted' },
        ], multiplier: 0 },
        { id: 'disposal', label: 'Debris Haul-Away', type: 'checkbox', defaultValue: true, baseContribution: 150 },
      ]
    }
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    icon: '🔨',
    tagline: 'Craftsmanship in Every Detail',
    description: 'Custom trim, cabinets, decks, framing, and finish carpentry for residential and commercial projects.',
    color: '#b45309',
    bgColor: '#fef3c7',
    phone: '(404) 400-4747',
    email: 'carpentry@allpros.site',
    services: ['Crown Molding', 'Custom Cabinets', 'Deck Build', 'Framing', 'Door Install', 'Window Install', 'Built-Ins', 'Stair Work'],
    whyUs: ['Custom Millwork Shop', '25+ Years Combined Experience', 'Architectural-Grade Finishes', 'Satisfaction Guaranteed'],
    serviceAreas: ['Tucker, GA', 'Stone Mountain', 'Lawrenceville', 'Marietta', 'Roswell'],
    certifications: ['AWI Member', 'AWCI Certified', 'OSHA 10'],
    calculator: {
      title: 'Carpentry Estimate Calculator',
      subtitle: 'Estimate trim, cabinet, or custom carpentry work',
      baseRate: 0,
      formula: 'Project type base + linear/sq footage + wood species + complexity',
      disclaimer: 'Custom millwork pricing varies by design complexity and material selection. Free design consultation available.',
      fields: [
        { id: 'project', label: 'Project Type', type: 'select', defaultValue: 'trim', options: [
          { label: 'Crown Molding / Trim Install', value: 'trim' },
          { label: 'Custom Cabinet Build', value: 'cabinets' },
          { label: 'Deck / Porch Build', value: 'deck' },
          { label: 'Built-In Shelving / Bookcase', value: 'builtin' },
          { label: 'Door Install (Interior)', value: 'door_int' },
          { label: 'Door Install (Exterior)', value: 'door_ext' },
          { label: 'Window Install', value: 'window' },
          { label: 'Staircase / Railings', value: 'stairs' },
          { label: 'Structural Framing', value: 'framing' },
          { label: 'Wood Paneling / Wainscoting', value: 'paneling' },
        ], multiplier: 0 },
        { id: 'linear_or_sqft', label: 'Scope (Linear Ft or Sq Ft)', type: 'number', unit: 'ft', min: 1, max: 2000, defaultValue: 100, multiplier: 0 },
        { id: 'wood', label: 'Wood Species', type: 'select', defaultValue: 'pine', options: [
          { label: 'Pine / MDF (Economy)', value: 'pine' },
          { label: 'Poplar (Standard)', value: 'poplar' },
          { label: 'Oak (Premium)', value: 'oak' },
          { label: 'Maple (Premium)', value: 'maple' },
          { label: 'Cherry / Walnut (Luxury)', value: 'cherry' },
        ], multiplier: 0 },
        { id: 'finish', label: 'Finish', type: 'select', defaultValue: 'paint', options: [
          { label: 'Paint Ready (Primed)', value: 'paint' },
          { label: 'Stained & Sealed', value: 'stain' },
          { label: 'Natural / Raw', value: 'raw' },
        ], multiplier: 0 },
        { id: 'custom', label: 'Custom / Intricate Design', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'hardware', label: 'Include Hardware', type: 'checkbox', defaultValue: true, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    icon: '🌿',
    tagline: 'Curb Appeal That Lasts',
    description: 'Lawn care, landscape design, irrigation, hardscaping, sod installation, and tree services.',
    color: '#16a34a',
    bgColor: '#f0fdf4',
    phone: '(404) 400-4747',
    email: 'landscaping@allpros.site',
    services: ['Landscape Design', 'Sod Install', 'Irrigation System', 'Mulch / Beds', 'Tree Trimming', 'Hardscaping', 'Retaining Walls', 'Drainage Solutions'],
    whyUs: ['Certified Landscape Architects', 'Plant Health Guarantee', '3D Landscape Rendering', 'Smart Irrigation Systems'],
    serviceAreas: ['Tucker, GA', 'Gwinnett County', 'DeKalb County', 'Cobb County', 'Fulton County'],
    certifications: ['PLANET Certified', 'ISA Arborist', 'Irrigation Certified', 'Pesticide Applicator'],
    calculator: {
      title: 'Landscaping Estimate Calculator',
      subtitle: 'Estimate your landscaping project cost by lot size and service',
      baseRate: 0,
      formula: 'Service base + area × rate + plant materials + hardscape',
      disclaimer: 'Soil testing, grading, and drainage work may be required before other services.',
      fields: [
        { id: 'service', label: 'Primary Service', type: 'select', defaultValue: 'full_design', options: [
          { label: 'Full Landscape Design & Install', value: 'full_design' },
          { label: 'Sod Installation', value: 'sod' },
          { label: 'Mulch & Flower Bed Install', value: 'mulch' },
          { label: 'Irrigation System Install', value: 'irrigation' },
          { label: 'Paver Patio / Walkway', value: 'pavers' },
          { label: 'Retaining Wall', value: 'wall' },
          { label: 'Tree Trimming / Removal', value: 'tree' },
          { label: 'Drainage Solution', value: 'drainage' },
          { label: 'Lawn Maintenance (Monthly)', value: 'maintenance' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Project Area', type: 'number', unit: 'sq ft', min: 100, max: 20000, defaultValue: 2000, multiplier: 0 },
        { id: 'grade', label: 'Terrain Grade', type: 'select', defaultValue: 'flat', options: [
          { label: 'Flat', value: 'flat' },
          { label: 'Moderate Slope', value: 'moderate' },
          { label: 'Steep Slope', value: 'steep' },
        ], multiplier: 0 },
        { id: 'trees', label: 'Number of Trees', type: 'number', unit: 'trees', min: 0, max: 50, defaultValue: 0, multiplier: 0 },
        { id: 'lighting', label: 'Landscape Lighting', type: 'checkbox', defaultValue: false, baseContribution: 1800 },
        { id: 'irrigation', label: 'Smart Irrigation Add-On', type: 'checkbox', defaultValue: false, baseContribution: 2500 },
        { id: 'sod_type', label: 'Bermuda / Zoysia Sod', type: 'checkbox', defaultValue: true, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'concrete',
    name: 'Concrete',
    icon: '🏗️',
    tagline: 'Strong Foundations, Clean Flatwork',
    description: 'Driveways, patios, sidewalks, foundations, stamped concrete, and concrete repair.',
    color: '#6b7280',
    bgColor: '#f9fafb',
    phone: '(404) 400-4747',
    email: 'concrete@allpros.site',
    services: ['Driveway Pour', 'Patio / Pad', 'Stamped Concrete', 'Concrete Repair', 'Foundation Repair', 'Retaining Wall', 'Sidewalk', 'Commercial Flatwork'],
    whyUs: ['Fiber & Rebar Reinforced', 'Control Joint Planning', 'Decorative Specialists', '5-Year Warranty'],
    serviceAreas: ['Tucker, GA', 'Gwinnett', 'DeKalb', 'Rockdale', 'Newton County'],
    certifications: ['ACI Certified', 'OSHA 10', 'Licensed Contractor'],
    calculator: {
      title: 'Concrete Estimate Calculator',
      subtitle: 'Calculate concrete project cost by area and thickness',
      baseRate: 0,
      formula: 'Cubic yards needed × material + pour & finish labor + reinforcement',
      disclaimer: 'Concrete pricing fluctuates with material costs. Subgrade prep and access may affect final price.',
      fields: [
        { id: 'project', label: 'Project Type', type: 'select', defaultValue: 'driveway', options: [
          { label: 'Driveway', value: 'driveway' },
          { label: 'Patio / Pad', value: 'patio' },
          { label: 'Sidewalk / Walkway', value: 'sidewalk' },
          { label: 'Garage Floor', value: 'garage' },
          { label: 'Stamped Concrete', value: 'stamped' },
          { label: 'Foundation / Footer', value: 'foundation' },
          { label: 'Retaining Wall', value: 'retaining' },
          { label: 'Commercial Flatwork', value: 'commercial' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Square Footage', type: 'number', unit: 'sq ft', min: 50, max: 10000, defaultValue: 600, multiplier: 0 },
        { id: 'thickness', label: 'Concrete Thickness', type: 'select', defaultValue: '4', options: [
          { label: '3.5" (Sidewalk)', value: '3.5' },
          { label: '4" (Patio / Light Drive)', value: '4' },
          { label: '5" (Standard Driveway)', value: '5' },
          { label: '6" (Heavy Vehicle / Commercial)', value: '6' },
        ], multiplier: 0 },
        { id: 'finish', label: 'Finish Type', type: 'select', defaultValue: 'broom', options: [
          { label: 'Broom Finish (Standard)', value: 'broom' },
          { label: 'Exposed Aggregate', value: 'aggregate' },
          { label: 'Stamped Pattern', value: 'stamped' },
          { label: 'Smooth / Polished', value: 'smooth' },
          { label: 'Colored Concrete', value: 'colored' },
        ], multiplier: 0 },
        { id: 'rebar', label: 'Rebar Reinforcement', type: 'checkbox', defaultValue: true, baseContribution: 0 },
        { id: 'demo', label: 'Demo & Remove Old Concrete', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'sealer', label: 'Concrete Sealer', type: 'checkbox', defaultValue: false, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'pest-control',
    name: 'Pest Control',
    icon: '🐛',
    tagline: 'Protect Your Home & Family',
    description: 'Extermination, prevention, and ongoing pest management for termites, roaches, rodents, ants, and more.',
    color: '#7c3aed',
    bgColor: '#faf5ff',
    phone: '(404) 400-4747',
    email: 'pest@allpros.site',
    services: ['Termite Treatment', 'Rodent Control', 'Roach Treatment', 'Ant Control', 'Bed Bug Treatment', 'Mosquito Control', 'Wildlife Removal', 'Preventive Barrier'],
    whyUs: ['Licensed Pest Control Operator', 'Child & Pet Safe Products', 'Termite Bond Available', 'Guaranteed Results'],
    serviceAreas: ['Tucker, GA', 'DeKalb County', 'Gwinnett County', 'Rockdale County'],
    certifications: ['Licensed PCO', 'QualityPro Certified', 'NPMA Member', 'GA Dept of Agriculture'],
    calculator: {
      title: 'Pest Control Estimate Calculator',
      subtitle: 'Estimate treatment costs by home size and pest type',
      baseRate: 0,
      formula: 'Treatment base × infestation level × home size + service frequency',
      disclaimer: 'Pricing depends on infestation severity determined at inspection. Severe cases may require multiple treatments.',
      fields: [
        { id: 'pest', label: 'Primary Pest', type: 'select', defaultValue: 'general', options: [
          { label: 'General Pest (Quarterly Plan)', value: 'general' },
          { label: 'Termites (Liquid Treatment)', value: 'termite_liquid' },
          { label: 'Termites (Bait System)', value: 'termite_bait' },
          { label: 'Bed Bugs (Heat Treatment)', value: 'bed_bug_heat' },
          { label: 'Bed Bugs (Chemical)', value: 'bed_bug_chem' },
          { label: 'Rodents (Trap & Seal)', value: 'rodents' },
          { label: 'Mosquito (Seasonal Program)', value: 'mosquito' },
          { label: 'Wildlife Removal', value: 'wildlife' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Home Square Footage', type: 'number', unit: 'sq ft', min: 500, max: 8000, defaultValue: 2000, multiplier: 0 },
        { id: 'severity', label: 'Infestation Level', type: 'select', defaultValue: 'moderate', options: [
          { label: 'Light (preventive)', value: 'light' },
          { label: 'Moderate (visible activity)', value: 'moderate' },
          { label: 'Heavy (widespread)', value: 'heavy' },
        ], multiplier: 0 },
        { id: 'plan', label: 'Service Plan', type: 'select', defaultValue: 'quarterly', options: [
          { label: 'One-Time Treatment', value: 'one_time' },
          { label: 'Quarterly (Recommended)', value: 'quarterly' },
          { label: 'Bi-Monthly', value: 'bi_monthly' },
          { label: 'Monthly', value: 'monthly' },
        ], multiplier: 0 },
        { id: 'crawl_space', label: 'Crawl Space Treatment', type: 'checkbox', defaultValue: false, baseContribution: 400 },
        { id: 'termite_bond', label: 'Termite Bond / Warranty', type: 'checkbox', defaultValue: false, baseContribution: 350 },
      ]
    }
  },
  {
    id: 'windows',
    name: 'Windows & Doors',
    icon: '🚪',
    tagline: 'Energy-Efficient Openings',
    description: 'Window replacement, door installation, storm windows, sliding glass doors, and entry doors.',
    color: '#0284c7',
    bgColor: '#f0f9ff',
    phone: '(404) 400-4747',
    email: 'windows@allpros.site',
    services: ['Window Replacement', 'Entry Door Install', 'Patio Door Install', 'Storm Windows', 'Egress Windows', 'Garage Door', 'French Doors', 'Sliding Glass Doors'],
    whyUs: ['Energy Star Products', 'Professional Measuring', 'Warranty on Labor & Glass', 'Tax Credit Eligible Installs'],
    serviceAreas: ['Tucker, GA', 'DeKalb', 'Gwinnett', 'Fulton', 'Cobb Counties'],
    certifications: ['AAMA Certified', 'Energy Star Partner', 'Licensed Contractor'],
    calculator: {
      title: 'Windows & Doors Estimate Calculator',
      subtitle: 'Estimate window or door replacement costs',
      baseRate: 0,
      formula: 'Unit count × window/door type cost + installation labor',
      disclaimer: 'Window size, frame material, and glass package affect final cost. Energy-efficiency upgrades may qualify for tax credits.',
      fields: [
        { id: 'product', label: 'Product Type', type: 'select', defaultValue: 'window_double', options: [
          { label: 'Double-Hung Window', value: 'window_double' },
          { label: 'Casement Window', value: 'window_casement' },
          { label: 'Sliding Window', value: 'window_sliding' },
          { label: 'Bay / Bow Window', value: 'window_bay' },
          { label: 'Entry Door (Fiberglass)', value: 'door_fiber' },
          { label: 'Entry Door (Steel)', value: 'door_steel' },
          { label: 'French Doors', value: 'door_french' },
          { label: 'Sliding Patio Door', value: 'door_patio' },
          { label: 'Garage Door (Single)', value: 'garage_single' },
          { label: 'Garage Door (Double)', value: 'garage_double' },
        ], multiplier: 0 },
        { id: 'count', label: 'Number of Units', type: 'number', unit: 'units', min: 1, max: 30, defaultValue: 8, multiplier: 0 },
        { id: 'frame', label: 'Frame Material', type: 'select', defaultValue: 'vinyl', options: [
          { label: 'Vinyl (Cost-Effective)', value: 'vinyl' },
          { label: 'Fiberglass (Durable)', value: 'fiberglass' },
          { label: 'Wood (Traditional)', value: 'wood' },
          { label: 'Aluminum (Modern)', value: 'aluminum' },
        ], multiplier: 0 },
        { id: 'glass', label: 'Glass Package', type: 'select', defaultValue: 'double', options: [
          { label: 'Single Pane (Replacement only)', value: 'single' },
          { label: 'Double Pane (Standard)', value: 'double' },
          { label: 'Double Pane Low-E', value: 'double_lowe' },
          { label: 'Triple Pane (Premium)', value: 'triple' },
        ], multiplier: 0 },
        { id: 'impact', label: 'Impact / Storm Resistant', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'disposal', label: 'Remove Old Windows/Doors', type: 'checkbox', defaultValue: true, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: '🧹',
    tagline: 'Steam Clean to Like-New',
    description: 'Professional steam cleaning, stain removal, pet odor treatment, upholstery cleaning, and tile & grout cleaning.',
    color: '#0f766e',
    bgColor: '#f0fdfa',
    phone: '(404) 400-4747',
    email: 'cleaning@allpros.site',
    services: ['Steam Carpet Cleaning', 'Stain Removal', 'Pet Odor Treatment', 'Upholstery Cleaning', 'Tile & Grout', 'Area Rug Cleaning', 'Commercial Cleaning', 'Move-Out Cleaning'],
    whyUs: ['IICRC Certified Technicians', 'Truck-Mounted Equipment', 'Eco-Safe Solutions', 'Same-Day Service Available'],
    serviceAreas: ['Tucker, GA', 'DeKalb County', 'Gwinnett County', 'Rockdale County', 'Newton County'],
    certifications: ['IICRC Certified', 'WoolSafe Approved', 'EPA Safer Choice Products'],
    calculator: {
      title: 'Carpet Cleaning Estimate Calculator',
      subtitle: 'Estimate cleaning cost by room count and services',
      baseRate: 0,
      formula: 'Room count × base rate + add-on services + soil level adjustment',
      disclaimer: 'Heavily soiled carpets, pet treatment, and specialty fiber care may require additional service charges.',
      fields: [
        { id: 'service', label: 'Primary Service', type: 'select', defaultValue: 'steam', options: [
          { label: 'Carpet Steam Cleaning', value: 'steam' },
          { label: 'Carpet Dry Cleaning', value: 'dry' },
          { label: 'Upholstery Cleaning', value: 'upholstery' },
          { label: 'Tile & Grout Cleaning', value: 'tile_grout' },
          { label: 'Area Rug Cleaning', value: 'area_rug' },
        ], multiplier: 0 },
        { id: 'rooms', label: 'Number of Rooms', type: 'number', unit: 'rooms', min: 1, max: 20, defaultValue: 4, multiplier: 0 },
        { id: 'sqft', label: 'Approx. Carpet Square Footage', type: 'number', unit: 'sq ft', min: 100, max: 5000, defaultValue: 800, multiplier: 0 },
        { id: 'soil', label: 'Soil / Stain Level', type: 'select', defaultValue: 'moderate', options: [
          { label: 'Light (Regular maintenance)', value: 'light' },
          { label: 'Moderate (Visible traffic lanes)', value: 'moderate' },
          { label: 'Heavy (Deep set stains)', value: 'heavy' },
        ], multiplier: 0 },
        { id: 'pet', label: 'Pet Odor Treatment', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'protector', label: 'Scotchgard / Fabric Protector', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'stairs', label: 'Stair Cleaning (per flight)', type: 'number', unit: 'flights', min: 0, max: 5, defaultValue: 0, multiplier: 0 },
      ]
    }
  },
  {
    id: 'water-damage',
    name: 'Water Damage',
    icon: '💧',
    tagline: '24/7 Emergency Restoration',
    description: 'Emergency water extraction, drying, mold remediation, and full property restoration after flooding, leaks, or disasters.',
    color: '#1d4ed8',
    bgColor: '#eff6ff',
    phone: '(404) 400-4747',
    email: 'restoration@allpros.site',
    services: ['Emergency Water Extraction', 'Structural Drying', 'Mold Remediation', 'Contents Restoration', 'Sewage Cleanup', 'Fire & Smoke Damage', 'Insurance Claims', 'Reconstruction'],
    whyUs: ['IICRC Water Restoration Certified', '60-Min Emergency Response', 'Direct Insurance Billing', 'Mold Free Guarantee'],
    serviceAreas: ['Tucker, GA', 'DeKalb County', 'Gwinnett County', 'All Metro Atlanta'],
    certifications: ['IICRC WRT', 'IICRC ASD', 'RIA Member', 'NADCA Certified'],
    calculator: {
      title: 'Water Damage Estimate Calculator',
      subtitle: 'Estimate restoration costs by damage category and area',
      baseRate: 0,
      formula: 'IICRC water category × affected area × equipment days + structural repairs',
      disclaimer: 'Water damage costs depend on moisture levels, affected materials, and mold presence. Free emergency inspection includes moisture mapping.',
      fields: [
        { id: 'category', label: 'Water Category (IICRC)', type: 'select', defaultValue: 'cat2', options: [
          { label: 'Category 1 — Clean Water (supply line, rain)', value: 'cat1' },
          { label: 'Category 2 — Gray Water (AC, dishwasher)', value: 'cat2' },
          { label: 'Category 3 — Black Water (sewage, flood)', value: 'cat3' },
        ], multiplier: 0 },
        { id: 'sqft', label: 'Affected Square Footage', type: 'number', unit: 'sq ft', min: 50, max: 5000, defaultValue: 400, multiplier: 0 },
        { id: 'rooms', label: 'Rooms Affected', type: 'number', unit: 'rooms', min: 1, max: 15, defaultValue: 2, multiplier: 0 },
        { id: 'class', label: 'Water Damage Class', type: 'select', defaultValue: 'class2', options: [
          { label: 'Class 1 — Minor (slow evaporation)', value: 'class1' },
          { label: 'Class 2 — Significant (fast evaporation)', value: 'class2' },
          { label: 'Class 3 — Extensive (fastest evaporation)', value: 'class3' },
          { label: 'Class 4 — Specialty (hardwood, plaster)', value: 'class4' },
        ], multiplier: 0 },
        { id: 'mold', label: 'Mold Present or Suspected', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'contents', label: 'Contents Restoration', type: 'checkbox', defaultValue: false, baseContribution: 1500 },
        { id: 'reconstruction', label: 'Structural Reconstruction', type: 'checkbox', defaultValue: false, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'it-services',
    name: 'IT Services',
    icon: '💻',
    tagline: 'Technology That Works For You',
    description: 'Managed IT, networking, security cameras, computer repair, D&H product procurement, and business technology solutions.',
    color: '#1e40af',
    bgColor: '#eff6ff',
    phone: '(404) 400-4747',
    email: 'it@allpros.site',
    services: ['Managed IT Services', 'Network Setup & Security', 'Security Camera Install', 'Computer Repair', 'Data Recovery', 'Cloud Migration', 'Hardware Procurement (D&H)', 'IT Consulting'],
    whyUs: ['D&H Authorized Reseller', 'CompTIA & Cisco Certified', 'Remote & Onsite Support', 'SMB Technology Specialists'],
    serviceAreas: ['Tucker, GA', 'Atlanta Metro', 'Remote Services Nationwide'],
    certifications: ['CompTIA A+', 'CompTIA Network+', 'Cisco CCNA', 'Microsoft Partner', 'D&H Authorized Reseller'],
    calculator: {
      title: 'IT Services Estimate Calculator',
      subtitle: 'Estimate managed IT or project costs for your business',
      baseRate: 0,
      formula: 'Endpoint count × monthly rate + project services + hardware',
      disclaimer: 'Managed IT pricing is per-seat and depends on service tier and contract length.',
      fields: [
        { id: 'service', label: 'Service Type', type: 'select', defaultValue: 'managed', options: [
          { label: 'Managed IT (Monthly Plan)', value: 'managed' },
          { label: 'Network Design & Install', value: 'network' },
          { label: 'Security Camera System', value: 'cameras' },
          { label: 'Computer / Server Repair', value: 'repair' },
          { label: 'Hardware Procurement', value: 'hardware' },
          { label: 'Cloud Migration', value: 'cloud' },
          { label: 'Cybersecurity Audit', value: 'security' },
          { label: 'VoIP Phone System', value: 'voip' },
          { label: 'Data Backup & Recovery', value: 'backup' },
        ], multiplier: 0 },
        { id: 'endpoints', label: 'Number of Computers/Devices', type: 'number', unit: 'devices', min: 1, max: 500, defaultValue: 10, multiplier: 0 },
        { id: 'users', label: 'Number of Users', type: 'number', unit: 'users', min: 1, max: 500, defaultValue: 10, multiplier: 0 },
        { id: 'cameras', label: 'Number of Cameras', type: 'number', unit: 'cameras', min: 0, max: 100, defaultValue: 0, multiplier: 0 },
        { id: 'tier', label: 'Service Tier', type: 'select', defaultValue: 'standard', options: [
          { label: 'Basic (Remote Support)', value: 'basic' },
          { label: 'Standard (Remote + Onsite)', value: 'standard' },
          { label: 'Premium (Full Managed)', value: 'premium' },
          { label: 'Enterprise (24/7 + vCISO)', value: 'enterprise' },
        ], multiplier: 0 },
        { id: 'server', label: 'Server / NAS Needed', type: 'checkbox', defaultValue: false, baseContribution: 2500 },
        { id: 'backup', label: 'Offsite Backup Service', type: 'checkbox', defaultValue: false, baseContribution: 0 },
        { id: 'voip', label: 'VoIP Phone System', type: 'checkbox', defaultValue: false, baseContribution: 0 },
      ]
    }
  },
  {
    id: 'pool-spa',
    name: 'Pool & Spa',
    icon: '🏊',
    tagline: 'Clear Water, Perfect Days',
    description: 'Pool installation, maintenance, repair, resurfacing, equipment upgrades, and hot tub services.',
    color: '#0891b2',
    bgColor: '#ecfeff',
    phone: '(404) 400-4747',
    email: 'pool@allpros.site',
    services: ['Pool Installation', 'Pool Maintenance', 'Equipment Repair', 'Resurfacing / Replaster', 'Tile & Coping', 'Leak Detection', 'Salt System Install', 'Hot Tub / Spa Service'],
    whyUs: ['Certified Pool Operators', 'Weekly/Monthly Maintenance Plans', 'Equipment Warranty', 'Chemical Balance Guaranteed'],
    serviceAreas: ['Tucker, GA', 'Gwinnett County', 'DeKalb County', 'Fulton County'],
    certifications: ['CPO Certified', 'APSP Member', 'Licensed Contractor'],
    calculator: {
      title: 'Pool & Spa Estimate Calculator',
      subtitle: 'Estimate pool installation or service costs',
      baseRate: 0,
      formula: 'Pool type base + size + features + finish + equipment',
      disclaimer: 'Pool installation requires permits, soil testing, and HOA approval in most communities.',
      fields: [
        { id: 'service', label: 'Service Type', type: 'select', defaultValue: 'install_inground', options: [
          { label: 'In-Ground Pool Installation', value: 'install_inground' },
          { label: 'Above-Ground Pool Install', value: 'install_above' },
          { label: 'Pool Resurfacing', value: 'resurface' },
          { label: 'Pool Maintenance (Monthly)', value: 'maintenance' },
          { label: 'Equipment Repair / Replace', value: 'equipment' },
          { label: 'Salt System Conversion', value: 'salt' },
          { label: 'Tile & Coping Replace', value: 'tile_coping' },
          { label: 'Hot Tub / Spa Install', value: 'spa' },
          { label: 'Hot Tub Service / Repair', value: 'spa_repair' },
        ], multiplier: 0 },
        { id: 'size', label: 'Pool Size', type: 'select', defaultValue: 'medium', options: [
          { label: 'Small (12x24 ft)', value: 'small' },
          { label: 'Medium (16x32 ft)', value: 'medium' },
          { label: 'Large (20x40 ft)', value: 'large' },
          { label: 'Custom / Freeform', value: 'custom' },
        ], multiplier: 0 },
        { id: 'type', label: 'Pool Construction Type', type: 'select', defaultValue: 'gunite', options: [
          { label: 'Gunite / Shotcrete', value: 'gunite' },
          { label: 'Fiberglass', value: 'fiberglass' },
          { label: 'Vinyl Liner', value: 'vinyl' },
        ], multiplier: 0 },
        { id: 'heater', label: 'Pool Heater', type: 'checkbox', defaultValue: false, baseContribution: 3500 },
        { id: 'salt', label: 'Salt Chlorination System', type: 'checkbox', defaultValue: false, baseContribution: 1800 },
        { id: 'auto', label: 'Automation / Smart Controls', type: 'checkbox', defaultValue: false, baseContribution: 2200 },
        { id: 'deck', label: 'Pool Deck / Patio', type: 'checkbox', defaultValue: false, baseContribution: 8000 },
      ]
    }
  }
];

export const TRADE_MAP = new Map(TRADES.map(t => [t.id, t]));

// Calculator logic
export function calculateEstimate(trade: Trade, formValues: Record<string, any>): { low: number; high: number; breakdown: string[] } {
  const breakdown: string[] = [];
  let base = 0;
  let multiplier = 1;

  const id = trade.id;
  const s = formValues;

  if (id === 'hvac') {
    const serviceBases: Record<string, number> = {
      ac_install: 4500, ac_replace: 4200, furnace_install: 3800, furnace_replace: 3500,
      heat_pump: 7500, mini_split: 3200, duct_clean: 450, repair: 350, tune_up: 175
    };
    const tonMultipliers: Record<string, number> = { '1.5': 0.7, '2': 0.85, '2.5': 0.95, '3': 1.0, '3.5': 1.1, '4': 1.25, '5': 1.45 };
    const seerMultipliers: Record<string, number> = { '14': 1.0, '16': 1.15, '18': 1.3, '20': 1.5 };
    base = (serviceBases[s.service] || 4000) * (tonMultipliers[s.tons] || 1) * (seerMultipliers[s.seer] || 1);
    breakdown.push(`Base service (${s.service?.replace(/_/g,' ')}): $${Math.round(serviceBases[s.service] || 4000).toLocaleString()}`);
    if (s.newDucts) { base += 2800; breakdown.push('New ductwork: $2,800'); }
    if (s.electrical) { base += 850; breakdown.push('Electrical upgrade: $850'); }
    if (s.permit) { base += 250; breakdown.push('Permit: $250'); }
  } else if (id === 'plumbing') {
    const serviceBases: Record<string, number> = {
      drain_clean: 175, wh_40: 1100, wh_50: 1350, tankless: 2800, toilet: 350, faucet: 280,
      sewer: 3500, sewer_replace: 8500, repipe: 6500, leak: 450, gas: 1800, softener: 1400
    };
    const fixtureAdd = (s.fixtures || 1) * 150;
    const accessMult: Record<string, number> = { easy: 1, moderate: 1.3, difficult: 1.6 };
    base = ((serviceBases[s.service] || 500) + fixtureAdd) * (accessMult[s.access] || 1);
    breakdown.push(`${s.service?.replace(/_/g,' ')} × ${s.fixtures} fixtures`);
    if (s.emergency) { base += 200; breakdown.push('Emergency surcharge: $200'); }
    if (s.permit) { base += 150; breakdown.push('Permit: $150'); }
  } else if (id === 'electrical') {
    const serviceBases: Record<string, number> = {
      panel_upgrade: 2800, panel_400: 4500, ev_l2: 1200, ev_l3: 4500, generator: 1800,
      rewire: 12000, outlet: 250, recessed: 1800, fan: 350, gfci: 850, detector: 650
    };
    const circuitAdd = (s.circuits || 1) * 120;
    const ageMult: Record<string, number> = { modern: 1, mid: 1.15, older: 1.35, old: 1.65 };
    base = ((serviceBases[s.service] || 1000) + circuitAdd) * (ageMult[s.home_age] || 1);
    breakdown.push(`${s.service?.replace(/_/g,' ')}: $${(serviceBases[s.service] || 1000).toLocaleString()}`);
    if (s.permit) { base += 300; breakdown.push('Permit & inspection: $300'); }
    if (s.surge) { base += 450; breakdown.push('Whole-home surge protector: $450'); }
  } else if (id === 'roofing') {
    const sqft = Number(s.sqft) || 1800;
    const pitchMult: Record<string, number> = { low: 1.05, moderate: 1.15, steep: 1.35, very_steep: 1.55 };
    const materialPerSq: Record<string, number> = {
      tab_shingle: 250, arch_shingle: 380, premium_shingle: 550, metal: 850, metal_corr: 700,
      flat: 650, tile: 950, slate: 1100
    };
    const layerAdd: Record<string, number> = { '0': 0, '1': 80, '2': 150 };
    const storiesMult: Record<string, number> = { '1': 1, '2': 1.15, '3': 1.3 };
    const squares = sqft / 100;
    base = squares * (materialPerSq[s.material] || 380) * (pitchMult[s.pitch] || 1.15) * (storiesMult[s.stories] || 1) + squares * (layerAdd[s.layers] || 80);
    breakdown.push(`${Math.round(squares)} squares × $${materialPerSq[s.material] || 380}/sq`);
    if (s.gutters) { base += 1800; breakdown.push('Gutter replacement: $1,800'); }
    if (s.skylight) { base += 1500; breakdown.push('Skylight: $1,500'); }
    if (s.permit) { base += 200; breakdown.push('Permit: $200'); }
  } else if (id === 'flooring') {
    const sqft = Number(s.sqft) || 500;
    const materialRate: Record<string, number> = {
      lvp: 5.5, laminate: 4.5, hardwood_solid: 9.5, hardwood_eng: 7.5, porcelain: 8.5,
      ceramic: 6.5, stone: 14, carpet_basic: 3.5, carpet_premium: 7
    };
    const subfloorAdd: Record<string, number> = { good: 0, minor: 1.5, major: 5 };
    const removalAdd: Record<string, number> = { none: 0, carpet: 1.5, hardwood: 2.5, tile: 3.5 };
    const rate = (materialRate[s.material] || 5.5) + (subfloorAdd[s.subfloor] || 0) + (removalAdd[s.removal] || 0);
    base = sqft * rate;
    const stairAdd = (Number(s.stairs) || 0) * 75;
    base += stairAdd;
    breakdown.push(`${sqft} sq ft × $${rate.toFixed(2)}/sq ft installed`);
    if (s.baseboards) { base += sqft * 0.8; breakdown.push('Baseboards: ' + Math.round(sqft * 0.8).toLocaleString()); }
  } else if (id === 'painting') {
    const sqft = Number(s.sqft) || 1500;
    const typeRates: Record<string, number> = {
      interior: 3.5, interior_room: 350, exterior: 4.2, exterior_trim: 1200, cabinets: 3200,
      deck: 1800, commercial: 4.5
    };
    const condMult: Record<string, number> = { good: 1, fair: 1.2, poor: 1.45 };
    const qualAdd: Record<string, number> = { contractor: 0, mid: 0.5, premium: 1.2 };
    if (s.type === 'interior_room' || s.type === 'exterior_trim' || s.type === 'cabinets' || s.type === 'deck') {
      base = (typeRates[s.type] || 3.5) * (condMult[s.condition] || 1);
      if (s.type === 'interior_room') base *= (Number(s.rooms) || 5);
    } else {
      base = sqft * ((typeRates[s.type] || 3.5) + (qualAdd[s.quality] || 0)) * (condMult[s.condition] || 1);
    }
    if (s.pressure_wash) { base += 350; breakdown.push('Pressure washing: $350'); }
    if (s.ceiling) { base *= 1.15; breakdown.push('Ceiling painting: +15%'); }
    breakdown.push(`${sqft} sq ft ${s.type?.replace(/_/g,' ')} at $${(typeRates[s.type] || 3.5)}/sq ft`);
  } else if (id === 'fencing') {
    const lf = Number(s.linear_ft) || 150;
    const materialRate: Record<string, number> = {
      wood_privacy: 28, wood_picket: 18, cedar: 35, vinyl_privacy: 38, vinyl_picket: 28,
      chainlink_4: 18, chainlink_6: 22, aluminum: 32, wrought_iron: 55
    };
    const terrainMult: Record<string, number> = { flat: 1, slight: 1.15, steep: 1.4 };
    base = lf * (materialRate[s.material] || 28) * (terrainMult[s.terrain] || 1);
    const gateAdd = (Number(s.gates) || 1) * 650;
    base += gateAdd;
    breakdown.push(`${lf} LF × $${materialRate[s.material] || 28}/LF (${s.material})`);
    breakdown.push(`${s.gates || 1} gate(s): $${gateAdd.toLocaleString()}`);
    if (s.remove_old) { base += lf * 5; breakdown.push('Remove old fence: +$5/LF'); }
    if (s.auto_gate) { base += 1200; breakdown.push('Automatic gate opener: $1,200'); }
  } else if (id === 'remodeling') {
    const projectBase: Record<string, number> = {
      kitchen: 35000, kitchen_refresh: 18000, bathroom_primary: 22000, bathroom_mid: 12000,
      half_bath: 7500, basement: 28000, addition: 55000, garage: 25000, full_home: 120000
    };
    const finishMult: Record<string, number> = { budget: 0.75, mid: 1.0, high: 1.45, luxury: 2.2 };
    base = (projectBase[s.project] || 12000) * (finishMult[s.finish] || 1);
    breakdown.push(`${s.project?.replace(/_/g,' ')} (${s.finish} finish)`);
    if (s.plumbing_move) { base += 3500; breakdown.push('Plumbing relocation: $3,500'); }
    if (s.electrical_upgrade) { base += 2200; breakdown.push('Electrical upgrade: $2,200'); }
    if (s.structural) { base += 8000; breakdown.push('Structural changes: $8,000'); }
    if (s.permit) { base += 500; breakdown.push('Permits: $500'); }
  } else if (id === 'drywall') {
    const sqft = Number(s.sqft) || 400;
    const serviceRate: Record<string, number> = {
      install: 2.5, repair_small: 350, repair_large: 850, room: 3.2, popcorn: 2.8, texture: 1.8, water: 4.5
    };
    const finishAdd: Record<string, number> = { '3': 0, '4': 0.5, '5': 1.2 };
    const ceilMult: Record<string, number> = { standard: 1, tall: 1.2, vaulted: 1.45 };
    if (s.service === 'repair_small' || s.service === 'repair_large') {
      base = serviceRate[s.service] || 350;
    } else {
      base = sqft * ((serviceRate[s.service] || 2.5) + (finishAdd[s.finish_level] || 0.5)) * (ceilMult[s.ceiling] || 1);
    }
    if (s.disposal) { base += 150; breakdown.push('Debris haul-away: $150'); }
    breakdown.push(`${sqft} sq ft ${s.service?.replace(/_/g,' ')}`);
  } else if (id === 'carpentry') {
    const scope = Number(s.linear_or_sqft) || 100;
    const projectRate: Record<string, number> = {
      trim: 12, cabinets: 320, deck: 45, builtin: 280, door_int: 450, door_ext: 850,
      window: 650, stairs: 850, framing: 8, paneling: 18
    };
    const woodMult: Record<string, number> = { pine: 1, poplar: 1.2, oak: 1.5, maple: 1.5, cherry: 2.2 };
    const finishAdd: Record<string, number> = { paint: 0, stain: 350, raw: 0 };
    if (['door_int','door_ext','window','stairs'].includes(s.project)) {
      base = (projectRate[s.project] || 450) * scope;
    } else {
      base = scope * (projectRate[s.project] || 12) * (woodMult[s.wood] || 1) + (finishAdd[s.finish] || 0);
    }
    if (s.custom) { base *= 1.35; breakdown.push('Custom design complexity: +35%'); }
    breakdown.push(`${scope} ft ${s.project?.replace(/_/g,' ')} in ${s.wood}`);
  } else if (id === 'landscaping') {
    const sqft = Number(s.sqft) || 2000;
    const serviceBase: Record<string, number> = {
      full_design: 8500, sod: 3.5, mulch: 2800, irrigation: 4500, pavers: 18,
      wall: 35, tree: 1200, drainage: 3800, maintenance: 250
    };
    const gradeMult: Record<string, number> = { flat: 1, moderate: 1.25, steep: 1.6 };
    const isPerSqft = ['sod','pavers','wall'].includes(s.service);
    base = isPerSqft ? sqft * (serviceBase[s.service] as number) * (gradeMult[s.grade] || 1) :
                       (serviceBase[s.service] as number) * (gradeMult[s.grade] || 1);
    const treeAdd = (Number(s.trees) || 0) * 400;
    base += treeAdd;
    if (s.lighting) { base += 1800; breakdown.push('Landscape lighting: $1,800'); }
    if (s.irrigation) { base += 2500; breakdown.push('Smart irrigation: $2,500'); }
    breakdown.push(`${sqft} sq ft ${s.service?.replace(/_/g,' ')}`);
  } else if (id === 'concrete') {
    const sqft = Number(s.sqft) || 600;
    const projectRate: Record<string, number> = {
      driveway: 8, patio: 7, sidewalk: 6, garage: 7.5, stamped: 16, foundation: 12, retaining: 35, commercial: 9
    };
    const thickAdd: Record<string, number> = { '3.5': 0, '4': 0.5, '5': 1.2, '6': 2 };
    const finishAdd: Record<string, number> = { broom: 0, aggregate: 3, stamped: 6, smooth: 2, colored: 4 };
    base = sqft * ((projectRate[s.project] || 8) + (thickAdd[s.thickness] || 0.5) + (finishAdd[s.finish] || 0));
    if (s.rebar) { base += sqft * 1.2; breakdown.push('Rebar reinforcement: +$1.20/sq ft'); }
    if (s.demo) { base += sqft * 3.5; breakdown.push('Demolition: +$3.50/sq ft'); }
    if (s.sealer) { base += sqft * 0.8; breakdown.push('Concrete sealer: +$0.80/sq ft'); }
    breakdown.push(`${sqft} sq ft ${s.project?.replace(/_/g,' ')}`);
  } else if (id === 'pest-control') {
    const sqft = Number(s.sqft) || 2000;
    const pestBase: Record<string, number> = {
      general: 180, termite_liquid: 1400, termite_bait: 1800, bed_bug_heat: 2500,
      bed_bug_chem: 1500, rodents: 650, mosquito: 85, wildlife: 450
    };
    const severityMult: Record<string, number> = { light: 0.85, moderate: 1, heavy: 1.5 };
    const planMult: Record<string, number> = { one_time: 1.3, quarterly: 1, bi_monthly: 1.1, monthly: 1.25 };
    const sizeFactor = 1 + (sqft - 2000) / 8000;
    base = (pestBase[s.pest] || 180) * (severityMult[s.severity] || 1) * (planMult[s.plan] || 1) * sizeFactor;
    if (s.crawl_space) { base += 400; breakdown.push('Crawl space treatment: $400'); }
    if (s.termite_bond) { base += 350; breakdown.push('Termite bond/warranty: $350'); }
    if (s.plan === 'quarterly') breakdown.push('Quarterly plan — recurring every 90 days');
    breakdown.push(`${s.pest?.replace(/_/g,' ')} treatment (${s.severity} infestation)`);
  } else if (id === 'windows') {
    const count = Number(s.count) || 8;
    const productBase: Record<string, number> = {
      window_double: 650, window_casement: 750, window_sliding: 700, window_bay: 2400,
      door_fiber: 1800, door_steel: 1400, door_french: 3200, door_patio: 2200,
      garage_single: 1100, garage_double: 1800
    };
    const frameMult: Record<string, number> = { vinyl: 1, fiberglass: 1.4, wood: 1.6, aluminum: 1.2 };
    const glassMult: Record<string, number> = { single: 0.8, double: 1, double_lowe: 1.2, triple: 1.5 };
    base = count * (productBase[s.product] || 650) * (frameMult[s.frame] || 1) * (glassMult[s.glass] || 1);
    if (s.impact) { base *= 1.45; breakdown.push('Impact/storm resistant glass: +45%'); }
    if (s.disposal) { base += count * 50; breakdown.push(`Removal of old units: ${count} × $50`); }
    breakdown.push(`${count} units × $${(productBase[s.product] || 650).toLocaleString()} (${s.product?.replace(/_/g,' ')})`);
  } else if (id === 'carpet-cleaning') {
    const rooms = Number(s.rooms) || 4;
    const sqft = Number(s.sqft) || 800;
    const serviceBase: Record<string, number> = { steam: 45, dry: 50, upholstery: 180, tile_grout: 1.8, area_rug: 3.5 };
    const soilMult: Record<string, number> = { light: 0.9, moderate: 1, heavy: 1.35 };
    if (s.service === 'steam' || s.service === 'dry') {
      base = rooms * (serviceBase[s.service] || 45) * (soilMult[s.soil] || 1);
    } else if (s.service === 'tile_grout' || s.service === 'area_rug') {
      base = sqft * (serviceBase[s.service] as number) * (soilMult[s.soil] || 1);
    } else {
      base = (serviceBase[s.service] as number) * (soilMult[s.soil] || 1);
    }
    const stairAdd = (Number(s.stairs) || 0) * 65;
    base += stairAdd;
    if (s.pet) { base += rooms * 35; breakdown.push(`Pet odor treatment: ${rooms} rooms × $35`); }
    if (s.protector) { base += sqft * 0.35; breakdown.push(`Fabric protector: $${Math.round(sqft * 0.35)}`); }
    breakdown.push(`${rooms} rooms / ${sqft} sq ft (${s.soil} soil level)`);
  } else if (id === 'water-damage') {
    const sqft = Number(s.sqft) || 400;
    const rooms = Number(s.rooms) || 2;
    const catMult: Record<string, number> = { cat1: 1, cat2: 1.5, cat3: 2.4 };
    const classMult: Record<string, number> = { class1: 1, class2: 1.4, class3: 1.9, class4: 2.5 };
    base = (sqft * 4.5 + rooms * 800) * (catMult[s.category] || 1.5) * (classMult[s.class] || 1.4);
    if (s.mold) { base += sqft * 12; breakdown.push(`Mold remediation: $${Math.round(sqft*12).toLocaleString()}`); }
    if (s.contents) { base += 1500; breakdown.push('Contents restoration: $1,500'); }
    if (s.reconstruction) { base += sqft * 35; breakdown.push(`Structural reconstruction: $${Math.round(sqft*35).toLocaleString()}`); }
    breakdown.push(`${sqft} sq ft, ${rooms} rooms — Category ${s.category?.replace('cat','')} / Class ${s.class?.replace('class','')}`);
  } else if (id === 'it-services') {
    const endpoints = Number(s.endpoints) || 10;
    const users = Number(s.users) || 10;
    const serviceBase: Record<string, number> = {
      managed: 85, network: 3500, cameras: 350, repair: 150, hardware: 0, cloud: 4500, security: 2500, voip: 250, backup: 45
    };
    const tierMult: Record<string, number> = { basic: 0.7, standard: 1, premium: 1.5, enterprise: 2.2 };
    const camBase = (Number(s.cameras) || 0) * 650;
    if (s.service === 'managed') {
      base = endpoints * serviceBase.managed * (tierMult[s.tier] || 1);
      breakdown.push(`${endpoints} devices × $${Math.round(serviceBase.managed * (tierMult[s.tier] || 1))}/device/mo`);
    } else if (s.service === 'cameras') {
      base = (Number(s.cameras) || 4) * 650;
      breakdown.push(`${s.cameras || 4} cameras × $650 installed`);
    } else if (s.service === 'backup') {
      base = endpoints * serviceBase.backup;
    } else {
      base = serviceBase[s.service] || 2500;
    }
    if (s.server) { base += 2500; breakdown.push('Server/NAS: $2,500'); }
    if (s.voip) { base += users * 250; breakdown.push(`VoIP: ${users} users × $250`); }
  } else if (id === 'pool-spa') {
    const sizeBases: Record<string, number> = { small: 35000, medium: 50000, large: 75000, custom: 90000 };
    const serviceBase: Record<string, number> = {
      install_inground: sizeBases[s.size] || 50000, install_above: 4500, resurface: 8500,
      maintenance: 200, equipment: 1800, salt: 2200, tile_coping: 6500, spa: 8500, spa_repair: 850
    };
    const typeMult: Record<string, number> = { gunite: 1, fiberglass: 0.85, vinyl: 0.75 };
    base = (serviceBase[s.service] || 8500) * (s.service === 'install_inground' ? (typeMult[s.type] || 1) : 1);
    if (s.heater) { base += 3500; breakdown.push('Pool heater: $3,500'); }
    if (s.salt) { base += 1800; breakdown.push('Salt chlorination: $1,800'); }
    if (s.auto) { base += 2200; breakdown.push('Smart automation: $2,200'); }
    if (s.deck) { base += 8000; breakdown.push('Pool deck/patio: $8,000'); }
    breakdown.push(`${s.service?.replace(/_/g,' ')} — ${s.size || 'medium'} size`);
  }

  // Apply ±15% range
  const low = Math.round(base * 0.88);
  const high = Math.round(base * 1.18);

  return { low, high, breakdown };
}
