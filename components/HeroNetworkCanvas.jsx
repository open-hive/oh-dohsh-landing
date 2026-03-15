"use client";

import { useEffect, useRef } from "react";

// Brand colors
const PRIMARY_RGB = "1,185,235";   // #01B9EB
const SECONDARY_RGB = "0,146,206";   // #0092CE

const NODE_DATA = [
  { label: "Risk Assessment", x: 0.50, y: 0.13, r: 6, primary: true },
  { label: "Hazard ID", x: 0.20, y: 0.26, r: 4.5, primary: false },
  { label: "Environmental", x: 0.80, y: 0.24, r: 5, primary: false },
  { label: "Compliance Audit", x: 0.15, y: 0.52, r: 4.5, primary: false },
  { label: "Incident Response", x: 0.85, y: 0.50, r: 4.5, primary: false },
  { label: "Safety Culture", x: 0.50, y: 0.48, r: 8, primary: true },
  { label: "PPE Management", x: 0.25, y: 0.73, r: 4, primary: false },
  { label: "ISO 45001", x: 0.75, y: 0.73, r: 4.5, primary: false },
  { label: "Training", x: 0.12, y: 0.88, r: 3.5, primary: false },
  { label: "Monitoring", x: 0.88, y: 0.88, r: 3.5, primary: false },
  { label: "OHSE Strategy", x: 0.50, y: 0.88, r: 5.5, primary: true },
];

const EDGES = [
  [0, 1], [0, 2], [0, 5],
  [1, 2], [1, 3], [1, 5],
  [2, 4], [2, 5],
  [3, 5], [3, 6], [3, 8],
  [4, 5], [4, 7], [4, 9],
  [5, 6], [5, 7], [5, 10],
  [6, 8], [6, 10],
  [7, 9], [7, 10],
  [8, 10], [9, 10],
];

