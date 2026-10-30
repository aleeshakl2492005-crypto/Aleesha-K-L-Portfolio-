/* ==========================================================================
   ALEESHA OS - WINDOWS WELCOME / LOADING PROFILE SCRIPT
   - Animated 3D Avatar (Cycling through avatar frames 1 to 9)
   - Dynamic Typewriter Introduction:
     "Hi, I’m Aleesha, a creative exploring 3D visualisation, spatial design,
      experience design, and visual merchandising."
   - Windows 11 PC Style Loading Screen with authentic spinning dots & sound
   ========================================================================== */

class WelcomeScreenManager {
  constructor() {
    this.screen = document.getElementById('windows-welcome-screen');
    this.signInBtn = document.getElementById('welcome-signin-btn');
    this.centerCard = document.getElementById('welcome-center-card');
    this.welcomeText = document.getElementById('welcome-text');
    this.clockEl = document.getElementById('welcome-time');
    this.dateEl = document.getElementById('welcome-date');
    this.avatarImg = document.getElementById('welcome-avatar-frame');
    this.avatarWrapper = document.getElementById('welcome-avatar-wrapper');
    this.typewriterEl = document.getElementById('welcome-typewriter-text');
    this.isUnlocked = false;

    // Expression sequence utilizing avatar 1 through 9
    this.avatarSequence = [
      'assets/avatar 8.png', // 1. Waving hand greeting "Hi!"
      'assets/avatar 1.png', // 2. Joyful talking smile
      'assets/avatar 2.png', // 3. Confident thumbs up
      'assets/avatar 3.png', // 4. Playful wink
      'assets/avatar 4.png', // 5. Warm laugh with hand on heart
      'assets/avatar 9.png', // 6. Thoughtful finger on chin
      'assets/avatar 5.png', // 7. Surprised / wonder gasp
      'assets/avatar 1.png'  // 8. Confident smile
    ];
    this.currentAvatarIdx = 0;
    this.avatarTimer = null;
    this.typewriterTimer = null;

    this.init();
  }

