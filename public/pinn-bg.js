// Subtle PINN background — animates a 1D wave/heat solution u(x,t).
// Two modes: 'wave' (oscillating, more energetic) and 'heat' (diffusing, calmer).
// Renders to a fixed canvas behind content. Honors prefers-reduced-motion.
(function () {
  function init(opts) {
    opts = opts || {};
    const canvas = document.createElement("canvas");
    canvas.id = "pinn-bg-canvas";
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "0",
      opacity: String(opts.opacity ?? 0.18),
    });
    document.body.prepend(canvas);

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0, H = 0;
    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const N = 220;          // grid points
    const c = 1.0;          // wave speed
    const dx = 1 / N;
    const dt = 0.0009;
    const r = (c * dt / dx) ** 2;

    let u_prev = new Float32Array(N);
    let u_curr = new Float32Array(N);
    let u_next = new Float32Array(N);

    // Two superposed sine modes as initial condition — gives visually interesting interference.
    for (let i = 0; i < N; i++) {
      const x = i / (N - 1);
      u_curr[i] = Math.sin(Math.PI * x) * 0.6 + Math.sin(3 * Math.PI * x) * 0.25;
      u_prev[i] = u_curr[i];
    }

    function step() {
      for (let i = 1; i < N - 1; i++) {
        u_next[i] =
          2 * u_curr[i] -
          u_prev[i] +
          r * (u_curr[i + 1] - 2 * u_curr[i] + u_curr[i - 1]);
      }
      // Light damping
      for (let i = 0; i < N; i++) u_next[i] *= 0.99965;
      // Periodic re-injection so it never dies
      const t = performance.now() * 0.0006;
      u_next[Math.floor(N / 2)] += Math.sin(t) * 0.0007;
      u_next[Math.floor(N / 4)] += Math.cos(t * 1.3) * 0.0005;

      [u_prev, u_curr, u_next] = [u_curr, u_next, u_prev];
    }

    const stroke = opts.color || "#00d4ff";
    const equation = opts.equation || "∂²u/∂t² = c² · ∂²u/∂x²";

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Multiple stacked wave traces at different vertical bands and offsets.
      const bands = opts.bands ?? 4;
      for (let b = 0; b < bands; b++) {
        const yMid = H * (0.18 + b * (0.64 / Math.max(1, bands - 1)));
        const amp = 70 + b * 8;
        const phase = b * 0.7;

        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const x = (i / (N - 1)) * W;
          const v = u_curr[i] * Math.cos(phase + i * 0.02);
          const y = yMid + v * amp;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = stroke;
        ctx.globalAlpha = 0.22 + 0.18 * (1 - b / bands);
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Equation watermark
      if (opts.equationLabel !== false) {
        ctx.font = "11px ui-monospace, 'JetBrains Mono', monospace";
        ctx.fillStyle = stroke;
        ctx.globalAlpha = 0.35;
        ctx.fillText(equation, 24, H - 24);
        ctx.globalAlpha = 1;
      }
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    function loop() {
      // 4 sub-steps per frame — keeps motion smooth without slowing too much
      for (let k = 0; k < 4; k++) step();
      draw();
      if (!reduced) raf = requestAnimationFrame(loop);
    }
    if (reduced) {
      // single static frame
      for (let k = 0; k < 200; k++) step();
      draw();
    } else {
      loop();
    }
  }

  window.PINNBackground = { init };
})();
