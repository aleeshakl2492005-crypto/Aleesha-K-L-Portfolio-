/* ==========================================================================
   OWL.EXE — INTERACTIVE PERSONAL PORTFOLIO GAME ENGINE
   Main playable PC-game-inspired portfolio experience
   Mascot: Aleesha's Pixel Owl (reusing existing owl assets)
   ========================================================================== */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. RETRO WEB AUDIO SYNTHESIZER (No external mp3 files needed)
  // --------------------------------------------------------------------------
  class RetroAudioSynth {
    constructor() {
      this.ctx = null;
      this.isEnabled = false; // Muted by default per specification
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.init();
      this.isEnabled = !this.isEnabled;
      if (this.isEnabled) {
        this.playBoot();
      }
      return this.isEnabled;
    }

    playTone(freq, type = 'square', duration = 0.08, delay = 0, gainLevel = 0.1) {
      if (!this.isEnabled) return;
      this.init();
      if (!this.ctx) return;

      setTimeout(() => {
        try {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

          gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start();
          osc.stop(this.ctx.currentTime + duration);
        } catch (_) {}
      }, delay * 1000);
    }

    playClick() {
      this.playTone(880, 'square', 0.04, 0, 0.08);
    }

    playStep() {
      this.playTone(220, 'triangle', 0.03, 0, 0.03);
    }

    playBoot() {
      this.playTone(440, 'square', 0.08, 0, 0.08);
      this.playTone(554, 'square', 0.08, 0.07, 0.08);
      this.playTone(659, 'square', 0.12, 0.14, 0.1);
      this.playTone(880, 'square', 0.22, 0.22, 0.12);
    }

    playInteract() {
      this.playTone(523, 'square', 0.06, 0, 0.1);
      this.playTone(659, 'square', 0.09, 0.06, 0.1);
      this.playTone(784, 'square', 0.15, 0.12, 0.12);
    }

    playFanfare() {
      this.playTone(587, 'square', 0.08, 0, 0.1);
      this.playTone(740, 'square', 0.08, 0.08, 0.1);
      this.playTone(880, 'square', 0.1, 0.16, 0.12);
      this.playTone(1174, 'square', 0.25, 0.25, 0.14);
    }

    playHoot() {
      this.playTone(620, 'sine', 0.12, 0, 0.12);
      this.playTone(520, 'sine', 0.18, 0.1, 0.12);
    }
  }

  // --------------------------------------------------------------------------
  // 2. DATA: VERIFIED KNOWLEDGE STATIONS (Origins, Education, Internships, Toolkit, Interests)
  // --------------------------------------------------------------------------
  const OWL_STATIONS = [
    {
      id: 'origins',
      title: 'My Origins',
      tagline: 'Foundations & Academic Journey',
      icon: '🏫',
      x: 170,
      y: 170,
      w: 80,
      h: 70,
      speech: 'Kendriya Vidyalaya taught me how to think with science! 🔬',
      badge: '95% & 91% Academic Badges',
      color: '#FFBF00',
      renderProps: {
        deskColor: '#854d0e',
        rugColor: '#fef08a'
      },
      contentHTML: `
        <div style="font-size: 13.5px; color: #334155; margin-bottom: 14px;">
          My journey started with a strong analytical foundation in school, giving me the precision, mathematical logic, and scientific curiosity that today fuels my 3D spatial visualisations and structured design thinking.
        </div>

        <div style="background: #ffffff; border: 2px solid #171717; border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; box-shadow: 2px 2px 0px #171717;">
          <div style="font-family: var(--owl-font-pixel); font-size: 11px; color: #171717; margin-bottom: 4px;">
            🎓 School: Kendriya Vidyalaya
          </div>
          <div style="font-size: 12px; color: #475569; font-weight: 600;">
            Stream: <strong>PCMB</strong> (Physics, Chemistry, Mathematics, Biology)
          </div>
        </div>

        <div class="owl-achievements-row">
          <div class="owl-badge-card">
            <div class="owl-badge-icon">🌟</div>
            <div class="owl-badge-score">95%</div>
            <div class="owl-badge-label">Class 10 CBSE</div>
            <div class="owl-badge-sub">Academic Excellence</div>
          </div>
          <div class="owl-badge-card">
            <div class="owl-badge-icon">🏆</div>
            <div class="owl-badge-score">91%</div>
            <div class="owl-badge-label">Class 12 CBSE</div>
            <div class="owl-badge-sub">PCMB Science Stream</div>
          </div>
          <div class="owl-badge-card">
            <div class="owl-badge-icon">📐</div>
            <div class="owl-badge-score">PCMB</div>
            <div class="owl-badge-label">Analytical Core</div>
            <div class="owl-badge-sub">Logic + Space</div>
          </div>
        </div>

        <div style="background: #FFF9EC; border: 1.5px dashed #FFBF00; border-radius: 8px; padding: 10px 14px; font-size: 12px; color: #78350f; font-weight: 600;">
          💡 <em>"Balancing Physics, Chemistry, Math & Biology with an insatiable love for sketching is what drove me to pursue design—where analytical rigor meets spatial imagination."</em>
        </div>
      `
    },
    {
      id: 'education',
      title: 'My Education',
      tagline: 'NIFT Kannur — Fashion Communication',
      icon: '🎨',
      x: 790,
      y: 170,
      w: 80,
      h: 70,
      speech: 'NIFT Kannur is where my design thinking blossomed! ✨',
      badge: 'NIFT Kannur • B.Des 3rd Year',
      color: '#a855f7',
      renderProps: {
        deskColor: '#581c87',
        rugColor: '#f3e8ff'
      },
      contentHTML: `
        <div style="font-size: 13.5px; color: #334155; margin-bottom: 14px;">
          I am currently pursuing my Bachelor of Design at the National Institute of Fashion Technology (NIFT), Kannur, specialising in <strong>Fashion Communication</strong>.
        </div>

        <div style="background: #ffffff; border: 2px solid #171717; border-radius: 8px; padding: 12px 14px; margin-bottom: 14px; box-shadow: 2px 2px 0px #171717;">
          <div style="font-family: var(--owl-font-pixel); font-size: 12px; color: #7e22ce; margin-bottom: 4px;">
            🏛️ National Institute of Fashion Technology (NIFT), Kannur
          </div>
          <div style="font-size: 12.5px; color: #171717; font-weight: 700;">
            Course: Bachelor of Design (B.Des) — Fashion Communication
          </div>
          <div style="font-size: 11.5px; color: #64748b; margin-top: 2px;">
            Current Stage: <strong>Third Year</strong> (2023 – 2027) | CGPA: 8.6 / 10
          </div>
        </div>

        <div style="font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #171717; margin-bottom: 6px;">
          Core Creative Focus Areas:
        </div>
        <div class="owl-pill-list">
          <span class="owl-info-pill">✦ 3D Visualisation</span>
          <span class="owl-info-pill">✦ Spatial & Stage Design</span>
          <span class="owl-info-pill">✦ Experience Design</span>
          <span class="owl-info-pill">✦ Graphic Design</span>
          <span class="owl-info-pill">✦ Editorial Photography</span>
          <span class="owl-info-pill">✦ Visual Merchandising</span>
          <span class="owl-info-pill">✦ Fashion Styling</span>
        </div>

        <div style="margin-top: 14px; font-size: 12px; color: #475569; line-height: 1.45;">
          Within Fashion Communication, my heart gravitates toward spatial experiences: translating cultural narratives into three-dimensional spaces, event architecture, atmospheric lighting, and high-impact visual branding.
        </div>
      `
    },
    {
      id: 'internships',
      title: 'My Internships',
      tagline: 'Real-World Production & 3D Stage Design',
      icon: '🎪',
      x: 180,
      y: 450,
      w: 80,
      h: 70,
      speech: 'Rainmakers and InAmigos gave me real-world wings! 🚀',
      badge: '2 Real-World Internships',
      color: '#3b82f6',
      renderProps: {
        deskColor: '#1e3a8a',
        rugColor: '#dbeafe'
      },
      contentHTML: `
        <div style="font-size: 13.5px; color: #334155; margin-bottom: 12px;">
          Two milestone professional experiences where I brought concepts from moodboards into live spatial venues and digital campaigns:
        </div>

        <div class="owl-internship-cards">
          <!-- Internship 1: Rainmakers -->
          <div class="owl-intern-card" style="border-left: 5px solid #FFBF00;">
            <div class="owl-intern-head">
              <div>
                <div class="owl-intern-role">3D Visual Designer / 3D Stage & Set Design Intern</div>
                <div class="owl-intern-company">Rainmakers Signature Experiences Pvt. Ltd.</div>
              </div>
              <span class="owl-intern-tag">3D & Spatial</span>
            </div>
            <div style="font-size: 12px; color: #475569; margin-bottom: 8px;">
              Designed and visualised large-scale 3D event stages, sets, and experiential environments for corporate ceremonies, weddings, and brand activations using Blender and Autodesk Fusion.
            </div>
            <ul style="font-size: 11.5px; color: #64748b; padding-left: 18px; margin: 4px 0 8px 0; line-height: 1.4;">
              <li>Constructed 3D spatial layouts, materials, realistic lighting, and photorealistic camera angles.</li>
              <li>Collaborated directly with execution and production teams accounting for scale, trusses, and venue constraints.</li>
            </ul>
            <div style="font-size: 11px; font-weight: 700; color: #171717; margin-top: 6px;">Featured Stage Visualisations:</div>
            <div class="owl-intern-thumbs">
              <img src="assets/thira 1.1.png" alt="Thira Stage 3D" class="owl-intern-thumb-img" title="Thira 3D Stage Design">
              <img src="assets/anime 3d.png" alt="Anime Stage 3D" class="owl-intern-thumb-img" title="Anime Interactive Stage">
              <img src="assets/thira 1.5.png" alt="Stage Detail" class="owl-intern-thumb-img" title="Stage Trussing & Lighting">
            </div>
          </div>

          <!-- Internship 2: InAmigos -->
          <div class="owl-intern-card" style="border-left: 5px solid #6366f1;">
            <div class="owl-intern-head">
              <div>
                <div class="owl-intern-role">Graphic Design Intern</div>
                <div class="owl-intern-company">InAmigos Foundation</div>
              </div>
              <span class="owl-intern-tag">Graphic Design</span>
            </div>
            <div style="font-size: 12px; color: #475569; margin-bottom: 8px;">
              Spearheaded visual design for social media, CSR campaigns, and digital communication materials, strictly applying brand guidelines, colour theory, and typography hierarchy.
            </div>
            <ul style="font-size: 11.5px; color: #64748b; padding-left: 18px; margin: 4px 0 0 0; line-height: 1.4;">
              <li>Produced 15+ high-fidelity digital marketing and event campaign assets in Photoshop & Illustrator.</li>
              <li>Collaborated with the outreach team to align messaging with engaging, clean graphic storytelling.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'toolkit',
      title: 'My Creative Toolkit',
      tagline: 'Skills Lab & Software Arsenal',
      icon: '🛠️',
      x: 780,
      y: 450,
      w: 80,
      h: 70,
      speech: 'Blender, Fusion, Photoshop... my trusty creative tools! 💻',
      badge: '4 Tool Categories',
      color: '#10b981',
      renderProps: {
        deskColor: '#065f46',
        rugColor: '#d1fae5'
      },
      contentHTML: `
        <div style="font-size: 13.5px; color: #334155; margin-bottom: 12px;">
          Tools organised by how I use them across projects. Click any category to inspect my workflow:
        </div>

        <div class="owl-toolkit-tabs" id="owl-modal-toolkit-tabs">
          <button class="owl-toolkit-tab-btn active" data-cat="graphic">Graphic Design</button>
          <button class="owl-toolkit-tab-btn" data-cat="spatial">3D & Spatial</button>
          <button class="owl-toolkit-tab-btn" data-cat="uiux">UI/UX & Web</button>
          <button class="owl-toolkit-tab-btn" data-cat="video">Video & Photo</button>
        </div>

        <div class="owl-tools-grid" id="owl-modal-tools-container">
          <!-- Dynamically populated based on active category -->
        </div>
      `
    },
    {
      id: 'interests',
      title: 'My Interests & Journey',
      tagline: 'Curiosity, Passion & Philosophy',
      icon: '✨',
      x: 480,
      y: 310,
      w: 80,
      h: 70,
      speech: 'Every space has a story waiting to be told! ✦',
      badge: '7 Passion Pillars',
      color: '#ec4899',
      renderProps: {
        deskColor: '#9d174d',
        rugColor: '#fce7f3'
      },
      contentHTML: `
        <div style="font-size: 13.5px; color: #334155; margin-bottom: 12px;">
          I believe design is about creating spaces where people feel something memorable. Whether designing a 60-foot festival stage or crafting an intuitive interface, my work revolves around these core pillars:
        </div>

        <div class="owl-interests-grid">
          <div class="owl-interest-card">
            <div class="owl-interest-icon">🔮</div>
            <div class="owl-interest-title">3D Visualisation</div>
            <div class="owl-interest-desc">Atmospheric lighting, physical materials, and volumetric camera storytelling.</div>
          </div>
          <div class="owl-interest-card">
            <div class="owl-interest-icon">🏛️</div>
            <div class="owl-interest-title">Spatial Design</div>
            <div class="owl-interest-desc">Stage architecture, event layouts, visitor circulation flow, and venue scales.</div>
          </div>
          <div class="owl-interest-card">
            <div class="owl-interest-icon">🎪</div>
            <div class="owl-interest-title">Experience Design</div>
            <div class="owl-interest-desc">Choreographing sensory journeys that turn audiences into active participants.</div>
          </div>
          <div class="owl-interest-card">
            <div class="owl-interest-icon">🛍️</div>
            <div class="owl-interest-title">Visual Merchandising</div>
            <div class="owl-interest-desc">Retail space psychology, exhibition booths, and product storytelling.</div>
          </div>
          <div class="owl-interest-card">
            <div class="owl-interest-icon">🖋️</div>
            <div class="owl-interest-title">Graphic Design</div>
            <div class="owl-interest-desc">Bold typography, editorial compositions, color theory, and visual identity systems.</div>
          </div>
          <div class="owl-interest-card">
            <div class="owl-interest-icon">📷</div>
            <div class="owl-interest-title">Photography</div>
            <div class="owl-interest-desc">Editorial framing, natural light studies, and capturing fleeting moments.</div>
          </div>
          <div class="owl-interest-card" style="grid-column: 1 / -1;">
            <div class="owl-interest-icon">💬</div>
            <div class="owl-interest-title">Fashion Communication</div>
            <div class="owl-interest-desc">Connecting fashion, space, cultural narratives, and media into cohesive, multi-platform experiences.</div>
          </div>
        </div>

        <div style="margin-top: 14px; background: #FFF9EC; border: 1.5px dashed #FFBF00; border-radius: 8px; padding: 10px 14px; font-size: 12px; color: #78350f; font-weight: 600;">
          💡 <em>"My goal is simple: blend precision and wonder. To take ideas from sketches into tangible spaces that leave lasting impressions."</em>
        </div>
      `
    }
  ];

  // Tool categories for the Toolkit modal
  const OWL_TOOLKIT_DATA = {
    graphic: [
      { name: 'Adobe Photoshop', icon: '🎨', usage: 'Complex digital compositing, photo retouching, texture preparation, and atmospheric lighting overlays.' },
      { name: 'Adobe Illustrator', icon: '📐', usage: 'Vector branding, stage scale graphics, signage systems, geometric motifs, and iconography.' },
      { name: 'Adobe InDesign', icon: '📖', usage: 'Editorial layout design, client presentation decks, publications, and project booklets.' },
      { name: 'Canva', icon: '✨', usage: 'Rapid moodboard prototyping, ideation decks, and collaborative creative boards.' }
    ],
    spatial: [
      { name: 'Blender', icon: '🧊', usage: 'Primary 3D modeling, Cycles/Eevee photorealistic lighting, procedural textures, and camera walkthroughs.' },
      { name: 'Autodesk Fusion 360', icon: '⚙️', usage: 'Parametric hard-surface modeling, precise dimensional planning, and structural components.' },
      { name: 'AutoCAD', icon: '📐', usage: '2D architectural floor plans, venue dimension verification, and elevation drafting.' }
    ],
    uiux: [
      { name: 'Figma', icon: '📱', usage: 'Interactive prototyping, design systems, wireframing, responsive grids, and UI/UX design.' },
      { name: 'Visual Studio Code', icon: '💻', usage: 'Crafting responsive portfolio web code, interactive CSS animations, and modern JS systems.' }
    ],
    video: [
      { name: 'CapCut', icon: '🎬', usage: 'Dynamic short-form video editing, pacing, reel transitions, and audio sync.' },
      { name: 'Photography & Video', icon: '📷', usage: 'Camera operation, manual exposure control, framing, lens selection, and studio lighting.' }
    ]
  };

  // --------------------------------------------------------------------------
  // 3. MAIN OWLGAME CLASS
  // --------------------------------------------------------------------------
  class OwlGame {
    constructor() {
      this.isInitialized = false;
      this.isRunning = false;
      this.audio = new RetroAudioSynth();

      // World dimensions
      this.WORLD_WIDTH = 960;
      this.WORLD_HEIGHT = 600;

      // Player Owl state
      this.player = {
        x: 480,
        y: 380,
        targetX: 480,
        targetY: 380,
        vx: 0,
        vy: 0,
        speed: 3.4,
        width: 44,
        height: 44,
        facing: 1, // 1 = right, -1 = left
        state: 'sit', // 'sit' | 'walk' | 'fly' | 'sleep'
        walkTimer: 0,
        idleTimer: 0,
        speechTimer: 0,
        activeSpeech: null
      };

      // Input keys
      this.keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        interact: false
      };

      // Discovered zones
      this.discoveredZones = new Set();
      this.activeStation = null;
      this.nearStation = null;

      // Sprite assets
      this.sprites = {
        sit: null,
        walk: null,
        fly: null,
        sleep: null
      };

      // Particles
      this.particles = [];
      this.stars = [];

      this.initDOM();
      this.loadSprites();
      this.bindInputs();
    }

    initDOM() {
      this.container = document.getElementById('owl-game-container');
      if (!this.container) return;

      this.launchScreen = document.getElementById('owl-launch-screen');
      this.playScreen = document.getElementById('owl-play-screen');
      this.canvas = document.getElementById('owl-game-canvas');
      if (this.canvas) {
        this.ctx = this.canvas.getContext('2d');
      }

      this.btnStart = document.getElementById('owl-btn-start');
      this.btnSoundLaunch = document.getElementById('owl-btn-sound-launch');
      this.btnSoundHud = document.getElementById('owl-btn-sound-hud');
      this.btnFullscreen = document.getElementById('owl-btn-fullscreen');
      this.btnExit = document.getElementById('owl-btn-exit');

      this.proximityPrompt = document.getElementById('owl-proximity-prompt');
      this.speechFloat = document.getElementById('owl-speech-float');

      this.modalOverlay = document.getElementById('owl-modal-overlay');
      this.modalTitle = document.getElementById('owl-modal-title');
      this.modalBody = document.getElementById('owl-modal-body');
      this.modalCloseBtn = document.getElementById('owl-modal-close-btn');

      this.starCounter = document.getElementById('owl-star-counter');
      this.travelBtns = document.querySelectorAll('.owl-travel-btn');

      // Bind Launch Buttons
      if (this.btnStart) {
        this.btnStart.addEventListener('click', () => this.startGame());
      }

      if (this.btnSoundLaunch) {
        this.btnSoundLaunch.addEventListener('click', () => this.toggleSound());
      }

      if (this.btnSoundHud) {
        this.btnSoundHud.addEventListener('click', () => this.toggleSound());
      }

      if (this.btnFullscreen) {
        this.btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
      }

      if (this.btnExit) {
        this.btnExit.addEventListener('click', () => this.exitGame());
      }

      if (this.modalCloseBtn) {
        this.modalCloseBtn.addEventListener('click', () => this.closeModal());
      }

      if (this.modalOverlay) {
        this.modalOverlay.addEventListener('click', (e) => {
          if (e.target === this.modalOverlay) this.closeModal();
        });
      }

      // Fast travel clicks
      this.travelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const targetId = btn.getAttribute('data-target');
          if (targetId) this.fastTravelTo(targetId);
        });
      });

      // Resize observer
      window.addEventListener('resize', () => this.handleResize());
      this.handleResize();
    }

    loadSprites() {
      const loadImg = (src) => {
        const img = new Image();
        img.src = src;
        return img;
      };

      this.sprites.sit = loadImg('assets/owl_sit.png');
      this.sprites.walk = loadImg('assets/owl_walk.png');
      this.sprites.fly = loadImg('assets/owl_fly.png');
      this.sprites.sleep = loadImg('assets/owl_sleep.png');
    }

    bindInputs() {
      // Keyboard Controls
      window.addEventListener('keydown', (e) => {
        // Only capture game inputs if window is visible and not typing in inputs
        const win = document.getElementById('window-playground');
        if (!win || !win.classList.contains('visible')) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        const k = e.key.toLowerCase();
        let handled = false;

        if (k === 'arrowup' || k === 'w') { this.keys.up = true; handled = true; }
        if (k === 'arrowdown' || k === 's') { this.keys.down = true; handled = true; }
        if (k === 'arrowleft' || k === 'a') { this.keys.left = true; handled = true; }
        if (k === 'arrowright' || k === 'd') { this.keys.right = true; handled = true; }

        if (k === 'e' || k === 'enter' || k === ' ') {
          this.keys.interact = true;
          handled = true;
          this.handleInteractKey();
        }

        if (k === 'escape') {
          if (this.modalOverlay && this.modalOverlay.classList.contains('is-open')) {
            this.closeModal();
            handled = true;
          }
        }

        if (handled && e.key.startsWith('Arrow')) {
          e.preventDefault();
        }
      });

      window.addEventListener('keyup', (e) => {
        const k = e.key.toLowerCase();
        if (k === 'arrowup' || k === 'w') this.keys.up = false;
        if (k === 'arrowdown' || k === 's') this.keys.down = false;
        if (k === 'arrowleft' || k === 'a') this.keys.left = false;
        if (k === 'arrowright' || k === 'd') this.keys.right = false;
        if (k === 'e' || k === 'enter' || k === ' ') this.keys.interact = false;
      });

      // Canvas Click-to-Move / Tap to Inspect
      if (this.canvas) {
        this.canvas.addEventListener('click', (e) => {
          if (!this.isRunning) return;
          const rect = this.canvas.getBoundingClientRect();
          const scaleX = this.WORLD_WIDTH / rect.width;
          const scaleY = this.WORLD_HEIGHT / rect.height;
          const clickX = (e.clientX - rect.left) * scaleX;
          const clickY = (e.clientY - rect.top) * scaleY;

          // Check if clicked directly on an interactive station
          const clickedStation = OWL_STATIONS.find(s => {
            return clickX >= s.x - 45 && clickX <= s.x + 45 &&
                   clickY >= s.y - 45 && clickY <= s.y + 45;
          });

          if (clickedStation) {
            this.fastTravelTo(clickedStation.id);
            return;
          }

          // Move player toward click
          this.player.targetX = Math.max(40, Math.min(this.WORLD_WIDTH - 40, clickX));
          this.player.targetY = Math.max(90, Math.min(this.WORLD_HEIGHT - 40, clickY));
          this.audio.playClick();
        });
      }

      // Mobile Virtual D-Pad Touch
      this.bindMobileDpad();
    }

    bindMobileDpad() {
      const dpadUp = document.getElementById('owl-dpad-up');
      const dpadDown = document.getElementById('owl-dpad-down');
      const dpadLeft = document.getElementById('owl-dpad-left');
      const dpadRight = document.getElementById('owl-dpad-right');
      const actionBtn = document.getElementById('owl-action-btn');

      const bindBtn = (el, key) => {
        if (!el) return;
        const setPress = (val, e) => {
          e.preventDefault();
          this.keys[key] = val;
          if (val) this.audio.playStep();
        };
        el.addEventListener('pointerdown', (e) => setPress(true, e));
        el.addEventListener('pointerup', (e) => setPress(false, e));
        el.addEventListener('pointerleave', (e) => setPress(false, e));
      };

      bindBtn(dpadUp, 'up');
      bindBtn(dpadDown, 'down');
      bindBtn(dpadLeft, 'left');
      bindBtn(dpadRight, 'right');

      if (actionBtn) {
        actionBtn.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          this.handleInteractKey();
        });
      }
    }

    handleResize() {
      if (!this.canvas || !this.playScreen) return;
      const rect = this.playScreen.getBoundingClientRect();
      const hudH = 48;
      const availW = rect.width;
      const availH = rect.height - hudH;

      if (availW <= 0 || availH <= 0) return;

      // Maintain aspect ratio 960:600
      const targetRatio = this.WORLD_WIDTH / this.WORLD_HEIGHT;
      let displayW = availW;
      let displayH = availW / targetRatio;

      if (displayH > availH) {
        displayH = availH;
        displayW = displayH * targetRatio;
      }

      this.canvas.width = this.WORLD_WIDTH;
      this.canvas.height = this.WORLD_HEIGHT;
      this.canvas.style.width = `${Math.floor(displayW)}px`;
      this.canvas.style.height = `${Math.floor(displayH)}px`;
    }

    // ------------------------------------------------------------------------
    // Game Lifecycle
    // ------------------------------------------------------------------------
    startGame() {
      this.audio.playBoot();
      if (this.launchScreen) {
        this.launchScreen.classList.add('is-hidden');
      }
      this.isRunning = true;
      this.handleResize();
      this.showOwlSpeech('Oh, you found me! Move with Arrow Keys / WASD! ✦', 4500);

      // Start Loop if not already looping
      if (!this.loopId) {
        this.lastTime = performance.now();
        this.loopId = requestAnimationFrame((t) => this.loop(t));
      }
    }

    toggleSound() {
      const enabled = this.audio.toggle();
      const label = enabled ? '🔊 Sound: ON' : '🔇 Sound: OFF';
      if (this.btnSoundLaunch) this.btnSoundLaunch.textContent = label;
      if (this.btnSoundHud) this.btnSoundHud.textContent = enabled ? '🔊' : '🔇';
    }

    toggleFullscreen() {
      const win = document.getElementById('window-playground');
      if (!win) return;
      if (window.windowManager) {
        window.windowManager.toggleMaximize('playground');
      }
      setTimeout(() => this.handleResize(), 150);
    }

    exitGame() {
      this.audio.playClick();
      if (window.windowManager) {
        window.windowManager.close('playground');
      }
    }

    showOwlSpeech(text, duration = 3500) {
      this.player.activeSpeech = text;
      this.player.speechTimer = duration;

      if (this.speechFloat) {
        this.speechFloat.textContent = text;
        this.speechFloat.classList.add('is-visible');
        this.updateSpeechPosition();
      }
    }

    updateSpeechPosition() {
      if (!this.speechFloat || !this.canvas) return;
      const rect = this.canvas.getBoundingClientRect();
      const scaleX = rect.width / this.WORLD_WIDTH;
      const scaleY = rect.height / this.WORLD_HEIGHT;

      const screenX = rect.left + (this.player.x * scaleX);
      const screenY = rect.top + (this.player.y * scaleY);

      this.speechFloat.style.left = `${screenX}px`;
      this.speechFloat.style.top = `${screenY}px`;
    }

    fastTravelTo(stationId) {
      const station = OWL_STATIONS.find(s => s.id === stationId);
      if (!station) return;

      // Teleport or walk player directly in front of the station
      this.player.targetX = station.x;
      this.player.targetY = station.y + 35;
      this.player.x = station.x;
      this.player.y = station.y + 35;
      this.player.state = 'sit';

      this.audio.playInteract();
      this.openModal(station);
    }

    handleInteractKey() {
      if (this.modalOverlay && this.modalOverlay.classList.contains('is-open')) {
        this.closeModal();
        return;
      }

      if (this.nearStation) {
        this.openModal(this.nearStation);
      } else {
        // If not near a station, owl hops and hoots happily
        this.audio.playHoot();
        this.showOwlSpeech('Hoot! Press [E] near any station to inspect!', 2200);
      }
    }

    // ------------------------------------------------------------------------
    // Modals & Station Discoveries
    // ------------------------------------------------------------------------
    openModal(station) {
      this.activeStation = station;
      this.audio.playInteract();

      // Check if newly discovered
      if (!this.discoveredZones.has(station.id)) {
        this.discoveredZones.add(station.id);
        this.audio.playFanfare();
        this.spawnConfetti(station.x, station.y);
        this.updateHUD();

        // Mark travel button discovered
        const btn = document.querySelector(`.owl-travel-btn[data-target="${station.id}"]`);
        if (btn) btn.classList.add('discovered');
      }

      if (this.modalTitle) {
        this.modalTitle.innerHTML = `<span>${station.icon}</span> <span>${station.title}</span>`;
      }
      if (this.modalBody) {
        this.modalBody.innerHTML = station.contentHTML;
        this.bindModalEvents(station);
      }
      if (this.modalOverlay) {
        this.modalOverlay.classList.add('is-open');
      }

      // Owl reflection speech
      if (station.speech) {
        this.showOwlSpeech(station.speech, 4000);
      }
    }

    bindModalEvents(station) {
      // If opening Toolkit, initialize category tab switcher
      if (station.id === 'toolkit') {
        const tabs = this.modalBody.querySelectorAll('.owl-toolkit-tab-btn');
        const container = this.modalBody.querySelector('#owl-modal-tools-container');

        const renderCategory = (cat) => {
          if (!container || !OWL_TOOLKIT_DATA[cat]) return;
          const tools = OWL_TOOLKIT_DATA[cat];
          container.innerHTML = tools.map(t => `
            <div class="owl-tool-item">
              <div class="owl-tool-name">${t.icon} ${t.name}</div>
              <div class="owl-tool-usage">${t.usage}</div>
            </div>
          `).join('');
        };

        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCategory(tab.getAttribute('data-cat'));
            this.audio.playClick();
          });
        });

        // Default to graphic design
        renderCategory('graphic');
      }
    }

    closeModal() {
      if (this.modalOverlay) {
        this.modalOverlay.classList.remove('is-open');
      }
      this.activeStation = null;
      this.audio.playClick();
    }

    updateHUD() {
      const count = this.discoveredZones.size;
      const total = OWL_STATIONS.length;
      if (this.starCounter) {
        if (count >= total) {
          this.starCounter.innerHTML = `<span class="owl-star-icon">★</span> <span>${count}/${total} ALL DISCOVERED! ✨</span>`;
          this.starCounter.style.background = '#fef08a';
          this.starCounter.style.borderColor = '#b45309';
        } else {
          this.starCounter.innerHTML = `<span class="owl-star-icon">★</span> <span>${count}/${total} Discovered</span>`;
        }
      }
    }

    spawnConfetti(originX, originY) {
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        this.particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          color: ['#FFBF00', '#ec4899', '#3b82f6', '#10b981', '#a855f7', '#ffffff'][Math.floor(Math.random() * 6)],
          size: 3 + Math.random() * 4,
          life: 1.0,
          decay: 0.015 + Math.random() * 0.02
        });
      }
    }

    // ------------------------------------------------------------------------
    // Game Loop & Update
    // ------------------------------------------------------------------------
    loop(currentTime) {
      const dt = Math.min(32, currentTime - (this.lastTime || currentTime)) / 1000;
      this.lastTime = currentTime;

      if (this.isRunning) {
        this.update(dt);
        this.render();
      }

      this.loopId = requestAnimationFrame((t) => this.loop(t));
    }

    update(dt) {
      let moveX = 0;
      let moveY = 0;

      // Keyboard Inputs
      if (this.keys.up) moveY -= 1;
      if (this.keys.down) moveY += 1;
      if (this.keys.left) moveX -= 1;
      if (this.keys.right) moveX += 1;

      // Click/Tap Target Move
      const dx = this.player.targetX - this.player.x;
      const dy = this.player.targetY - this.player.y;
      const distToTarget = Math.sqrt(dx * dx + dy * dy);

      if (distToTarget > 6 && moveX === 0 && moveY === 0) {
        moveX = dx / distToTarget;
        moveY = dy / distToTarget;
      } else if (moveX !== 0 || moveY !== 0) {
        // Cancel target if keyboard input is active
        this.player.targetX = this.player.x;
        this.player.targetY = this.player.y;
      }

      // Normalize diagonal speed
      if (moveX !== 0 && moveY !== 0) {
        moveX *= 0.7071;
        moveY *= 0.7071;
      }

      const isMoving = moveX !== 0 || moveY !== 0;

      if (isMoving) {
        this.player.idleTimer = 0;
        this.player.walkTimer += dt * 8;
        this.player.state = 'walk';
        if (moveX > 0) this.player.facing = 1;
        if (moveX < 0) this.player.facing = -1;

        // Step sounds
        if (Math.floor(this.player.walkTimer) % 3 === 0) {
          this.audio.playStep();
        }

        // Dust puff particles
        if (Math.random() < 0.25) {
          this.particles.push({
            x: this.player.x + (Math.random() * 8 - 4),
            y: this.player.y + 18,
            vx: -moveX * 0.4 + (Math.random() * 0.4 - 0.2),
            vy: -0.3,
            color: 'rgba(23, 23, 23, 0.15)',
            size: 2.5 + Math.random() * 2,
            life: 0.6,
            decay: 0.04
          });
        }
      } else {
        this.player.walkTimer = 0;
        this.player.idleTimer += dt;
        if (this.player.idleTimer > 10) {
          this.player.state = 'sleep';
        } else {
          this.player.state = 'sit';
        }
      }

      // Calculate Next Position with Boundaries & Obstacle Collisions
      const nextX = this.player.x + moveX * this.player.speed;
      const nextY = this.player.y + moveY * this.player.speed;

      // Room boundaries
      const minX = 40;
      const maxX = this.WORLD_WIDTH - 40;
      const minY = 90;
      const maxY = this.WORLD_HEIGHT - 35;

      // Collision checks with Station Props
      let canMoveX = nextX >= minX && nextX <= maxX;
      let canMoveY = nextY >= minY && nextY <= maxY;

      OWL_STATIONS.forEach(s => {
        // Station hitbox
        const hitPad = 26;
        if (nextX >= s.x - hitPad && nextX <= s.x + hitPad &&
            this.player.y >= s.y - hitPad && this.player.y <= s.y + hitPad) {
          canMoveX = false;
        }
        if (this.player.x >= s.x - hitPad && this.player.x <= s.x + hitPad &&
            nextY >= s.y - hitPad && nextY <= s.y + hitPad) {
          canMoveY = false;
        }
      });

      if (canMoveX) this.player.x = nextX;
      if (canMoveY) this.player.y = nextY;

      // Proximity to Stations
      let closest = null;
      let minDistance = 75; // Proximity threshold

      OWL_STATIONS.forEach(s => {
        const sDist = Math.hypot(this.player.x - s.x, this.player.y - s.y);
        if (sDist < minDistance) {
          minDistance = sDist;
          closest = s;
        }
      });

      this.nearStation = closest;
      this.updateProximityPrompt();

      // Speech bubble timer
      if (this.player.speechTimer > 0) {
        this.player.speechTimer -= dt * 1000;
        this.updateSpeechPosition();
        if (this.player.speechTimer <= 0) {
          if (this.speechFloat) this.speechFloat.classList.remove('is-visible');
        }
      }

      // Update Particles
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) {
          this.particles.splice(i, 1);
        }
      }
    }

    updateProximityPrompt() {
      if (!this.proximityPrompt || !this.canvas) return;

      if (this.nearStation) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = rect.width / this.WORLD_WIDTH;
        const scaleY = rect.height / this.WORLD_HEIGHT;

        const screenX = rect.left + (this.nearStation.x * scaleX);
        const screenY = rect.top + ((this.nearStation.y - 48) * scaleY);

        this.proximityPrompt.style.left = `${screenX}px`;
        this.proximityPrompt.style.top = `${screenY}px`;
        this.proximityPrompt.innerHTML = `<span>[E] Inspect ${this.nearStation.title} ✨</span>`;
        this.proximityPrompt.classList.add('is-visible');
      } else {
        this.proximityPrompt.classList.remove('is-visible');
      }
    }

    // ------------------------------------------------------------------------
    // Rendering Engine (Canvas 2D)
    // ------------------------------------------------------------------------
    render() {
      if (!this.ctx) return;
      const ctx = this.ctx;
      const W = this.WORLD_WIDTH;
      const H = this.WORLD_HEIGHT;

      ctx.clearRect(0, 0, W, H);

      // 1. Draw Retro Warm Tiled Floor
      this.drawFloor(ctx, W, H);

      // 2. Draw Top Wainscot Wall & Decor
      this.drawWalls(ctx, W, H);

      // 3. Draw Station Rugs & Bases
      OWL_STATIONS.forEach(s => this.drawStationBase(ctx, s));

      // 4. Sort and Draw Station Props & Player by Y for depth
      const drawList = [
        ...OWL_STATIONS.map(s => ({ type: 'station', y: s.y, data: s })),
        { type: 'player', y: this.player.y, data: this.player }
      ];
      drawList.sort((a, b) => a.y - b.y);

      drawList.forEach(item => {
        if (item.type === 'station') {
          this.drawStationProps(ctx, item.data);
        } else if (item.type === 'player') {
          this.drawPlayer(ctx);
        }
      });

      // 5. Draw Particles (Dust, Confetti)
      this.drawParticles(ctx);
    }

    drawFloor(ctx, W, H) {
      // Warm Cream Base
      ctx.fillStyle = '#FFF9EC';
      ctx.fillRect(0, 0, W, H);

      // Pixel Grid Floor Tiles
      ctx.strokeStyle = 'rgba(23, 23, 23, 0.05)';
      ctx.lineWidth = 1;
      const tileSize = 40;

      for (let x = 0; x < W; x += tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 80);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 80; y < H; y += tileSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    }

    drawWalls(ctx, W, H) {
      // Top Wall Background (Warm Cream/Beige Wainscot)
      ctx.fillStyle = '#EFE6D2';
      ctx.fillRect(0, 0, W, 80);

      // Wooden Trim Bar
      ctx.fillStyle = '#D4C4A3';
      ctx.fillRect(0, 72, W, 8);
      ctx.fillStyle = '#171717';
      ctx.fillRect(0, 78, W, 2);

      // Decorative Framed Posters on Wall
      // Poster 1: Kendriya Vidyalaya Certificate
      this.drawWallPoster(ctx, 170, 36, 50, 32, '#fef08a', 'CBSE 95%');
      // Poster 2: Aleesha OS & Owl Banner
      this.drawWallPoster(ctx, 480, 32, 90, 38, '#FFBF00', 'OWL.EXE');
      // Poster 3: NIFT Kannur Fashion Comm
      this.drawWallPoster(ctx, 790, 36, 50, 32, '#e9d5ff', 'NIFT 2027');

      // Room Outer Boundary Borders
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, W - 4, H - 4);
    }

    drawWallPoster(ctx, x, y, w, h, bg, label) {
      ctx.save();
      ctx.fillStyle = bg;
      ctx.fillRect(x - w / 2, y - h / 2, w, h);
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - w / 2, y - h / 2, w, h);

      ctx.fillStyle = '#171717';
      ctx.font = '8px "Silkscreen", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, x, y);
      ctx.restore();
    }

    drawStationBase(ctx, s) {
      ctx.save();
      const rugW = 100;
      const rugH = 64;

      // Station Rug with Soft Shadow
      ctx.fillStyle = 'rgba(23, 23, 23, 0.08)';
      ctx.beginPath();
      ctx.ellipse(s.x + 3, s.y + 6, rugW / 2, rugH / 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Colored Rug
      ctx.fillStyle = s.renderProps.rugColor || '#fef08a';
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, rugW / 2, rugH / 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Rug Border
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, rugW / 2, rugH / 2, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Glow Beacon if Player Near or Unvisited
      if (this.nearStation === s) {
        ctx.strokeStyle = '#FFBF00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(s.x, s.y, rugW / 2 + 5, rugH / 2 + 5, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    }

    drawStationProps(ctx, s) {
      ctx.save();
      const x = s.x;
      const y = s.y;

      // Draw Specific Station Props Based on ID
      if (s.id === 'origins') {
        // Wooden School Study Desk
        ctx.fillStyle = '#854d0e';
        ctx.fillRect(x - 24, y - 26, 48, 28);
        ctx.strokeStyle = '#171717';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 24, y - 26, 48, 28);

        // Desk accessories: Books, Microscope, Badge
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(x - 18, y - 23, 12, 10); // Red PCMB textbook
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(x - 16, y - 21, 10, 8);  // Blue math notebook
        ctx.fillStyle = '#FFBF00';
        ctx.fillRect(x + 8, y - 22, 10, 10);  // Gold trophy/badge

      } else if (s.id === 'education') {
        // NIFT Drafting Table
        ctx.fillStyle = '#6b21a8';
        ctx.fillRect(x - 26, y - 24, 52, 28);
        ctx.strokeStyle = '#171717';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 26, y - 24, 52, 28);

        // Drafting papers & Color palette
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x - 20, y - 20, 24, 18);
        ctx.fillStyle = '#ec4899';
        ctx.beginPath();
        ctx.arc(x + 14, y - 11, 6, 0, Math.PI * 2);
        ctx.fill();

      } else if (s.id === 'internships') {
        // Miniature 3D Stage Platform
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(x - 28, y - 24, 56, 26);
        ctx.strokeStyle = '#171717';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 28, y - 24, 56, 26);

        // Stage Truss Arc & Spotlight Neon
        ctx.strokeStyle = '#FFBF00';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 22, y - 20, 44, 8);
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(x, y - 16, 5, 0, Math.PI * 2);
        ctx.fill();

      } else if (s.id === 'toolkit') {
        // Dual Monitor Tech Desk
        ctx.fillStyle = '#065f46';
        ctx.fillRect(x - 26, y - 24, 52, 26);
        ctx.strokeStyle = '#171717';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 26, y - 24, 52, 26);

        // Monitors
        ctx.fillStyle = '#171717';
        ctx.fillRect(x - 22, y - 36, 20, 14);
        ctx.fillRect(x + 2, y - 36, 20, 14);
        ctx.fillStyle = '#6ee7b7';
        ctx.fillRect(x - 20, y - 34, 16, 10);
        ctx.fillRect(x + 4, y - 34, 16, 10);

      } else if (s.id === 'interests') {
        // Cozy Lounge Table & Moodboard
        ctx.fillStyle = '#9d174d';
        ctx.fillRect(x - 22, y - 22, 44, 24);
        ctx.strokeStyle = '#171717';
        ctx.lineWidth = 2;
        ctx.strokeRect(x - 22, y - 22, 44, 24);

        // Vinyl Record
        ctx.fillStyle = '#171717';
        ctx.beginPath();
        ctx.arc(x, y - 10, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#FFBF00';
        ctx.beginPath();
        ctx.arc(x, y - 10, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Station Sign / Title Banner
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 1.5;
      const tagW = 74;
      const tagH = 18;
      ctx.fillRect(x - tagW / 2, y + 16, tagW, tagH);
      ctx.strokeRect(x - tagW / 2, y + 16, tagW, tagH);

      ctx.fillStyle = '#171717';
      ctx.font = '8px "Silkscreen", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${s.icon} ${s.title.replace('My ', '')}`, x, y + 26);

      // Star Icon if Discovered
      if (this.discoveredZones.has(s.id)) {
        ctx.fillStyle = '#FFBF00';
        ctx.font = '11px sans-serif';
        ctx.fillText('★', x + tagW / 2 - 6, y + 16);
      }

      ctx.restore();
    }

    drawPlayer(ctx) {
      ctx.save();
      const p = this.player;

      // 1. Owl Shadow
      ctx.fillStyle = 'rgba(23, 23, 23, 0.22)';
      ctx.beginPath();
      ctx.ellipse(p.x, p.y + 14, 14, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Select Sprite based on State
      let spriteImg = this.sprites.sit;
      if (p.state === 'walk') spriteImg = this.sprites.walk || this.sprites.sit;
      else if (p.state === 'fly') spriteImg = this.sprites.fly || this.sprites.sit;
      else if (p.state === 'sleep') spriteImg = this.sprites.sleep || this.sprites.sit;

      // 3. Draw Sprite with Flip & Bobbing
      ctx.translate(p.x, p.y);
      if (p.facing === -1) {
        ctx.scale(-1, 1);
      }

      // Bobbing during walk or gentle breathing during idle
      let bobY = 0;
      if (p.state === 'walk') {
        bobY = Math.sin(p.walkTimer * 1.5) * 3;
      } else if (p.state === 'sit') {
        bobY = Math.sin(performance.now() / 350) * 1.5;
      }

      const drawSize = 46;

      if (spriteImg && spriteImg.complete && spriteImg.naturalWidth > 0) {
        ctx.drawImage(
          spriteImg,
          -drawSize / 2,
          -drawSize / 2 + bobY - 4,
          drawSize,
          drawSize
        );
      } else {
        // Fallback pixel owl if image loading
        ctx.fillStyle = '#FFBF00';
        ctx.beginPath();
        ctx.arc(0, bobY - 2, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#171717';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Sleeping Zzz particles
      if (p.state === 'sleep') {
        ctx.fillStyle = '#7c3aed';
        ctx.font = '9px "Silkscreen", monospace';
        const zOff = (performance.now() / 25) % 30;
        ctx.fillText('z', 10, -18 - zOff * 0.4);
        ctx.fillText('Z', 16, -26 - zOff * 0.4);
      }

      ctx.restore();
    }

    drawParticles(ctx) {
      this.particles.forEach(p => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.restore();
      });
    }
  }

  // --------------------------------------------------------------------------
  // 4. BOOTSTRAPPER & WINDOW INTEGRATION
  // --------------------------------------------------------------------------
  let gameInstance = null;

  function initOwlGame() {
    if (gameInstance) return;
    const container = document.getElementById('owl-game-container');
    if (!container) return;

    gameInstance = new OwlGame();
    window.owlGame = gameInstance;
  }

  // Auto-init on DOMContentLoaded or immediate if loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOwlGame);
  } else {
    initOwlGame();
  }

})();