  init() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);

    // Preload all avatar images (1 to 9) for flicker-free transitions
    this.preloadAvatars();

    // Start cycling avatar animation
    this.startAvatarAnimation();

    // Start animated text typing
    this.startTypewriterAnimation();

    // Click anywhere on welcome screen or sign-in button to enter
    if (this.screen) {
      this.screen.addEventListener('click', () => {
        this.unlockDesktop();
      });
    }

    if (this.signInBtn) {
      this.signInBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.unlockDesktop();
      });
    }

    if (this.centerCard) {
      this.centerCard.addEventListener('click', (e) => {
        e.stopPropagation();
        this.unlockDesktop();
      });
    }

    // Interactive avatar click / hover reaction
    if (this.avatarWrapper) {
      this.avatarWrapper.addEventListener('mouseenter', () => {
        // Show playful wink on hover
        if (this.avatarImg) this.avatarImg.src = 'assets/avatar 3.png';
      });
      this.avatarWrapper.addEventListener('mouseleave', () => {
        if (this.avatarImg) this.avatarImg.src = this.avatarSequence[this.currentAvatarIdx];
      });
    }

    // Keyboard shortcut Enter or Space to sign in
    window.addEventListener('keydown', (e) => {
      if (!this.isUnlocked && this.screen && this.screen.style.display !== 'none') {
        if (e.key === 'Enter' || e.key === ' ') {
          this.unlockDesktop();
        }
      }
    });

    // Auto sign-in to desktop after complete text introduction (~5.5s) if not clicked earlier
    this.autoTimer = setTimeout(() => {
      if (!this.isUnlocked) {
        this.unlockDesktop();
      }
    }, 5500);
  }

  preloadAvatars() {
    for (let i = 1; i <= 9; i++) {
      const img = new Image();
      img.src = `assets/avatar ${i}.png`;
    }
  }

  startAvatarAnimation() {
    if (!this.avatarImg) return;
    this.avatarTimer = setInterval(() => {
      if (this.isUnlocked) {
        clearInterval(this.avatarTimer);
        return;
      }
      this.currentAvatarIdx = (this.currentAvatarIdx + 1) % this.avatarSequence.length;
      const nextSrc = this.avatarSequence[this.currentAvatarIdx];
      this.avatarImg.src = nextSrc;

      // Subtle scale pulse on frame change for lively animation
      this.avatarImg.classList.add('avatar-pop');
      setTimeout(() => {
        if (this.avatarImg) this.avatarImg.classList.remove('avatar-pop');
      }, 180);
    }, 620);
  }

  startTypewriterAnimation() {
    if (!this.typewriterEl) return;

    // Full intro sentence requested by user:
    // "Hi, I’m Aleesha, a creative exploring 3D visualisation, spatial design, experience design, and visual merchandising."
    // "Hi, I'm Aleesha" is in the prominent heading; the typewriter reveals the creative specialty statement:
    const fullText = "a creative exploring 3D visualisation, spatial design, experience design, and visual merchandising.";
    
    this.typewriterEl.innerHTML = '<span class="tw-cursor">|</span>';
    let charIdx = 0;

    const typeChar = () => {
      if (this.isUnlocked) return;
      if (charIdx < fullText.length) {
        charIdx++;
        const currentSub = fullText.substring(0, charIdx);
        
        // Format with highlighted spans as it types
        let formatted = currentSub
          .replace("3D visualisation", '<strong class="hl-3d">3D visualisation</strong>')
          .replace("spatial design", '<strong class="hl-spatial">spatial design</strong>')
          .replace("experience design", '<strong class="hl-exp">experience design</strong>')
          .replace("visual merchandising", '<strong class="hl-vm">visual merchandising</strong>');

        this.typewriterEl.innerHTML = formatted + '<span class="tw-cursor">|</span>';
        
        // Natural typing jitter
        const speed = Math.random() * 20 + 25;
        this.typewriterTimer = setTimeout(typeChar, speed);
      } else {
        // Finished typing - keep gentle blinking cursor
        let formatted = fullText
          .replace("3D visualisation", '<strong class="hl-3d">3D visualisation</strong>')
          .replace("spatial design", '<strong class="hl-spatial">spatial design</strong>')
          .replace("experience design", '<strong class="hl-exp">experience design</strong>')
          .replace("visual merchandising", '<strong class="hl-vm">visual merchandising</strong>');
        this.typewriterEl.innerHTML = formatted + '<span class="tw-cursor blink">|</span>';

        if (this.signInBtn) {
          this.signInBtn.classList.add('pulse-ready');
        }
      }
    };

    // Begin typing shortly after page load
    setTimeout(typeChar, 400);
  }

  updateClock() {
    const now = new Date();
    if (this.clockEl) {
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      hours = hours % 12 || 12;
      this.clockEl.textContent = `${hours}:${minutes}`;
    }

    if (this.dateEl) {
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      this.dateEl.textContent = now.toLocaleDateString('en-US', options);
    }
  }

  unlockDesktop() {
    if (this.isUnlocked) return;
    this.isUnlocked = true;

    if (this.autoTimer) clearTimeout(this.autoTimer);
    if (this.avatarTimer) clearInterval(this.avatarTimer);
    if (this.typewriterTimer) clearTimeout(this.typewriterTimer);

    if (this.welcomeText) {
      this.welcomeText.textContent = 'Signing in...';
    }

    // Play Windows startup chime
    if (window.soundSystem) {
      window.soundSystem.playBootChime();
    }

    // Smooth Windows 11 unlocking animation
    setTimeout(() => {
      if (this.screen) {
        this.screen.classList.add('unlocked');
        setTimeout(() => {
          this.screen.style.display = 'none';
          window.dispatchEvent(new MouseEvent('mousemove', { clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 }));
        }, 700);
      }
    }, 450);
  }

  // Lock back from Start menu
  lockScreen() {
    if (!this.screen) return;
    this.isUnlocked = false;
    this.screen.style.display = 'flex';
    void this.screen.offsetWidth;
    this.screen.classList.remove('unlocked');
    if (this.welcomeText) {
      this.welcomeText.textContent = 'Welcome';
    }
    this.startAvatarAnimation();
  }

  onBootFinished() {
    if (this.screen && !this.isUnlocked) {
      this.screen.style.display = 'flex';
      this.updateClock();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.welcomeScreenManager = new WelcomeScreenManager();
});
