/* ==========================================================================
   ALEESHA OS - WINDOW MANAGEMENT SYSTEM
   Full multi-window capabilities: drag, maximize, minimize, close,
   z-index stack, and taskbar synchronization.
   ========================================================================== */

class WindowManager {
  constructor() {
    this.windows = new Map();
    this.activeWindowId = null;
    this.highestZ = 100;

    this.init();
  }

  init() {
    // Scan all windows in DOM
    document.querySelectorAll('.os-window').forEach(winEl => {
      const id = winEl.id.replace('window-', '');
      this.registerWindow(id, winEl);
    });

    // Window global clicks: focus when clicking inside, close when clicking outside ("out of the tab")
    document.addEventListener('mousedown', (e) => {
      const winEl = e.target.closest('.os-window');
      if (winEl) {
        const id = winEl.id.replace('window-', '');
        this.bringToFront(id);
        return;
      }

      // Ignore clicks on taskbar, start menu, desktop launchers, system flyouts, owl companion
      if (
        e.target.closest('#taskbar') ||
        e.target.closest('#start-menu') ||
        e.target.closest('.mockup-icon') ||
        e.target.closest('.dock-btn') ||
        e.target.closest('.desktop-icon') ||
        e.target.closest('.system-flyout') ||
        e.target.closest('#owl-companion-container')
      ) {
        return;
      }

      // Click was outside any open window / tab: close all open windows!
      this.closeAllOpen();
    });

    // Escape key closes active project tab or active window
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const detailView = document.getElementById('solari-detail-view');
        if (detailView && detailView.style.display !== 'none' && typeof window.closeSolariDetail === 'function') {
          window.closeSolariDetail();
          return;
        }
        if (this.activeWindowId) {
          this.close(this.activeWindowId);
        }
      }
    });

    // Show desktop button
    const showDesktopBtn = document.getElementById('btn-show-desktop');
    if (showDesktopBtn) {
      showDesktopBtn.addEventListener('click', () => {
        this.minimizeAll();
      });
    }
  }

  registerWindow(id, el) {
    const defaultData = {
      el,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      lastX: 80 + (this.windows.size * 30),
      lastY: 40 + (this.windows.size * 25),
      lastW: el.offsetWidth || 760,
      lastH: el.offsetHeight || 520
    };

    this.windows.set(id, defaultData);
    this.setupWindowControls(id, el);
    this.setupDragging(id, el);
  }

  setupWindowControls(id, el) {
    const minBtn = el.querySelector('.win-btn.btn-min');
    const maxBtn = el.querySelector('.win-btn.btn-max');
    const closeBtn = el.querySelector('.win-btn.btn-close');
    const titleBar = el.querySelector('.window-titlebar');

    if (minBtn) {
      minBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.minimize(id);
      });
    }

    if (maxBtn) {
      maxBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMaximize(id);
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close(id);
      });
    }

    // Double click title bar to maximize/restore
    if (titleBar) {
      titleBar.addEventListener('dblclick', (e) => {
        if (e.target.closest('.window-controls')) return;
        this.toggleMaximize(id);
      });
    }
  }

  setupDragging(id, el) {
    const titleBar = el.querySelector('.window-titlebar');
    if (!titleBar) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    const onPointerDown = (e) => {
      if (e.target.closest('.window-controls')) return;
      const data = this.windows.get(id);
      if (data.isMaximized) return;

      isDragging = true;
      this.bringToFront(id);

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      startX = clientX;
      startY = clientY;

      initialLeft = el.offsetLeft;
      initialTop = el.offsetTop;

      document.addEventListener('mousemove', onPointerMove);
      document.addEventListener('mouseup', onPointerUp);
      document.addEventListener('touchmove', onPointerMove, { passive: false });
      document.addEventListener('touchend', onPointerUp);
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      if (e.touches) e.preventDefault();

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const dx = clientX - startX;
      const dy = clientY - startY;

      let newLeft = initialLeft + dx;
      let newTop = initialTop + dy;

      // Keep within viewport boundaries
      const maxLeft = window.innerWidth - 100;
      const maxTop = window.innerHeight - 100;
      newLeft = Math.max(-200, Math.min(maxLeft, newLeft));
      newTop = Math.max(0, Math.min(maxTop, newTop));

      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    };

    const onPointerUp = () => {
      isDragging = false;
      const data = this.windows.get(id);
      if (data) {
        data.lastX = el.offsetLeft;
        data.lastY = el.offsetTop;
      }
      document.removeEventListener('mousemove', onPointerMove);
      document.removeEventListener('mouseup', onPointerUp);
      document.removeEventListener('touchmove', onPointerMove);
      document.removeEventListener('touchend', onPointerUp);
    };

    titleBar.addEventListener('mousedown', onPointerDown);
    titleBar.addEventListener('touchstart', onPointerDown, { passive: true });
  }

  open(id) {
    const data = this.windows.get(id);
    if (!data) return;

    if (window.soundSystem) {
      window.soundSystem.playWindowOpen();
    }

    data.isOpen = true;
    data.isMinimized = false;

    data.el.style.display = 'flex';
    // Position if not already placed
    if (!data.el.style.left || data.el.style.left === 'auto') {
      if (id === 'playground' || id === 'about' || id === 'resume' || id === 'photography') {
        const defaultW = id === 'about' ? 1260 : (id === 'photography' ? 980 : (id === 'resume' ? 880 : 960));
        const defaultH = id === 'about' ? 760 : (id === 'photography' ? 640 : (id === 'resume' ? 620 : 640));
        const winW = Math.min(window.innerWidth - 30, defaultW);
        const winH = Math.min(window.innerHeight - 70, defaultH);
        const posX = Math.max(10, Math.round((window.innerWidth - winW) / 2));
        const posY = Math.max(10, Math.round((window.innerHeight - 56 - winH) / 2));
        data.el.style.width = `${winW}px`;
        data.el.style.height = `${winH}px`;
        data.el.style.left = `${posX}px`;
        data.el.style.top = `${posY}px`;
      } else {
        const winW = data.el.offsetWidth || 760;
        const winH = data.el.offsetHeight || 520;
        const maxX = Math.max(10, window.innerWidth - winW - 20);
        const maxY = Math.max(10, window.innerHeight - winH - 65);
        const posX = Math.max(10, Math.min(maxX, data.lastX));
        const posY = Math.max(10, Math.min(maxY, data.lastY));
        data.el.style.left = `${posX}px`;
        data.el.style.top = `${posY}px`;
      }
    }

    void data.el.offsetWidth; // Reflow
    data.el.classList.add('visible');
    data.el.classList.remove('minimized');

    this.bringToFront(id);
    this.updateTaskbar(id);

    if (id === 'playground') {
      const companion = document.getElementById('desktop-owl-companion');
      if (companion) companion.style.display = 'none';
    }

    if (id === 'studio3d' && window.resizeStudio3D) {
      setTimeout(() => window.resizeStudio3D(), 60);
    }
  }

  bringToFront(id) {
    const data = this.windows.get(id);
    if (!data) return;

    this.highestZ += 2;
    data.el.style.zIndex = this.highestZ;

    // Remove focused class from others
    this.windows.forEach(w => w.el.classList.remove('focused'));
    data.el.classList.add('focused');
    this.activeWindowId = id;

    if (id === 'playground') {
      const companion = document.getElementById('desktop-owl-companion');
      if (companion) companion.style.display = 'none';
    }

    this.updateTaskbar(id);

    if (id === 'studio3d' && window.resizeStudio3D) {
      setTimeout(() => window.resizeStudio3D(), 60);
    }
  }

  pauseVideosInside(el) {
    if (!el) return;
    el.querySelectorAll('video').forEach(vid => {
      try { vid.pause(); } catch (_) {}
    });
  }

  minimize(id) {
    const data = this.windows.get(id);
    if (!data) return;

    this.pauseVideosInside(data.el);
    data.isMinimized = true;
    data.el.classList.add('minimized');
    data.el.classList.remove('focused');

    if (this.activeWindowId === id) {
      this.activeWindowId = null;
    }

    if (id === 'playground') {
      const companion = document.getElementById('desktop-owl-companion');
      if (companion) companion.style.display = '';
    }

    this.updateTaskbar(id);
  }

  toggleMaximize(id) {
    const data = this.windows.get(id);
    if (!data) return;

    data.isMaximized = !data.isMaximized;
    if (data.isMaximized) {
      data.el.classList.add('maximized');
    } else {
      data.el.classList.remove('maximized');
    }

    if (id === 'studio3d' && window.resizeStudio3D) {
      setTimeout(() => window.resizeStudio3D(), 120);
    }
  }

  close(id) {
    const data = this.windows.get(id);
    if (!data) return;

    if (id === 'projects' && typeof window.closeSolariDetail === 'function') {
      window.closeSolariDetail();
    }

    if (id === 'playground') {
      const companion = document.getElementById('desktop-owl-companion');
      if (companion) companion.style.display = '';
    }

    this.pauseVideosInside(data.el);
    data.isOpen = false;
    data.isMinimized = false;
    data.el.classList.remove('visible', 'focused');

    setTimeout(() => {
      data.el.style.display = 'none';
    }, 200);

    if (this.activeWindowId === id) {
      this.activeWindowId = null;
    }

    this.updateTaskbar(id);
  }

  closeAllOpen() {
    this.windows.forEach((data, id) => {
      if (data.isOpen && !data.isMinimized) {
        this.close(id);
      }
    });
  }

  minimizeAll() {
    this.windows.forEach((data, id) => {
      if (data.isOpen && !data.isMinimized) {
        this.minimize(id);
      }
    });
    const companion = document.getElementById('desktop-owl-companion');
    if (companion) companion.style.display = '';
  }

  toggleWindow(id) {
    const data = this.windows.get(id);
    if (!data) return;

    if (!data.isOpen) {
      this.open(id);
    } else if (data.isMinimized) {
      data.isMinimized = false;
      data.el.classList.remove('minimized');
      this.bringToFront(id);
      if (id === 'playground') {
        const companion = document.getElementById('desktop-owl-companion');
        if (companion) companion.style.display = 'none';
      }
    } else if (this.activeWindowId === id) {
      this.minimize(id);
    } else {
      this.bringToFront(id);
    }
  }

  updateTaskbar(targetId) {
    // Taskbar app items
    document.querySelectorAll('.taskbar-app-item').forEach(btn => {
      const appId = btn.getAttribute('data-app');
      const data = this.windows.get(appId);

      if (data && data.isOpen) {
        btn.classList.add('open');
        if (this.activeWindowId === appId && !data.isMinimized) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      } else {
        btn.classList.remove('open', 'active');
      }
    });
  }

  pauseVideosInside(el) {
    if (!el) return;
    try {
      el.querySelectorAll('video').forEach(v => {
        try { v.pause(); } catch (_) {}
      });
      el.querySelectorAll('audio').forEach(a => {
        try { a.pause(); } catch (_) {}
      });
    } catch (_) {}
  }
}

window.windowManager = new WindowManager();

// Global helper for opening windows
window.openWindow = function(winId) {
  if (!winId) return;
  const cleanId = winId.replace(/^window-/, '');
  if (window.windowManager) {
    window.windowManager.open(cleanId);
  }
};
