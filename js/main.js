/* ==========================================================================
   ALEESHA OS - MAIN SYSTEM INITIALIZER
   Taskbar clock, Start Menu, System Tray flyouts, Desktop icon launcher,
   Global notifications & wallpaper personalization.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. LIVE TASKBAR CLOCK & DATE
  // ------------------------------------------------------------------------
  const trayTime = document.getElementById('tray-time');
  const trayDate = document.getElementById('tray-date');
  const calTimeBig = document.getElementById('cal-time-big');
  const calDateSub = document.getElementById('cal-date-sub');

  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const timeStr = `${hours}:${minutes} ${ampm}`;
    const day = now.getDate();
    const month = now.toLocaleDateString('en-US', { month: 'short' });
    const year = now.getFullYear();
    const dateStr = `${day} ${month} ${year}`;

    if (trayTime) trayTime.textContent = timeStr;
    if (trayDate) trayDate.textContent = dateStr;

    if (calTimeBig) calTimeBig.textContent = timeStr;
    if (calDateSub) {
      calDateSub.textContent = now.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  // ------------------------------------------------------------------------
  // 2. START MENU TOGGLE & SEARCH
  // ------------------------------------------------------------------------
  const startBtn = document.getElementById('taskbar-start-btn');
  const startMenu = document.getElementById('start-menu');
  const startSearch = document.getElementById('start-search-input');
  const powerBtn = document.getElementById('start-power-btn');
  const powerPopover = document.getElementById('power-popover');
  const taskbarSearchPill = document.getElementById('taskbar-search-pill');

  function toggleStartMenu() {
    const isOpen = startMenu.classList.contains('open');
    if (isOpen) {
      closeStartMenu();
    } else {
      openStartMenu();
    }
  }

  function openStartMenu() {
    startMenu.classList.add('open');
    if (startBtn) startBtn.classList.add('active');
    if (startSearch) startSearch.focus();
    if (window.soundSystem) window.soundSystem.playClick();
  }

  function closeStartMenu() {
    startMenu.classList.remove('open');
    if (startBtn) startBtn.classList.remove('active');
    if (powerPopover) powerPopover.classList.remove('open');
  }

  if (startBtn) {
    startBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleStartMenu();
    });
  }

  if (taskbarSearchPill) {
    taskbarSearchPill.addEventListener('click', (e) => {
      e.stopPropagation();
      openStartMenu();
    });
  }

  // Filter start menu items via search
  if (startSearch) {
    startSearch.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const tiles = document.querySelectorAll('.start-app-tile');
      const recs = document.querySelectorAll('.start-rec-item');

      tiles.forEach(tile => {
        const name = tile.textContent.toLowerCase();
        tile.style.display = name.includes(q) ? 'flex' : 'none';
      });

      recs.forEach(rec => {
        const title = rec.textContent.toLowerCase();
        rec.style.display = title.includes(q) ? 'flex' : 'none';
      });
    });
  }

  // Power options
  if (powerBtn && powerPopover) {
    powerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      powerPopover.classList.toggle('open');
    });
  }

  const pwrLock = document.getElementById('pwr-lock');
  const pwrRestart = document.getElementById('pwr-restart');
  const pwrShut = document.getElementById('pwr-shutdown');

  if (pwrLock) {
    pwrLock.addEventListener('click', () => {
      closeStartMenu();
      if (window.welcomeScreenManager) {
        window.welcomeScreenManager.lockScreen();
      }
    });
  }

  if (pwrRestart) {
    pwrRestart.addEventListener('click', () => {
      window.location.reload();
    });
  }

  if (pwrShut) {
    pwrShut.addEventListener('click', () => {
      closeStartMenu();
      showToast("Shutting Down", "Thank you for visiting Aleesha's portfolio!");
      setTimeout(() => {
        if (window.welcomeScreenManager) window.welcomeScreenManager.lockScreen();
      }, 1500);
    });
  }

  // ------------------------------------------------------------------------
  // 3. DESKTOP MOCKUP ICONS & FLOATING DOCK LAUNCHER
  // ------------------------------------------------------------------------
  const mockupIcons = document.querySelectorAll('.mockup-icon');
  let lastClickedMockup = null;
  let mockupClickTimeout = null;

  function launchMockupItem(icon) {
    const projId = icon.getAttribute('data-project');
    const appId = icon.getAttribute('data-app');

    if (window.soundSystem) window.soundSystem.playClick();

    if (projId && window.openCaseStudy) {
      window.openCaseStudy(projId);
    } else if (appId && window.windowManager) {
      let target = appId;
      if (appId === 'contact') target = 'mail';
      if (appId === 'spatial') target = 'studio3d';
      window.windowManager.open(target);
    }
  }

  mockupIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      mockupIcons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
      launchMockupItem(icon);
    });

    icon.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      launchMockupItem(icon);
    });
  });

  // Floating Glass Dock buttons
  const dockButtons = document.querySelectorAll('.dock-btn');
  dockButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const app = btn.getAttribute('data-app');
      if (window.soundSystem) window.soundSystem.playClick();

      if (app === 'start') {
        toggleStartMenu();
      } else if (app === 'search') {
        openStartMenu();
      } else if (app && window.windowManager) {
        window.windowManager.open(app);
      }
    });
  });

  // Legacy desktop icons fallback support
  const desktopIcons = document.querySelectorAll('.desktop-icon');
  desktopIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      const appId = icon.getAttribute('data-app');
      if (window.windowManager && appId) window.windowManager.open(appId);
    });
  });

  // Clicking empty desktop clears selection & closes menus
  const desktop = document.getElementById('desktop-environment');
  if (desktop) {
    desktop.addEventListener('click', () => {
      mockupIcons.forEach(i => i.classList.remove('selected'));
      desktopIcons.forEach(i => i.classList.remove('selected'));
      closeStartMenu();
      closeAllFlyouts();
    });
  }

  // ------------------------------------------------------------------------
  // 4. TASKBAR APP BUTTONS
  // ------------------------------------------------------------------------
  document.querySelectorAll('.taskbar-app-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const appId = btn.getAttribute('data-app');
      if (window.windowManager && appId) {
        window.windowManager.toggleWindow(appId);
      }
    });
  });

  // Start app tiles inside start menu
  document.querySelectorAll('.start-app-tile, .start-rec-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const appId = item.getAttribute('data-app');
      closeStartMenu();
      if (window.windowManager && appId) {
        window.windowManager.open(appId);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. SYSTEM TRAY FLYOUTS
  // ------------------------------------------------------------------------
  const trayClock = document.getElementById('tray-clock-btn');
  const trayVol = document.getElementById('tray-vol-btn');
  const trayNotif = document.getElementById('tray-notif-btn');

  const calFlyout = document.getElementById('calendar-flyout');
  const volFlyout = document.getElementById('volume-flyout');
  const notifFlyout = document.getElementById('notifications-flyout');

  function closeAllFlyouts() {
    if (calFlyout) calFlyout.classList.remove('open');
    if (volFlyout) volFlyout.classList.remove('open');
    if (notifFlyout) notifFlyout.classList.remove('open');
  }

  if (trayClock) {
    trayClock.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = calFlyout.classList.contains('open');
      closeAllFlyouts();
      if (!isOpen) calFlyout.classList.add('open');
    });
  }

  if (trayVol) {
    trayVol.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = volFlyout.classList.contains('open');
      closeAllFlyouts();
      if (!isOpen) volFlyout.classList.add('open');
    });
  }

  if (trayNotif) {
    trayNotif.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = notifFlyout.classList.contains('open');
      closeAllFlyouts();
      if (!isOpen) notifFlyout.classList.add('open');
    });
  }

  // Volume slider control
  const volRange = document.getElementById('vol-slider-input');
  if (volRange) {
    volRange.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      if (window.soundSystem) {
        window.soundSystem.setVolume(val);
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. TOAST NOTIFICATION HELPER
  // ------------------------------------------------------------------------
  window.showToast = function(title, msg) {
    const existing = document.querySelector('.os-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'os-toast';
    toast.innerHTML = `
      <div style="font-size: 1.5rem;">🌸</div>
      <div style="flex:1;">
        <div style="font-weight: 600; font-size: 0.85rem; color: #fff;">${title}</div>
        <div style="font-size: 0.78rem; color: #cbd5e1; margin-top: 2px;">${msg}</div>
      </div>
    `;

    document.body.appendChild(toast);
    if (window.soundSystem) window.soundSystem.playNotification();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 350);
    }, 4500);
  };

  // ------------------------------------------------------------------------
  // 7. 3D DESKTOP CHARACTER CURSOR INTERACTION (NIVED PREM / FRAMER STYLE)
  // ------------------------------------------------------------------------
  // 7. DESKTOP CHARACTER (FLAT SPACE: SIDEWAYS & UP/DOWN ONLY)
  // Pure 2D flat planar movement: smooth horizontal shift (sideways)
  // and smooth vertical shift (up/down). No diagonal tilting or drift.
  // ------------------------------------------------------------------------
  const charEl = document.getElementById('desktop-character');
  const mainImgEl = document.getElementById('character-main-img');
  const laughImgEl = document.getElementById('character-laugh-img');
  const shadowEl = charEl ? charEl.querySelector('.character-shadow') : null;

  if (charEl) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetNormX = 0;
    let targetNormY = 0;

    // Flat 2D position state
    let shiftX = 0;
    let shiftY = 0;
    let isBouncing = false;
    let isLaughing = false;
    let laughTimer = null;

    function setLaughingState(laughing) {
      isLaughing = laughing;
      if (charEl) {
        charEl.classList.toggle('is-laughing', laughing);
      }
    }

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const w = window.innerWidth || 1920;
      const h = window.innerHeight || 1080;
      targetNormX = Math.max(-1, Math.min(1, (mouseX - w / 2) / (w / 2)));
      targetNormY = Math.max(-1, Math.min(1, (mouseY - h / 2) / (h / 2)));
    }

    function onTouchMove(e) {
      if (e.touches && e.touches[0]) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        const w = window.innerWidth || 1920;
        const h = window.innerHeight || 1080;
        targetNormX = Math.max(-1, Math.min(1, (mouseX - w / 2) / (w / 2)));
        targetNormY = Math.max(-1, Math.min(1, (mouseY - h / 2) / (h / 2)));
      }
    }

    function onMouseLeave() {
      // Ease smoothly back to center resting pose when cursor leaves window
      targetNormX = 0;
      targetNormY = 0;
    }

    function physicsLoop() {
      requestAnimationFrame(physicsLoop);
      if (isBouncing) return;

      // 1. Pure sideways horizontal movement (left and right only: ±20px)
      const targetShiftX = targetNormX * 20.0;
      shiftX += (targetShiftX - shiftX) * 0.10;

      // 2. Pure vertical up and down movement (up and down only: ±12px)
      const targetShiftY = targetNormY * 12.0;
      shiftY += (targetShiftY - shiftY) * 0.10;

      // 3. Flat 2D transform (No 3D diagonal pitch/yaw/roll rotations)
      const pX = shiftX.toFixed(2);
      const pY = shiftY.toFixed(2);

      charEl.style.transform = `translate3d(${pX}px, ${pY}px, 0)`;

      // 4. Subtle flat lighting drop shadow
      if (mainImgEl) {
        const shadowOffsetX = (-shiftX * 0.5).toFixed(1);
        const shadowOffsetY = (18 - shiftY * 0.3).toFixed(1);
        const filterVal = `drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px 30px rgba(0, 0, 0, 0.13))`;
        mainImgEl.style.filter = filterVal;
        if (laughImgEl) laughImgEl.style.filter = filterVal;
      }

      // 5. Ground shadow shifts horizontally directly with avatar base
      if (shadowEl) {
        shadowEl.style.transform = `translateX(calc(-50% + ${pX}px)) scale(${1 - pY * 0.008})`;
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // Interactive click: cheerful flat vertical hop reaction + switch to laughing avatar
    charEl.addEventListener('click', (e) => {
      e.stopPropagation();

      // Clear any pending revert timer so clicking refreshes the 1s laugh
      if (laughTimer) clearTimeout(laughTimer);

      setLaughingState(true);

      // Stay for 1 second, then smoothly crossfade back over 500ms via CSS transition
      laughTimer = setTimeout(() => {
        setLaughingState(false);
      }, 1000);

      if (isBouncing) return;
      isBouncing = true;

      charEl.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
      charEl.style.transform = `translate3d(${shiftX.toFixed(2)}px, -30px, 0) scale(1.06)`;

      if (window.soundSystem) window.soundSystem.playClick();
      if (window.showToast) {
        window.showToast("Aleesha 3D", "Hi there! Welcome to my 3D design portfolio ✨");
      }

      setTimeout(() => {
        charEl.style.transition = 'none';
        isBouncing = false;
        shiftY = -8;
      }, 380);
    });

    // Clicking anywhere outside on the desktop also smoothly resets back to default
    document.addEventListener('click', (e) => {
      if (isLaughing && charEl && !charEl.contains(e.target)) {
        if (laughTimer) clearTimeout(laughTimer);
        setLaughingState(false);
      }
    });

    // Start continuous 60fps/120fps physics loop
    requestAnimationFrame(physicsLoop);
  }

  // ------------------------------------------------------------------------
  // 8. GLOBAL SHORTCUTS
  // ------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeStartMenu();
      closeAllFlyouts();
    }
  });

  // Calendar Day Generator
  generateCalendarGrid();
});

function generateCalendarGrid() {
  const grid = document.getElementById('cal-days-grid');
  if (!grid) return;

  const now = new Date();
  const today = now.getDate();
  const year = now.getFullYear();
  const month = now.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  grid.innerHTML = '';

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  dayNames.forEach(d => {
    const el = document.createElement('div');
    el.className = 'cal-day-name';
    el.textContent = d;
    grid.appendChild(el);
  });

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    grid.appendChild(blank);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dayEl = document.createElement('div');
    dayEl.className = 'cal-day-num';
    if (d === today) dayEl.classList.add('today');
    dayEl.textContent = d;
    grid.appendChild(dayEl);
  }
}

// --------------------------------------------------------------------------
// LAPTOP SCREEN GLASS GLARE TRACKER (Parallax Screen Glare)
// --------------------------------------------------------------------------
(function initScreenGlassGlare() {
  let glareTicking = false;
  let clientX = window.innerWidth * 0.5;
  let clientY = window.innerHeight * 0.35;

  window.addEventListener('mousemove', (e) => {
    clientX = e.clientX;
    clientY = e.clientY;

    if (!glareTicking) {
      requestAnimationFrame(() => {
        const xPct = ((clientX / window.innerWidth) * 100).toFixed(2);
        const yPct = ((clientY / window.innerHeight) * 100).toFixed(2);
        document.documentElement.style.setProperty('--glass-glare-x', `${xPct}%`);
        document.documentElement.style.setProperty('--glass-glare-y', `${yPct}%`);
        glareTicking = false;
      });
      glareTicking = true;
    }
  }, { passive: true });
})();

