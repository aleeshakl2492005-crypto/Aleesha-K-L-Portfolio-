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
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('is-hovered');
      if (window.soundSystem && typeof window.soundSystem.playPop === 'function') {
        window.soundSystem.playPop();
      }
    });

    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('is-hovered');
    });

    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      mockupIcons.forEach(i => {
        i.classList.remove('selected');
        i.classList.remove('is-hovered');
      });
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
      mockupIcons.forEach(i => {
        i.classList.remove('selected');
        i.classList.remove('is-hovered');
      });
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

      // Mobile optimization: eliminate continuous cursor tracking computations on phones for smooth 60fps
      if (window.innerWidth <= 768) {
        if (charEl.style.transform !== '') charEl.style.transform = '';
        return;
      }

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

    // Responsive avatar switcher: full body standing avatar on mobile, desktop bust avatar on laptop/PC
    function updateAvatarResponsiveSrc() {
      const isMobile = window.innerWidth <= 768;
      const targetSrc = isMobile ? 'assets/avatar-full.png' : 'assets/wallpaper avatar.png';
      if (mainImgEl && mainImgEl.getAttribute('src') !== targetSrc) {
        mainImgEl.setAttribute('src', targetSrc);
      }
      const reflImg = document.getElementById('character-reflection-img');
      if (reflImg && reflImg.getAttribute('src') !== targetSrc) {
        reflImg.setAttribute('src', targetSrc);
      }
    }
    window.addEventListener('resize', updateAvatarResponsiveSrc);
    updateAvatarResponsiveSrc();
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