export default function HeroNetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const ctx = el.getContext("2d");
    let W, H, dpr, rafId;

    const nodes = NODE_DATA.map((n) => ({
      ...n,
      phase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.6 + Math.random() * 0.5,
      wobbleAmt: 0.018 + Math.random() * 0.022,
      cx: n.x,
      cy: n.y,
    }));

    const sparks = EDGES.map(([a, b]) => ({
      a, b,
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.005,
      alpha: 0.3 + Math.random() * 0.5,
    }));

    const ghosts = Array.from({ length: 14 }, () => {
      const idx = Math.floor(Math.random() * EDGES.length);
      const [a, b] = EDGES[idx];
      return {
        a, b,
        t: Math.random(),
        speed: 0.002 + Math.random() * 0.007,
        alpha: 0.15 + Math.random() * 0.25,
      };
    });

    function resize() {
      const rect = el.parentElement.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      W = rect.width;
      H = rect.height;
      el.width = W * dpr;
      el.height = H * dpr;
      el.style.width = W + "px";
      el.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function px(n) { return { x: n.cx * W, y: n.cy * H }; }
    function lerp(a, b, t) { return a + (b - a) * t; }

    function drawSpark(spark) {
      const pa = px(nodes[spark.a]);
      const pb = px(nodes[spark.b]);
      const sx = lerp(pa.x, pb.x, spark.t);
      const sy = lerp(pa.y, pb.y, spark.t);
      const t0 = Math.max(0, spark.t - 0.08);
      const tx = lerp(pa.x, pb.x, t0);
      const ty = lerp(pa.y, pb.y, t0);

      const grad = ctx.createLinearGradient(tx, ty, sx, sy);
      grad.addColorStop(0, `rgba(${PRIMARY_RGB},0)`);
      grad.addColorStop(1, `rgba(${PRIMARY_RGB},${spark.alpha})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      const hg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 5);
      hg.addColorStop(0, `rgba(${PRIMARY_RGB},${spark.alpha * 1.2})`);
      hg.addColorStop(1, "transparent");
      ctx.fillStyle = hg;
      ctx.beginPath();
      ctx.arc(sx, sy, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    function draw(ts) {
      ctx.clearRect(0, 0, W, H);
      const now = performance.now() * 0.001;

      // Wobble nodes
      nodes.forEach((n) => {
        n.cx = n.x + Math.sin(now * n.wobbleSpeed + n.phase) * n.wobbleAmt;
        n.cy = n.y + Math.cos(now * n.wobbleSpeed * 0.8 + n.phase + 1) * n.wobbleAmt * 0.7;
      });

      // Radial glow
      const grd = ctx.createRadialGradient(W * 0.5, H * 0.42, 0, W * 0.5, H * 0.42, W * 0.6);
      grd.addColorStop(0, `rgba(${PRIMARY_RGB},0.07)`);
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Base edges
      EDGES.forEach(([a, b]) => {
        const pa = px(nodes[a]), pb = px(nodes[b]);
        ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.12)`;
        ctx.lineWidth = 0.6;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      });

      // Animated dashes
      const dashOff = -(now * 22) % 10;
      EDGES.forEach(([a, b]) => {
        const pa = px(nodes[a]), pb = px(nodes[b]);
        ctx.save();
        ctx.setLineDash([2.5, 6]);
        ctx.lineDashOffset = dashOff;
        ctx.strokeStyle = `rgba(${PRIMARY_RGB},0.18)`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
        ctx.restore();
      });

      // Sparks
      [...sparks, ...ghosts].forEach((spark) => {
        spark.t += spark.speed;
        if (spark.t > 1) {
          spark.t = 0;
          if (ghosts.includes(spark)) {
            const idx = Math.floor(Math.random() * EDGES.length);
            spark.a = EDGES[idx][0];
            spark.b = EDGES[idx][1];
            spark.speed = 0.002 + Math.random() * 0.007;
          }
        }
        drawSpark(spark);
      });

      // Nodes
      nodes.forEach((n, i) => {
        const p = px(n);
        const pulse = n.primary
          ? 1 + 0.16 * Math.sin(now * 1.6 + i * 0.9)
          : 1 + 0.09 * Math.sin(now * 1.1 + i * 0.7);
        const r = n.r * pulse;

        // Outer glow
        const glowR = r * (n.primary ? 4.2 : 3.2);
        const glow = ctx.createRadialGradient(p.x, p.y, r * 0.4, p.x, p.y, glowR);
        glow.addColorStop(0, `rgba(${PRIMARY_RGB},${n.primary ? 0.22 : 0.12})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fill();

        // Double halo for primary nodes
        if (n.primary) {
          const haloR = r * 5.5 * (1 + 0.06 * Math.sin(now * 0.8 + i));
          const halo = ctx.createRadialGradient(p.x, p.y, r, p.x, p.y, haloR);
          halo.addColorStop(0, `rgba(${PRIMARY_RGB},0.07)`);
          halo.addColorStop(1, "transparent");
          ctx.fillStyle = halo;
          ctx.beginPath();
          ctx.arc(p.x, p.y, haloR, 0, Math.PI * 2);
          ctx.fill();
        }

        // Node fill — brand gradient
        const fill = ctx.createRadialGradient(p.x - r * 0.3, p.y - r * 0.3, 0, p.x, p.y, r);
        fill.addColorStop(0, "#01B9EB");
        fill.addColorStop(1, "#0092CE");
        ctx.fillStyle = fill;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();

        // Ring
        ctx.strokeStyle = `rgba(${SECONDARY_RGB},${n.primary ? 0.5 : 0.25})`;
        ctx.lineWidth = n.primary ? 1.1 : 0.6;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r + (n.primary ? 4 : 2.5), 0, Math.PI * 2);
        ctx.stroke();

        // Dashed outer ring for primary
        if (n.primary) {
          ctx.save();
          ctx.setLineDash([3, 5]);
          ctx.lineDashOffset = -(now * 12) % 8;
          ctx.strokeStyle = `rgba(${PRIMARY_RGB},0.25)`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + 9, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }

        // Label
        ctx.fillStyle = n.primary
          ? `rgba(${SECONDARY_RGB},0.95)`
          : "rgba(0,30,60,0.50)";
        ctx.font = n.primary
          ? `700 9.5px "Barlow Condensed", sans-serif`
          : `300 8.5px "DM Sans", sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(
          n.label.toUpperCase(),
          p.x,
          p.y + r + (n.primary ? 18 : 14)
        );
      });

      rafId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(el.parentElement);
    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
  );
}