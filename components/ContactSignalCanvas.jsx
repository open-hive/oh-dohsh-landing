"use client";

import { useEffect, useRef } from "react";

// Brand colors
const PRIMARY_RGB = "1,185,235";   // #01B9EB
const SECONDARY_RGB = "0,146,206";   // #0092CE

const NODES = [
    { label: "DOHSH HQ", lx: 0.50, ly: 0.45, primary: true, phase: 0.0, wobble: 0.008, speed: 0.6 },
    { label: "", lx: 0.22, ly: 0.25, primary: false, phase: 0.8, wobble: 0.014, speed: 0.9 },
    { label: "", lx: 0.78, ly: 0.28, primary: false, phase: 1.8, wobble: 0.012, speed: 0.7 },
    { label: "", lx: 0.18, ly: 0.68, primary: false, phase: 2.6, wobble: 0.016, speed: 0.8 },
    { label: "", lx: 0.80, ly: 0.70, primary: false, phase: 3.5, wobble: 0.013, speed: 1.0 },
];

const CONNECTIONS = [1, 2, 3, 4];

export default function ContactSignalCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const el = canvasRef.current;
        if (!el) return;

        const ctx = el.getContext("2d");
        let W, H, dpr, rafId;

        const nodes = NODES.map(n => ({ ...n, cx: n.lx, cy: n.ly }));
        const rings = [];
        let lastSpawn = 0;

        const pulses = CONNECTIONS.map(ci => ({
            target: ci,
            t: Math.random(),
            speed: 0.004 + Math.random() * 0.003,
        }));

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

        function draw(ts) {
            const now = ts * 0.001;
            ctx.clearRect(0, 0, W, H);

            // Wobble nodes
            nodes.forEach(n => {
                n.cx = n.lx + Math.sin(now * n.speed + n.phase) * n.wobble;
                n.cy = n.ly + Math.cos(now * n.speed * 0.8 + n.phase + 1) * n.wobble * 0.7;
            });

            const hq = px(nodes[0]);

            // Spawn ring from HQ every 2.2s
            if (now - lastSpawn > 2.2) {
                rings.push({ x: hq.x, y: hq.y, r: 0, maxR: Math.min(W, H) * 0.42, speed: 1.4 });
                lastSpawn = now;
            }

            // Radial glow centred on HQ
            const grd = ctx.createRadialGradient(hq.x, hq.y, 0, hq.x, hq.y, 130);
            grd.addColorStop(0, `rgba(${PRIMARY_RGB},0.12)`);
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, W, H);

            // Signal rings
            for (let i = rings.length - 1; i >= 0; i--) {
                const rg = rings[i];
                rg.r += rg.speed;
                const alpha = 0.50 * (1 - rg.r / rg.maxR);
                if (alpha <= 0.01) { rings.splice(i, 1); continue; }
                ctx.beginPath();
                ctx.arc(rg.x, rg.y, rg.r, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(${PRIMARY_RGB},${alpha})`;
                ctx.lineWidth = 1.2;
                ctx.setLineDash([]);
                ctx.stroke();
            }

            // Connection lines
            CONNECTIONS.forEach(ci => {
                const pa = hq, pb = px(nodes[ci]);
                ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.12)`;
                ctx.lineWidth = 0.6;
                ctx.setLineDash([3, 6]);
                ctx.beginPath();
                ctx.moveTo(pa.x, pa.y);
                ctx.lineTo(pb.x, pb.y);
                ctx.stroke();
                ctx.setLineDash([]);
            });

            // Travelling pulses
            pulses.forEach(p => {
                p.t += p.speed;
                if (p.t > 1) {
                    p.t = 0;
                    p.speed = 0.004 + Math.random() * 0.003;
                }
                const pa = hq, pb = px(nodes[p.target]);
                const sx = lerp(pa.x, pb.x, p.t);
                const sy = lerp(pa.y, pb.y, p.t);
                const t0 = Math.max(0, p.t - 0.08);
                const tx = lerp(pa.x, pb.x, t0);
                const ty = lerp(pa.y, pb.y, t0);

                const grad = ctx.createLinearGradient(tx, ty, sx, sy);
                grad.addColorStop(0, `rgba(${PRIMARY_RGB},0)`);
                grad.addColorStop(1, `rgba(${PRIMARY_RGB},0.80)`);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 1.5;
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.moveTo(tx, ty);
                ctx.lineTo(sx, sy);
                ctx.stroke();

                const hg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 5);
                hg.addColorStop(0, `rgba(${PRIMARY_RGB},0.90)`);
                hg.addColorStop(1, "transparent");
                ctx.fillStyle = hg;
                ctx.beginPath();
                ctx.arc(sx, sy, 5, 0, Math.PI * 2);
                ctx.fill();
            });

            // Nodes
            nodes.forEach((n, i) => {
                const p = px(n);
                const pulse = n.primary
                    ? 1 + 0.14 * Math.sin(now * 1.8)
                    : 1 + 0.08 * Math.sin(now * 1.1 + n.phase);
                const r = (n.primary ? 9 : 5.5) * pulse;

                // Outer glow
                const gl = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * (n.primary ? 4.5 : 3.5));
                gl.addColorStop(0, `rgba(${PRIMARY_RGB},${n.primary ? 0.25 : 0.12})`);
                gl.addColorStop(1, "transparent");
                ctx.fillStyle = gl;
                ctx.beginPath();
                ctx.arc(p.x, p.y, r * (n.primary ? 4.5 : 3.5), 0, Math.PI * 2);
                ctx.fill();

                // Gradient dot fill
                const df = ctx.createRadialGradient(p.x - r * 0.3, p.y - r * 0.3, 0, p.x, p.y, r);
                df.addColorStop(0, "#01B9EB");
                df.addColorStop(1, "#0092CE");
                ctx.fillStyle = df;
                ctx.beginPath();
                ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                ctx.fill();

                // White sheen for HQ node
                if (n.primary) {
                    ctx.fillStyle = "rgba(255,255,255,0.25)";
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, r * 0.38, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Ring
                ctx.strokeStyle = `rgba(${SECONDARY_RGB},${n.primary ? 0.45 : 0.22})`;
                ctx.lineWidth = n.primary ? 1.2 : 0.7;
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.arc(p.x, p.y, r + (n.primary ? 5 : 3), 0, Math.PI * 2);
                ctx.stroke();

                // Rotating dashed outer ring for HQ
                if (n.primary) {
                    ctx.save();
                    ctx.setLineDash([3, 5]);
                    ctx.lineDashOffset = -(now * 14) % 8;
                    ctx.strokeStyle = `rgba(${PRIMARY_RGB},0.30)`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, r + 12, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }

                // Label
                ctx.fillStyle = n.primary
                    ? `rgba(${SECONDARY_RGB},0.95)`
                    : "rgba(0,30,60,0.50)";
                ctx.font = n.primary
                    ? `700 10px "Barlow Condensed", sans-serif`
                    : `300 8.5px "DM Sans", sans-serif`;
                ctx.textAlign = "center";
                ctx.fillText(n.label.toUpperCase(), p.x, p.y + r + (n.primary ? 20 : 15));
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