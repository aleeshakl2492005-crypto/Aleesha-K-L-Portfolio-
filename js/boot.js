/* ==========================================================================
   ALEESHA OS - OWL LOADING SCREEN SCRIPT
   Screen 1: Animated Peeking Owl with Dynamic Cursor-Tracking Eyes
   Windows-style minimal loading — no progress bar, no skip button.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('owl-boot-screen');
  const eyeLeft    = document.getElementById('owl-eye-left');
  const eyeRight   = document.getElementById('owl-eye-right');
  const pupilLeft  = eyeLeft  ? eyeLeft.querySelector('.owl-dynamic-pupil')  : null;
  const pupilRight = eyeRight ? eyeRight.querySelector('.owl-dynamic-pupil') : null;

  if (!bootScreen) return;

  // ------------------------------------------------------------------------
  // 1. DYNAMIC EYE PUPIL TRACKING ALONG CURSOR DIRECTION
  // ------------------------------------------------------------------------
  function updateEyeGaze(targetX, targetY) {
    [
      { socket: eyeLeft,  pupil: pupilLeft  },
      { socket: eyeRight, pupil: pupilRight }
    ].forEach(({ socket, pupil }) => {
      if (!socket || !pupil) return;

      const rect    = socket.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;

      const dx    = targetX - centerX;
      const dy    = targetY - centerY;
      const angle = Math.atan2(dy, dx);
      const dist  = Math.hypot(dx, dy);

      // Maximum travel = 18% of socket width, soft capped
      const maxRadius  = Math.max(8, rect.width * 0.18);
      const travelDist = Math.min(maxRadius, dist * 0.05);

      const px = Math.cos(angle) * travelDist;
      const py = Math.sin(angle) * travelDist;

      pupil.style.transform = `translate(${px.toFixed(2)}px, ${py.toFixed(2)}px)`;
    });
  }

  // Mouse tracking
  window.addEventListener('mousemove', (e) => {
    if (bootScreen.style.display !== 'none') updateEyeGaze(e.clientX, e.clientY);
  });

  // Touch tracking
  window.addEventListener('touchmove', (e) => {
    if (bootScreen.style.display !== 'none' && e.touches?.[0]) {
      updateEyeGaze(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Initial gaze — look slightly up toward the loading text
  setTimeout(() => updateEyeGaze(window.innerWidth / 2, window.innerHeight * 0.35), 300);

  // ------------------------------------------------------------------------
  // 2. AUTO-FINISH AFTER ~3.2 SECONDS (no progress bar — just the dots animate)
  // ------------------------------------------------------------------------
  let isDone = false;

  function finishBoot() {
    if (isDone) return;
    isDone = true;

    bootScreen.classList.add('fade-out');

    setTimeout(() => {
      bootScreen.style.display = 'none';
      if (window.welcomeScreenManager && typeof window.welcomeScreenManager.onBootFinished === 'function') {
        window.welcomeScreenManager.onBootFinished();
      }
    }, 750);
  }

  // Auto-finish after 3.2s
  setTimeout(finishBoot, 3200);
});
