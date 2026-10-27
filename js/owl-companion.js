/* ==========================================================================
   ALEESHA OS - 3D PIXEL OWL DESKTOP COMPANION
   Inspired by MyOS / Neko cursor companions:
   - Sits, walks, flies, and sleeps following cursor movement
   - Features:
     * Sitting (perched, gentle breathing, head tilts)
     * Walking (waddling towards cursor at close range)
     * Flying (elevated flight, wing flaps, high-altitude 3D shadow)
     * Sleeping (peaceful slumber with rising Zzz particles after idle)
     * Interactive click reaction (hop, 360 spin, hearts & friendly hoot sound)
     * Taskbar toggle button to enable/disable anytime
   ========================================================================== */

class OwlCompanion {
  constructor() {
    this.x = window.innerWidth / 2 + 120;
    this.y = window.innerHeight / 2 + 60;
    this.targetX = this.x;
    this.targetY = this.y;
    this.mouseX = this.x;
    this.mouseY = this.y;

    this.vx = 0;
    this.vy = 0;
    this.facing = 1; // 1 = right, -1 = left
    this.state = 'sit'; // 'sit' | 'walk' | 'fly' | 'sleep'
    this.isEnabled = true;
    this.isAwake = true;

    this.idleTimer = 0;
    this.lastMouseMoveTime = Date.now();
    this.lastStateChangeTime = Date.now();
    this.stepFrame = 0;
    this.stepTimer = 0;
    this.bubbleTimer = null;
    this.isSpinning = false;

    this.initDOM();
    this.bindEvents();
    this.startLoop();
  }

  initDOM() {
    // Companion container
    this.container = document.createElement('div');
    this.container.id = 'desktop-owl-companion';
    this.container.className = 'desktop-owl-companion state-sit facing-right';
    this.container.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;

    this.container.innerHTML = `
      <div class="owl-bubble-container" id="owl-bubble-container">
        <div class="owl-speech-bubble" id="owl-speech-bubble">Hoot! ✨</div>
        <div class="owl-sleep-particles" id="owl-sleep-particles">
          <span class="z-particle z-1">Z</span>
          <span class="z-particle z-2">z</span>
          <span class="z-particle z-3">z</span>
        </div>
        <div class="owl-alert-icon" id="owl-alert-icon">!</div>
      </div>

      <div class="owl-sprite-wrap" id="owl-sprite-wrap" title="Click to pet Aleesha's Owl!">
        <img src="assets/owl_sit.png" alt="Owl Companion" class="owl-sprite-img" id="owl-sprite-img" draggable="false">
      </div>

      <div class="owl-shadow" id="owl-shadow"></div>
    `;

    document.body.appendChild(this.container);

    this.spriteImg = document.getElementById('owl-sprite-img');
    this.spriteWrap = document.getElementById('owl-sprite-wrap');
    this.speechBubble = document.getElementById('owl-speech-bubble');
    this.sleepParticles = document.getElementById('owl-sleep-particles');
    this.alertIcon = document.getElementById('owl-alert-icon');
    this.shadow = document.getElementById('owl-shadow');

    // Add Toggle to Taskbar Tray if available
    this.initTrayButton();
  }