// --------------------------------------------------------------------------
// NOTEPAD SKILLS & SOFTWARE MATRIX CONTROLLER
// --------------------------------------------------------------------------
function initNotepadSkillsApp() {
  const tabSkills = document.getElementById('np-btn-tab-skills');
  const tabBio = document.getElementById('np-btn-tab-bio');
  const panelSkills = document.getElementById('np-panel-skills');
  const panelBio = document.getElementById('np-panel-bio');
  const titleText = document.getElementById('notepad-title-text');
  const searchInput = document.getElementById('np-software-search');
  const catPills = document.querySelectorAll('#np-category-bar .np-cat-pill');
  const cards = document.querySelectorAll('#np-software-grid .np-soft-card');
  const spotlightDisplay = document.getElementById('np-spotlight-display');
  const surpriseBtn = document.getElementById('np-surprise-tool-btn');

  // Tab switching
  if (tabSkills && tabBio && panelSkills && panelBio) {
    tabSkills.addEventListener('click', () => {
      tabSkills.classList.add('active');
      tabBio.classList.remove('active');
      panelSkills.style.display = 'block';
      panelBio.style.display = 'none';
      if (titleText) titleText.textContent = 'Notepad — Skills_&_Softwares.txt';
      if (window.soundSystem) window.soundSystem.playClick();
    });

    tabBio.addEventListener('click', () => {
      tabBio.classList.add('active');
      tabSkills.classList.remove('active');
      panelBio.style.display = 'block';
      panelSkills.style.display = 'none';
      if (titleText) titleText.textContent = 'Notepad — About_Aleesha.txt';
      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  // Category Filtering
  let activeCat = 'all';
  function filterCards() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

    cards.forEach(card => {
      const cat = card.getAttribute('data-cat') || '';
      const name = (card.getAttribute('data-name') || '').toLowerCase();
      const desc = (card.querySelector('.np-soft-desc') ? card.querySelector('.np-soft-desc').textContent : '').toLowerCase();
      const used = (card.querySelector('.np-soft-used') ? card.querySelector('.np-soft-used').textContent : '').toLowerCase();

      const matchesCat = (activeCat === 'all' || cat === activeCat);
      const matchesQuery = !query || name.includes(query) || desc.includes(query) || used.includes(query);

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCat = pill.getAttribute('data-cat') || 'all';
      filterCards();
      if (window.soundSystem) window.soundSystem.playClick();
    });
  });

  // Search input filter
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      filterCards();
    });
  }

  // Interactive Card Spotlight Click
  cards.forEach(card => {
    card.addEventListener('click', () => {
      cards.forEach(c => c.classList.remove('spotlighted'));
      card.classList.add('spotlighted');

      const name = card.getAttribute('data-name');
      const project = card.getAttribute('data-project');

      if (spotlightDisplay) {
        spotlightDisplay.innerHTML = `<strong>✨ ${name}:</strong> ${project}`;
        spotlightDisplay.classList.remove('active-pop');
        void spotlightDisplay.offsetWidth; // retrigger reflow
        spotlightDisplay.classList.add('active-pop');
      }

      if (window.soundSystem) {
        if (typeof window.soundSystem.playPop === 'function') {
          window.soundSystem.playPop();
        } else {
          window.soundSystem.playClick();
        }
      }
    });
  });

  // Random Tool Spotlight Button
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
      if (visibleCards.length === 0) return;

      const randomCard = visibleCards[Math.floor(Math.random() * visibleCards.length)];

      cards.forEach(c => c.classList.remove('spotlighted'));
      randomCard.classList.add('spotlighted');
      randomCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      const name = randomCard.getAttribute('data-name');
      const project = randomCard.getAttribute('data-project');

      if (spotlightDisplay) {
        spotlightDisplay.innerHTML = `<strong>🎲 Spotlight on ${name}:</strong> ${project}`;
        spotlightDisplay.classList.remove('active-pop');
        void spotlightDisplay.offsetWidth;
        spotlightDisplay.classList.add('active-pop');
      }

      if (window.soundSystem) {
        if (typeof window.soundSystem.playPop === 'function') {
          window.soundSystem.playPop();
        } else {
          window.soundSystem.playClick();
        }
      }
    });
  }

  // Window-Skills Notepad Category Tabs & Search Filter
  const skillTabs = document.querySelectorAll('#skills-tabs .skills-tab');
  const skillSections = document.querySelectorAll('#window-skills .skills-section');
  const skillSearchInput = document.getElementById('skills-search-input');
  const skillPills = document.querySelectorAll('#window-skills .skill-pill');

  let activeTabGroup = 'all';

  function filterSkills() {
    const query = skillSearchInput ? skillSearchInput.value.toLowerCase().trim() : '';

    skillPills.forEach(pill => {
      const name = (pill.getAttribute('data-name') || '').toLowerCase();
      const proj = (pill.getAttribute('data-project') || '').toLowerCase();
      const text = pill.textContent.toLowerCase();
      const matchesSearch = !query || name.includes(query) || proj.includes(query) || text.includes(query);

      const section = pill.closest('.skills-section');
      const group = section ? section.getAttribute('data-group') : 'all';
      const matchesTab = activeTabGroup === 'all' || group === activeTabGroup || group === 'all';

      if (matchesSearch && matchesTab) {
        pill.style.display = 'flex';
      } else {
        pill.style.display = 'none';
      }
    });

    // Hide empty sections
    skillSections.forEach(sec => {
      const visiblePills = sec.querySelectorAll('.skill-pill:not([style*="display: none"])');
      const isChipsSec = sec.querySelector('.skills-chips-row');
      const group = sec.getAttribute('data-group');
      const matchesTab = activeTabGroup === 'all' || group === activeTabGroup || group === 'all';

      if (!matchesTab) {
        sec.style.display = 'none';
      } else if (isChipsSec) {
        sec.style.display = (!query || sec.textContent.toLowerCase().includes(query)) ? 'flex' : 'none';
      } else {
        sec.style.display = visiblePills.length > 0 ? 'flex' : 'none';
      }
    });
  }

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTabGroup = tab.getAttribute('data-tab');
      filterSkills();
      if (window.soundSystem) window.soundSystem.playClick();
    });
  });

  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', () => {
      filterSkills();
    });
  }

  // Window-Skills individual skill pill sound & pop
  skillPills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.style.transform = 'translateY(-4px) scale(1.03)';
      setTimeout(() => {
        pill.style.transform = '';
      }, 250);

      if (window.soundSystem) {
        if (typeof window.soundSystem.playPop === 'function') {
          window.soundSystem.playPop();
        } else {
          window.soundSystem.playClick();
        }
      }
    });
  });
}

