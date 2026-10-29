/* ==========================================================================
   ALEESHA OS - WEB AUDIO SYNTHESIZER
   Zero external audio files required. All chimes & tones generated
   dynamically using the Web Audio API with smooth envelopes.
   ========================================================================== */

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.masterVolume = 0.6;
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

  setVolume(val) {
    this.masterVolume = Math.max(0, Math.min(1, val));
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Windows-inspired warm harmonic startup chime
  playBootChime() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    // Notes: C4, G4, C5, E5, G5
    const freqs = [261.63, 392.00, 523.25, 659.25, 783.99];

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + idx * 0.12);

      gain.gain.setValueAtTime(0, t + idx * 0.12);
      gain.gain.linearRampToValueAtTime(0.18 * this.masterVolume, t + idx * 0.12 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + idx * 0.12 + 2.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + idx * 0.12);
      osc.stop(t + idx * 0.12 + 2.3);
    });
  }

  // UI Click sound
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, t);
    osc.frequency.exponentialRampToValueAtTime(400, t + 0.04);

    gain.gain.setValueAtTime(0.12 * this.masterVolume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.05);
  }

  // Window Open whoosh
  playWindowOpen() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, t);
    osc.frequency.exponentialRampToValueAtTime(640, t + 0.12);

    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.15 * this.masterVolume, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.16);
  }

  // Notification chime
  playNotification() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const notes = [587.33, 880.00]; // D5, A5

    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t + i * 0.1);

      gain.gain.setValueAtTime(0.18 * this.masterVolume, t + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.1 + 0.6);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t + i * 0.1);
      osc.stop(t + i * 0.1 + 0.65);
    });
  }

  // Lo-Fi generative chill music chord synthesizer for Groove player
  playLoFiChord(chordIndex = 0) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const chordProgressions = [
      [220, 261.63, 329.63, 392.00], // Am7
      [174.61, 220, 261.63, 329.63], // Fmaj7
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];

    const currentChord = chordProgressions[chordIndex % chordProgressions.length];
    const t = this.ctx.currentTime;

    currentChord.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, t);

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.08 * this.masterVolume, t + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 3.0);
    });
  }

  // Bubbly pop sound for folder hover
  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(380, t);
    osc.frequency.exponentialRampToValueAtTime(740, t + 0.045);

    gain.gain.setValueAtTime(0.045 * this.masterVolume, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.055);
  }
}

window.soundSystem = new SoundSystem();
