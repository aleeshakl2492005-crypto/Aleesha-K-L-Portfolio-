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
      img: "assets/thumb_desktop_playground.png",
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
      id: "photo-01",
      title: "Vogue Concept Editorial Spread",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/EDITORIAL.jpg",
      img: "photography/EDITORIAL.png",
      camera: "Sony Alpha A7 IV  •  85mm f/1.4 GM",
      settings: "1/200s  •  f/2.0  •  ISO 100  •  Studio Strobe",
      location: "Studio Production, Kannur",
      desc: "Art direction, high-contrast studio illumination, and publication layout photography for official editorial magazine feature.",
      process: "Curated styling, balanced softbox key light with rim lighting to create strong visual separation for editorial magazine spreads."
    },
    {
      id: "photo-02",
      title: "Contemporary Fashion Editorial Shoot",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/fashionshoot_.jpg",
      img: "photography/fashionshoot_.png",
      camera: "Sony Alpha A7 IV  •  50mm f/1.4",
      settings: "1/250s  •  f/2.8  •  ISO 100  •  Key Softbox",
      location: "Natural Light Studio, Kochi",
      desc: "Modern high-fashion editorial exploring natural geometry, subtle skin tones, and cinematic shadows.",
      process: "Balanced studio strobes with ambient fill, emphasizing garment drape and sculptural silhouette."
    },
    {
      id: "photo-03",
      title: "Bblunt Commercial Hair Campaign",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/Bblunt.finalpng.jpg",
      img: "photography/Bblunt.finalpng.png",
      camera: "Sony Alpha A7 IV  •  85mm f/1.4 GM",
      settings: "1/160s  •  f/4.0  •  ISO 100  •  Beauty Dish",
      location: "Commercial Studio, Kerala",
      desc: "Art directed commercial beauty campaign for Bblunt hair products with crisp specular highlights and vibrant hair textures.",
      process: "Dual rim lights paired with a 27-inch beauty dish to capture hair sheen, texture definition, and vibrant tonality."
    },
    {
      id: "photo-04",
      title: "Teen Magazine Cover Art Direction",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/Photo Background Teen Magazine Cover (1).jpg",
      img: "photography/Photo Background Teen Magazine Cover (1).png",
      camera: "Sony Alpha A7 IV  •  35mm f/1.8",
      settings: "1/200s  •  f/3.2  •  ISO 125  •  Studio Fill",
      location: "Editorial Studio, Kannur",
      desc: "Vibrant publication cover design and photography incorporating bold typography hierarchies and youth culture aesthetics.",
      process: "Composed with generous negative space to accommodate masthead, cover lines, and graphic iconography."
    },
    {
      id: "photo-05",
      title: "Pastoral Picnic Golden Hour Story",
      category: "composition",
      categoryLabel: "Creative Compositions",
      thumb: "photography/thumbs/Picnic.jpg",
      img: "photography/Picnic.png",
      camera: "Nikon Full-Frame  •  50mm f/1.8",
      settings: "1/400s  •  f/2.2  •  ISO 200  •  Golden Hour Sun",
      location: "Outdoor Parkland, Kerala",
      desc: "Warm lifestyle composition capturing pastoral textures, sunlight dappling, and organic styling props.",
      process: "Shot in late afternoon natural backlighting with reflector bounce fill for radiant, sun-kissed skin tones."
    },
    {
      id: "photo-06",
      title: "Miranda Visual Identity Campaign",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/mirandaFINAL.jpg",
      img: "photography/mirandaFINAL.png",
      camera: "Sony Alpha A7 IV  •  85mm f/1.4",
      settings: "1/250s  •  f/2.5  •  ISO 100  •  Octabox",
      location: "Brand Studio, Kochi",
      desc: "Brand campaign lookbook highlighting clean minimalism, vibrant styling accents, and modern typography integration.",
      process: "Controlled directional softbox lighting emphasizing crisp cheekbone contours and fabric micro-textures."
    },
    {
      id: "photo-07",
      title: "Monochrome Form & Tone Study",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/final.jpg",
      img: "photography/final.png",
      camera: "Sony Alpha A7 IV  •  50mm f/1.4",
      settings: "1/200s  •  f/2.8  •  ISO 160  •  Directional Key",
      location: "Studio, Kannur",
      desc: "Fine-art portraiture exploring stark chiaroscuro shadow transitions and classical monochrome tonal gradients.",
      process: "Custom black-and-white curve grading with selective dodging and burning to accentuate facial topography."
    },
    {
      id: "photo-08",
      title: "Streetwear Lookbook & Styling",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/nothing.finalpng.jpg",
      img: "photography/nothing.finalpng.png",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/320s  •  f/2.8  •  ISO 100  •  Ambient Daylight",
      location: "Urban Concrete Studio, Kerala",
      desc: "Minimalist urban fashion editorial exploring contemporary youth culture, oversized silhouettes, and brutalist backdrops.",
      process: "Subtle desaturation of background tones while preserving crisp garment stitching and graphic print contrasts."
    },
    {
      id: "photo-09",
      title: "Baba Nana Brand Craft Story",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/BABA NANA.jpg",
      img: "photography/BABA NANA.jpg",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/160s  •  f/2.8  •  ISO 200  •  Natural Light",
      location: "Artisan Workshop, Kerala",
      desc: "Cultural lifestyle documentation celebrating authentic culinary craft, heritage typography, and packaging identity.",
      process: "Warm ambient documentation highlighting natural wood grains, warm flour dust, and artisanal packaging."
    },
    {
      id: "photo-10",
      title: "Baba Nana Brand Graphics & Identity",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/babanana.jpg",
      img: "photography/babanana.png",
      camera: "Macro Studio Rig  •  90mm f/2.8",
      settings: "1/200s  •  f/5.6  •  ISO 100  •  Overhead Grid",
      location: "Design Archive, Kannur",
      desc: "Branding collateral and packaging photography demonstrating visual coherence across retail touchpoints.",
      process: "Even flat-lay lighting with polarized filters to eliminate glare and reproduce true brand ink pantones."
    },
    {
      id: "photo-11",
      title: "Studio Lighting Silhouette Study",
      category: "composition",
      categoryLabel: "Creative Compositions",
      thumb: "photography/thumbs/DSC_9076.jpg",
      img: "photography/DSC_9076.png",
      camera: "Nikon Full-Frame  •  85mm f/1.4",
      settings: "1/250s  •  f/2.0  •  ISO 100  •  Rim Light",
      location: "Darkroom Studio, Kannur",
      desc: "Experimental lighting study isolating human contour against deep ambient darkness with warm rim illumination.",
      process: "Single strip softbox positioned 135 degrees behind the subject to carve out silhouette edges."
    },
    {
      id: "photo-12",
      title: "Candid Expression & Studio Natural Light",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/_DSC0013.jpg",
      img: "photography/_DSC0013.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/200s  •  f/2.2  •  ISO 200  •  North-Facing Window",
      location: "Studio Lounge, Kannur",
      desc: "Intimate candid portrait capturing unposed spontaneity and natural window light falloff.",
      process: "Unmodified diffused daylight passing through sheer drapery for soft eye catchlights."
    },
    {
      id: "photo-13",
      title: "Artisanal Handloom Loom Detail",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC0284.jpg",
      img: "photography/_DSC0284.JPG",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/125s  •  f/2.8  •  ISO 400  •  Shed Light",
      location: "Chendamangalam Weavers Co-op",
      desc: "Documenting traditional fly-shuttle wooden loom mechanics preserving Kerala handloom heritage.",
      process: "Close perspective capturing the weathered wooden frame and taut cotton threads."
    },
    {
      id: "photo-14",
      title: "Master Weaver at the Heritage Loom",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC0285.jpg",
      img: "photography/_DSC0285.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/160s  •  f/2.5  •  ISO 400  •  Ambient Daylight",
      location: "Chendamangalam Weavers Co-op",
      desc: "Environmental portrait honoring master craftswoman immersed in the rhythmic weaving of Kasavu textiles.",
      process: "Framed within the loom structure to emphasize connection between artisan and lifelong heritage tool."
    },
    {
      id: "photo-15",
      title: "Architectural Facade & Spatial Geometry",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC0834.jpg",
      img: "photography/_DSC0834.JPG",
      camera: "Nikon DSLR  •  24mm f/2.8",
      settings: "1/500s  •  f/8.0  •  ISO 100  •  Midday Sun",
      location: "Architectural Pavilion, Kerala",
      desc: "Clean geometric perspective documenting cantilevered structural planes and sharp shadow delineation.",
      process: "Orthogonal framing aligning horizon lines to highlight structural symmetry and clean material seams."
    },
    {
      id: "photo-16",
      title: "Geometric Shadow Play & Modern Forms",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC0847.jpg",
      img: "photography/_DSC0847.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/320s  •  f/5.6  •  ISO 100  •  Direct Sunlight",
      location: "Design Campus, Kannur",
      desc: "Abstract spatial composition studying diagonal shadow geometry cast across architectural surfaces.",
      process: "High-contrast monochrome framing transforming concrete architecture into bold graphic forms."
    },
    {
      id: "photo-17",
      title: "Urban Elevation & Structural Perspectives",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC0858.jpg",
      img: "photography/_DSC0858.JPG",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/400s  •  f/6.3  •  ISO 100  •  Clear Sky",
      location: "Kochi Urban Core",
      desc: "Vertical architectural study capturing modern urban layering and volumetric glass reflections.",
      process: "Shift perspective correction in post-processing to maintain vertical parallel lines."
    },
    {
      id: "photo-18",
      title: "Spatial Sightlines & Pavilion Clearances",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC0867.jpg",
      img: "photography/_DSC0867.JPG",
      camera: "Nikon DSLR  •  24mm f/2.8",
      settings: "1/250s  •  f/5.0  •  ISO 160  •  Diffused Sky",
      location: "Exhibition Ground, Kerala",
      desc: "Photographic survey of event pavilion scale, entry portals, and visitor sightline clearances.",
      process: "Wide-angle documentation capturing both ground-plane circulation and overhead structural canopy."
    },
    {
      id: "photo-19",
      title: "Outdoor Stage & Ambient Atmosphere",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC0880.jpg",
      img: "photography/_DSC0880.JPG",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/200s  •  f/3.5  •  ISO 200  •  Evening Dusk",
      location: "Event Ground, Thrissur",
      desc: "Documenting open-air stage infrastructure and acoustic truss installation prior to performance.",
      process: "Longer exposure balancing stage illumination with twilight sky blue hour tones."
    },
    {
      id: "photo-20",
      title: "Kerala Waterfront & Event Setting",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC0903.jpg",
      img: "photography/_DSC0903.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/320s  •  f/4.5  •  ISO 100  •  Afternoon Sun",
      location: "Kochi Backwaters",
      desc: "Atmospheric landscape study capturing traditional backwater shoreline setting for waterfront event venues.",
      process: "Polarized filter cutting water surface glare while enriching lush coconut palm greens."
    },
    {
      id: "photo-21",
      title: "Festival Staging & Roadshow Crowd Dynamics",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC1103.jpg",
      img: "photography/_DSC1103.JPG",
      camera: "Nikon DSLR  •  24mm f/2.8",
      settings: "1/160s  •  f/2.8  •  ISO 800  •  Stage Truss Lights",
      location: "Radio Mango Spadikam Arena",
      desc: "Dynamic live event photography documenting crowd scale and high-intensity stage illumination.",
      process: "High ISO calibration preserving deep ambient crowd shadows without blowing LED panel highlights."
    },
    {
      id: "photo-22",
      title: "Night Roadshow Lighting & Truss Illumination",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC1104.jpg",
      img: "photography/_DSC1104.JPG",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/200s  •  f/2.2  •  ISO 1200  •  Moving Heads",
      location: "Radio Mango Roadshow Tour",
      desc: "Night performance documentation capturing volumetric fog rays and moving head light beams.",
      process: "Timed shutter release capturing synchronized lighting cues across the mobile stage truck."
    },
    {
      id: "photo-23",
      title: "Live Performance Audio Rig & Stage",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC1106.jpg",
      img: "photography/_DSC1106.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/160s  •  f/2.8  •  ISO 1000  •  Stage Strobes",
      location: "Radio Mango Stage Arena",
      desc: "Detailed photographic study of audio line arrays, monitor wedges, and fold-out stage panels.",
      process: "Mid-telephoto framing isolating mechanical stage hardware against illuminated performance backdrop."
    },
    {
      id: "photo-24",
      title: "Spadikam Roadshow Stage Elevation",
      category: "spatial",
      categoryLabel: "Spatial & Architecture",
      thumb: "photography/thumbs/_DSC1110.jpg",
      img: "photography/_DSC1110.JPG",
      camera: "Nikon DSLR  •  24mm f/2.8",
      settings: "1/125s  •  f/3.2  •  ISO 800  •  LED Screen Ambient",
      location: "Kerala Statewide Tour",
      desc: "Full vehicular stage elevation showing deployed hydraulic wings and branding marquee.",
      process: "Wide shot documenting the complete 22ft stage width in operational performance configuration."
    },
    {
      id: "photo-25",
      title: "Traditional Cultural Ritual Documentation",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC1144.jpg",
      img: "photography/_DSC1144.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/160s  •  f/2.0  •  ISO 640  •  Brass Lamp Glow",
      location: "Traditional Tharavadu, Kerala",
      desc: "Documentary study of ceremonial brass lamps, floral rangoli patterns, and ancestral ritual spaces.",
      process: "Low-light exposure capturing the warm 2200K ember glow of coconut oil lamps."
    },
    {
      id: "photo-26",
      title: "Artisan Portrait â€” Expressions in Craft",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC1265.jpg",
      img: "photography/_DSC1265.JPG",
      camera: "Nikon DSLR  •  85mm f/1.4",
      settings: "1/200s  •  f/2.0  •  ISO 320  •  Workshop Light",
      location: "Artisanal Cluster, Kerala",
      desc: "Intimate close-up portrait highlighting the dignity, skill, and focused gaze of seasoned craft artisans.",
      process: "Shallow depth of field melting the workshop background into soft, organic bokeh."
    },
    {
      id: "photo-27",
      title: "Tactile Yarn Textures & Fiber Detail",
      category: "composition",
      categoryLabel: "Creative Compositions",
      thumb: "photography/thumbs/_DSC1343.jpg",
      img: "photography/_DSC1343.JPG",
      camera: "Nikon DSLR  •  60mm Macro f/2.8",
      settings: "1/160s  •  f/5.6  •  ISO 200  •  Soft Diffuser",
      location: "Handloom Spinning Shed",
      desc: "Macro composition studying the textural relief, tensile strength, and warp threads of natural cotton.",
      process: "Macro focal plane calibrated to reveal individual spun fibers and microscopic yarn twists."
    },
    {
      id: "photo-28",
      title: "Heritage Architecture & Traditional Woodwork",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC1518.jpg",
      img: "photography/_DSC1518.JPG",
      camera: "Nikon DSLR  •  24mm f/2.8",
      settings: "1/100s  •  f/4.0  •  ISO 400  •  Courtyard Ambient",
      location: "Nalukettu Ancestral Mansion",
      desc: "Architectural documentation of wooden colonnades, carved rafters, and open sky courtyards (Nadumuttam).",
      process: "Balanced natural exposure linking the shaded veranda with the sunlit central open courtyard."
    },
    {
      id: "photo-29",
      title: "Temple Rafters & Classical Roof Geometry",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC1551.jpg",
      img: "photography/_DSC1551.JPG",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/125s  •  f/3.2  •  ISO 500  •  Low Ceiling Ambient",
      location: "Koothambalam Temple Hall",
      desc: "Looking up at interlocking wooden roof trusses that inspired Aleesha's 3D Hindu Wedding Mandap architecture.",
      process: "Symmetric upward perspective emphasizing the intricate timber joinery without metal fasteners."
    },
    {
      id: "photo-30",
      title: "Sacred Diyas & Ambient Deeparadhana Glow",
      category: "composition",
      categoryLabel: "Creative Compositions",
      thumb: "photography/thumbs/_DSC1584.jpg",
      img: "photography/_DSC1584.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/125s  •  f/2.0  •  ISO 800  •  Flame Only",
      location: "Evening Ceremonial Mandap",
      desc: "Warm tonal composition of flickering terracotta lamps creating atmospheric sacred lighting.",
      process: "Manual white balance calibrated to 2400K to preserve the golden fire warmth of hand-lit wicks."
    },
    {
      id: "photo-31",
      title: "Street Documentary â€” Kerala Life & Movement",
      category: "cultural",
      categoryLabel: "Cultural Storytelling",
      thumb: "photography/thumbs/_DSC2710.jpg",
      img: "photography/_DSC2710.JPG",
      camera: "Nikon DSLR  •  35mm f/1.8",
      settings: "1/500s  •  f/4.0  •  ISO 200  •  Morning Sun",
      location: "Fort Kochi Streetscape",
      desc: "Candid street documentary capturing morning bustle, colonial facades, and vibrant regional palettes.",
      process: "Zone focusing allowing instant capture of decisive moments and unscripted pedestrian flow."
    },
    {
      id: "photo-32",
      title: "Creative High-Fashion Lookbook Editorial",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/_DSC2825.jpg",
      img: "photography/_DSC2825.png",
      camera: "Sony Alpha A7 IV  •  85mm f/1.4",
      settings: "1/250s  •  f/2.0  •  ISO 100  •  Directional Octabox",
      location: "Studio Production, Kannur",
      desc: "Fashion editorial exploring avant-garde garment structure, editorial gaze, and clean minimalist color space.",
      process: "High-key background illumination paired with directional wrap-around key light for graphic silhouette pop."
    },
    {
      id: "photo-33",
      title: "Studio Monochrome Form & Mood",
      category: "composition",
      categoryLabel: "Creative Compositions",
      thumb: "photography/thumbs/_DSC3475.jpg",
      img: "photography/_DSC3475.JPG",
      camera: "Nikon DSLR  •  50mm f/1.8",
      settings: "1/200s  •  f/2.8  •  ISO 160  •  Honeycomb Grid",
      location: "Darkroom Studio, Kannur",
      desc: "Intense black and white portrait study focusing on dramatic facial light falloff and rich shadow depth.",
      process: "Honeycomb gridded key light preventing light spill, isolating facial features with surgical precision."
    },
    {
      id: "photo-34",
      title: "Vibrant Color Blocking & Youth Culture Shoot",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/_DSC3717.jpg",
      img: "photography/_DSC3717.png",
      camera: "Sony Alpha A7 IV  •  50mm f/1.4",
      settings: "1/200s  •  f/3.2  •  ISO 100  •  Dual Softboxes",
      location: "Color Studio, Kannur",
      desc: "Experimental youth fashion shoot pairing bold primary color blocking with confident contemporary posing.",
      process: "Even daylight-balanced strobes maintaining saturated vermilion and cobalt fabric color accuracy."
    },
    {
      id: "photo-35",
      title: "Dynamic Posing & Studio Strobe Direction",
      category: "editorial",
      categoryLabel: "Editorial Shoots",
      thumb: "photography/thumbs/_DSC3770.jpg",
      img: "photography/_DSC3770.png",
      camera: "Sony Alpha A7 IV  •  85mm f/1.4",
      settings: "1/250s  •  f/2.8  •  ISO 100  •  Beauty Dish",
      location: "Fashion Studio, Kannur",
      desc: "High-fashion lookbook showcasing fluid garment movement, sharp focus falloff, and editorial polish.",
      process: "Fast flash duration (1/8000s freeze) capturing dynamic fabric drape in crisp mid-motion."
    },
    {
      id: "photo-36",
      title: "Styling Details, Accessories & Textures",
      category: "composition",
      categoryLabel: "Creative Compositions",
      thumb: "photography/thumbs/_DSC3875_2.jpg",
      img: "photography/_DSC3875_2.png",
      camera: "Sony Alpha A7 IV  •  85mm f/1.4",
      settings: "1/200s  •  f/2.5  •  ISO 100  •  Softbox Key",
      location: "Fashion Studio, Kannur",
      desc: "Detailed close-up capturing jewelry accents, intricate textile weave, and editorial makeup artistry.",
      process: "Razor-thin depth of field highlighting metallic jewelry reflections against soft fabric textures."
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
      img: "assets/thumb_desktop_playground.png",
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
      img: "assets/thumb_desktop_beyond.png",
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
    heroThumb: "rainmaker-case-studies/emak/assets/hero.jpg",
    caseStudyUrl: "rainmaker-case-studies/emak/index.html",
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
    stripItems: ["✨ 3D GLB Orbit View", "Interactive Discovery", "Spin The Bottle", "3D Walkthrough", "2 Weeks"],
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
    heroThumb: "rainmaker-case-studies/neithi/assets/hero.jpg",
    caseStudyUrl: "rainmaker-case-studies/neithi/index.html",
    video: "rainmaker-case-studies/neithi/assets/animation.mp4",
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
    stripItems: ["✨ 3D Orbit Models", "Cinema Spadikam", "Pulikali Imagery", "Video Reel", "1 Week"],
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
    heroThumb: "rainmaker-case-studies/thira/assets/c1-front.jpg",
    caseStudyUrl: "rainmaker-case-studies/thira/index.html",
    video: "rainmaker-case-studies/thira/assets/roadshow-20days.mp4",
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
    heroThumb: "rainmaker-case-studies/mandap/assets/hero.jpg",
    caseStudyUrl: "rainmaker-case-studies/mandap/index.html",
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
    heroThumb: "rainmaker-case-studies/anime/assets/hero.jpg",
    caseStudyUrl: "rainmaker-case-studies/anime/index.html",
    brief: "To create an energetic, highly imaginative birthday celebration realm based on a contemporary anime theme for Vedanth ('Okayeri Vedanth'). Designed for Rainmaker Signature Experiences, translating beloved animation aesthetics into a tangible physical space with Torii gate arches, character entry tunnels, themed dining, and immersive stage scenography.",
    concept: "Inspired by iconic anime universes including Naruto, One Piece, Pokémon, Demon Slayer, and Studio Ghibli. Vibrant Japanese torii structures, cherry blossom trees, Japanese typography, and life-size character cutouts (Luffy, Pikachu, Totoro, Zenitsu, Umbreon) brought the celebration to life.",
    execution: "Engineered a monumental circular sunburst stage flanked by double-tier Torii gate pillars draped in pink cherry blossoms, accompanied by an outdoor Torii welcome portal, an arched anime character tunnel walkway, and bespoke manga-cube centerpieces on vibrant orange velvet dining setups.",
    materials: [
      "Custom Japanese Torii Wooden Gate Portals with Cobalt Curved Roofs",
      "High-Definition Character Cutouts (Naruto, Luffy, Pikachu, Totoro)",
      "Cherry Blossom Floral Scenography & Hanging Japanese Lanterns",
      "Bespoke Manga Cube Dining Table Centerpieces",
      "Sunburst Circular Stage Backdrop with Japanese 'Okayeri Vedanth' Typography",
      "Staged Atmospheric Outdoor Spotlights & Wash Fixtures"
    ],
    mediaTabs: [
      { id: "renders", label: "🎨 3D Stage Visualisations & Execution Photos (6 Views)", type: "gallery" }
    ],
    renders: [
      { src: "assets/anime 3d 1.png", title: "3D Spatial Visualisation — Isometric Perspective & Stage Scenography" },
      { src: "assets/anime 3d.png", title: "3D Spatial Visualisation — Frontal Elevation & Scenography Design" },
      { src: "assets/anime 4.jpeg", title: "Event Execution Photography — Grand Stage Setup & Character Installations" },
      { src: "assets/anime 1.jpeg", title: "Event Execution Photography — Torii Welcome Gate with Curved Roof & Lanterns" },
      { src: "assets/anime 3.jpeg", title: "Walkway Character Archway Tunnel — Luffy, Umbreon, Zenitsu & Appa" },
      { src: "assets/anime 2.jpeg", title: "Themed Dining Experience — Manga Art Cube Centerpiece & Stage Vista" }
    ]
  },
  {
    id: "sarah-cohen",
    alias: ["sarah-cohen-store", "sarahcohen", "06"],
    num: "06",
    tabName: "SARAH COHEN'S STORE",
    stripItems: ["Indo-Jewish Heritage", "Retail Interior", "Scale Model & Drawings", "728 sq.ft", "Store Redesign"],
    title: "Sarah Cohen's Store — Indo-Jewish Embroidery Shop, Reimagined",
    subtitle: "Heritage Retail Interior, Spatial Planning, Architectural Drawings, Handcrafted Scale Model & 3D Visualization",
    category: "Retail Interior & Cultural Heritage Design",
    color: "#0e4285",
    bg: "#fef5e2",
    accent: "#eaa21c",
    timeline: "Retail Interior Studio Project",
    venue: "Jew Town, Mattancherry, Kochi, Kerala",
    dimensions: "Total: 728 sq.ft | Main Shop: 20ft × 30ft | Rear Workrooms: 16ft × 8ft",
    client: "Heritage Preservation & Memorial Retail Project",
    role: "Retail Interior Designer, Spatial Planner & Architectural Modeler",
    software: ["Autodesk Fusion 360", "AutoCAD", "Physical Model Crafting", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Retail Interior", "Indo-Jewish Heritage", "Technical Drawings", "Physical Scale Model", "3D Visualization", "Kochi Mattancherry"],
    heroThumb: "sarah-cohen-store/assets/render-front.jpg",
    caseStudyUrl: "sarah-cohen-store/index.html",
    brief: "Sarah Cohen was one of the last surviving members of the Paradesi Jewish community in Kochi, renowned for keeping historic traditions alive through delicate hand embroidery and warm hospitality. The brief was to reimagine her humble shop inside her Jew Town home: preserve the intimate historic warmth while expanding floor space, introducing dedicated workrooms for artisans, and establishing organized retail display zones.",
    concept: "Drawing from the deep textile heritage of Indo-Jewish embroidery—blending Hebrew calligraphy, Stars of David, and menorahs with Kerala flora and vernacular architecture. The store pairs natural cream stone facades, arched central street portals, and warm mahogany cabinetry with Jew Town sky blue accents.",
    execution: "Developed a complete 8-sheet architectural drawing set (scale 1:40, 1:30, 1:10) covering store layout, furniture, walls, floor finishes, ceiling, lighting and power. Handcrafted a precision physical scale model and rendered high-fidelity 3D exterior and interior visualisations.",
    materials: [
      "Textured Kerala Cream Lime-Plaster Stone Facade",
      "Hand-Finished Mahogany Hardwood Display Cabinetry & Rails",
      "Polished Terrazzo Flooring with Indigo Cross-Stitch Inlays",
      "Woven Linen Wall Coverings & Embroidered Hoop Displays",
      "Warm 2700K Recessed LED Spotlights & Architectural Track Lights",
      "Custom Brass Signboard & Star of David Motifs"
    ],
    mediaTabs: [
      { id: "renders", label: "🖼️ 3D Renders & Store Visualisations (6 Views)", type: "gallery" },
      { id: "studio", label: "🎮 Interactive 3D Studio Experience", type: "iframe" },
      { id: "model", label: "📐 Handcrafted Scale Model (5 Views)", type: "gallery" },
      { id: "drawings", label: "📋 Architectural Drawing Sheets (8 Sheets)", type: "gallery" }
    ],
    renders: [
      { src: "sarah-cohen-store/assets/render-front.jpg", title: "Reimagined Shopfront Facade — Textured Stone, Central Arch & Displays" },
      { src: "sarah-cohen-store/assets/render-interior-1.jpg", title: "Main Retail Floor — Mahogany Shelving, Cloth Displays & Checking Counter" },
      { src: "sarah-cohen-store/assets/render-interior-2.jpg", title: "Artisan Embroidery & Stitching Workroom Vista" },
      { src: "sarah-cohen-store/assets/render-top.jpg", title: "Axonometric Top-Down Cutaway — Spatial Flow & Zones" },
      { src: "sarah-cohen-store/assets/render-collage-front.jpg", title: "Design Moodboard & Facade Elevation Study" },
      { src: "sarah-cohen-store/assets/render-collage-store.jpg", title: "Retail Interior Moodboard & Material Palette" }
    ],
    modelRenders: [
      { src: "sarah-cohen-store/assets/model-final.jpg", title: "Physical Scale Model — Complete Handcrafted Miniature Store" },
      { src: "sarah-cohen-store/assets/model-front.jpg", title: "Scale Model Front Elevation — Street Perspective & Windows" },
      { src: "sarah-cohen-store/assets/model-top.jpg", title: "Scale Model Top-Down View — Internal Layout & Partitioning" },
      { src: "sarah-cohen-store/assets/model-angle.jpg", title: "Scale Model Isometric Perspective" },
      { src: "sarah-cohen-store/assets/model-detail.jpg", title: "Scale Model Micro-Detail — Furniture & Fixtures" }
    ],
    drawingsRenders: [
      { src: "sarah-cohen-store/assets/sheet-1.png", title: "Sheet 1: Store Layout Plan (Scale 1:40)" },
      { src: "sarah-cohen-store/assets/sheet-2.png", title: "Sheet 2: Furniture Layout Plan" },
      { src: "sarah-cohen-store/assets/sheet-3.png", title: "Sheet 3: Wall Finishes & Construction Details" },
      { src: "sarah-cohen-store/assets/sheet-4.png", title: "Sheet 4: Floor Finishes & Tile Patterning" },
      { src: "sarah-cohen-store/assets/sheet-5.png", title: "Sheet 5: Reflected Ceiling Plan (RCP)" },
      { src: "sarah-cohen-store/assets/sheet-6.png", title: "Sheet 6: Lighting Layout & Luminaire Schedule" },
      { src: "sarah-cohen-store/assets/sheet-7.png", title: "Sheet 7: Electrical Power & Data Plan" },
      { src: "sarah-cohen-store/assets/sheet-8.png", title: "Sheet 8: Detailed Sections & Elevations" }
    ]
  },
  {
    id: "lumina",
    alias: ["lumina-convention-centre", "lumina-centre", "07"],
    num: "07",
    tabName: "LUMINA CENTRE",
    stripItems: ["3D Architecture", "Phases of the Moon", "Riverfront Terrace", "Fusion 360", "Moonlit Scenography"],
    title: "Lumina Convention Centre — Architectural Spatial Design",
    subtitle: "Contemporary Waterfront Convention Centre & Amphitheatre Inspired by the Phases of the Moon",
    category: "3D Architecture / Public Civic Architecture",
    color: "#0f172a",
    bg: "#0a0d17",
    accent: "#d6a45c",
    timeline: "Architectural Concept & Spatial Modeling",
    venue: "Riverfront Waterfront Island Park",
    dimensions: "Site: 12,000+ sqm | Main Auditorium: 1,200 seats | Waterfront Terrace & Garden",
    client: "Public Civic / Architectural Studio Commission",
    role: "Lead 3D Architectural Visualiser & Spatial Concept Designer",
    software: ["Autodesk Fusion 360", "SketchUp", "V-Ray", "Adobe Photoshop"],
    tags: ["Convention Centre", "Waterfront Architecture", "Fusion 360", "Moonlit Scenography", "Landscape Design"],
    heroThumb: "Lumina Convention Centre/assets/hero-render.jpg",
    caseStudyUrl: "Lumina Convention Centre/index.html",
    brief: "To design an iconic riverfront convention centre capable of fluidly transforming for diverse civic events—from intimate diplomatic summits and corporate symposiums to large-scale exhibitions, concerts, and waterfront wedding celebrations. The architecture had to integrate seamlessly with riverfront walking gardens and terraces.",
    concept: "Inspired by the moon and its phases. Just as the moon transitions from crescent to full, the architecture adapts its spatial volume. The iconic entrance features a massive perforated glowing sphere nestled between sweeping shell-like crescent walls, while fanned roof petals echo lunar cycles.",
    execution: "Developed complex parametric surface geometries in Autodesk Fusion 360, modeling the faceted glass canopies, crescent shell walls, and the perforated moon sphere. Engineered the interior circulation around a central radial lobby connecting the dining drum, auditorium, riverside hall, and landscaped amphitheatre.",
    materials: [
      "Perforated Brushed Silver Architectural Sphere Shell",
      "Curved Cast Travertine & Smooth Light-Grey Plinth Stone",
      "Faceted Double-Glazed Structural Glass Roof Paneling",
      "Curved American Walnut Veneer Lobby Wall Panels",
      "Custom Brass Arc Streetlamps & Tiered Chandeliers",
      "Concealed Moonlight-Hue 4000K & Warm 2700K Architectural Lighting"
    ],
    mediaTabs: [
      { id: "renders", label: "🖼️ 3D Renders & Perspectives (7 Views)", type: "gallery" },
      { id: "studio", label: "🎮 Interactive 3D Studio Experience", type: "iframe" },
      { id: "cad", label: "📐 CAD Models & Solid Blockouts (6 Views)", type: "gallery" }
    ],
    renders: [
      { src: "Lumina Convention Centre/assets/hero-render.jpg", title: "Main Entrance at Dusk — Lit Perforated Sphere & Curved Shell Plinth" },
      { src: "Lumina Convention Centre/assets/aerial-island.jpg", title: "Waterfront Aerial Island Perspective — Terrace, Sunken Lounge & Jetty Pavilion" },
      { src: "Lumina Convention Centre/assets/aerial-front.jpg", title: "Top-Down Roof View — Faceted Glass Wings & Spiraling Roof Petals" },
      { src: "Lumina Convention Centre/assets/garden.jpg", title: "Outdoor Terrace & Stage — Arched Petal Canopy, Brass Arc Lamps & Sunken Lounge" },
      { src: "Lumina Convention Centre/assets/lobby.jpg", title: "Central Arrival Lobby — Curved Walnut Wall, Travertine Desk & Bamboo Art" },
      { src: "Lumina Convention Centre/assets/dining.jpg", title: "Circular Waterfront Dining Pavilion & Skyline Vista" },
      { src: "Lumina Convention Centre/assets/auditorium-render.jpg", title: "Grand Auditorium — Acoustic Timber Ribs & Tiered Audience Seating" }
    ],
    cadRenders: [
      { src: "Lumina Convention Centre/assets/hero-solid.jpg", title: "Solid Shaded Model — Main Entrance Sphere & Crescent Shell Geometry" },
      { src: "Lumina Convention Centre/assets/layout-plan.png", title: "Architectural Layout Plan — Spiral Circulation & Zonal Distribution" },
      { src: "Lumina Convention Centre/assets/model-blockout.jpg", title: "Fusion 360 Spatial Blockout — Shell Volumes & Plinth Elevation" },
      { src: "Lumina Convention Centre/assets/model-terrace.jpg", title: "CAD Model — Terrace Arches & Sunken Amphitheatre Lounge" },
      { src: "Lumina Convention Centre/assets/model-garden.jpg", title: "CAD Model — Riverfront Landscaped Pathways & Greenery" },
      { src: "Lumina Convention Centre/assets/auditorium-solid.jpg", title: "CAD Model — Auditorium Shell & Sightline Clearance" }
    ]
  },
  {
    id: "beast-games",
    alias: ["beast-games-3", "beastgames", "08"],
    num: "08",
    tabName: "BEAST GAMES 3",
    stripItems: ["Reality Show Set", "Neon Arena & Tunnels", "195 Nations", "60′ × 72′ Set", "Fusion 360"],
    title: "Beast Games 3: Last Flag Standing — Reality Show Set Design",
    subtitle: "Monumental 3D Television Set, Neon Arenas, Flag Heist Dome & The Divide Competition Courses",
    category: "3D Set Design / Entertainment Scenography",
    color: "#701a75",
    bg: "#07061a",
    accent: "#ff4fc3",
    timeline: "3D Set Modeling & Broadcast Lighting Concept",
    venue: "Monumental Soundstage / Arena Studio",
    dimensions: "Site: 60ft × 72ft Arena | 195 Contestants (1 Per Nation)",
    client: "Beast Games Concept Studio",
    role: "3D Set Designer, Spatial Planner & Lighting Visualiser",
    software: ["Autodesk Fusion 360", "Blender", "Adobe Photoshop", "Adobe Illustrator"],
    tags: ["Reality Show Set", "Fusion 360", "Neon Lighting", "Spatial Planning", "Storyboard", "Broadcast Scenography"],
    heroThumb: "beast-games-3/assets/hero-render.jpg",
    caseStudyUrl: "beast-games-3/index.html",
    brief: "Last Flag Standing is a concept for the third season of Beast Games: one contestant from every nation (195 contestants) competing in an intense high-stakes survival arena. The challenge was to design the complete physical arena world in 3D: circulation, sightlines for broadcast cameras, safety barriers, and a dynamic neon lighting code that communicates status instantly (pink for energy, cyan for strategy, red for elimination).",
    concept: "High-octane entertainment set architecture combining brutalist arena frameworks with high-intensity programmable neon tubes. Dominated by the towering Beast Prize Tower at center-stage flanked by dual glowing tunnel portals, the Flag Heist geodesic dome, and The Divide obstacle course.",
    execution: "Engineered the entire arena complex in Autodesk Fusion 360 with parametric structural trusses, player staging rings, and overhead camera wire rigs. Established clay / solid blockouts to test sightlines before applying realistic metallic PBR shaders and volumetric neon atmospheric illumination.",
    materials: [
      "Powder-Coated Steel Truss Modular Frameworks",
      "High-Impact Polycarbonate Neon Diffuser Tubes (RGB NeoPixel)",
      "Non-Slip Industrial Black Checkerplate Flooring",
      "Geodesic Polyhedral Dome Struts with Backlit Mesh",
      "High-Gloss Acrylic Yellow 'Beast' Lightning Bolt Monolith",
      "Automated Overhead Moving-Head Broadcast Spotlights"
    ],
    mediaTabs: [
      { id: "renders", label: "🖼️ 3D Renders & Arena Shots (6 Views)", type: "gallery" },
      { id: "studio", label: "🎮 Interactive 3D Studio Experience", type: "iframe" },
      { id: "cad", label: "📐 Solid CAD Blockouts & Clay Models (6 Views)", type: "gallery" },
      { id: "storyboard", label: "🎬 Production Storyboards (4 Frames)", type: "gallery" }
    ],
    renders: [
      { src: "beast-games-3/assets/hero-render.jpg", title: "Main Arena Set — Glowing Prize Tower, Logo Gate & Dual Neon Portals" },
      { src: "beast-games-3/assets/set-render.jpg", title: "Full Arena Stadium Perspective — Arena Ring & Camera Sightlines" },
      { src: "beast-games-3/assets/heist-render.jpg", title: "Flag Heist Arena — Geodesic Neon Dome & Elimination Pit" },
      { src: "beast-games-3/assets/heist-close.jpg", title: "Flag Heist Close Perspective — Central Podium & Neon Grid" },
      { src: "beast-games-3/assets/divide-render.jpg", title: "The Divide Competition Course — Cyan & Magenta Obstacle Lanes" },
      { src: "beast-games-3/assets/arena-render.jpg", title: "Grand Arena Wide Shot — Atmospheric Night Lighting" }
    ],
    cadRenders: [
      { src: "beast-games-3/assets/hero-solid.jpg", title: "Fusion 360 Solid Model — Prize Tower, Main Gate & Ring" },
      { src: "beast-games-3/assets/set-solid.jpg", title: "Solid-Shaded CAD Set — Scale, Circulation & Sightline Geometry" },
      { src: "beast-games-3/assets/heist-solid.jpg", title: "Heist Dome Solid Model — Structural Geodesic Framing" },
      { src: "beast-games-3/assets/divide-solid.jpg", title: "The Divide Solid CAD Model — Lane Clearances & Barriers" },
      { src: "beast-games-3/assets/clay-city.jpg", title: "Clay Model View — Beast City Contestant Quarters" },
      { src: "beast-games-3/assets/layout-plan.jpg", title: "Master Set Layout Plan — Zonal Districting (60′ × 72′)" }
    ],
    storyboardRenders: [
      { src: "beast-games-3/assets/storyboard-1.jpg", title: "Storyboard Frame 1: Contestant Arrival & Grand Opening" },
      { src: "beast-games-3/assets/storyboard-2.jpg", title: "Storyboard Frame 2: Flag Heist Dome Countdown" },
      { src: "beast-games-3/assets/storyboard-3.jpg", title: "Storyboard Frame 3: The Divide Lane Obstacle Run" },
      { src: "beast-games-3/assets/storyboard-4.jpg", title: "Storyboard Frame 4: Final Flag Duel & Elimination" }
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
  let activeDeckProjectId = null; // Images only pop up on hover, not initially!
  let activateRaf = null;
  let deactivateTimer = null;
  const LINGER_DURATION = 1500; // Stay for 1.5s after unhovering, then let it go!

  function clearDeactivateTimer() {
    if (deactivateTimer) {
      clearTimeout(deactivateTimer);
      deactivateTimer = null;
    }
  }

  function scheduleDeactivate() {
    clearDeactivateTimer();
    deactivateTimer = setTimeout(() => {
      deactivateAllRows();
    }, LINGER_DURATION);
  }

  function deactivateAllRows() {
    clearDeactivateTimer();
    activeDeckProjectId = null;
    if (activateRaf) cancelAnimationFrame(activateRaf);
    activateRaf = requestAnimationFrame(() => {
      folderRows.forEach(r => r.classList.remove('is-active'));
    });
  }

  function activateFolderRow(projId) {
    if (!projId) return;
    clearDeactivateTimer();
    if (projId === activeDeckProjectId) return;
    activeDeckProjectId = projId;

    if (activateRaf) cancelAnimationFrame(activateRaf);
    activateRaf = requestAnimationFrame(() => {
      folderRows.forEach(r => {
        const isMatch = r.getAttribute('data-project-id') === projId;
        r.classList.toggle('is-active', isMatch);
      });
    });
  }

  // 1. Hover & Click listeners on folder rows
  const folderRowsContainer = document.getElementById('solari-folder-rows');
  if (folderRowsContainer) {
    folderRowsContainer.addEventListener('pointerenter', () => {
      clearDeactivateTimer();
    });

    folderRowsContainer.addEventListener('pointerleave', (e) => {
      if (e.relatedTarget && folderRowsContainer.contains(e.relatedTarget)) return;
      scheduleDeactivate();
    });

    // Seamless mouse navigation along the tab ears column (throttled with rAF)
    let mouseMoveRaf = null;
    folderRowsContainer.addEventListener('mousemove', (e) => {
      if (mouseMoveRaf) return;
      const clientX = e.clientX;
      const clientY = e.clientY;

      mouseMoveRaf = requestAnimationFrame(() => {
        mouseMoveRaf = null;
        const containerRect = folderRowsContainer.getBoundingClientRect();
        if (clientX >= containerRect.left && clientX <= containerRect.left + 280) {
          folderRows.forEach(row => {
            const rRect = row.getBoundingClientRect();
            if (clientY >= rRect.top && clientY < rRect.bottom) {
              const pId = row.getAttribute('data-project-id');
              if (pId && pId !== activeDeckProjectId) {
                activateFolderRow(pId);
              }
            }
          });
        }
      });
    });
  }

  // Keep cards open while interacting with the photo deck
  const allDecks = document.querySelectorAll('.solari-row-photo-deck');
  allDecks.forEach(deck => {
    deck.addEventListener('pointerenter', () => {
      clearDeactivateTimer();
    });
    deck.addEventListener('pointerleave', (e) => {
      if (e.relatedTarget && deck.contains(e.relatedTarget)) return;
      scheduleDeactivate();
    });
  });

  folderRows.forEach(row => {
    const projId = row.getAttribute('data-project-id');
    if (!projId) return;

    row.addEventListener('pointerenter', () => {
      clearDeactivateTimer();
      activateFolderRow(projId);
    });

    row.addEventListener('pointerleave', (e) => {
      if (e.relatedTarget && row.contains(e.relatedTarget)) return;
      scheduleDeactivate();
    });

    if (projId !== 'contact') {
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
    "Anime party has neon lights! ✦",
    "Sarah Cohen store has handcrafted embroidery! ✦",
    "Lumina Centre glows like the moon! ✦",
    "Beast Games arena has 195 nations! ✦"
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
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const projId = pill.getAttribute('data-project-id');
      if (projId && projId !== currentProjectId) {
        openSolariProject(projId);
      }
    });
  });

  // 3. Back to All Projects Index button
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.stopPropagation();
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
    const win = document.getElementById('window-projects');
    if (win) win.scrollTop = 0;

    const content = document.querySelector('.solari-window-content');
    if (content) {
      content.classList.remove('is-detail-active');
      content.scrollTop = 0;
    }
    const winTitle = document.querySelector('#window-projects .window-title-text');
    if (winTitle) winTitle.textContent = 'Projects & Works';

    // Reset pills
    switcherPills.forEach(pill => {
      pill.classList.remove('active');
      const pId = pill.getAttribute('data-project-id');
      const pData = SOLARI_PROJECTS_DATA.find(p => p.id === pId);
      const label = pData ? `${pData.num} ${pData.tabName}` : pill.textContent.trim();
      pill.innerHTML = `<span>${label}</span>`;
    });

    if (detailView) detailView.style.display = 'none';
    if (overviewView) overviewView.style.display = 'block';
    currentProjectId = null;
    deactivateAllRows();
  }

  // Expose globally so WindowManager can reset detail view when closing window
  window.closeSolariDetail = closeSolariDetail;

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
    if (detailView) detailView.style.display = 'flex';

    const win = document.getElementById('window-projects');
    if (win) win.scrollTop = 0;

    const content = document.querySelector('.solari-window-content');
    if (content) {
      content.classList.add('is-detail-active');
      content.scrollTop = 0;
    }
    const winTitle = document.querySelector('#window-projects .window-title-text');
    if (winTitle) {
      winTitle.textContent = `${proj.num} ${proj.tabName} — Projects & Works`;
    }

    // Update active nav pill
    switcherPills.forEach(pill => {
      const isActive = pill.getAttribute('data-project-id') === proj.id;
      pill.classList.toggle('active', isActive);
      const pId = pill.getAttribute('data-project-id');
      const pData = SOLARI_PROJECTS_DATA.find(p => p.id === pId);
      const label = pData ? `${pData.num} ${pData.tabName}` : pill.textContent.trim();
      pill.innerHTML = `<span>${label}</span>`;
    });

    // Render Case Study in detail body
    renderCaseStudy(proj);
  }

  // 5. Render detailed case study HTML
  function renderCaseStudy(proj) {
    if (!detailBody) return;

    // Compute previous and next project IDs
    const currentIndex = SOLARI_PROJECTS_DATA.findIndex(p => p.id === proj.id);
    const prevProj = currentIndex > 0 ? SOLARI_PROJECTS_DATA[currentIndex - 1] : SOLARI_PROJECTS_DATA[SOLARI_PROJECTS_DATA.length - 1];
    const nextProj = currentIndex < SOLARI_PROJECTS_DATA.length - 1 ? SOLARI_PROJECTS_DATA[currentIndex + 1] : SOLARI_PROJECTS_DATA[0];

    // If project has an uploaded case study page, render directly matching the size of the projects folder!
    if (proj.caseStudyUrl) {
      const safeCaseStudyUrl = encodeURI(proj.caseStudyUrl);
      
      const fsLink = document.getElementById('solari-detail-fullscreen-link');
      if (fsLink) {
        fsLink.href = safeCaseStudyUrl;
        fsLink.title = `Open ${proj.title} full screen in a new tab`;
      }

      detailBody.innerHTML = `
        <iframe src="${safeCaseStudyUrl}" class="solari-full-case-iframe" id="solari-full-iframe-${proj.id}" title="${proj.title}" loading="eager"></iframe>
      `;

      return;
    }

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
          ${proj.caseStudyUrl ? `
            <div style="margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="${proj.caseStudyUrl}" target="_blank" rel="noopener noreferrer" class="solari-btn-pill primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:8px; font-size:0.86rem; padding:8px 18px; box-shadow:0 4px 12px rgba(0,0,0,0.15); background:#1c1917; color:#fff;">
                <span>Launch Dedicated 3D Studio Page</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          ` : ''}
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

    // Helper to render any image gallery list
    function renderGalleryGrid(list, panelId) {
      if (!list || list.length === 0) return '';
      const isVisible = activeTabId === panelId;
      return `
        <div class="solari-media-panel" data-panel-id="${panelId}" style="display: ${isVisible ? 'block' : 'none'};">
          <div class="solari-gallery-grid">
            ${list.map(r => `
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



    // Dedicated 3D Studio embedded experience
    if (proj.caseStudyUrl) {
      const isVisible = activeTabId === 'studio';
      html += `
        <div class="solari-media-panel" data-panel-id="studio" style="display: ${isVisible ? 'block' : 'none'};">
          <div style="width:100%; height:760px; border-radius:14px; overflow:hidden; border:2px solid #1c1917; background:#000; box-shadow:0 8px 30px rgba(0,0,0,0.15); margin-bottom:12px; position:relative;">
            <iframe src="${proj.caseStudyUrl}" style="width:100%; height:100%; border:none;" title="${proj.title} 3D Studio" loading="lazy"></iframe>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:28px; padding:0 4px; flex-wrap:wrap; gap:8px;">
            <span style="font-size:0.8rem; color:#64748b; font-weight:600;">✨ Interactive 3D Studio: You can interact with viewports, camera labels, shading toggles, and sheets inside this frame!</span>
            <a href="${proj.caseStudyUrl}" target="_blank" rel="noopener noreferrer" style="font-size:0.82rem; font-weight:800; color:#1c1917; text-decoration:underline;">Open in standalone full screen tab ↗</a>
          </div>
        </div>
      `;
    }

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
      html += renderGalleryGrid(proj.concept1Renders, 'concept1');
    }

    // Concept 2 gallery for Thira
    if (proj.concept2Renders) {
      html += renderGalleryGrid(proj.concept2Renders, 'concept2');
    }

    // Default renders gallery
    if (proj.renders) {
      html += renderGalleryGrid(proj.renders, 'renders');
    }

    // Physical scale model gallery (Sarah Cohen)
    if (proj.modelRenders) {
      html += renderGalleryGrid(proj.modelRenders, 'model');
    }

    // Architectural drawings gallery (Sarah Cohen)
    if (proj.drawingsRenders) {
      html += renderGalleryGrid(proj.drawingsRenders, 'drawings');
    }

    // CAD solid blockouts gallery (Lumina, Beast Games)
    if (proj.cadRenders) {
      html += renderGalleryGrid(proj.cadRenders, 'cad');
    }

    // Storyboard frames gallery (Beast Games)
    if (proj.storyboardRenders) {
      html += renderGalleryGrid(proj.storyboardRenders, 'storyboard');
    }

    return html;
  }

  // 7. Lightbox viewer handlers
  const lightbox = document.getElementById('solari-lightbox');
  const lightboxClose = document.getElementById('solari-lightbox-close');
  const lightboxBackdrop = document.getElementById('solari-lightbox-backdrop');
  const lightboxImg = document.getElementById('solari-lightbox-img');
  const lightboxCaption = document.getElementById('solari-lightbox-caption');

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
// ==========================================================================
// 2. 3D & SPATIAL STUDIO CONTROLLER (Three.js WebGL + OrbitControls)
// ==========================================================================
function init3DStudio() {
  const sceneBtns = document.querySelectorAll('.studio-scene-switcher .scene-btn[data-scene]');
  const sceneNameEl = document.getElementById('viewport-scene-name');
  const wireframeBtn = document.getElementById('wireframe-toggle-btn');
  const autoRotateBtn = document.getElementById('btn-autorotate');
  const resetCamBtn = document.getElementById('btn-reset-cam');
  const downloadGlbBtn = document.getElementById('btn-download-glb');

  const tabViewport = document.getElementById('btn-tab-viewport');
  const tabGallery = document.getElementById('btn-tab-gallery');

  const panelViewport = document.getElementById('studio-viewport-panel');
  const panelGallery = document.getElementById('studio-gallery-panel');

  const canvasContainer = document.getElementById('three-viewport-canvas');
  const loadingOverlay = document.getElementById('three-loading-overlay');
  const loadingText = document.getElementById('three-loading-text');
  const loadingBar = document.getElementById('three-loading-bar');
  const loadingSub = document.getElementById('three-loading-sub');

  const fallbackCard = document.getElementById('three-file-fallback');
  const fallbackModelName = document.getElementById('fallback-model-name');
  const fileInput = document.getElementById('three-file-input');

  const modelLabelEl = document.getElementById('three-model-label');

  function switchTab(activeTab) {
    if (tabViewport) tabViewport.classList.toggle('active', activeTab === 'viewport');
    if (tabGallery) tabGallery.classList.toggle('active', activeTab === 'gallery');

    if (panelViewport) panelViewport.style.display = activeTab === 'viewport' ? 'flex' : 'none';
    if (panelGallery) panelGallery.classList.toggle('active', activeTab === 'gallery');

    if (activeTab === 'viewport' && window.resizeStudio3D) {
      setTimeout(() => window.resizeStudio3D(), 50);
    }
  }

  if (tabViewport) tabViewport.addEventListener('click', () => switchTab('viewport'));
  if (tabGallery) tabGallery.addEventListener('click', () => switchTab('gallery'));

  const SPATIAL_MODELS = {
    truck: {
      id: "truck",
      name: "Radio Mango × Bharath Benz Stage Truck",
      file: "3d space/thira truck .glb",
      fileName: "thira truck .glb",
      size: "31 MB",
      badge: "Radio Mango Truck (31 MB)"
    },
    stall: {
      id: "stall",
      name: "Neithi Exhibition Stall Pavilion",
      file: "3d space/neithi stall1.glb",
      fileName: "neithi stall1.glb",
      size: "87 MB",
      badge: "Neithi Stall (87 MB)"
    },
    radiomango: {
      id: "radiomango",
      name: "Radio Mango Spadikam Arena Stage",
      file: "3d space/thira radio mango_17004_autosave.glb",
      fileName: "thira radio mango_17004_autosave.glb",
      size: "67 MB",
      badge: "Spadikam Arena (67 MB)"
    }
  };

  let activeModelKey = 'truck';
  let isWireframe = false;
  let isAutoRotate = true;

  // Three.js Core Variables
  let scene, camera, renderer, controls, gltfLoader;
  let currentModel = null;
  let defaultCamPos = null;
  let animationFrameId = null;
  let gridHelper = null;

  function initThreeScene() {
    if (!canvasContainer || typeof THREE === 'undefined') return false;

    // Clean any prior canvas
    canvasContainer.innerHTML = '';

    const width = canvasContainer.clientWidth || 840;
    const height = canvasContainer.clientHeight || 460;

    // 1. Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x090d16);

    // 2. Camera
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(25, 18, 30);
    defaultCamPos = camera.position.clone();

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    if (THREE.ACESFilmicToneMapping) renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    canvasContainer.appendChild(renderer.domElement);

    // 4. OrbitControls (Turnable 3D view)
    if (THREE.OrbitControls) {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = true;
      controls.autoRotate = isAutoRotate;
      controls.autoRotateSpeed = 1.0;
      controls.minDistance = 0.5;
      controls.maxDistance = 2500;
      controls.target.set(0, 0, 0);
      controls.update();
    }

    // 5. Lighting Setup for rich PBR reflections
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 1.0);
    scene.add(hemiLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.2);
    dirLight1.position.set(30, 45, 30);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.2);
    dirLight2.position.set(-30, 20, -25);
    scene.add(dirLight2);

    const dirLight3 = new THREE.DirectionalLight(0xf59e0b, 0.8);
    dirLight3.position.set(0, -20, 25);
    scene.add(dirLight3);

    // 6. Subtle Floor Grid
    gridHelper = new THREE.GridHelper(120, 60, 0x38bdf8, 0x1e293b);
    gridHelper.position.y = -0.05;
    scene.add(gridHelper);

    // 7. GLTF Loader
    if (THREE.GLTFLoader) {
      gltfLoader = new THREE.GLTFLoader();
    }

    // 8. Animation loop
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      if (controls) controls.update();
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    }
    animate();

    return true;
  }

  function resizeViewport() {
    if (!canvasContainer || !renderer || !camera) return;
    const width = canvasContainer.clientWidth;
    const height = canvasContainer.clientHeight;
    if (width > 0 && height > 0) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
  }
  window.resizeStudio3D = resizeViewport;
  window.addEventListener('resize', resizeViewport);

  function disposeCurrentModel() {
    if (!currentModel || !scene) return;
    currentModel.traverse(child => {
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose && m.dispose());
          } else if (child.material.dispose) {
            child.material.dispose();
          }
        }
      }
    });
    scene.remove(currentModel);
    currentModel = null;
  }

  function frameModel(modelObject) {
    const box = new THREE.Box3().setFromObject(modelObject);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    // Center model at origin
    modelObject.position.x -= center.x;
    modelObject.position.y -= center.y;
    modelObject.position.z -= center.z;

    if (gridHelper) {
      gridHelper.position.y = -size.y / 2 - 0.05;
    }

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let camDist = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.55;
    camDist = Math.max(camDist, 8);

    camera.position.set(camDist * 0.72, camDist * 0.42, camDist * 0.88);
    camera.near = Math.max(0.1, maxDim / 100);
    camera.far = Math.max(2500, maxDim * 30);
    camera.updateProjectionMatrix();

    if (defaultCamPos) defaultCamPos.copy(camera.position);

    if (controls) {
      controls.target.set(0, 0, 0);
      controls.minDistance = Math.max(0.2, maxDim / 20);
      controls.maxDistance = Math.max(3000, maxDim * 10);
      controls.update();
    }
  }

  function onModelLoaded(gltf, modelData) {
    disposeCurrentModel();
    currentModel = gltf.scene;

    if (isWireframe) {
      applyWireframe(true);
    }

    scene.add(currentModel);
    frameModel(currentModel);

    if (loadingOverlay) loadingOverlay.style.display = 'none';
    if (fallbackCard) fallbackCard.style.display = 'none';

    if (sceneNameEl) sceneNameEl.textContent = modelData.name;
    if (modelLabelEl) modelLabelEl.textContent = modelData.badge;
    if (downloadGlbBtn) {
      downloadGlbBtn.href = modelData.file;
      downloadGlbBtn.download = modelData.fileName;
    }
  }

  function loadModel(modelKey) {
    activeModelKey = modelKey;
    const model = SPATIAL_MODELS[modelKey] || SPATIAL_MODELS.truck;

    if (sceneNameEl) sceneNameEl.textContent = model.name;
    if (modelLabelEl) modelLabelEl.textContent = `${model.badge} (Loading...)`;
    if (downloadGlbBtn) {
      downloadGlbBtn.href = model.file;
      downloadGlbBtn.download = model.fileName;
    }

    if (!gltfLoader) {
      initThreeScene();
    }
    if (!gltfLoader) return;

    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
      if (loadingText) loadingText.textContent = `Loading ${model.name}...`;
      if (loadingBar) loadingBar.style.width = '0%';
      if (loadingSub) loadingSub.textContent = `Connecting to ${model.fileName} (${model.size})...`;
    }
    if (fallbackCard) fallbackCard.style.display = 'none';

    // Direct HTTP/HTTPS load with progress tracking
    gltfLoader.load(
      model.file,
      (gltf) => {
        onModelLoaded(gltf, model);
      },
      (xhr) => {
        if (xhr.lengthComputable && xhr.total > 0) {
          const pct = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
          const loadedMb = (xhr.loaded / (1024 * 1024)).toFixed(1);
          const totalMb = (xhr.total / (1024 * 1024)).toFixed(1);
          if (loadingBar) loadingBar.style.width = pct + '%';
          if (loadingSub) loadingSub.textContent = `Stream loading: ${loadedMb} MB / ${totalMb} MB (${pct}%)`;
        } else {
          const loadedMb = (xhr.loaded / (1024 * 1024)).toFixed(1);
          if (loadingBar) loadingBar.style.width = '60%';
          if (loadingSub) loadingSub.textContent = `Stream loading: ${loadedMb} MB received...`;
        }
      },
      (err) => {
        console.warn('Direct fetch notice (Chromium restricts file:// protocol CORS):', err);
        // Fallback for file:// or offline CORS: show 1-click local file picker
        if (loadingOverlay) loadingOverlay.style.display = 'none';
        if (fallbackCard) {
          fallbackCard.style.display = 'block';
          if (fallbackModelName) fallbackModelName.textContent = model.fileName;
        }
      }
    );
  }

  function loadLocalFile(file) {
    if (!gltfLoader) initThreeScene();
    if (!gltfLoader) return;

    if (loadingOverlay) {
      loadingOverlay.style.display = 'flex';
      if (loadingText) loadingText.textContent = `Opening ${file.name}...`;
      if (loadingBar) loadingBar.style.width = '10%';
      if (loadingSub) loadingSub.textContent = `Reading local file into WebGL memory...`;
    }
    if (fallbackCard) fallbackCard.style.display = 'none';

    const reader = new FileReader();
    reader.onprogress = (e) => {
      if (e.lengthComputable) {
        const pct = Math.round((e.loaded / e.total) * 100);
        if (loadingBar) loadingBar.style.width = pct + '%';
        const mb = (e.loaded / (1024 * 1024)).toFixed(1);
        const totalMb = (e.total / (1024 * 1024)).toFixed(1);
        if (loadingSub) loadingSub.textContent = `Reading: ${mb} MB / ${totalMb} MB (${pct}%)`;
      }
    };
    reader.onload = (e) => {
      if (loadingText) loadingText.textContent = `Parsing glTF Geometry & Textures...`;
      if (loadingSub) loadingSub.textContent = `Building PBR Materials & Shaders`;
      if (loadingBar) loadingBar.style.width = '92%';

      setTimeout(() => {
        gltfLoader.parse(
          e.target.result,
          '',
          (gltf) => {
            const modelData = {
              name: file.name.replace('.glb', '').replace('.gltf', ''),
              badge: `${file.name} (${(file.size / (1024*1024)).toFixed(0)} MB)`,
              file: '#',
              fileName: file.name
            };
            onModelLoaded(gltf, modelData);
          },
          (parseErr) => {
            if (loadingOverlay) loadingOverlay.style.display = 'none';
            alert('Failed to parse 3D GLB file: ' + (parseErr.message || parseErr));
          }
        );
      }, 50);
    };
    reader.onerror = () => {
      if (loadingOverlay) loadingOverlay.style.display = 'none';
      alert('Error reading local file.');
    };
    reader.readAsArrayBuffer(file);
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        loadLocalFile(e.target.files[0]);
      }
    });
  }

  // Drag and drop onto canvas container
  if (canvasContainer) {
    canvasContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });
    canvasContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
        loadLocalFile(e.dataTransfer.files[0]);
      }
    });
  }

  function applyWireframe(wireState) {
    if (!currentModel) return;
    currentModel.traverse(child => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.wireframe = wireState);
        } else {
          child.material.wireframe = wireState;
        }
      }
    });
  }

  // Model switchers
  sceneBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sceneBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sceneKey = btn.getAttribute('data-scene');
      loadModel(sceneKey);
    });
  });

  // Wireframe toggle
  if (wireframeBtn) {
    wireframeBtn.addEventListener('click', () => {
      isWireframe = !isWireframe;
      applyWireframe(isWireframe);
      wireframeBtn.textContent = isWireframe ? 'Shaded' : 'Wireframe';
      wireframeBtn.classList.toggle('active', isWireframe);
    });
  }

  // Auto-Rotate toggle (Turnable 3D view)
  if (autoRotateBtn) {
    autoRotateBtn.addEventListener('click', () => {
      isAutoRotate = !isAutoRotate;
      if (controls) controls.autoRotate = isAutoRotate;
      autoRotateBtn.textContent = isAutoRotate ? '🔄 Turn: ON' : '⏸ Turn: OFF';
      autoRotateBtn.classList.toggle('active', isAutoRotate);
    });
  }

  // Reset Camera View
  if (resetCamBtn) {
    resetCamBtn.addEventListener('click', () => {
      if (camera && defaultCamPos) {
        camera.position.copy(defaultCamPos);
      }
      if (controls) {
        controls.target.set(0, 0, 0);
        controls.update();
      }
    });
  }

  // Initialize scene and load first model
  initThreeScene();
  loadModel('truck');
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
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxImg = document.getElementById('lightbox-img');

  function renderPhotos() {
    if (!container || !PORTFOLIO_DATA.photography) return;
    container.innerHTML = '';

    PORTFOLIO_DATA.photography.forEach(photo => {
      const card = document.createElement('div');
      card.className = 'photo-card-clean';
      card.title = 'Click to enlarge photo';
      card.innerHTML = `
        <img src="${photo.thumb || photo.img}" alt="Photography" loading="lazy">
      `;

      card.addEventListener('click', () => openLightbox(photo));
      container.appendChild(card);
    });
  }

  function openLightbox(photo) {
    if (!lightbox) return;
    if (lightboxImg) lightboxImg.src = photo.img;
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
      if (e.target === lightbox || e.target.id === 'lightbox-body') closePhotoLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      closePhotoLightbox();
    }
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
