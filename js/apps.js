/* ==========================================================================
   ALEESHA OS - APPS & PORTFOLIO DATA CONTROLLER
   Contains resume data, project case studies, terminal CLI commands,
   3D studio viewport logic, Groove music synthesizer, and mail client.
   ========================================================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Aleesha K. L.",
    titles: [
      "3D Visual Designer",
      "UI/UX Designer",
      "Experience Designer",
      "Spatial Designer",
      "Visual Merchandiser",
      "AR/VR Visualiser"
    ],
    location: "Kochi, Kerala",
    phone: "+91 7907149788",
    email: "aleeshakl2495@gmail.com",
    behance: "https://behance.net/aleesha_kl",
    linkedin: "https://linkedin.com/in/aleeshakl",
    education: {
      degree: "Bachelor of Design (B.Des), Fashion Communication",
      school: "NIFT Kannur",
      years: "2023 – 2027",
      cgpa: "8.6 / 10",
      status: "Currently in 4th year | Minor: Masters of Design"
    },
    summary: `Creative 3D Visualiser and Experience Designer pursuing a B.Des in Fashion Communication at NIFT Kannur (CGPA 8.6/10, 4th year). Experienced in designing immersive 3D stages, event sets, exhibition stalls and spatial layouts for weddings, corporate events, brand activations and award ceremonies. Skilled in Blender, Autodesk Fusion, SketchUp and Coohom to turn creative briefs into photorealistic, execution-ready visualisations, backed by strong UI/UX, brand identity and editorial design capabilities. Seeking an Experience Design, Spatial Design, Visual Merchandising or AR/VR Visualisation role where technical precision and creative storytelling create memorable brand experiences.`
  },

  projects: [
    {
      id: "radio-mango",
      title: "Radio Mango × Spadikam Onam",
      subtitle: "Bharath Benz Truck 3D Event & Set Design",
      category: "3D Spatial",
      badge: "3D Event & Set Design",
      isMajor: true,
      img: "assets/thira 1.1.png",
      tools: ["Blender", "Spatial Planning", "Event Architecture", "Lighting Rigs"],
      year: "2026",
      desc: "Designed an immersive 3D event installation transforming a commercial Bharath Benz truck into an authentic Onam-themed promotional stage on wheels.",
      challenge: "Engineering the structural framework and spatial layout strictly within truck-to-roof height limits, dynamic vehicular clearances, and rapid festival deployment constraints.",
      solution: "Engineered multi-level staging modules, custom Kerala architectural elements, and integrated stage illumination that seamlessly mounted to the truck chassis.",
      deliverables: [
        "Full scale 3D spatial models & mechanical mount layouts",
        "Photorealistic lighting simulations for night & day performances",
        "Structural dimensions and safety clearance diagrams"
      ],
      palette: ["#a78bfa", "#f472b6", "#34d399"]
    },
    {
      id: "emak-awards",
      title: "EMAK Silent Hero Awards",
      subtitle: "Grand Stage Design — Hyatt Regency, Thrissur",
      category: "3D Spatial",
      badge: "3D Stage Design",
      isMajor: true,
      img: "assets/ChatGPT Image Aug 13, 2026, 06_14_26 PM.png",
      tools: ["Blender", "Stage Architecture", "Photorealistic Renders", "Sightline Optimization"],
      year: "2026",
      desc: "Architected a monumental 3D stage concept for a 60 × 30 ft stage within a 100 × 80 ft grand hall at Hyatt Regency, Thrissur.",
      challenge: "Balancing unobstructed sightlines for over 600 VIP attendees, large LED backdrop projection, and award podium ergonomics.",
      solution: "Utilized cinematic scale grading, stepped multi-tier LED panels, and balanced ambient lighting to craft an awe-inspiring awards experience.",
      deliverables: [
        "Parametric stage models with 60 × 30 ft footprint",
        "High-definition photorealistic 3D presentation visualisations",
        "Sightline cone analysis diagrams for venue seating"
      ],
      palette: ["#8b5cf6", "#3b82f6", "#ec4899"]
    },
    {
      id: "neithi-stall",
      title: "Neithi — 3D Exhibition Stall Design",
      subtitle: "Contemporary Craft & Brand Pavilion",
      category: "3D Spatial",
      badge: "3D Spatial Design",
      isMajor: true,
      img: "assets/ChatGPT Image Aug 14, 2026, 01_08_56 AM.png",
      tools: ["Blender", "Spatial Planning", "Visual Merchandising", "3D Animation"],
      year: "2025",
      desc: "Designed an exhibition stall concept celebrating heritage craft, focused on spatial planning, visitor circulation flow, and storytelling visual merchandising.",
      challenge: "Creating an open, welcoming visitor journey within a standard booth perimeter that naturally guides visitors through tactile textile displays.",
      solution: "Integrated curving partition screens, warm architectural spotlighting, bespoke product pedestals, and smooth spatial hierarchy.",
      deliverables: [
        "Complete structural booth layout and modular material specs",
        "Walkthrough 3D animation showcasing visitor perspective",
        "Rendered visual merchandising displays and brand signage"
      ],
      palette: ["#14b8a6", "#06b6d4", "#a78bfa"]
    },
    {
      id: "apple-health",
      title: "Apple Health App UI/UX Redesign",
      subtitle: "Human-Centred Wellness & Vitals Experience",
      category: "UI/UX",
      badge: "Figma UI/UX",
      isMajor: true,
      img: "assets/thumb_desktop_playground.png",
      tools: ["Figma", "User Research", "WCAG Accessibility", "Design Systems", "Prototyping"],
      year: "2026",
      desc: "Led an end-to-end UX/UI redesign of Apple Health: in-depth user research, pain-point analysis, accessibility audit, and simplified daily health trends.",
      challenge: "Eliminating cognitive overload caused by complex metrics and clinical data tables for everyday fitness & mindfulness users.",
      solution: "Redesigned core information architecture, introduced glanceable summary cards, high-contrast visual graphs, and WCAG-compliant color schemes.",
      deliverables: [
        "User persona journey maps & pain-point matrix",
        "Atomic design system with interactive components & states",
        "High-fidelity clickable Figma prototype"
      ],
      palette: ["#f43f5e", "#fb7185", "#38bdf8"]
    },
    {
      id: "chendamangalam",
      title: "CRD Documentation — DIATE Publication",
      subtitle: "Editorial Publication & Digital Preservation",
      category: "Editorial",
      badge: "InDesign & Web",
      img: "assets/thumb_desktop_projects.png",
      tools: ["Adobe InDesign", "Editorial Design", "Photography", "HTML/CSS", "Cultural Archiving"],
      year: "2025",
      desc: "Researched and documented traditional Kerala handloom weaving practices at Chendamangalam, producing an editorial publication and digital platform.",
      challenge: "Synthesizing intricate artisanal handloom techniques and historical cultural identity into an engaging publication and web format.",
      solution: "Authored and designed a clean editorial publication featuring photographic spreads, typography hierarchies, and an accessible HTML/CSS portal.",
      deliverables: [
        "Print-ready editorial publication layout in Adobe InDesign",
        "Original on-site photography and artisan interviews",
        "Interactive HTML/CSS cultural documentation website"
      ],
      palette: ["#a78bfa", "#818cf8", "#38bdf8"]
    },
    {
      id: "playing-cards",
      title: "Playing Cards — Illustrated Graphic Deck",
      subtitle: "Contemporary Folklore & Visual Storytelling",
      category: "Editorial & Visual",
      badge: "Visual Design",
      img: "assets/ChatGPT Image Aug 14, 2026, 01_56_25 AM.png",
      tools: ["Adobe Illustrator", "Photoshop", "Print Typography", "Vector Art"],
      year: "2025",
      desc: "Designed an artistic custom illustrated playing card deck exploring symbolic visual storytelling, folklore motifs, and intricate border typography.",
      challenge: "Creating distinct visual hierarchy across all 54 cards while maintaining strict symmetry and instant face-card readability for players.",
      solution: "Illustrated bespoke court characters, geometric suit pips, and metallic foil accents tailored for premium linen cardstock printing.",
      deliverables: [
        "Complete 54-card illustrated vector suite with CMYK print registration",
        "Tuck-box packaging with embossed foil specifications",
        "Physical mockups and print durability tests"
      ],
      palette: ["#e11d48", "#1e293b", "#a855f7"]
    },
    {
      id: "madham",
      title: "MADHAM — Spatial Brand Architecture",
      subtitle: "Contemporary Brand Activation & Pavilion Design",
      category: "3D Spatial",
      badge: "Spatial Experience",
      img: "assets/ChatGPT Image Aug 14, 2026, 01_30_49 AM.png",
      tools: ["Blender", "Autodesk Fusion", "Spatial Planning", "Lighting Rigs"],
      year: "2026",
      desc: "A spatial pavilion design exploring traditional vernacular forms translated into a modern brand experience and interactive installation.",
      challenge: "Optimizing foot-traffic circulation and natural acoustics inside an enclosed exhibition shell without rigid walls.",
      solution: "Designed curved timber louvers, integrated acoustic diffusers, and dramatic architectural cove illumination.",
      deliverables: [
        "3D volumetric layout with visitor circulation heatmaps",
        "Photorealistic Cycles rendering under varying daylight conditions",
        "Modular fabrication blueprints for rapid event setup"
      ],
      palette: ["#ec4899", "#8b5cf6", "#38bdf8"]
    },
    {
      id: "chips-packaging",
      title: "Chips Packaging & Retail Merchandising",
      subtitle: "Playful FMCG Brand Identity & Shelf Presence",
      category: "Visual Merchandising",
      badge: "Packaging & Brand",
      img: "assets/thumb_desktop_playground.png",
      tools: ["Adobe Illustrator", "Photoshop", "Packaging CAD", "Visual Merchandising"],
      year: "2025",
      desc: "Vibrant retail snack packaging and point-of-sale visual merchandising display system engineered for maximum shelf impact.",
      challenge: "Standing out on crowded retail shelves while communicating authentic local flavor profiles within tight packaging dielines.",
      solution: "Developed bold character-driven illustrations, high-contrast typography, and a modular POS gondola display stand.",
      deliverables: [
        "Multi-flavour pouch dielines with flexographic print plates",
        "In-store retail gondola endcap 3D visualisations",
        "Brand style guide specifying color tolerances and packaging typography"
      ],
      palette: ["#c4b5fd", "#f43f5e", "#10b981"]
    }
  ],

  photography: [
    {
      id: "photo-1",
      title: "NIFT Prospectus 2026 Editorial Spread",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      img: "assets/thumb_desktop_photography.png",
      camera: "Sony Alpha A7 IV • 85mm f/1.4 GM",
      settings: "1/200s • f/2.0 • ISO 100 • Studio Strobe",
      location: "NIFT Studio, Kannur",
      desc: "Art direction, high-contrast studio illumination, and publication layout photography for NIFT Kannur Official 2026 Prospectus.",
      process: "Curated styling, balanced softbox key light with rim lighting to create strong visual separation for editorial magazine spreads."
    },
    {
      id: "photo-2",
      title: "Chendamangalam Artisans Handloom Photo Essay",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      img: "assets/thumb_desktop_projects.png",
      camera: "Leica Q2 • 28mm f/1.7 Summilux",
      settings: "1/125s • f/2.2 • ISO 400 • Ambient Daylight",
      location: "Chendamangalam Weavers Co-op, Kerala",
      desc: "Intimate cultural documentation capturing traditional handloom weavers preserving centuries-old craft in Chendamangalam.",
      process: "Documented the rhythmic motion of fly-shuttle looms and the concentrated expressions of master artisans, preserving heritage storytelling."
    },
    {
      id: "photo-3",
      title: "Architectural Sightlines & Festival Staging",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      img: "assets/thira 1.1.png",
      camera: "Canon EOS R5 • 24-70mm f/2.8L",
      settings: "1/160s • f/2.8 • ISO 800 • Stage Truss Lighting",
      location: "Radio Mango Spadikam Arena, Kochi",
      desc: "Night-time dynamic spatial photography capturing scale, crowd perspective, and spatial sightline illumination on the Bharath Benz stage.",
      process: "Calibrated camera exposure to capture both high-intensity LED panel brightness and rich crowd ambient shadows without clipping."
    },
    {
      id: "photo-4",
      title: "EMAK Silent Hero Awards Grand Venue",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      img: "assets/ChatGPT Image Aug 13, 2026, 06_14_26 PM.png",
      camera: "Sony Alpha A7 IV • 16-35mm f/2.8 GM",
      settings: "1/80s • f/4.0 • ISO 1200 • Architectural Cove",
      location: "Hyatt Regency Grand Ballroom, Thrissur",
      desc: "Atmospheric perspective photography documenting the 60 × 30 ft stage installation inside Hyatt Regency, Thrissur.",
      process: "Symmetric wide-angle composition emphasizing 30-foot vertical clearance, layered backdrop textures, and VIP seating cones."
    },
    {
      id: "photo-5",
      title: "Tactile Craft Textures & Macro Documentation",
      category: "composition",
      categoryLabel: "Creative Compositions",
      img: "assets/ChatGPT Image Aug 14, 2026, 01_08_56 AM.png",
      camera: "Leica 90mm Macro-Elmar • Studio Softbox",
      settings: "1/160s • f/5.6 • ISO 100 • Diffused Overhead Key",
      location: "Materials Archive, NIFT Kannur",
      desc: "Macro composition capturing the tension, warp, and weft of artisanal Kerala cotton and handloom threads.",
      process: "Macro focal stacking highlighting tactile fiber relief and subtle natural pigment variations in hand-dyed yarns."
    },
    {
      id: "photo-6",
      title: "Contemporary Editorial Portraiture Series",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      img: "assets/profile.jpg",
      camera: "Hasselblad X2D 100C • 55mm f/2.5",
      settings: "1/250s • f/2.8 • ISO 64 • Directional Octabox",
      location: "Natural Light Studio, Kochi",
      desc: "Modern high-fashion editorial portrait series exploring natural geometry, subtle skin tones, and cinematic shadows.",
      process: "Subtle color grading in Adobe Lightroom, balancing skin highlights against neutral textured backdrops."
    }
  ],

  playground: [
    {
      id: "pg-apple-health",
      title: "Apple Health App UI/UX Redesign",
      category: "uiux",
      categoryLabel: "UI/UX & Web",
      img: "assets/thumb_desktop_playground.png",
      tools: ["Figma", "User Research", "WCAG Contrast", "Prototyping"],
      desc: "Human-centred mobile interface redesign simplifying complex vitals and health analytics into glanceable cards.",
      deliverables: "Design system components, interactive user flow prototypes, WCAG accessibility audit.",
      projectRef: "apple-health"
    },
    {
      id: "pg-diate",
      title: "DIATE Cultural Handloom Web Portal",
      category: "uiux",
      categoryLabel: "UI/UX & Web",
      img: "assets/thumb_desktop_projects.png",
      tools: ["HTML5", "CSS3", "JavaScript", "InDesign"],
      desc: "Interactive digital preservation website showcasing artisan profiles, interactive loom diagrams, and archival essays.",
      deliverables: "Responsive multi-page web platform, typographic scale system, digital photo archives.",
      projectRef: "chendamangalam"
    },
    {
      id: "pg-chips",
      title: "Chips Packaging & Retail Merchandising System",
      category: "packaging",
      categoryLabel: "Branding & Packaging",
      img: "assets/thumb_desktop_playground.png",
      tools: ["Illustrator", "Photoshop", "Packaging CAD"],
      desc: "Vibrant FMCG snack brand identity with character illustrations, dielines, and modular retail gondola POS displays.",
      deliverables: "Pouch packaging dielines, flexo print separations, retail display visualisations.",
      projectRef: "chips-packaging"
    },
    {
      id: "pg-cards",
      title: "Illustrated Playing Cards — Contemporary Folklore Deck",
      category: "graphic",
      categoryLabel: "Graphic Design",
      img: "assets/ChatGPT Image Aug 14, 2026, 01_56_25 AM.png",
      tools: ["Illustrator", "Vector Art", "Print Typography"],
      desc: "Full 54-card custom illustrated poker deck blending Kerala folklore motifs with symmetric court card typography.",
      deliverables: "54 bespoke card faces, tuck-box packaging with foil stamping, linen cardstock mockups.",
      projectRef: "playing-cards"
    },
    {
      id: "pg-brand-manual",
      title: "NIFT Graduation Show Brand Identity & Manual",
      category: "packaging",
      categoryLabel: "Branding & Packaging",
      img: "assets/thumb_desktop_projects.png",
      tools: ["InDesign", "Illustrator", "Brand Architecture"],
      desc: "Comprehensive brand identity system defining logo clear-space, typographic scale, color tokens, and corporate applications.",
      deliverables: "Brand identity manual (40+ pages), logo usage guidelines, exhibition signage guidelines."
    },
    {
      id: "pg-booklet",
      title: "NIFT Graduation Show Booklet Publication",
      category: "editorial",
      categoryLabel: "Publication & Print",
      img: "assets/thumb_desktop_resume.png",
      tools: ["InDesign", "Print Preflight", "Editorial Pacing"],
      desc: "Curated graduation catalog featuring bespoke grid layouts, hierarchy pacing, and print-ready CMYK preflighting.",
      deliverables: "Perfect-bound editorial catalog, typography hierarchy standards, press-ready proofs."
    }
  ],

  beyond: [
    {
      id: "by-biomimicry",
      title: "Biomimicry Habitat Modules & Sound Sculptures",
      category: "sketch",
      categoryLabel: "Sketches & Process",
      badge: "Experimental Concept",
      img: "assets/thumb_desktop_beyond.png",
      tools: ["Concept Sketching", "Spatial Modeling", "Acoustic Resonators"],
      desc: "Speculative architecture concept imagining organic living pods inspired by microscopic diatom shells with built-in acoustic resonators.",
      process: "Explored how natural shell geometry naturally amplifies harmonic wind frequencies to create calming ambient interior soundscapes."
    },
    {
      id: "by-clay",
      title: "Tactile 3D Clay Characters & Procedural Shaders",
      category: "clay",
      categoryLabel: "3D Clay & Shaders",
      badge: "3D Clay Exploration",
      img: "assets/thumb_desktop_about.png",
      tools: ["Blender 4.2", "Cycles", "Procedural Noise Shaders"],
      desc: "Whimsical clay character explorations rendered with procedural fingerprints, subtle subsurface scattering, and tactile glaze imperfections.",
      process: "Developed a custom procedural Blender Cycles shader node graph that accurately simulates physical clay molding marks without hand-sculpting each ridge."
    },
    {
      id: "by-calligraphy",
      title: "Masterclass Calligraphy & Hand-Lettering",
      category: "calligraphy",
      categoryLabel: "Masterclass Lettering",
      badge: "Workshop Creation",
      img: "assets/ChatGPT Image Aug 14, 2026, 01_56_25 AM.png",
      tools: ["Calligraphy Inks", "Reed Pens", "Narayana Bhattathiri Masterclass"],
      desc: "Experimental calligraphic explorations created during intensive masterclass with legendary calligrapher Narayana Bhattathiri.",
      process: "Studied Malayalam traditional script anatomy, exploring the expressive tension between heavy downstrokes and hairline crossbars."
    },
    {
      id: "by-ai",
      title: "AI for Youth Virtual Symposium (Intel-Powered)",
      category: "ai",
      categoryLabel: "AI For Youth",
      badge: "National Symposium",
      img: "assets/thumb_desktop_spatial.png",
      tools: ["Intel AI Tools", "Neural Diffusion", "Prompt Engineering"],
      desc: "Participated in the national AI for Youth Virtual Symposium (Intel-powered), exploring neural diffusion and parametric design ideation.",
      process: "Created hybrid human-AI ideation workflows that translate quick 2D thumbnail doodles into rich volumetric spatial moodboards."
    },
    {
      id: "by-sketch",
      title: "Sketchbook Chronicles & Raw Concept Ideation",
      category: "sketch",
      categoryLabel: "Sketches & Process",
      badge: "Process Work",
      img: "assets/thumb_desktop_beyond.png",
      tools: ["Moleskine Sketchbook", "Micron Pens", "Watercolor Washes"],
      desc: "Pages from personal sketchbooks: fast perspective thumbnailing, human flow diagrams, and structural event stage calculations.",
      process: "Every 3D project begins on paper with rapid 30-second perspective iterations to evaluate sightlines before touching 3D software."
    }
  ]
};

// ==========================================================================
// 1. SOLARI DESIGN TABBED FOLDER SYSTEM (PROJECTS) CONTROLLER
// Direct implementation of https://solari-design.framer.website/
// Contains 5 detailed case studies decoded from Internship Doc.pdf
// ==========================================================================

const SOLARI_PROJECTS_DATA = [
  {
    id: "emak",
    alias: ["emak-awards"],
    num: "01",
    tabName: "EMAK SILENT HEROES",
    stripItems: ["Awards Stage", "Hyatt Regency", "Fusion 360", "Thrissur Culture", "1 Week"],
    title: "EMAK Silent Heroes Awards 2026",
    subtitle: "Monumental Cultural Stage & Award Ceremony Architecture at Grand Ballroom, Hyatt Regency Thrissur",
    category: "3D Spatial / Awards Stage Design",
    color: "#c4b5fd",
    bg: "#faf5ff",
    accent: "#7c3aed",
    timeline: "1 Week (Rapid Turnaround)",
    venue: "Grand Ballroom, Hyatt Regency Thrissur",
    dimensions: "Stage: 60ft × 30ft | Venue: 100ft × 80ft | Seating: 600+ VIPs",
    client: "EMAK (Event Management Association of Kerala)",
    role: "Lead 3D Spatial & Stage Visualiser (Internship Project)",
    software: ["Autodesk Fusion 360", "SketchUp", "Adobe Photoshop"],
    tags: ["Awards Ceremony", "Cultural Motifs", "LED Scenography", "Sightline Engineering"],
    heroThumb: "assets/ChatGPT Image Aug 13, 2026, 11_32_08 AM.png",
    brief: "The brief was to create a grand, elegant, and visually engaging stage suitable for an award ceremony. The design had to complement the scale and ambience of the indoor venue while providing a strong focal point for presentations and award distribution. It needed to accommodate a large LED backdrop, multi-tier presenter podiums, and seamless backstage access for awardees while maintaining strict 600+ attendee sightline clearances across the 100 × 80 ft grand hall.",
    concept: "Inspired by the cultural richness of Thrissur. Elements such as elephants, vallam (snake boats), and Thrissur Pooram were combined with traditional motifs, geometric patterns, and a regal deep purple palette to create a contemporary yet culturally rooted awards-show experience. Multi-tier LED screens frame the stage, while high-gloss acrylic flooring reflects atmospheric cove lighting, establishing an elevated, prestigious aura.",
    execution: "Engineered parametric CAD frameworks to balance vertical clearance with ballroom chandeliers. Custom 3D decorative elephant silhouettes were modeled with backlighting to flank the central presentation screen. The award podium was ergonomically positioned to preserve unobstructed sightlines for both live attendees and broadcast camera angles.",
    materials: [
      "High-Gloss Black Acrylic Stage Flooring",
      "P3 High-Definition LED Display Panels",
      "Matte Gold CNC-Cut Aluminum Trims",
      "Backlit Perforated Cultural Motifs",
      "Concealed Warm-White & Purple Wash LED Strips",
      "Truss-Mounted Automated Spotlights"
    ],
    mediaTabs: [
      { id: "renders", label: "🖼️ 3D Visualisation Renders (5 Views)", type: "gallery" }
    ],
    renders: [
      { src: "assets/ChatGPT Image Aug 13, 2026, 11_32_08 AM.png", title: "EMAK Main Stage Perspective — Full Venue View" },
      { src: "assets/ChatGPT Image Aug 13, 2026, 11_34_15 AM.png", title: "Stage Lighting & 3/4 Perspective Scenography" },
      { src: "assets/ChatGPT Image Aug 13, 2026, 11_39_51 AM.png", title: "Podium & Presenter Sightline View" },
      { src: "assets/ChatGPT Image Aug 13, 2026, 11_42_01 AM.png", title: "Atmospheric Illumination & Chandelier Lighting" },
      { src: "assets/ChatGPT Image Aug 13, 2026, 04_24_01 PM.png", title: "Wide Angle Audience Perspective" }
    ]
  },
  {
    id: "neithi",
    alias: ["neithi-stall"],
    num: "02",
    tabName: "NEITHI STALL",
    stripItems: ["Handloom & Skincare", "Interactive Discovery", "Spin The Bottle", "3D Walkthrough", "2 Weeks"],
    title: "Neithi Exhibition Stall Design",
    subtitle: "Contemporary Commercial Brand Pavilion with Interactive Discovery & 3D Walkthrough Animation",
    category: "Commercial Exhibition / Spatial Merchandising",
    color: "#a7f3d0",
    bg: "#f0fdf4",
    accent: "#059669",
    timeline: "2 Weeks (Complete Modeling, Lighting & Animation Walkthrough)",
    venue: "Trade Expo Centre / Commercial Pavilion",
    dimensions: "6m × 4m Booth Perimeter (24 sqm footprint)",
    client: "Neithi Natural Hair & Skincare Brand",
    role: "3D Spatial Designer, Merchandiser & 3D Animator",
    software: ["Autodesk Fusion 360", "Blender", "Adobe Illustrator", "Premiere Pro"],
    tags: ["Commercial Expo", "Interactive Stations", "Product Merchandising", "3D Animation Walkthrough"],
    heroThumb: "assets/ChatGPT Image Aug 14, 2026, 01_08_56 AM.png",
    video: "assets/neithi full.mp4",
    videoCaption: "Neithi Full 3D Walkthrough Animation (Rendered in Blender Cycles & Fusion 360)",
    brief: "To conceptualize and develop a complete 3D exhibition stall for Neithi, an artisanal natural hair and skincare brand. The project scope spanned comprehensive space planning, product display architecture, sustainable material and lighting selection, branding integration, photorealistic 3D modeling, and a cinematic animation walkthrough detailing the customer discovery journey.",
    concept: "Designed around engaging, hands-on product discovery rather than passive browsing. Key experiential touchpoints include a gamified 'Spin the Bottle' prize wheel, custom bottle-shaped organic product shelving, and an oversized spinnable under-eye gel roller model. A dedicated vanity mirror and trial counter allowed visitors to test skincare formulations under flattering, diffused 4000K warm-white lighting.",
    execution: "Spatial circulation follows an intuitive U-shaped customer loop: inviting passersby from the main aisle with the oversized kinetic eye-gel sculpture, guiding them into the central tasting/trial vanity island, and concluding at the consultation cash-wrap. Organic curvilinear timber slats provide spatial warmth and semi-privacy while maintaining an open, airy stall atmosphere.",
    materials: [
      "Curved Light Birch Plywood Partitions",
      "Matte Textured Chalkboard Green Feature Walls",
      "Clear Acrylic Backlit Display Shelves",
      "Brushed Brass Hardware & Fixtures",
      "Flattering 4000K Diffused Vanity Ring Lights",
      "Living Botanical Greenery Planters"
    ],
    mediaTabs: [
      { id: "video", label: "🎬 3D Walkthrough Animation", type: "video" },
      { id: "renders", label: "🖼️ 3D Stall Renders (5 Views)", type: "gallery" }
    ],
    renders: [
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_08_56 AM.png", title: "Neithi Pavilion Isometric View & Main Entrance" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_12_50 AM.png", title: "Spin the Bottle Discovery Station & Vanity Mirror" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_14_40 AM.png", title: "Bottle-Shaped Organic Haircare Shelving" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_16_02 AM.png", title: "Oversized Spinnable Under-Eye Gel Model" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_19_45 AM.png", title: "Trial Island Counter & Product Tester Array" }
    ]
  },
  {
    id: "radiomango",
    alias: ["radio-mango", "thira"],
    num: "03",
    tabName: "RADIO MANGO THIRA",
    stripItems: ["Roadshow Stage Truck", "Cinema Spadikam", "Pulikali Imagery", "Video Reel", "1 Week"],
    title: "Radio Mango Thira 2026",
    subtitle: "Experiential Mobile Stage Architecture on a Heavy Commercial Vehicle Chassis",
    category: "Experiential Mobile Architecture / Roadshow",
    color: "#bae6fd",
    bg: "#f0f9ff",
    accent: "#0284c7",
    timeline: "1 Week (Dual Concepts, CAD Engineering & Animation Reel)",
    venue: "Kerala Statewide Street Roadshow",
    dimensions: "Bharath Benz Heavy Vehicle Chassis (Deploys to 22ft × 12ft Stage)",
    client: "Radio Mango 91.9 FM (Malayala Manorama)",
    role: "Lead 3D Experiential & Vehicular Stage Designer",
    software: ["Autodesk Fusion 360", "SketchUp", "Adobe Illustrator", "Photoshop"],
    tags: ["Mobile Truck Stage", "Cinema Spadikam", "Pulikali Folklore", "Dual Design Concepts", "Video Reel"],
    heroThumb: "assets/thira 1.1.png",
    video: "assets/thira video.mp4",
    videoCaption: "Radio Mango Thira 2026 Onam Roadshow Video Reel & Dynamic Visuals",
    brief: "An Onam-themed promotional roadshow designed to bring the energy and vibrancy of Kerala’s celebrations directly to public streets across multiple districts. The promotional truck had to function as a high-impact moving visual experience and a fold-out live performance stage, incorporating tiger-inspired elements, traditional Kerala motifs, high-wattage sound rigs, dynamic lighting, and bold Radio Mango branding.",
    concept: "Developed two comprehensive design directions for the client: Concept 01 reimagines the iconic Spadikam movie truck ('Chacko Mash truck') as an Onam-themed roadshow vehicle with bold Pulikali graphics, vibrant Onam colors, and integrated performance platforms. Concept 02 synthesizes traditional Kerala temple architecture (sloping gabled roofs, carved wooden pillars, Kathakali crown elements) with dynamic concert lighting.",
    execution: "Engineered fold-down hydraulic side walls that expand the truck deck into a 22ft × 12ft live performance stage in under 15 minutes. Integrated rooftop acoustic line arrays, weather-sealed LED panels, and under-chassis neon ground effects. Detailed fabrication specs were produced for the steel subframe, ensuring vehicular road-safety clearances while traveling at highway speeds.",
    materials: [
      "Reinforced Tubular Steel Stage Trussing",
      "Weather-Sealed Outdoor P4 LED Screens",
      "CNC-Cut Marine Grade Exterior Plywood",
      "High-Intensity Strobe & Par Can Stage Lights",
      "Kerala Sloped Gable Shingles with Teak Finish",
      "Reflective Vinyl Fleet Graphics"
    ],
    mediaTabs: [
      { id: "concept1", label: "Concept 01 — Spadikam Movie Truck (10 Renders)", type: "gallery", itemsKey: "concept1Renders" },
      { id: "concept2", label: "Concept 02 — Pulikali & Architecture (9 Renders)", type: "gallery", itemsKey: "concept2Renders" },
      { id: "video", label: "🎬 Roadshow Video Reel", type: "video" }
    ],
    concept1Renders: [
      { src: "assets/thira 1.1.png", title: "Concept 01 — Front Quarter View of Spadikam Roadshow Truck" },
      { src: "assets/thira 1.3.png", title: "Concept 01 — Stage Side Panel Deployed" },
      { src: "assets/thira 1.4.png", title: "Concept 01 — Rear Elevation & Radio Mango Branding" },
      { src: "assets/thira 1.5.png", title: "Concept 01 — Performance Platform & DJ Booth" },
      { src: "assets/thira 1.6.png", title: "Concept 01 — Street Perspective with Audience" },
      { src: "assets/thira 1.7.png", title: "Concept 01 — Night Illumination & Strobe Rigs" },
      { src: "assets/thira 1.8.png", title: "Concept 01 — Roof-Mounted Speaker & Truss Layout" },
      { src: "assets/thira 1.9.png", title: "Concept 01 — Pulikali Tiger Graphic Detailing" },
      { src: "assets/thira 1.10.png", title: "Concept 01 — Aerial Overview of Staging Geometry" }
    ],
    concept2Renders: [
      { src: "assets/Thira 2.1.png", title: "Concept 02 — Kerala Traditional Roof & Kathakali Crown Motif" },
      { src: "assets/Thira 2.2.png", title: "Concept 02 — Stage Wings & Wooden Eaves" },
      { src: "assets/Thira 2.3.png", title: "Concept 02 — Side Elevation in Transit Mode" },
      { src: "assets/Thira 2.4.png", title: "Concept 02 — Full Open Stage Performance Mode" },
      { src: "assets/Thira 2.5.png", title: "Concept 02 — Intricate Wooden Carvings & Brass Bell Trim" },
      { src: "assets/Thira 2.6.png", title: "Concept 02 — Night Performance Lighting Simulation" },
      { src: "assets/Thira 2.7.png", title: "Concept 02 — DJ Staging & Sound Reinforcement" },
      { src: "assets/Thira 2.8.png", title: "Concept 02 — 3D Cutaway of Mechanical Fold-Out System" },
      { src: "assets/Thira 2.9.png", title: "Concept 02 — Roadshow Showcase View" }
    ]
  },
  {
    id: "mandap",
    alias: ["hindu-mandap", "wedding-mandap", "madham"],
    num: "04",
    tabName: "HINDU WEDDING MANDAP",
    stripItems: ["Temple Architecture", "Tulasi Thara & Diyas", "Layered Roofs", "Floral Staging", "1 Week"],
    title: "Traditional Hindu Wedding Mandap",
    subtitle: "Sacred Ceremonial Stage Architecture Inspired by Kerala Temple Heritage & Koothambalam Structures",
    category: "Cultural Spatial Architecture / Wedding Stage",
    color: "#fef08a",
    bg: "#fefce8",
    accent: "#ca8a04",
    timeline: "1 Week (Volumetric CAD, Temple Research & Lighting)",
    venue: "Indoor Convention Centre / Grand Auditorium",
    dimensions: "40ft × 25ft Mandap Footprint (Layered 3-tier elevation)",
    client: "Private Wedding Commission / Luxury Event Production",
    role: "3D Wedding Stage Architect & Spatial Visualiser",
    software: ["Autodesk Fusion 360", "SketchUp", "Adobe Photoshop"],
    tags: ["Kerala Temple Architecture", "Tulasi Thara", "Layered Roofs", "Nilavilakku & Brass", "Mural Art"],
    heroThumb: "assets/ChatGPT Image Aug 14, 2026, 01_30_49 AM.png",
    brief: "Designing and visualising a majestic 3D wedding mandap for an indoor Hindu wedding ceremony. The goal was to establish a grand yet culturally rooted setting incorporating authentic Kerala temple architecture, traditional Nalukettu home aesthetics, and sacred Vedic spatial proportions suitable for a 2000+ guest wedding.",
    concept: "Draws direct inspiration from Kerala Koothambalam temple architecture and traditional ancestral Tharavadu homes. The mandap features layered gabled roofs adorned with wooden rafters, intricately sculpted pillars, authentic mural art panels, brass Nilavilakku lamps, an ornamental Tulasi Thara ceremonial centrepiece, and cascades of fresh marigold and tuberose garlands.",
    execution: "Constructed with a multi-tiered elevation to provide unobstructed sightlines for seated guests. Ambient lighting was tuned to a warm 2700K golden glow to evoke the spiritual serenity of an evening temple deeparadhana. The central homam pit area is engineered with concealed air circulation vents to safely disperse ceremonial smoke while preserving sacred atmosphere.",
    materials: [
      "Hand-Carved Teakwood Finish Columns & Rafters",
      "Traditional Terracotta Tile Textured Gabled Roofs",
      "Hand-Painted Kerala Mural Backdrop Canvases",
      "Solid Cast Brass Nilavilakku & Hanging Diyas",
      "Carved Granite Stone Tulasi Thara Pedestal",
      "Fresh Yellow Marigold, White Jasmine & Lotus Florals"
    ],
    mediaTabs: [
      { id: "renders", label: "🖼️ Mandap Visualisation Renders (5 Views)", type: "gallery" }
    ],
    renders: [
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_30_49 AM.png", title: "Mandap Frontal Perspective — Grand Temple Gopuram Roof" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_36_55 AM.png", title: "Pillar Detailing & Tulasi Thara Sacred Centrepiece" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_39_43 AM.png", title: "Mural Artwork Backdrop & Warm Golden Illumination" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_46_14 AM.png", title: "Ceremonial Seating & Floral Canopy Details" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_53_05 AM.png", title: "Wide Angle Auditorium Sightline & Guest Perspective" }
    ]
  },
  {
    id: "anime",
    alias: ["anime-birthday", "anime-party"],
    num: "05",
    tabName: "ANIME BIRTHDAY PARTY",
    stripItems: ["Naruto & Pokémon", "Layered Backdrops", "Neon Illumination", "Character Visuals", "1 Week"],
    title: "Anime Themed Birthday Celebration",
    subtitle: "Immersive Entertainment Realm Blending Naruto, Pokémon & Cyberpunk Lighting Design",
    category: "Experiential Event / Spatial Lighting Design",
    color: "#fbcfe8",
    bg: "#fff1f2",
    accent: "#db2777",
    timeline: "1 Week (Themed Concepts, Character Assets & 3D Stage)",
    venue: "Indoor Banquet Hall & Entertainment Pavilion",
    dimensions: "Stage: 32ft × 18ft | Activity & Photobooth Zone: 400 sqm",
    client: "Private Celebration Commission",
    role: "3D Themed Stage & Spatial Lighting Designer",
    software: ["Autodesk Fusion 360", "SketchUp", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Anime Stage", "Naruto & Pokémon", "Neon Flex Scenography", "Interactive Photo Ops", "Lighting Design"],
    heroThumb: "assets/ChatGPT Image Aug 14, 2026, 01_56_25 AM.png",
    brief: "To create an energetic, highly imaginative birthday celebration stage based on a contemporary anime theme. Developed entirely in 3D, the project required translating beloved animation aesthetics into a tangible physical space with themed backdrops, interactive photo zones, custom lighting, and themed catering stations.",
    concept: "Inspired by Naruto and Pokémon, incorporating vibrant energetic colors, dynamic comic-book action lines, layered multi-depth backdrops, and life-size character props. Personalized character visuals featuring the birthday child in custom Hokage anime attire added an unforgettable personal touch.",
    execution: "Designed a multi-plane stage featuring CNC-cut silhouettes illuminated with edge-lit LED neon flex strips. An interactive Ichiraku-inspired Ramen snack counter was placed adjacent to the stage, complemented by Pokéball lounge seating and custom manga dialogue bubble photo ops.",
    materials: [
      "High-Density CNC Precision Cut Foam & Acrylic Silhouettes",
      "Addressable Silicon LED Neon Flex Strips",
      "UV-Reactive Graphic Backdrops & Floor Vinyls",
      "Custom Torii Gate Wooden Arch Structures",
      "Matte Black Stage Platforms with Edge Glow",
      "DMX-Controlled RGB Ambient Strobes"
    ],
    mediaTabs: [
      { id: "renders", label: "🖼️ Themed Stage Renders (5 Views)", type: "gallery" }
    ],
    renders: [
      { src: "assets/ChatGPT Image Aug 14, 2026, 01_56_25 AM.png", title: "Anime Stage Hero Perspective — Naruto & Pokémon Set" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 02_06_30 AM.png", title: "Layered Backdrop Silhouettes & Neon Lighting" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 04_28_13 AM.png", title: "Ichiraku Ramen Bar & Interactive Activity Zone" },
      { src: "assets/ChatGPT Image Aug 14, 2026, 04_50_55 AM.png", title: "Photo Booth Backdrop & Torii Arch Detailing" },
      { src: "assets/ChatGPT Image Aug 13, 2026, 05_59_39 PM.png", title: "Banquet Hall Wide Angle Lighting Mood Simulation" }
    ]
  }
];

function initFileExplorer() {
  initSolariProjects();
}

function initSolariProjects() {
  const overviewView = document.getElementById('solari-overview-view');
  const detailView = document.getElementById('solari-detail-view');
  const detailBody = document.getElementById('solari-detail-body');
  const backBtn = document.getElementById('solari-back-btn');
  const switcherPills = document.querySelectorAll('.solari-nav-pill');
  const folderRows = document.querySelectorAll('.solari-folder-row');
  const allDeckCards = document.querySelectorAll('.solari-deck-card');

  let currentProjectId = null;
  let activeDeckProjectId = 'emak';

  function activateFolderRow(projId) {
    if (!projId) return;
    activeDeckProjectId = projId;

    folderRows.forEach(r => {
      const isMatch = r.getAttribute('data-project-id') === projId;
      r.classList.toggle('is-active', isMatch);
    });
  }

  // 1. Hover & Click listeners on folder rows
  const folderRowsContainer = document.getElementById('solari-folder-rows');
  if (folderRowsContainer) {
    folderRowsContainer.addEventListener('mouseleave', () => {
      if (!activeDeckProjectId || activeDeckProjectId === 'contact') {
        activateFolderRow('emak');
      }
    });

    // Seamless mouse navigation along the tab ears column
    folderRowsContainer.addEventListener('mousemove', (e) => {
      const containerRect = folderRowsContainer.getBoundingClientRect();
      if (e.clientX >= containerRect.left && e.clientX <= containerRect.left + 280) {
        folderRows.forEach(row => {
          const rRect = row.getBoundingClientRect();
          if (e.clientY >= rRect.top && e.clientY < rRect.bottom) {
            const pId = row.getAttribute('data-project-id');
            if (pId && pId !== activeDeckProjectId) {
              if (pId === 'contact') {
                folderRows.forEach(r => r.classList.toggle('is-active', r.getAttribute('data-project-id') === 'contact'));
                activeDeckProjectId = 'contact';
              } else {
                activateFolderRow(pId);
              }
            }
          }
        });
      }
    });
  }

  folderRows.forEach(row => {
    const projId = row.getAttribute('data-project-id');
    if (!projId) return;

    if (projId !== 'contact') {
      row.addEventListener('mouseenter', () => {
        activateFolderRow(projId);
      });

      row.addEventListener('click', (e) => {
        openSolariProject(projId);
      });

      const openAction = row.querySelector('.solari-strip-action');
      if (openAction) {
        openAction.addEventListener('click', (e) => {
          e.stopPropagation();
          openSolariProject(projId);
        });
      }
    } else {
      // Hovering Contact row: expand contact row, and hide project photo decks so contact buttons & email are fully visible
      row.addEventListener('mouseenter', () => {
        folderRows.forEach(r => {
          r.classList.toggle('is-active', r.getAttribute('data-project-id') === 'contact');
        });
        activeDeckProjectId = 'contact';
      });
    }
  });

  // 2. Click on any card across all project decks opens that project
  allDeckCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = card.getAttribute('data-project-id') || activeDeckProjectId || 'emak';
      openSolariProject(projId);
    });
  });

  // 3. Connect Base Row Action Buttons
  const resumeBtn = document.getElementById('solari-btn-resume');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof window.openWindow === 'function') {
        window.openWindow('window-resume');
      }
    });
  }

  const contactBtn = document.getElementById('solari-btn-contact');
  if (contactBtn) {
    contactBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof window.openWindow === 'function') {
        window.openWindow('window-mail');
      }
    });
  }

  // 4. Perched mascot speech click interactive easter egg
  const speechBubble = document.querySelector('.solari-mascot-speech');
  const speeches = [
    "Pick a project! ✦",
    "Check out EMAK Awards! ✦",
    "Radio Mango truck has wheels! ✦",
    "Look at the Mandap temple gables! ✦",
    "Anime party has neon lights! ✦"
  ];
  let speechIdx = 0;
  if (speechBubble) {
    speechBubble.addEventListener('click', () => {
      speechIdx = (speechIdx + 1) % speeches.length;
      speechBubble.textContent = speeches[speechIdx];
    });
  }

  // 2. Navigation switcher pills in detailed view
  switcherPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const projId = pill.getAttribute('data-project-id');
      if (projId) openSolariProject(projId);
    });
  });

  // 3. Back to All Projects Index button
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      closeSolariDetail();
    });
  }

  function closeSolariDetail() {
    if (window.soundSystem) window.soundSystem.playClick();
    // Pause any playing videos
    if (detailBody) {
      const videos = detailBody.querySelectorAll('video');
      videos.forEach(v => v.pause());
    }
    if (detailView) detailView.style.display = 'none';
    if (overviewView) overviewView.style.display = 'block';
    currentProjectId = null;

    // Scroll container to top
    const wrap = document.getElementById('solari-projects-wrap');
    if (wrap) wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const content = document.querySelector('.solari-window-content');
    if (content) content.scrollTop = 0;
  }

  // 4. Open specific project
  function openSolariProject(projId) {
    if (window.soundSystem) window.soundSystem.playClick();

    // Support aliases
    const proj = SOLARI_PROJECTS_DATA.find(p => p.id === projId || (p.alias && p.alias.includes(projId)));
    if (!proj) return;

    currentProjectId = proj.id;

    // Pause any previously playing videos
    if (detailBody) {
      detailBody.querySelectorAll('video').forEach(v => {
        try { v.pause(); } catch (_) {}
      });
    }

    // Toggle views
    if (overviewView) overviewView.style.display = 'none';
    if (detailView) detailView.style.display = 'block';

    // Update active nav pill
    switcherPills.forEach(pill => {
      pill.classList.toggle('active', pill.getAttribute('data-project-id') === proj.id);
    });

    // Render Case Study in detail body
    renderCaseStudy(proj);

    // Scroll to top
    const content = document.querySelector('.solari-window-content');
    if (content) content.scrollTop = 0;
  }

  // 5. Render detailed case study HTML
  function renderCaseStudy(proj) {
    if (!detailBody) return;

    // Compute previous and next project IDs
    const currentIndex = SOLARI_PROJECTS_DATA.findIndex(p => p.id === proj.id);
    const prevProj = currentIndex > 0 ? SOLARI_PROJECTS_DATA[currentIndex - 1] : SOLARI_PROJECTS_DATA[SOLARI_PROJECTS_DATA.length - 1];
    const nextProj = currentIndex < SOLARI_PROJECTS_DATA.length - 1 ? SOLARI_PROJECTS_DATA[currentIndex + 1] : SOLARI_PROJECTS_DATA[0];

    // Determine initial media tab
    const initialMediaTab = proj.mediaTabs && proj.mediaTabs.length > 0 ? proj.mediaTabs[0].id : 'renders';

    detailBody.innerHTML = `
      <div class="solari-case-card" style="--case-color: ${proj.color};">
        <!-- Hero Banner with Solari Color Blocking -->
        <div class="solari-case-hero">
          <div class="solari-case-index">Project ${proj.num} • ${proj.category}</div>
          <h2 class="solari-case-title">${proj.title}</h2>
          <p class="solari-case-subtitle">${proj.subtitle}</p>
          <div class="solari-case-meta-row">
            <span class="solari-meta-badge">⏱️ Timeline: ${proj.timeline}</span>
            <span class="solari-meta-badge">🏛️ Venue: ${proj.venue}</span>
            <span class="solari-meta-badge">🛠️ Tools: ${proj.software.join(', ')}</span>
            <span class="solari-meta-badge">🤝 Role: ${proj.role}</span>
          </div>
        </div>

        <div class="solari-case-content">
          
          <!-- Segmented Media Section Header & Switcher Tabs -->
          <div class="solari-media-tabs" id="solari-case-media-tabs">
            ${proj.mediaTabs.map((t, idx) => `
              <button class="solari-media-tab-btn ${idx === 0 ? 'active' : ''}" data-tab-id="${t.id}">
                ${t.label}
              </button>
            `).join('')}
          </div>

          <!-- Dynamic Media Panels Container -->
          <div class="solari-media-panels" id="solari-case-media-panels">
            ${renderMediaPanelsHTML(proj, initialMediaTab)}
          </div>

          <!-- Narrative 2-Column Grid -->
          <div class="solari-sections-grid">
            <!-- Left: The Narrative Story -->
            <div class="solari-sections-left">
              <div class="solari-section-block">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${proj.color}" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                  <span>The Brief & Venue Requirements</span>
                </h3>
                <p>${proj.brief}</p>
              </div>

              <div class="solari-section-block">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${proj.color}" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>
                  <span>Design Concept & Cultural Roots</span>
                </h3>
                <p>${proj.concept}</p>
              </div>

              <div class="solari-section-block">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${proj.color}" stroke-width="2.5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                  <span>Spatial Modeling & Technical Execution</span>
                </h3>
                <p>${proj.execution}</p>
              </div>
            </div>

            <!-- Right: Project Specifications & Construction Elements -->
            <div class="solari-sections-right">
              <div class="solari-section-block">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${proj.color}" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                  <span>Project Specifications</span>
                </h3>
                <div class="solari-specs-list">
                  <div class="solari-spec-row">
                    <span class="solari-spec-label">Client / Org</span>
                    <span class="solari-spec-value">${proj.client}</span>
                  </div>
                  <div class="solari-spec-row">
                    <span class="solari-spec-label">Timeline</span>
                    <span class="solari-spec-value">${proj.timeline}</span>
                  </div>
                  <div class="solari-spec-row">
                    <span class="solari-spec-label">Scale & Footprint</span>
                    <span class="solari-spec-value">${proj.dimensions}</span>
                  </div>
                  <div class="solari-spec-row">
                    <span class="solari-spec-label">Primary Software</span>
                    <span class="solari-spec-value">${proj.software.join(' • ')}</span>
                  </div>
                  <div class="solari-spec-row">
                    <span class="solari-spec-label">Source Document</span>
                    <span class="solari-spec-value">Internship Doc.pdf (Original)</span>
                  </div>
                </div>
              </div>

              <div class="solari-section-block">
                <h3>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${proj.color}" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span>Materials & Features</span>
                </h3>
                <div class="solari-materials-tags">
                  ${proj.materials.map(m => `<span class="solari-mat-pill">${m}</span>`).join('')}
                </div>
              </div>

              <div class="solari-section-block" style="text-align: center;">
                <div style="font-weight: 800; font-size: 0.95rem; margin-bottom: 6px; color: #1c1917;">Interested in Spatial & 3D Commissions?</div>
                <p style="font-size: 0.84rem; color: #78716c; margin-bottom: 14px;">Aleesha is open to 3D stage design, exhibition pavilions, and visual communication roles.</p>
                <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
                  <a href="${PORTFOLIO_DATA.profile.behance}" target="_blank" rel="noopener noreferrer" class="solari-back-btn" style="text-decoration:none; background:#0057ff; color:#fff; border-color:#0057ff; font-size:0.8rem; padding:6px 14px; display:inline-flex; align-items:center; gap:6px;">
                    <img src="assets/behance.jpg" alt="Behance" style="width:14px; height:14px; border-radius:3px; object-fit:cover;">
                    <span>View on Behance</span>
                  </a>
                  <a href="${PORTFOLIO_DATA.profile.linkedin}" target="_blank" rel="noopener noreferrer" class="solari-back-btn" style="text-decoration:none; background:#0a66c2; color:#fff; border-color:#0a66c2; font-size:0.8rem; padding:6px 14px; display:inline-flex; align-items:center; gap:6px;">
                    <img src="assets/LinkedIn_icon.svg.webp" alt="LinkedIn" style="width:14px; height:14px; border-radius:3px; object-fit:cover;">
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:${PORTFOLIO_DATA.profile.email}" class="solari-back-btn" style="text-decoration:none; font-size:0.8rem; padding:6px 14px;">
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Next / Previous Project Footer Navigation -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #f5f5f4; padding-top: 24px; margin-top: 16px; flex-wrap: wrap; gap: 12px;">
            <button class="solari-back-btn" id="solari-prev-proj-btn" data-project-id="${prevProj.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              <span>Prev: ${prevProj.num} ${prevProj.tabName}</span>
            </button>
            <button class="solari-back-btn" id="solari-detail-index-btn">
              <span>Back to Overview Folders</span>
            </button>
            <button class="solari-back-btn" id="solari-next-proj-btn" data-project-id="${nextProj.id}">
              <span>Next: ${nextProj.num} ${nextProj.tabName}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

        </div>
      </div>
    `;

    // Bind media tab buttons
    const mediaTabBtns = detailBody.querySelectorAll('.solari-media-tab-btn');
    mediaTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab-id');
        mediaTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Pause running videos when switching away from video tab
        const videos = detailBody.querySelectorAll('video');
        if (tabId !== 'video') {
          videos.forEach(v => v.pause());
        }

        // Show/hide corresponding panels
        const panels = detailBody.querySelectorAll('.solari-media-panel');
        panels.forEach(p => {
          p.style.display = p.getAttribute('data-panel-id') === tabId ? 'block' : 'none';
        });
      });
    });

    // Bind next/previous buttons
    const prevBtn = detailBody.querySelector('#solari-prev-proj-btn');
    const nextBtn = detailBody.querySelector('#solari-next-proj-btn');
    const indexBtn = detailBody.querySelector('#solari-detail-index-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        openSolariProject(prevBtn.getAttribute('data-project-id'));
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        openSolariProject(nextBtn.getAttribute('data-project-id'));
      });
    }
    if (indexBtn) {
      indexBtn.addEventListener('click', () => {
        closeSolariDetail();
      });
    }

    // Bind gallery render items to Lightbox
    const galleryItems = detailBody.querySelectorAll('.solari-gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('.solari-gallery-img');
        const title = item.getAttribute('data-render-title') || img.alt || '3D Render Preview';
        if (img) openLightbox(img.src, title);
      });
    });
  }

  // 6. Helper to generate Media Panels HTML
  function renderMediaPanelsHTML(proj, activeTabId) {
    let html = '';

    // If project has video
    if (proj.video) {
      const isVisible = activeTabId === 'video';
      html += `
        <div class="solari-media-panel" data-panel-id="video" style="display: ${isVisible ? 'block' : 'none'};">
          <div class="solari-video-container">
            <video class="solari-video-player" controls playsinline preload="metadata">
              <source src="${proj.video}" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <div class="solari-video-caption">
              <span>${proj.videoCaption || 'Walkthrough Video Presentation'}</span>
              <span style="font-size:0.75rem; color:#94a3b8;">High-Definition 3D Playback</span>
            </div>
          </div>
        </div>
      `;
    }

    // Concept 1 gallery for Thira
    if (proj.concept1Renders) {
      const isVisible = activeTabId === 'concept1';
      html += `
        <div class="solari-media-panel" data-panel-id="concept1" style="display: ${isVisible ? 'block' : 'none'};">
          <div class="solari-gallery-grid">
            ${proj.concept1Renders.map(r => `
              <div class="solari-gallery-item" data-render-title="${r.title}">
                <img src="${r.src}" alt="${r.title}" class="solari-gallery-img" loading="lazy">
                <div class="solari-gallery-zoom-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>Zoom</span>
                </div>
                <div class="solari-gallery-overlay">
                  <span>${r.title}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Concept 2 gallery for Thira
    if (proj.concept2Renders) {
      const isVisible = activeTabId === 'concept2';
      html += `
        <div class="solari-media-panel" data-panel-id="concept2" style="display: ${isVisible ? 'block' : 'none'};">
          <div class="solari-gallery-grid">
            ${proj.concept2Renders.map(r => `
              <div class="solari-gallery-item" data-render-title="${r.title}">
                <img src="${r.src}" alt="${r.title}" class="solari-gallery-img" loading="lazy">
                <div class="solari-gallery-zoom-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>Zoom</span>
                </div>
                <div class="solari-gallery-overlay">
                  <span>${r.title}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Default renders gallery (for EMAK, Neithi, Mandap, Anime)
    if (proj.renders) {
      const isVisible = activeTabId === 'renders';
      html += `
        <div class="solari-media-panel" data-panel-id="renders" style="display: ${isVisible ? 'block' : 'none'};">
          <div class="solari-gallery-grid">
            ${proj.renders.map(r => `
              <div class="solari-gallery-item" data-render-title="${r.title}">
                <img src="${r.src}" alt="${r.title}" class="solari-gallery-img" loading="lazy">
                <div class="solari-gallery-zoom-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  <span>Zoom</span>
                </div>
                <div class="solari-gallery-overlay">
                  <span>${r.title}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    return html;
  }

  // 7. Lightbox viewer handlers
  function openLightbox(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = caption || 'High-Resolution 3D Render';
    lightbox.classList.add('open');
    if (window.soundSystem) window.soundSystem.playClick();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    if (lightboxImg) lightboxImg.src = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });

  // Global window functions for interop with desktop icons and start menu
  window.openSolariProject = openSolariProject;
  window.openCaseStudy = function(projId) {
    if (window.windowManager) {
      window.windowManager.open('projects');
    }
    openSolariProject(projId);
  };
}

// ==========================================================================
// 2. 3D & SPATIAL STUDIO CONTROLLER
// ==========================================================================
function init3DStudio() {
  const sceneBtns = document.querySelectorAll('.scene-btn');
  const stageModel = document.getElementById('viewport-stage-model');
  const sceneNameEl = document.getElementById('viewport-scene-name');
  const wireframeBtn = document.getElementById('wireframe-toggle-btn');

  const tabViewport = document.getElementById('btn-tab-viewport');
  const tabVideo = document.getElementById('btn-tab-video');
  const tabGallery = document.getElementById('btn-tab-gallery');

  const panelViewport = document.getElementById('studio-viewport-panel');
  const panelVideo = document.getElementById('studio-video-panel');
  const panelGallery = document.getElementById('studio-gallery-panel');
  const embeddedVideo = document.getElementById('studio-embedded-video');

  function switchTab(activeTab) {
    if (tabViewport) tabViewport.classList.toggle('active', activeTab === 'viewport');
    if (tabVideo) tabVideo.classList.toggle('active', activeTab === 'video');
    if (tabGallery) tabGallery.classList.toggle('active', activeTab === 'gallery');

    if (panelViewport) panelViewport.style.display = activeTab === 'viewport' ? 'flex' : 'none';
    if (panelVideo) panelVideo.classList.toggle('active', activeTab === 'video');
    if (panelGallery) panelGallery.classList.toggle('active', activeTab === 'gallery');

    if (embeddedVideo) {
      if (activeTab === 'video') {
        embeddedVideo.play().catch(() => {});
      } else {
        embeddedVideo.pause();
      }
    }
  }

  if (tabViewport) tabViewport.addEventListener('click', () => switchTab('viewport'));
  if (tabVideo) tabVideo.addEventListener('click', () => switchTab('video'));
  if (tabGallery) tabGallery.addEventListener('click', () => switchTab('gallery'));

  let isWireframe = false;

  const sceneData = {
    truck: {
      name: "Radio Mango × Bharath Benz Stage (Blender)",
      poly: "148,220 Tris",
      lights: "12 Spotlights + 4 LED Panels",
      engine: "Blender Cycles GPU"
    },
    awards: {
      name: "EMAK Silent Hero Awards 60x30ft Stage",
      poly: "320,450 Tris",
      lights: "24 Moving Heads + 3 LED Backdrops",
      engine: "Blender Cycles GPU"
    },
    stall: {
      name: "Neithi Exhibition Stall Pavilion",
      poly: "98,600 Tris",
      lights: "8 Warm Directional Fixtures",
      engine: "Blender Eevee Next"
    },
    avatar: {
      name: "Aleesha 3D Figurine & Motion Rig",
      poly: "84,300 Tris",
      lights: "Studio 3-Point Key & Fill Lighting",
      engine: "3D Viewport Character Preview",
      isAvatar: true
    }
  };

  sceneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sceneBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const scene = btn.getAttribute('data-scene');
      const data = sceneData[scene] || sceneData.truck;

      if (sceneNameEl) sceneNameEl.textContent = data.name;
      const polyEl = document.getElementById('viewport-poly-count');
      if (polyEl) polyEl.textContent = data.poly;

      // Small visual pulse to simulate model reload
      if (stageModel) {
        if (data.isAvatar) {
          stageModel.innerHTML = `
            <div class="model-cube" style="border:none; background:transparent; box-shadow:none;">
              <img src="assets/avatar_3d.png" alt="Aleesha 3D" style="height:210px; object-fit:contain; filter:drop-shadow(0 15px 25px rgba(0,0,0,0.6));">
              <div style="font-size:0.75rem; color:#fff; font-weight:600; margin-top:6px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:10px;">Aleesha 3D Vinyl Model</div>
            </div>
          `;
        } else {
          stageModel.innerHTML = `
            <div class="model-cube">
              <div style="font-size: 2.8rem; margin-bottom: 8px;">🎪</div>
              <h3 style="font-size: 1.1rem; color: #fff;">${data.name}</h3>
              <p style="font-size: 0.75rem; color: #cbd5e1; margin-top: 4px;">Dynamic Lighting • Scale Calibration • Sightline Rays</p>
            </div>
          `;
        }
        stageModel.style.transform = 'scale(0.85)';
        setTimeout(() => {
          stageModel.style.transform = '';
        }, 150);
      }
    });
  });

  if (wireframeBtn) {
    wireframeBtn.addEventListener('click', () => {
      isWireframe = !isWireframe;
      const cubes = document.querySelectorAll('.model-cube');
      cubes.forEach(c => {
        c.style.background = isWireframe ? 'transparent' : 'rgba(244, 63, 94, 0.06)';
        c.style.borderStyle = isWireframe ? 'dashed' : 'solid';
      });
      wireframeBtn.textContent = isWireframe ? 'Shaded Mode' : 'Wireframe Mode';
    });
  }
}

// ==========================================================================
// 3. POWERSHELL / TERMINAL CONTROLLER
// ==========================================================================
function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  if (!input || !output) return;

  function printLine(text, cls = '') {
    const div = document.createElement('div');
    div.className = `term-line ${cls}`;
    div.textContent = text;
    output.appendChild(div);
    output.scrollTop = output.scrollHeight;
  }

  const commands = {
    help: () => {
      printLine("Available commands:", "accent");
      printLine("  about        - View Aleesha's bio and background");
      printLine("  projects     - List all featured design projects");
      printLine("  skills       - Show technical skills & 3D software");
      printLine("  resume       - Open or read resume summary");
      printLine("  contact      - Display email, phone, and social handles");
      printLine("  whoami       - Display current system profile");
      printLine("  date         - Print current system date and time");
      printLine("  matrix       - Run digital stream simulation");
      printLine("  clear        - Clear the terminal console");
    },
    about: () => {
      printLine("ALEESHA K. L. — 3D Visual & Experience Designer", "accent");
      printLine("Pursuing B.Des in Fashion Communication at NIFT Kannur (CGPA: 8.6/10).");
      printLine("Specializes in Blender 3D stage visualisations, exhibition stalls, UI/UX, and spatial narratives.");
    },
    projects: () => {
      printLine("FEATURED PROJECTS:", "accent");
      PORTFOLIO_DATA.projects.forEach((p, idx) => {
        printLine(`  [${idx + 1}] ${p.title} (${p.category}) — ${p.tools.join(', ')}`, "success");
      });
    },
    skills: () => {
      printLine("TECHNICAL SKILLS:", "accent");
      printLine("  3D & Spatial: Blender, Autodesk Fusion, SketchUp, Coohom, AR/VR");
      printLine("  UI/UX & Prototyping: Figma, Wireframing, WCAG, Design Systems");
      printLine("  Visual & Editorial: Adobe InDesign, Photoshop, Illustrator, Lightroom");
      printLine("  Web & Video: Premiere Pro, CapCut, HTML, CSS");
    },
    contact: () => {
      printLine("CONTACT DETAILS:", "accent");
      printLine(`  Email:    ${PORTFOLIO_DATA.profile.email}`);
      printLine(`  Phone:    ${PORTFOLIO_DATA.profile.phone}`);
      printLine(`  Behance:  ${PORTFOLIO_DATA.profile.behance}`);
      printLine(`  LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}`);
    },
    resume: () => {
      printLine("Opening Resume Viewer...", "success");
      if (window.windowManager) window.windowManager.open('resume');
    },
    whoami: () => {
      printLine("user: aleesha_guest | role: visitor | os: AleeshaOS v2026.1", "cmd");
    },
    date: () => {
      printLine(new Date().toString(), "cmd");
    },
    matrix: () => {
      printLine("Wake up, Neo... Aleesha's 3D engine has you.", "success");
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          printLine(`01010100 01101000 01110010 01100101 01100101 01000100 [BLENDER_OK]`, "success");
        }, i * 200);
      }
    },
    clear: () => {
      output.innerHTML = '';
      printLine("Aleesha OS PowerShell [Version 10.0.22621.1]", "cmd");
      printLine("Type 'help' for a list of portfolio commands.\n", "cmd");
    },
    cls: () => commands.clear(),
    ls: () => commands.projects(),
    dir: () => commands.projects(),
    exit: () => {
      printLine("Closing terminal session...", "cmd");
      if (window.windowManager) window.windowManager.close('terminal');
    },
    mail: () => {
      printLine("Opening Windows Mail...", "success");
      if (window.windowManager) window.windowManager.open('mail');
    },
    studio: () => {
      printLine("Launching 3D & Spatial Studio...", "success");
      if (window.windowManager) window.windowManager.open('studio3d');
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value.trim().toLowerCase();
      input.value = '';
      if (!val) return;

      printLine(`PS C:\\Users\\Aleesha> ${val}`, 'cmd');

      if (commands[val]) {
        commands[val]();
      } else {
        printLine(`'${val}' is not recognized as an internal or external command. Type 'help' for available commands.`, 'warn');
      }
    }
  });
}

// ==========================================================================
// 4. GROOVE MUSIC / MEDIA PLAYER CONTROLLER
// ==========================================================================
function initGroovePlayer() {
  const playBtn = document.getElementById('groove-play-btn');
  const vinyl = document.getElementById('groove-vinyl');
  const trackTitle = document.getElementById('groove-track-title');
  let isPlaying = false;
  let musicInterval = null;
  let chordStep = 0;

  const tracks = [
    { title: "Kochi Sunset Shaders (Lo-Fi)", artist: "Aleesha Chill Beats" },
    { title: "Blender Viewport Ambient Loop", artist: "Cycles Engine" },
    { title: "Kannur Handloom Reverie", artist: "Spatial Soundscape" }
  ];
  let currentTrackIdx = 0;

  function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      if (vinyl) vinyl.classList.add('playing');
      if (playBtn) playBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`;
      
      // Start Web Audio LoFi synthesizer
      if (window.soundSystem) {
        window.soundSystem.playLoFiChord(chordStep++);
        musicInterval = setInterval(() => {
          window.soundSystem.playLoFiChord(chordStep++);
        }, 2800);
      }
    } else {
      if (vinyl) vinyl.classList.remove('playing');
      if (playBtn) playBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
      if (musicInterval) clearInterval(musicInterval);
    }
  }

  if (playBtn) {
    playBtn.addEventListener('click', togglePlay);
  }

  const nextBtn = document.getElementById('groove-next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTrackIdx = (currentTrackIdx + 1) % tracks.length;
      if (trackTitle) trackTitle.textContent = tracks[currentTrackIdx].title;
      if (isPlaying) {
        if (window.soundSystem) window.soundSystem.playLoFiChord(chordStep++);
      }
    });
  }
}

// ==========================================================================
// 5. CONTACT & MAIL CLIENT CONTROLLER
// ==========================================================================
function initMailClient() {
  const sendBtn = document.getElementById('mail-send-btn');
  const nameInput = document.getElementById('mail-name-input');
  const emailInput = document.getElementById('mail-email-input');
  const msgInput = document.getElementById('mail-msg-input');
  const statusMsg = document.getElementById('mail-status-msg');
  const gmailDirectBtn = document.getElementById('mail-gmail-direct-btn');

  // Dynamically update the direct Gmail Web link as user types
  function updateGmailLink() {
    if (!gmailDirectBtn) return;
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const msg = msgInput ? msgInput.value.trim() : '';
    const subject = name ? `Portfolio Inquiry from ${name}` : 'Portfolio Inquiry for Aleesha';
    const bodyText = msg ? (msg + (email ? `\n\nReply to: ${email}` : '')) : '';
    gmailDirectBtn.href = `https://mail.google.com/mail/?view=cm&fs=1&to=aleeshakl2495@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
  }

  if (nameInput) nameInput.addEventListener('input', updateGmailLink);
  if (emailInput) emailInput.addEventListener('input', updateGmailLink);
  if (msgInput) msgInput.addEventListener('input', updateGmailLink);
  updateGmailLink();

  // Global helper to open Windows Mail app and focus compose box
  window.openMailClientApp = function(options = {}) {
    if (window.soundSystem) window.soundSystem.playClick();
    if (window.windowManager) {
      window.windowManager.open('mail');
      window.windowManager.bringToFront('mail');
    }
    setTimeout(() => {
      const msgField = document.getElementById('mail-msg-input');
      const nameField = document.getElementById('mail-name-input');
      if (options.msg && msgField) msgField.value = options.msg;
      if (nameField && !nameField.value) nameField.focus();
      else if (msgField) msgField.focus();
    }, 200);

    if (window.showToast) {
      window.showToast("Windows Mail", "Ready to write and send to aleeshakl2495@gmail.com");
    }
  };

  // Connect all 'Send Mail' / 'Send Direct Email' buttons across the site to open Mail app
  const mailTriggers = document.querySelectorAll('#resume-direct-email-btn, .res-direct-email-badge, .resume-cta-btn, #about-send-email-btn, .resume-email-btn');
  mailTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      window.openMailClientApp();
    });
  });

  if (sendBtn) {
    sendBtn.addEventListener('click', async () => {
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const msg = msgInput ? msgInput.value.trim() : '';

      if (!name) {
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.background = '#fef2f2';
          statusMsg.style.color = '#b91c1c';
          statusMsg.style.border = '1px solid #fecaca';
          statusMsg.innerHTML = '⚠️ Please enter your name.';
        }
        if (window.showToast) window.showToast('Name Required', 'Please enter your name.');
        if (nameInput) nameInput.focus();
        return;
      }
      if (!email || !email.includes('@')) {
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.background = '#fef2f2';
          statusMsg.style.color = '#b91c1c';
          statusMsg.style.border = '1px solid #fecaca';
          statusMsg.innerHTML = '⚠️ Please enter a valid email address so Aleesha can reply to you.';
        }
        if (window.showToast) window.showToast('Valid Email Required', 'Please enter a valid reply email address.');
        if (emailInput) emailInput.focus();
        return;
      }
      if (!msg) {
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.background = '#fef2f2';
          statusMsg.style.color = '#b91c1c';
          statusMsg.style.border = '1px solid #fecaca';
          statusMsg.innerHTML = '⚠️ Please enter your message brief.';
        }
        if (window.showToast) window.showToast('Message Required', 'Please enter your message brief.');
        if (msgInput) msgInput.focus();
        return;
      }

      // Show sending state
      const originalBtnHTML = sendBtn.innerHTML;
      sendBtn.disabled = true;
      sendBtn.style.opacity = '0.75';
      sendBtn.innerHTML = `<span>Sending to Aleesha... ✉️</span>`;

      if (statusMsg) {
        statusMsg.style.display = 'block';
        statusMsg.style.background = '#f0f9ff';
        statusMsg.style.color = '#0284c7';
        statusMsg.style.border = '1px solid #bae6fd';
        statusMsg.innerHTML = 'Sending your message directly to <strong>aleeshakl2495@gmail.com</strong>...';
      }

      try {
        // Send email directly to Aleesha via FormSubmit API
        const response = await fetch('https://formsubmit.co/ajax/aleeshakl2495@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: msg,
            _subject: `New Portfolio Message from ${name} (${email})`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const result = await response.json();

        // Email successfully dispatched to aleeshakl2495@gmail.com
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.background = '#f0fdf4';
          statusMsg.style.color = '#15803d';
          statusMsg.style.border = '1px solid #bbf7d0';
          statusMsg.innerHTML = `
            <strong>✓ Message Sent Successfully!</strong><br>
            Your email has been delivered directly to <strong>aleeshakl2495@gmail.com</strong>. Aleesha will receive it in her inbox and reply to you at <strong>${email}</strong> shortly.
          `;
        }

        if (window.showToast) {
          window.showToast("Email Sent to Aleesha! 🎉", "Your message was delivered to aleeshakl2495@gmail.com");
        }

        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (msgInput) msgInput.value = '';
        updateGmailLink();

        sendBtn.innerHTML = `<span>✓ Sent Successfully!</span>`;
        setTimeout(() => {
          sendBtn.disabled = false;
          sendBtn.style.opacity = '1';
          sendBtn.innerHTML = originalBtnHTML;
        }, 5000);

      } catch (err) {
        console.warn("Direct submission notice:", err);
        const gmailFallback = `https://mail.google.com/mail/?view=cm&fs=1&to=aleeshakl2495@gmail.com&su=${encodeURIComponent('Portfolio Inquiry from ' + name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + ' (' + email + ')')}`;
        
        if (statusMsg) {
          statusMsg.style.display = 'block';
          statusMsg.style.background = '#fef2f2';
          statusMsg.style.color = '#991b1b';
          statusMsg.style.border = '1px solid #fecaca';
          statusMsg.innerHTML = `
            Network notice: <a href="${gmailFallback}" target="_blank" style="color:#b91c1c; font-weight:700; text-decoration:underline;">Click here to send directly via Gmail Web</a> or check your internet connection.
          `;
        }

        // Open Gmail Web directly in new tab as guaranteed delivery fallback
        window.open(gmailFallback, '_blank');

        sendBtn.disabled = false;
        sendBtn.style.opacity = '1';
        sendBtn.innerHTML = originalBtnHTML;
      }
    });
  }
}

// ==========================================================================
// 6. RECYCLE BIN EASTER EGGS
// ==========================================================================
function initRecycleBin() {
  const emptyBtn = document.getElementById('bin-empty-btn');
  const binGrid = document.getElementById('bin-grid');

  if (emptyBtn && binGrid) {
    emptyBtn.addEventListener('click', () => {
      binGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">
          <p style="font-size: 1.2rem; margin-bottom: 6px;">🗑️ Recycle Bin is Empty</p>
          <p style="font-size: 0.8rem;">All boring templates and bad design habits have been permanently deleted!</p>
        </div>
      `;
      if (window.showToast) {
        window.showToast("Recycle Bin Emptied", "Clean workspace ready for fresh 3D renders.");
      }
    });
  }
}

// ==========================================================================
// 7. PHOTOGRAPHY GALLERY (PHOTOS APP)
// ==========================================================================
function initPhotography() {
  const container = document.getElementById('photo-cards-container');
  const tabs = document.querySelectorAll('[data-photo-filter]');
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDetails = document.getElementById('lightbox-details');

  let currentFilter = 'all';

  function renderPhotos() {
    if (!container || !PORTFOLIO_DATA.photography) return;
    container.innerHTML = '';

    const filtered = PORTFOLIO_DATA.photography.filter(p => {
      return currentFilter === 'all' || p.category === currentFilter;
    });

    filtered.forEach(photo => {
      const card = document.createElement('div');
      card.className = 'photo-card';
      card.innerHTML = `
        <div class="photo-card-img-wrap">
          <img src="${photo.img}" alt="${photo.title}" class="photo-card-img">
          <span class="photo-card-badge">${photo.categoryLabel}</span>
        </div>
        <div class="photo-card-info">
          <div class="photo-card-title">${photo.title}</div>
          <div class="photo-card-sub">${photo.desc}</div>
          <div class="photo-card-meta">📷 ${photo.camera}</div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(photo));
      container.appendChild(card);
    });
  }

  function openLightbox(photo) {
    if (!lightbox) return;
    if (lightboxImg) lightboxImg.src = photo.img;
    if (lightboxTitle) lightboxTitle.textContent = photo.title;
    if (lightboxDetails) {
      lightboxDetails.innerHTML = `
        <span class="photo-card-badge" style="position:static; display:inline-block; margin-bottom:4px;">${photo.categoryLabel}</span>
        <h3 style="color:#fff; font-size:1.15rem; margin:0;">${photo.title}</h3>
        <p style="color:#cbd5e1; font-size:0.85rem; line-height:1.5;">${photo.desc}</p>
        
        <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.1); border-radius:8px; padding:12px; margin-top:8px;">
          <div style="font-size:0.75rem; color:#94a3b8; font-weight:600; text-transform:uppercase; margin-bottom:6px;">Camera & Craft Specifications</div>
          <div style="font-size:0.8rem; color:#fff; margin-bottom:4px;"><strong>Gear:</strong> ${photo.camera}</div>
          <div style="font-size:0.8rem; color:#fff; margin-bottom:4px;"><strong>Settings:</strong> ${photo.settings}</div>
          <div style="font-size:0.8rem; color:#fff;"><strong>Location:</strong> ${photo.location}</div>
        </div>

        <div style="margin-top:10px;">
          <div style="font-size:0.75rem; color:#94a3b8; font-weight:600; text-transform:uppercase; margin-bottom:4px;">Creative Narrative & Visual Direction</div>
          <p style="font-size:0.8rem; color:#cbd5e1; line-height:1.5;">${photo.process}</p>
        </div>
      `;
    }
    lightbox.classList.add('open');
  }

  function closePhotoLightbox() {
    if (lightbox) {
      lightbox.classList.remove('open');
      if (lightboxImg) lightboxImg.src = '';
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closePhotoLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closePhotoLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      closePhotoLightbox();
    }
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-photo-filter') || 'all';
      renderPhotos();
    });
  });

  renderPhotos();
}

// ==========================================================================
// 8. VISUAL PLAYGROUND (UI/UX, BRANDING, PACKAGING)
// ==========================================================================
function initVisualPlayground() {
  const container = document.getElementById('playground-cards-container');
  const tabs = document.querySelectorAll('[data-pg-filter]');

  let currentFilter = 'all';

  function renderPlayground() {
    if (!container || !PORTFOLIO_DATA.playground) return;
    container.innerHTML = '';

    const filtered = PORTFOLIO_DATA.playground.filter(item => {
      return currentFilter === 'all' || item.category === currentFilter;
    });

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'playground-card';
      card.innerHTML = `
        <div class="playground-img-wrap">
          <img src="${item.img}" alt="${item.title}" class="playground-img">
          <span class="photo-card-badge">${item.categoryLabel}</span>
        </div>
        <div class="playground-info">
          <div class="playground-title">${item.title}</div>
          <div class="playground-desc">${item.desc}</div>
          <div style="font-size:0.72rem; color:#0284c7; font-weight:500; margin-top:4px;">Deliverables: ${item.deliverables}</div>
          <div class="playground-tags">
            ${item.tools.map(t => `<span class="playground-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (item.projectRef && window.openCaseStudy) {
          window.openCaseStudy(item.projectRef);
        } else if (window.showToast) {
          window.showToast(item.title, item.desc);
        }
      });

      container.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-pg-filter') || 'all';
      renderPlayground();
    });
  });

  renderPlayground();
}

// ==========================================================================
// 9. BEYOND THE BRIEF (EXPERIMENTAL LAB)
// ==========================================================================
function initBeyondTheBrief() {
  const container = document.getElementById('beyond-cards-container');
  const tabs = document.querySelectorAll('[data-by-filter]');

  let currentFilter = 'all';

  function renderBeyond() {
    if (!container || !PORTFOLIO_DATA.beyond) return;
    container.innerHTML = '';

    const filtered = PORTFOLIO_DATA.beyond.filter(item => {
      return currentFilter === 'all' || item.category === currentFilter;
    });

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'beyond-card';
      card.innerHTML = `
        <div class="beyond-img-wrap">
          <img src="${item.img}" alt="${item.title}" class="beyond-img">
        </div>
        <div class="beyond-info">
          <span class="beyond-badge">${item.badge}</span>
          <div class="beyond-title">${item.title}</div>
          <div class="beyond-desc">${item.desc}</div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:6px 8px; margin-top:8px;">
            <div style="font-size:0.68rem; font-weight:600; color:#475569; text-transform:uppercase;">Exploratory Process</div>
            <div style="font-size:0.72rem; color:#64748b; line-height:1.4; margin-top:2px;">${item.process}</div>
          </div>
          <div class="playground-tags" style="margin-top:8px;">
            ${item.tools.map(t => `<span class="playground-tag">${t}</span>`).join('')}
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        if (window.showToast) {
          window.showToast(item.title, item.badge + " • " + item.desc);
        }
      });

      container.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-by-filter') || 'all';
      renderBeyond();
    });
  });

  renderBeyond();
}

document.addEventListener('DOMContentLoaded', () => {
  initFileExplorer();
  init3DStudio();
  initPhotography();
  initVisualPlayground();
  initBeyondTheBrief();
  initTerminal();
  initGroovePlayer();
  initMailClient();
  initRecycleBin();
});