  initTrayButton() {
    const trayClock = document.getElementById('tray-clock-btn');
    if (!trayClock || !trayClock.parentElement) return;

    const tray = trayClock.parentElement;
    const owlBtn = document.createElement('div');
    owlBtn.className = 'tray-item active';
    owlBtn.id = 'tray-owl-btn';
    owlBtn.title = 'Owl Companion: Active (Click to Toggle / Pet)';
    owlBtn.innerHTML = `
      <span class="tray-owl-icon" style="font-size: 15px; line-height: 1; display: inline-block; transition: transform 0.2s ease;">🦉</span>
    `;

    tray.insertBefore(owlBtn, trayClock);

    owlBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleCompanion();
    });
  }

  toggleCompanion() {
    this.isEnabled = !this.isEnabled;
    const btn = document.getElementById('tray-owl-btn');
    if (this.isEnabled) {
      this.container.style.display = 'block';
      if (btn) {
        btn.classList.add('active');
        btn.title = 'Owl Companion: Active (Click to Toggle)';
        btn.style.opacity = '1';
      }
      this.showBubble('I\'m back! 🦉✨', 2200);
      this.playChirp(784, 0.12);
    } else {
      this.container.style.display = 'none';
      if (btn) {
        btn.classList.remove('active');
        btn.title = 'Owl Companion: Disabled (Click to Enable)';
        btn.style.opacity = '0.55';
      }
    }
  }

  bindEvents() {
    const handleMove = (e) => {
      let cx = e.clientX;
      let cy = e.clientY;
      if (cx === undefined && e.touches && e.touches.length > 0) {
        cx = e.touches[0].clientX;
        cy = e.touches[0].clientY;
      }
      if (cx === undefined || cy === undefined) return;

      this.mouseX = cx;
      this.mouseY = cy;
      this.lastMouseMoveTime = Date.now();

      if (this.state === 'sleep') {
        this.wakeUp();
      }
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    // Click on owl to pet / interact
    if (this.spriteWrap) {
      this.spriteWrap.addEventListener('click', (e) => {
        e.stopPropagation();
        this.petOwl();
      });
    }
  }

  wakeUp() {
    this.state = 'sit';
    this.setStateClass('sit');
    this.setSprite('assets/owl_sit.png');
    this.sleepParticles.classList.remove('active');

    // Pop alert icon momentarily
    this.alertIcon.classList.add('pop');
    setTimeout(() => {
      this.alertIcon.classList.remove('pop');
    }, 600);

    this.playChirp(659, 0.09);
  }

  petOwl() {
    this.wakeUp();

    // Fun backflip / spin animation
    this.isSpinning = true;
    this.spriteWrap.style.transform = '';
    this.spriteWrap.classList.add('spin-jump');
    setTimeout(() => {
      this.spriteWrap.classList.remove('spin-jump');
      this.isSpinning = false;
    }, 700);

    // Audio reaction
    this.playCuteHoot();

    // Friendly messages
    const phrases = [
      'Hoot! 💕',
      'Aleesha\'s Pet 🦉',
      'Following you! ✨',
      '*happy purr* 🥰',
      'Ready to explore! 🎨'
    ];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    this.showBubble(phrase, 2000);

    // Spawn heart particles
    this.spawnHeartParticles();
  }

  showBubble(text, duration = 1800) {
    if (!this.speechBubble) return;
    this.speechBubble.textContent = text;
    this.speechBubble.classList.add('visible');

    if (this.bubbleTimer) clearTimeout(this.bubbleTimer);
    this.bubbleTimer = setTimeout(() => {
      this.speechBubble.classList.remove('visible');
    }, duration);
  }

  spawnHeartParticles() {
    for (let i = 0; i < 4; i++) {
      const heart = document.createElement('span');
      heart.className = 'owl-floating-heart';
      heart.textContent = ['💖', '✨', '🌸', '💫'][i % 4];
      heart.style.left = `${20 + (i * 12)}px`;
      heart.style.bottom = `${40 + (i * 8)}px`;
      heart.style.animationDelay = `${i * 0.1}s`;
      this.container.appendChild(heart);

      setTimeout(() => {
        if (heart.parentElement) heart.parentElement.removeChild(heart);
      }, 1200);
    }
  }

  playChirp(freq = 660, dur = 0.1) {
    try {
      if (window.soundSystem) {
        if (window.soundSystem.isMuted) return;
        window.soundSystem.init();
        const audioCtx = window.soundSystem.ctx;
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.35, audioCtx.currentTime + dur);

        gain.gain.setValueAtTime(0.04 * (window.soundSystem.masterVolume || 0.6), audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + dur);
      }
    } catch (_) {}
  }

  playCuteHoot() {
    try {
      if (window.soundSystem) {
        if (window.soundSystem.isMuted) return;
        window.soundSystem.init();
        const audioCtx = window.soundSystem.ctx;
        if (!audioCtx) return;
        
        // Two-tone cheerful owl hoot
        const playTone = (freq, start, dur) => {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);
          osc.frequency.exponentialRampToValueAtTime(freq * 1.15, start + dur);

          gain.gain.setValueAtTime(0.06 * (window.soundSystem.masterVolume || 0.6), start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + dur);

          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(start);
          osc.stop(start + dur);
        };

        const now = audioCtx.currentTime;
        playTone(523.25, now, 0.12);       // C5
        playTone(659.25, now + 0.14, 0.18); // E5
      }
    } catch (_) {}
  }

  setSprite(src) {
    if (this.spriteImg && this.spriteImg.getAttribute('src') !== src) {
      this.spriteImg.src = src;
    }
  }

  setStateClass(stateName) {
    this.container.classList.remove('state-sit', 'state-walk', 'state-fly', 'state-sleep');
    this.container.classList.add(`state-${stateName}`);
  }

  startLoop() {
    const loop = () => {
      this.update();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  update() {
    if (!this.isEnabled) return;

    const now = Date.now();
    const idleTime = now - this.lastMouseMoveTime;

    // Natural trailing offset (trailing behind cursor, never directly under tip)
    const offsetX = (this.facing === 1) ? -38 : 38;
    const offsetY = 18;
    this.targetX = this.mouseX + offsetX;
    this.targetY = this.mouseY + offsetY;

    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Update facing direction based on cursor position relative to the owl
    const cursorDx = this.mouseX - this.x;
    if (Math.abs(cursorDx) > 8) {
      this.facing = cursorDx > 0 ? 1 : -1;
      if (this.facing === 1) {
        this.container.classList.add('facing-right');
        this.container.classList.remove('facing-left');
      } else {
        this.container.classList.add('facing-left');
        this.container.classList.remove('facing-right');
      }
    }

    // STATE MACHINE:
    if (idleTime > 4500 && dist < 30) {
      // 1. SLEEPING STATE
      if (this.state !== 'sleep') {
        this.state = 'sleep';
        this.setStateClass('sleep');
        this.setSprite('assets/owl_sleep.png');
        this.sleepParticles.classList.add('active');
      }
      this.vx *= 0.8;
      this.vy *= 0.8;
    } else if (dist >= 170) {
      // 2. FLYING STATE (cursor is far away or moved quickly)
      if (this.state !== 'fly') {
        this.state = 'fly';
        this.setStateClass('fly');
        this.setSprite('assets/owl_fly.png');
        this.sleepParticles.classList.remove('active');
      }

      // Fast aerodynamic glide
      const flySpeed = Math.min(13.5, 5 + dist * 0.035);
      const angle = Math.atan2(dy, dx);
      this.vx = Math.cos(angle) * flySpeed;
      this.vy = Math.sin(angle) * flySpeed;

    } else if (dist >= 26) {
      // 3. WALKING / WADDLING STATE
      if (this.state !== 'walk') {
        this.state = 'walk';
        this.setStateClass('walk');
        this.sleepParticles.classList.remove('active');
      }

      // Waddling step cadence
      this.stepTimer++;
      if (this.stepTimer % 8 === 0) {
        this.stepFrame = (this.stepFrame + 1) % 2;
        this.setSprite(this.stepFrame === 0 ? 'assets/owl_walk.png' : 'assets/owl_sit.png');
      }

      // Smooth ground movement
      const walkSpeed = Math.min(6.2, 2.5 + dist * 0.025);
      const angle = Math.atan2(dy, dx);
      this.vx = Math.cos(angle) * walkSpeed;
      this.vy = Math.sin(angle) * walkSpeed;

    } else {
      // 4. SITTING / IDLE STATE
      if (this.state !== 'sit') {
        this.state = 'sit';
        this.setStateClass('sit');
        this.setSprite('assets/owl_sit.png');
        this.sleepParticles.classList.remove('active');
      }

      // Smooth deceleration to stop
      this.vx *= 0.7;
      this.vy *= 0.7;
      if (Math.abs(this.vx) < 0.1) this.vx = 0;
      if (Math.abs(this.vy) < 0.1) this.vy = 0;
    }

    // Apply horizontal facing flip (Left & Right) and aerodynamic banking
    if (!this.isSpinning) {
      if (this.state === 'fly') {
        // Banking pitch based on vertical flight angle
        const pitch = Math.max(-20, Math.min(20, (this.vy / (Math.abs(this.vx) + 2)) * 18));
        this.spriteWrap.style.transform = `scaleX(${this.facing}) rotate(${pitch}deg)`;
      } else {
        this.spriteWrap.style.transform = `scaleX(${this.facing})`;
      }
    }

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Keep within window bounds
    const pad = 30;
    this.x = Math.max(pad, Math.min(window.innerWidth - pad, this.x));
    this.y = Math.max(pad, Math.min(window.innerHeight - pad - 45, this.y));

    // Render position
    this.container.style.transform = `translate3d(${Math.round(this.x)}px, ${Math.round(this.y)}px, 0)`;
  }
}

function initOwlCompanion() {
  if (!window.owlCompanion) {
    window.owlCompanion = new OwlCompanion();
  }
}

// Auto-initialize reliably across all environments (Vercel CDN, fast cache, etc.)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOwlCompanion);
} else {
  initOwlCompanion();
}
