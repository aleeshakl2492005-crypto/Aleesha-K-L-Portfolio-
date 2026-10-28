/**
 * OWL.EXE — "WAKE ME UP!" INTERACTIVE PORTFOLIO GAME
 * Inspired by wakeup.isadoradigitalagency.com
 * Feature: Try to wake up the sleeping owl to learn all about Aleesha K. L. (Kochi, Kerala)
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. RETRO WEB AUDIO API SYNTHESIZER
  // --------------------------------------------------------------------------
  class WakeAudioEngine {
    constructor() {
      this.ctx = null;
      this.enabled = false;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.init();
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playTone(freq, type = 'sine', duration = 0.15, vol = 0.15) {
      if (!this.enabled || !this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // silent fallback
      }
    }

    playPoke() {
      if (!this.enabled || !this.ctx) return;
      this.playTone(320, 'triangle', 0.12, 0.18);
      setTimeout(() => this.playTone(480, 'sine', 0.1, 0.12), 60);
    }

    playSnore() {
      if (!this.enabled || !this.ctx) return;
      this.playTone(110, 'sine', 0.8, 0.08);
    }

    playTickle() {
      if (!this.enabled || !this.ctx) return;
      [420, 560, 680, 820, 960].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'triangle', 0.08, 0.1), i * 55);
      });
    }

    playAlarm() {
      if (!this.enabled || !this.ctx) return;
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          this.playTone(i % 2 === 0 ? 880 : 660, 'square', 0.06, 0.12);
        }, i * 75);
      }
    }

    playCoffee() {
      if (!this.enabled || !this.ctx) return;
      [240, 320, 440, 560].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'sine', 0.18, 0.1), i * 110);
      });
    }

    playSun() {
      if (!this.enabled || !this.ctx) return;
      [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'sine', 0.3, 0.1), i * 90);
      });
    }

    playMosquito() {
      if (!this.enabled || !this.ctx) return;
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          this.playTone(740 + Math.sin(i) * 60, 'sawtooth', 0.08, 0.06);
        }, i * 65);
      }
    }

    playPillow() {
      if (!this.enabled || !this.ctx) return;
      this.playTone(120, 'triangle', 0.22, 0.25);
    }

    playFanfare() {
      if (!this.enabled || !this.ctx) return;
      const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
      notes.forEach((f, i) => {
        setTimeout(() => this.playTone(f, 'triangle', 0.25, 0.2), i * 95);
      });
      setTimeout(() => {
        this.playTone(1046.5, 'sine', 0.6, 0.25);
      }, notes.length * 95);
    }
  }

  // --------------------------------------------------------------------------
  // 2. WAKE GAME ORCHESTRATOR
  // --------------------------------------------------------------------------
  class WakeUpOwlGame {
    constructor() {
      this.audio = new WakeAudioEngine();
      this.wakePercent = 0;
      this.currentStageIndex = 0;
      this.activeTool = null;
      this.isInteracting = false;
      this.snoreInterval = null;

      // Real Owl Artworks from project
      this.owlAssets = {
        sleep: 'assets/owl_sleep.png',
        sit: 'assets/owl_sit.png',
        walk: 'assets/owl_walk.png',
        fly: 'assets/owl_fly.png'
      };

      // Story & Dialogue Data: Aleesha K. L.
      this.storyStages = [
        {
          minPercent: 0,
          maxPercent: 20,
          tag: '🌴 Kochi, Kerala',
          title: 'Deep In Slumber',
          owlPose: 'sleep',
          status: 'Sound asleep in Kochi... 💤',
          dialogue: '“Mmmph... zzz... Go away! I’m an owl, we are strictly nocturnal! Aleesha’s asleep dreaming of Kochi, Kerala... banana chips, sea breezes at Marine Drive, Fort Kochi sunsets... don’t bother waking me up! 😴”',
          preview: null
        },
        {
          minPercent: 20,
          maxPercent: 40,
          tag: '📚 Schooling & Kendriya Vidyalaya',
          title: 'One Eye Cracks Open',
          owlPose: 'sleep',
          status: 'Grumbling about school bells... ⏰',
          dialogue: '“Yaaawn! Wait, is that the Kendriya Vidyalaya morning assembly bell?! Did you know Aleesha aced school? She scored 95% in Class 10 and 91% in Class 12 with PCMB (Physics, Chem, Math, Bio)! A science mind with a creative heart! Now let me snooze... 🛌”',
          preview: {
            title: 'School Achievements',
            sub: 'Kendriya Vidyalaya • 10th: 95% • 12th: 91% PCMB'
          }
        },
        {
          minPercent: 40,
          maxPercent: 60,
          tag: '🎓 NIFT Kannur',
          title: 'Blinking & Stretching',
          owlPose: 'sit',
          status: 'Fashion Communication deadlines! 🎨',
          dialogue: '“Aaargh! Alright, who opened the curtains?! I have major jury submissions! Aleesha is in her 3rd Year at NIFT Kannur doing B.Des Fashion Communication! She specializes in 3D spatial design, fashion styling, photography, and brand identity! Stop poking, my feathers are couture! ✨”',
          preview: {
            title: 'NIFT Kannur (3rd Year)',
            sub: 'B.Des Fashion Communication • 3D Spatial & Styling'
          }
        },
        {
          minPercent: 60,
          maxPercent: 80,
          tag: '💼 Real-World Internships',
          title: 'Perking Up!',
          owlPose: 'sit',
          status: 'Smelling freshly roasted coffee... ☕',
          dialogue: '“Wait a second... is that freshly brewed Kerala filter coffee?! Okay, now I’m listening! Have you seen her 3D stage and set designs at Rainmakers Signature Experiences? Massive 60x30ft concert stages, LED lighting, and Blender models! Plus graphic design branding at InAmigos Foundation! She literally builds worlds in 3D! 🎬”',
          preview: {
            title: 'Rainmakers & InAmigos Internships',
            sub: '3D Stage Design & Visual Communication'
          }
        },
        {
          minPercent: 80,
          maxPercent: 100,
          tag: '🎉 100% WIDE AWAKE!',
          title: 'Fully Awake & Celebratory!',
          owlPose: 'fly',
          status: 'Wide awake! Ready to create! 🦉',
          dialogue: '“HOOT HOOT! ALRIGHT, I’M 100% AWAKE! 🦉✨ You actually woke me up! Fine, let me give you the VIP tour of Aleesha’s creative universe: 3D stages in Blender, Fusion 360, Figma UI prototypes, and graphic styling! Explore her full work below!”',
          preview: {
            title: 'Aleesha K. L. Portfolio',
            sub: '3D Visual & Experience Designer • Kochi, Kerala'
          }
        }
      ];

      // Tool Configurations
      this.tools = [
        { id: 'poke', name: 'Poke It', icon: '👆', boost: 15, hint: 'Try tapping him directly!' },
        { id: 'feather', name: 'Tickle', icon: '🪶', boost: 20, hint: 'Make the owl giggle!' },
        { id: 'coffee', name: 'Kaapi', icon: '☕', boost: 25, hint: 'Brew Kerala filter coffee!' },
        { id: 'alarm', name: 'Alarm', icon: '⏰', boost: 25, hint: 'Ring the morning bell!' },
        { id: 'sun', name: 'Sunshine', icon: '☀️', boost: 20, hint: 'Open morning curtains!' },
        { id: 'mosquito', name: 'Bug It', icon: '🦟', boost: 18, hint: 'Buzz a Kerala mosquito!' },
        { id: 'pillow', name: 'Pillow', icon: '🥿', boost: 18, hint: 'Toss a soft cushion!' }
      ];

      this.initDOM();
      this.bindEvents();
      this.startSnoreRoutine();
    }

    initDOM() {
      this.container = document.getElementById('owl-game-container');
      if (!this.container) return;

      // Render the complete Wake-Up Game HTML structure
      this.container.innerHTML = `
        <div class="owl-wakeup-app">
          <div class="owl-crt-overlay"></div>
          
          <!-- Diagonal Award Ribbon -->
          <div class="owl-award-ribbon">Site of the Day</div>

          <!-- Top-Left Circular Wake Meter Gauge -->
          <div class="owl-gauge-wrap">
            <div class="owl-gauge-circle">
              <svg class="owl-gauge-svg" viewBox="0 0 68 68">
                <circle class="owl-gauge-track" cx="34" cy="34" r="30"></circle>
                <circle class="owl-gauge-bar" id="owl-gauge-progress" cx="34" cy="34" r="30"></circle>
              </svg>
              <div class="owl-gauge-val" id="owl-gauge-text">0%</div>
            </div>
            <div class="owl-gauge-info">
              <div class="owl-gauge-label">
                <span>Wake Me Up!</span>
                <span style="font-size: 11px;">⏰</span>
              </div>
              <div class="owl-gauge-status" id="owl-gauge-status">Sound asleep in Kochi... 💤</div>
            </div>
          </div>

          <!-- Bottom-Left Sound Toggle & Hint -->
          <div class="owl-bottom-left">
            <button class="owl-sound-btn" id="owl-wake-sound-btn" type="button" title="Toggle 8-bit sound effects">
              <span id="owl-sound-icon">🔇</span>
              <span id="owl-sound-label">Sound: OFF</span>
            </button>
            <div class="owl-hint-badge" id="owl-hint-badge">
              ✦ Use the tools on the right or tap the owl to wake it up!
            </div>
          </div>

          <!-- Center: Simulated Browser Window -->
          <div class="owl-game-stage-wrap">
            <div class="owl-browser-frame">
              
              <!-- Browser Header -->
              <div class="owl-browser-header">
                <div class="owl-browser-dots">
                  <div class="owl-browser-dot owl-dot-red"></div>
                  <div class="owl-browser-dot owl-dot-yellow"></div>
                  <div class="owl-browser-dot owl-dot-green"></div>
                </div>

                <div class="owl-browser-url-bar">
                  <div class="owl-browser-url-text">
                    <span class="owl-url-lock">🔒</span>
                    <span>https://donotwake.aleesha/owl.exe</span>
                  </div>
                  <span style="font-size: 10px; color: #9ca3af;">REFRESH</span>
                </div>

                <!-- Browser Mock Tabs -->
                <div class="owl-browser-tabs">
                  <button class="owl-mock-tab" data-nav="about">ABOUT</button>
                  <button class="owl-mock-tab" data-nav="origins">ORIGINS</button>
                  <button class="owl-mock-tab" data-nav="college">COLLEGE</button>
                  <button class="owl-mock-tab" data-nav="internships">INTERNSHIPS</button>
                  <button class="owl-mock-tab" data-nav="toolkit">TOOLKIT</button>
                </div>
              </div>

              <!-- Swaying "DO NOT DISTURB" Door Sign -->
              <div class="owl-dnd-sign-wrap" id="owl-dnd-sign" title="Click to swing sign!">
                <div class="owl-dnd-hook"></div>
                <div class="owl-dnd-sign">
                  <div>DO NOT</div>
                  <div style="font-size: 9px; font-weight: 800; color: #FFBF00;">DISTURB</div>
                </div>
              </div>

              <!-- Inside Browser Stage -->
              <div class="owl-stage-inner" id="owl-stage-inner">
                
                <!-- Sunbeam wash layer -->
                <div class="owl-sunbeam-overlay" id="owl-sunbeam-overlay"></div>

                <!-- Snoring "z Z Z" particles -->
                <div class="owl-snore-stream" id="owl-snore-stream">
                  <div class="owl-snore-letter">z</div>
                  <div class="owl-snore-letter">Z</div>
                  <div class="owl-snore-letter">Z</div>
                </div>

                <!-- Dynamic Speech Bubble (The Owl Talking About Aleesha) -->
                <div class="owl-speech-bubble-wrap" id="owl-speech-wrap">
                  <div class="owl-speech-card" id="owl-speech-card">
                    <div class="owl-speech-header">
                      <span class="owl-speech-tag" id="owl-speech-tag">🌴 Kochi, Kerala</span>
                      <span class="owl-speech-stage" id="owl-speech-stage">Stage 1 of 5</span>
                    </div>
                    <div class="owl-speech-text" id="owl-speech-text">
                      “Mmmph... zzz... Go away! I’m an owl, we are strictly nocturnal! Aleesha’s asleep dreaming of Kochi, Kerala... banana chips, sea breezes at Marine Drive, Fort Kochi sunsets... don’t bother waking me up! 😴”
                    </div>
                    <div class="owl-speech-preview" id="owl-speech-preview" style="display: none;">
                      <img src="assets/owl_sit.png" alt="Preview" id="owl-preview-img">
                      <div>
                        <strong id="owl-preview-title"></strong>
                        <div id="owl-preview-sub"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Central Sleeping Character Rig -->
                <div class="owl-character-rig" id="owl-character-rig" title="Click or tap to poke the owl!">
                  <div class="owl-bed-cushion"></div>
                  <img src="${this.owlAssets.sleep}" alt="Sleeping Owl" class="owl-sprite-img" id="owl-game-character-sprite">
                </div>

                <!-- Tap Prompt directly below character -->
                <div class="owl-tap-prompt" id="owl-tap-prompt">
                  <span>👆</span>
                  <span>Poke / Tap me to test my patience!</span>
                </div>

              </div>

            </div>
          </div>

          <!-- Right Side: Interactive Tool Column (Isadora style) -->
          <div class="owl-tool-column" id="owl-tool-column">
            <!-- Injected by script -->
          </div>

          <!-- Victory Reveal Modal (100% Awake) -->
          <div class="owl-victory-modal" id="owl-victory-modal">
            <div class="owl-victory-card">
              <div class="owl-victory-header">
                <div class="owl-victory-title">
                  <img src="assets/owl_fly.png" alt="Awake Owl">
                  <span>OWL.EXE — 100% WIDE AWAKE! 🎉</span>
                </div>
                <button class="owl-victory-close" id="owl-victory-close" type="button">✕ Close</button>
              </div>
              <div class="owl-victory-body">
                <div class="owl-celebration-hero">
                  <img src="assets/owl_fly.png" alt="Aleesha Owl">
                  <div class="owl-celebration-text">
                    <h2>HOOT HOOT! YOU DID IT! 🦉✨</h2>
                    <p>
                      You successfully woke up the heaviest sleeper on the internet! Here is the authentic breakdown of Aleesha K. L. and her creative journey from Kochi to 3D spatial worlds.
                    </p>
                  </div>
                </div>

                <div class="owl-victory-grid">
                  <div class="owl-victory-box">
                    <div class="owl-victory-box-title">
                      <span>🌴</span> <span>Origins & Schooling</span>
                    </div>
                    <div class="owl-victory-box-content">
                      • <strong>Roots:</strong> Kochi, Kerala<br>
                      • <strong>School:</strong> Kendriya Vidyalaya<br>
                      • <strong>Class 10:</strong> 95% • <strong>Class 12:</strong> 91%<br>
                      • <strong>Stream:</strong> PCMB (Physics, Chemistry, Mathematics, Biology)
                    </div>
                  </div>

                  <div class="owl-victory-box">
                    <div class="owl-victory-box-title">
                      <span>🎓</span> <span>College & Specialization</span>
                    </div>
                    <div class="owl-victory-box-content">
                      • <strong>Institute:</strong> NIFT Kannur<br>
                      • <strong>Course:</strong> B.Des Fashion Communication<br>
                      • <strong>Stage:</strong> 3rd Year<br>
                      • <strong>Focus:</strong> 3D Spatial Design, Styling, Visual Merchandising & Experience Design
                    </div>
                  </div>

                  <div class="owl-victory-box">
                    <div class="owl-victory-box-title">
                      <span>💼</span> <span>Internships</span>
                    </div>
                    <div class="owl-victory-box-content">
                      • <strong>Rainmakers Signature Experiences:</strong> 3D Visual & Stage/Set Design Intern (60ft concert stages, Blender renders)<br>
                      • <strong>InAmigos Foundation:</strong> Graphic Design Intern
                    </div>
                  </div>

                  <div class="owl-victory-box">
                    <div class="owl-victory-box-title">
                      <span>🛠️</span> <span>Creative Toolkit</span>
                    </div>
                    <div class="owl-victory-box-content">
                      • <strong>3D & Spatial:</strong> Blender, Fusion 360, AutoCAD<br>
                      • <strong>Design:</strong> Figma, Photoshop, Illustrator, InDesign<br>
                      • <strong>Video & Media:</strong> CapCut, Photography
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-victory-footer">
                <button class="owl-btn-replay" id="owl-btn-replay" type="button">
                  😴 Put Owl Back to Sleep (Replay)
                </button>
                <button class="owl-btn-portfolio" id="owl-btn-portfolio" type="button">
                  📂 Explore Projects & Work ➔
                </button>
              </div>
            </div>
          </div>

        </div>
      `;

      // Render tool buttons on right
      const toolCol = document.getElementById('owl-tool-column');
      if (toolCol) {
        this.tools.forEach(tool => {
          const btn = document.createElement('button');
          btn.className = 'owl-tool-btn';
          btn.id = `owl-tool-${tool.id}`;
          btn.type = 'button';
          btn.title = `${tool.name} — ${tool.hint}`;
          btn.innerHTML = `
            <div class="owl-tool-icon-wrap">${tool.icon}</div>
            <div class="owl-tool-name">${tool.name}</div>
            <div class="owl-tool-progress">
              <div class="owl-tool-progress-fill" id="owl-tool-prog-${tool.id}"></div>
            </div>
          `;
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.executeTool(tool);
          });
          toolCol.appendChild(btn);
        });
      }

      this.updateGauge();
    }

    bindEvents() {
      // Sound Toggle
      const soundBtn = document.getElementById('owl-wake-sound-btn');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          const isEnabled = this.audio.toggle();
          const icon = document.getElementById('owl-sound-icon');
          const label = document.getElementById('owl-sound-label');
          if (icon) icon.textContent = isEnabled ? '🔊' : '🔇';
          if (label) label.textContent = isEnabled ? 'Sound: ON' : 'Sound: OFF';
          soundBtn.classList.toggle('is-active', isEnabled);
          if (isEnabled) {
            this.audio.playPoke();
          }
        });
      }

      // Tap on Owl Rig directly
      const owlRig = document.getElementById('owl-character-rig');
      const tapPrompt = document.getElementById('owl-tap-prompt');
      const handlePoke = (e) => {
        if (e) e.stopPropagation();
        this.executePoke();
      };
      if (owlRig) owlRig.addEventListener('click', handlePoke);
      if (tapPrompt) tapPrompt.addEventListener('click', handlePoke);

      // Swing DND sign
      const dndSign = document.getElementById('owl-dnd-sign');
      if (dndSign) {
        dndSign.addEventListener('click', () => {
          this.audio.playPillow();
          dndSign.style.animation = 'none';
          void dndSign.offsetWidth;
          dndSign.style.animation = 'owlSwaySign 1s ease-in-out infinite';
          this.showQuickMurmur('“Hey! Can’t you read the sign?! DO NOT DISTURB! 🚪”');
        });
      }

      // Browser Mock Tabs
      document.querySelectorAll('.owl-mock-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.stopPropagation();
          const nav = tab.getAttribute('data-nav');
          this.handleNavTabClick(nav);
        });
      });

      // Victory Close & Actions
      const victoryClose = document.getElementById('owl-victory-close');
      const replayBtn = document.getElementById('owl-btn-replay');
      const portfolioBtn = document.getElementById('owl-btn-portfolio');

      if (victoryClose) {
        victoryClose.addEventListener('click', () => {
          document.getElementById('owl-victory-modal').classList.remove('is-open');
        });
      }

      if (replayBtn) {
        replayBtn.addEventListener('click', () => {
          document.getElementById('owl-victory-modal').classList.remove('is-open');
          this.resetToSleep();
        });
      }

      if (portfolioBtn) {
        portfolioBtn.addEventListener('click', () => {
          if (window.windowManager) {
            window.windowManager.open('projects');
          }
        });
      }
    }

    startSnoreRoutine() {
      if (this.snoreInterval) clearInterval(this.snoreInterval);
      this.snoreInterval = setInterval(() => {
        if (this.wakePercent < 40 && !this.isInteracting) {
          this.audio.playSnore();
        }
      }, 4200);
    }

    // --------------------------------------------------------------------------
    // 3. EXECUTE TOOLS & POKE
    // --------------------------------------------------------------------------
    executePoke() {
      const pokeTool = this.tools.find(t => t.id === 'poke') || { id: 'poke', boost: 15 };
      this.audio.playPoke();
      this.triggerOwlReaction('owl-react-poked');
      this.boostWakefulness(pokeTool.boost, pokeTool.id);
    }

    executeTool(tool) {
      if (this.isInteracting) return;
      this.isInteracting = true;

      // Fill tool button progress temporarily
      const progEl = document.getElementById(`owl-tool-prog-${tool.id}`);
      if (progEl) {
        progEl.style.width = '100%';
        setTimeout(() => { progEl.style.width = '0%'; }, 1200);
      }

      const stage = document.getElementById('owl-stage-inner');
      const owlRig = document.getElementById('owl-character-rig');

      // 1. Feather Tickle
      if (tool.id === 'feather') {
        this.audio.playTickle();
        this.spawnActiveActor(stage, owlRig, '🪶', 'owl-actor-feather');
        this.triggerOwlReaction('owl-react-tickled');
      }
      // 2. Filter Coffee / Kaapi
      else if (tool.id === 'coffee') {
        this.audio.playCoffee();
        this.spawnActiveActor(stage, owlRig, '☕', 'owl-actor-coffee');
        this.triggerOwlReaction('owl-react-shock');
      }
      // 3. Alarm Clock
      else if (tool.id === 'alarm') {
        this.audio.playAlarm();
        this.spawnActiveActor(stage, owlRig, '⏰', 'owl-actor-alarm');
        this.triggerOwlReaction('owl-react-shock');
      }
      // 4. Sunshine / Curtains
      else if (tool.id === 'sun') {
        this.audio.playSun();
        const sunbeam = document.getElementById('owl-sunbeam-overlay');
        if (sunbeam) {
          sunbeam.classList.add('is-active');
          setTimeout(() => sunbeam.classList.remove('is-active'), 2000);
        }
        this.triggerOwlReaction('owl-react-poked');
      }
      // 5. Mosquito
      else if (tool.id === 'mosquito') {
        this.audio.playMosquito();
        this.spawnActiveActor(stage, owlRig, '🦟', 'owl-actor-mosquito');
        this.triggerOwlReaction('owl-react-tickled');
      }
      // 6. Flying Pillow
      else if (tool.id === 'pillow') {
        this.audio.playPillow();
        this.spawnActiveActor(stage, owlRig, '🥿', 'owl-actor-pillow');
        this.triggerOwlReaction('owl-react-poked');
      }
      // Fallback
      else {
        this.audio.playPoke();
        this.triggerOwlReaction('owl-react-poked');
      }

      // Advance wakefulness
      this.boostWakefulness(tool.boost, tool.id);

      setTimeout(() => {
        this.isInteracting = false;
      }, 700);
    }

    spawnActiveActor(stage, rig, icon, className) {
      if (!stage || !rig) return;
      const actor = document.createElement('div');
      actor.className = `owl-active-tool-actor ${className}`;
      actor.textContent = icon;
      
      const rigRect = rig.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      actor.style.left = `${rigRect.left - stageRect.left + 80}px`;
      actor.style.top = `${rigRect.top - stageRect.top + 60}px`;

      stage.appendChild(actor);
      setTimeout(() => {
        if (actor.parentNode) actor.parentNode.removeChild(actor);
      }, 2000);
    }

    triggerOwlReaction(animClass) {
      const sprite = document.getElementById('owl-game-character-sprite');
      if (!sprite) return;
      sprite.classList.remove('owl-react-poked', 'owl-react-tickled', 'owl-react-shock');
      void sprite.offsetWidth; // reflow
      sprite.classList.add(animClass);
      setTimeout(() => {
        sprite.classList.remove(animClass);
      }, 1000);
    }

    // --------------------------------------------------------------------------
    // 4. PROGRESSION & ALEESHA STORYLINE
    // --------------------------------------------------------------------------
    boostWakefulness(amount, toolId) {
      const prevPercent = this.wakePercent;
      this.wakePercent = Math.min(100, this.wakePercent + amount);
      this.updateGauge();

      // Determine appropriate story stage
      const stage = this.getStageForPercent(this.wakePercent);
      if (stage) {
        this.renderStoryStage(stage);
      }

      // Check for 100% Victory
      if (this.wakePercent >= 100 && prevPercent < 100) {
        setTimeout(() => {
          this.triggerVictory();
        }, 800);
      }
    }

    getStageForPercent(percent) {
      for (let i = this.storyStages.length - 1; i >= 0; i--) {
        if (percent >= this.storyStages[i].minPercent) {
          return this.storyStages[i];
        }
      }
      return this.storyStages[0];
    }

    updateGauge() {
      const bar = document.getElementById('owl-gauge-progress');
      const text = document.getElementById('owl-gauge-text');
      const status = document.getElementById('owl-gauge-status');

      if (bar) {
        const circumference = 188.5; // 2 * PI * 30
        const offset = circumference - (this.wakePercent / 100) * circumference;
        bar.style.strokeDashoffset = offset;
      }

      if (text) {
        text.textContent = `${this.wakePercent}%`;
      }

      const stage = this.getStageForPercent(this.wakePercent);
      if (status && stage) {
        status.textContent = stage.status;
      }

      // Hide or show snoring stream
      const snoreStream = document.getElementById('owl-snore-stream');
      if (snoreStream) {
        snoreStream.style.display = this.wakePercent >= 60 ? 'none' : 'block';
      }

      // Update owl visual sprite
      const sprite = document.getElementById('owl-game-character-sprite');
      if (sprite && stage) {
        const newSrc = this.owlAssets[stage.owlPose] || this.owlAssets.sleep;
        if (sprite.getAttribute('src') !== newSrc) {
          sprite.src = newSrc;
        }
      }
    }

    renderStoryStage(stage) {
      const tag = document.getElementById('owl-speech-tag');
      const stageText = document.getElementById('owl-speech-stage');
      const text = document.getElementById('owl-speech-text');
      const preview = document.getElementById('owl-speech-preview');
      const previewImg = document.getElementById('owl-preview-img');
      const previewTitle = document.getElementById('owl-preview-title');
      const previewSub = document.getElementById('owl-preview-sub');

      const stageIndex = this.storyStages.indexOf(stage) + 1;
      if (tag) tag.textContent = stage.tag;
      if (stageText) stageText.textContent = `Stage ${stageIndex} of 5`;
      if (text) text.textContent = stage.dialogue;

      if (stage.preview && preview && previewTitle && previewSub) {
        preview.style.display = 'flex';
        previewTitle.textContent = stage.preview.title;
        previewSub.textContent = stage.preview.sub;
        if (previewImg) {
          previewImg.src = stage.owlPose === 'fly' ? this.owlAssets.fly : this.owlAssets.sit;
        }
      } else if (preview) {
        preview.style.display = 'none';
      }
    }

    showQuickMurmur(msg) {
      const text = document.getElementById('owl-speech-text');
      if (text) {
        const orig = text.textContent;
        text.textContent = msg;
        setTimeout(() => {
          text.textContent = orig;
        }, 2200);
      }
    }

    handleNavTabClick(nav) {
      if (this.wakePercent < 80) {
        this.audio.playPillow();
        this.showQuickMurmur('“Zzz... Sorry, the site is sleeping heavily! Try using the tools on the right to wake me up first! 😴”');
      } else {
        // Owl is awake! Show relevant topic
        this.audio.playPoke();
        if (nav === 'origins') {
          this.renderStoryStage(this.storyStages[1]);
        } else if (nav === 'college') {
          this.renderStoryStage(this.storyStages[2]);
        } else if (nav === 'internships') {
          this.renderStoryStage(this.storyStages[3]);
        } else if (nav === 'toolkit' || nav === 'about') {
          document.getElementById('owl-victory-modal').classList.add('is-open');
        }
      }
    }

    triggerVictory() {
      this.audio.playFanfare();
      const modal = document.getElementById('owl-victory-modal');
      if (modal) {
        modal.classList.add('is-open');
      }
    }

    resetToSleep() {
      this.wakePercent = 0;
      this.updateGauge();
      this.renderStoryStage(this.storyStages[0]);
      const sprite = document.getElementById('owl-game-character-sprite');
      if (sprite) sprite.src = this.owlAssets.sleep;
      this.startSnoreRoutine();
    }

    handleResize() {
      // Keeps elements aligned if window is resized or maximized
    }

    closeModal() {
      const modal = document.getElementById('owl-victory-modal');
      if (modal) modal.classList.remove('is-open');
    }
  }

  // Expose globally to window
  window.owlGame = new WakeUpOwlGame();

})();