// --------------------------------------------------------------------------
// ABOUT ME (JAMES CHUGH STYLE CORKBOARD PINBOARD) CONTROLLER
// Supports freeform draggable photos & sticky notes, non-scrollable canvas,
// reset pins, lofi audio, day/night lighting, and polaroid lightbox.
// --------------------------------------------------------------------------
function initAboutMeApp() {
  // 1. Music Player Toggle (James Chugh Style Pill & Vinyl Record)
  const lofiBtn = document.getElementById('btn-lofi-toggle');
  const corkMusicLabel = document.getElementById('cork-music-label');
  const corkMusicIcon = document.getElementById('cork-music-icon');
  const lofiVisualizer = document.getElementById('lofi-visualizer');
  const vinylDisc = document.getElementById('about-vinyl-disc');
  let isLofiPlaying = false;
  let lofiInterval = null;
  let chordIndex = 0;

  if (lofiBtn) {
    lofiBtn.addEventListener('click', () => {
      isLofiPlaying = !isLofiPlaying;
      if (isLofiPlaying) {
        lofiBtn.classList.add('playing');
        if (corkMusicLabel) corkMusicLabel.textContent = 'Pause music';
        if (corkMusicIcon) corkMusicIcon.textContent = '⏸';
        if (lofiVisualizer) lofiVisualizer.classList.remove('paused');
        if (vinylDisc) vinylDisc.classList.add('playing');

        // Play immediate chord
        if (window.soundSystem && typeof window.soundSystem.playLoFiChord === 'function') {
          window.soundSystem.playLoFiChord(chordIndex++);
        }

        // Loop chords every 2.4s
        if (lofiInterval) clearInterval(lofiInterval);
        lofiInterval = setInterval(() => {
          if (window.soundSystem && typeof window.soundSystem.playLoFiChord === 'function') {
            window.soundSystem.playLoFiChord(chordIndex++);
          }
        }, 2400);
      } else {
        lofiBtn.classList.remove('playing');
        if (corkMusicLabel) corkMusicLabel.textContent = 'Play music';
        if (corkMusicIcon) corkMusicIcon.textContent = '▶';
        if (lofiVisualizer) lofiVisualizer.classList.add('paused');
        if (vinylDisc) vinylDisc.classList.remove('playing');
        if (lofiInterval) {
          clearInterval(lofiInterval);
          lofiInterval = null;
        }
      }

      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  // 2. Day / Night Ambient Lighting Toggle
  const modeBtn = document.getElementById('btn-cork-mode');
  const corkWrapper = document.getElementById('corkboard-wrapper');
  const corkModeIcon = document.getElementById('cork-mode-icon');
  const corkModeText = document.getElementById('cork-mode-text');
  let isNight = false;

  if (modeBtn && corkWrapper) {
    modeBtn.addEventListener('click', () => {
      isNight = !isNight;
      corkWrapper.classList.toggle('night-mode', isNight);
      if (corkModeIcon) corkModeIcon.textContent = isNight ? '🌙' : '☀️';
      if (corkModeText) corkModeText.textContent = isNight ? 'Night' : 'Day';
      if (window.soundSystem) {
        if (typeof window.soundSystem.playPop === 'function') {
          window.soundSystem.playPop();
        } else {
          window.soundSystem.playClick();
        }
      }
    });
  }

  // 3. Copy Email to Clipboard Toast
  const copyEmailBtn = document.getElementById('btn-about-copy-email');
  const aboutToast = document.getElementById('about-toast');
  let toastTimer = null;

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'aleeshakl2495@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
      if (aboutToast) {
        aboutToast.classList.add('show');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          aboutToast.classList.remove('show');
        }, 2400);
      }
      if (window.soundSystem) {
        if (typeof window.soundSystem.playNotification === 'function') {
          window.soundSystem.playNotification();
        } else {
          window.soundSystem.playClick();
        }
      }
    });
  }

  // 4. Quick Action Jump Buttons (Resume, Projects, 3D Studio, Mail)
  const quickResumeBtn = document.getElementById('btn-quick-resume');
  if (quickResumeBtn) {
    quickResumeBtn.addEventListener('click', () => {
      if (window.windowManager) window.windowManager.open('resume');
      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  const quickProjectsBtn = document.getElementById('btn-quick-projects');
  if (quickProjectsBtn) {
    quickProjectsBtn.addEventListener('click', () => {
      if (window.windowManager) window.windowManager.open('projects');
      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  const quickSpatialBtn = document.getElementById('btn-quick-spatial');
  if (quickSpatialBtn) {
    quickSpatialBtn.addEventListener('click', () => {
      if (window.windowManager) window.windowManager.open('studio3d');
      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  const openMailBtn = document.getElementById('btn-about-open-mail');
  if (openMailBtn) {
    openMailBtn.addEventListener('click', () => {
      if (window.windowManager) window.windowManager.open('mail');
      if (window.soundSystem) window.soundSystem.playClick();
    });
  }

  // 5. Polaroid Lightbox Zoom Modal
  const corkLightbox = document.getElementById('cork-lightbox');
  const corkLightboxImg = document.getElementById('cork-lightbox-img');
  const corkLightboxCaption = document.getElementById('cork-lightbox-caption');
  const corkLightboxClose = document.getElementById('cork-lightbox-close');
  const btnCloseCorkLightbox = document.getElementById('btn-close-cork-lightbox');

  function openPolaroidLightbox(photoSrc, caption) {
    if (!corkLightbox || !corkLightboxImg) return;
    corkLightboxImg.src = photoSrc;
    if (corkLightboxCaption) corkLightboxCaption.textContent = caption || '';
    corkLightbox.classList.add('open');
    corkLightbox.setAttribute('aria-hidden', 'false');
    if (window.soundSystem) {
      if (typeof window.soundSystem.playPop === 'function') {
        window.soundSystem.playPop();
      } else {
        window.soundSystem.playClick();
      }
    }
  }

  function closePolaroidLightbox() {
    if (!corkLightbox) return;
    corkLightbox.classList.remove('open');
    corkLightbox.setAttribute('aria-hidden', 'true');
    if (window.soundSystem) window.soundSystem.playClick();
  }

  if (corkLightboxClose) corkLightboxClose.addEventListener('click', closePolaroidLightbox);
  if (btnCloseCorkLightbox) btnCloseCorkLightbox.addEventListener('click', closePolaroidLightbox);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && corkLightbox && corkLightbox.classList.contains('open')) {
      closePolaroidLightbox();
    }
  });

  // 6. Freeform Draggable Corkboard Items (Rearrangeable Photos & Sticky Notes)
  const corkSurface = document.getElementById('corkboard-surface');
  const corkItems = corkSurface ? corkSurface.querySelectorAll('.cork-item') : [];
  let highestCorkZ = 120;

  corkItems.forEach(item => {
    let isDragging = false;
    let hasMoved = false;
    let startX = 0;
    let startY = 0;
    let initLeft = 0;
    let initTop = 0;

    const onPointerDown = (e) => {
      // Don't drag if clicking interactive buttons directly (let button click work)
      if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input')) {
        return;
      }

      const point = e.touches ? e.touches[0] : e;
      startX = point.clientX;
      startY = point.clientY;
      hasMoved = false;
      isDragging = false;

      // Calculate position relative to corkSurface
      const surfaceRect = corkSurface.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      initLeft = itemRect.left - surfaceRect.left;
      initTop = itemRect.top - surfaceRect.top;

      highestCorkZ += 2;
      item.style.zIndex = highestCorkZ;

      const onPointerMove = (moveEvt) => {
        const movePoint = moveEvt.touches ? moveEvt.touches[0] : moveEvt;
        const dx = movePoint.clientX - startX;
        const dy = movePoint.clientY - startY;

        if (!isDragging && Math.hypot(dx, dy) > 4) {
          isDragging = true;
          hasMoved = true;
          item.classList.add('is-dragging');
        }

        if (isDragging) {
          moveEvt.preventDefault();
          const curSurfaceRect = corkSurface.getBoundingClientRect();
          let newLeft = initLeft + dx;
          let newTop = initTop + dy;

          const maxLeft = curSurfaceRect.width - item.offsetWidth - 2;
          const maxTop = curSurfaceRect.height - item.offsetHeight - 2;

          newLeft = Math.max(2, Math.min(maxLeft, newLeft));
          newTop = Math.max(2, Math.min(maxTop, newTop));

          item.style.left = `${newLeft}px`;
          item.style.top = `${newTop}px`;
          item.style.right = 'auto';
          item.style.bottom = 'auto';
        }
      };

      const onPointerUp = () => {
        document.removeEventListener('mousemove', onPointerMove);
        document.removeEventListener('mouseup', onPointerUp);
        document.removeEventListener('touchmove', onPointerMove);
        document.removeEventListener('touchend', onPointerUp);

        if (isDragging) {
          item.classList.remove('is-dragging');
          if (window.soundSystem) {
            if (typeof window.soundSystem.playPop === 'function') {
              window.soundSystem.playPop();
            } else {
              window.soundSystem.playClick();
            }
          }
        }
      };

      document.addEventListener('mousemove', onPointerMove, { passive: false });
      document.addEventListener('mouseup', onPointerUp);
      document.addEventListener('touchmove', onPointerMove, { passive: false });
      document.addEventListener('touchend', onPointerUp);
    };

    item.addEventListener('mousedown', onPointerDown);
    item.addEventListener('touchstart', onPointerDown, { passive: true });

    // Handle clicks vs drags for polaroids
    if (item.classList.contains('polaroid-card')) {
      item.addEventListener('click', (e) => {
        if (hasMoved) {
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        const photo = item.getAttribute('data-photo');
        const caption = item.getAttribute('data-caption');
        if (photo) openPolaroidLightbox(photo, caption);
      });
    }
  });

  // 7. Reset Pins Button (Smoothly animates all pins back to default layout)
  const resetPinsBtn = document.getElementById('btn-cork-reset');
  if (resetPinsBtn && corkItems.length > 0) {
    resetPinsBtn.addEventListener('click', () => {
      corkItems.forEach(item => {
        const defLeft = item.getAttribute('data-default-left');
        const defTop = item.getAttribute('data-default-top');
        if (defLeft && defTop) {
          item.classList.add('is-resetting');
          item.style.left = defLeft;
          item.style.top = defTop;
        }
      });

      if (window.soundSystem) {
        if (typeof window.soundSystem.playPop === 'function') {
          window.soundSystem.playPop();
        } else {
          window.soundSystem.playClick();
        }
      }

      setTimeout(() => {
        corkItems.forEach(item => item.classList.remove('is-resetting'));
      }, 500);
    });
  }
}

// Initialize when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initNotepadSkillsApp();
    initAboutMeApp();
  });
} else {
  initNotepadSkillsApp();
  initAboutMeApp();
}

