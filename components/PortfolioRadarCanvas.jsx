"use client";

import { useEffect, useRef } from "react";

// Brand colors
const PRIMARY_RGB = "1,185,235";   // #01B9EB
const SECONDARY_RGB = "0,146,206";   // #0092CE
const DARK_RGB = "0,30,60";

const AXES = [
    { label: "Mining", val: 0.92, phase: 0.0 },
    { label: "Construction", val: 0.78, phase: 1.57 },
    { label: "Healthcare", val: 0.62, phase: 3.14 },
    { label: "Manufacturing", val: 0.74, phase: 4.71 },
];

const COMP = [0.48, 0.52, 0.44, 0.50];

export default function PortfolioRadarCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const el = canvasRef.current;
        if (!el) return;

        const ctx = el.getContext("2d");
        let W, H, dpr, rafId;

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

        function draw(ts) {
            const now = ts * 0.001;
            ctx.clearRect(0, 0, W, H);

            const cx = W * 0.5;
            const cy = H * 0.5;
            const R = Math.min(W, H) * 0.32;
            const N = AXES.length;

            // Radial glow
            const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.4);
            grd.addColorStop(0, `rgba(${PRIMARY_RGB},0.10)`);
            grd.addColorStop(0.6, `rgba(${PRIMARY_RGB},0.03)`);
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, W, H);

            // Clockwise rotating outer ring
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(now * 0.18);
            ctx.beginPath();
            ctx.arc(0, 0, R * 1.22, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${PRIMARY_RGB},0.12)`;
            ctx.lineWidth = 0.6;
            ctx.setLineDash([4, 10]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();

            // Counter-rotating inner ring
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(-now * 0.28);
            ctx.beginPath();
            ctx.arc(0, 0, R * 0.18, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.20)`;
            ctx.lineWidth = 0.6;
            ctx.setLineDash([2, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.restore();

            // Grid rings
            for (let ring = 1; ring <= 4; ring++) {
                const r = R * ring / 4;
                ctx.beginPath();
                for (let i = 0; i < N; i++) {
                    const a = (i / N) * Math.PI * 2 - Math.PI / 2;
                    i === 0
                        ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                        : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
                }
                ctx.closePath();
                ctx.strokeStyle = ring === 4
                    ? `rgba(${SECONDARY_RGB},0.25)`
                    : `rgba(${SECONDARY_RGB},0.10)`;
                ctx.lineWidth = ring === 4 ? 0.8 : 0.5;
                ctx.setLineDash(ring < 4 ? [3, 4] : []);
                ctx.stroke();
                ctx.setLineDash([]);
                if (ring < 4) {
                    ctx.fillStyle = `rgba(${SECONDARY_RGB},0.35)`;
                    ctx.font = `300 8px "DM Sans", sans-serif`;
                    ctx.textAlign = "left";
                    ctx.fillText(ring * 25 + "%", cx + r + 4, cy + 3);
                }
            }

            // Spokes + tick marks + label pills
            for (let i = 0; i < N; i++) {
                const a = (i / N) * Math.PI * 2 - Math.PI / 2;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
                ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.15)`;
                ctx.lineWidth = 0.6;
                ctx.stroke();

                for (let t = 1; t <= 4; t++) {
                    const tr = R * t / 4;
                    ctx.beginPath();
                    ctx.arc(cx + tr * Math.cos(a), cy + tr * Math.sin(a), 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${SECONDARY_RGB},${t === 4 ? 0.5 : 0.18})`;
                    ctx.fill();
                }

                // Label pill
                const lx = cx + (R + 28) * Math.cos(a);
                const ly = cy + (R + 28) * Math.sin(a);
                const txt = AXES[i].label.toUpperCase();
                ctx.font = `700 10px "Barlow Condensed", sans-serif`;
                const tw = ctx.measureText(txt).width;
                ctx.fillStyle = `rgba(${DARK_RGB},0.08)`;
                ctx.beginPath();
                ctx.roundRect(lx - tw / 2 - 7, ly - 11, tw + 14, 19, 2);
                ctx.fill();
                ctx.fillStyle = `rgba(${SECONDARY_RGB},0.90)`;
                ctx.textAlign = "center";
                ctx.fillText(txt, lx, ly + 3);
            }

            // Industry average shape
            ctx.beginPath();
            COMP.forEach((v, i) => {
                const a = (i / N) * Math.PI * 2 - Math.PI / 2;
                const r = v * R;
                i === 0
                    ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                    : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
            });
            ctx.closePath();
            ctx.fillStyle = `rgba(${DARK_RGB},0.04)`;
            ctx.strokeStyle = `rgba(${DARK_RGB},0.18)`;
            ctx.lineWidth = 0.8;
            ctx.setLineDash([3, 4]);
            ctx.fill();
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = `rgba(${DARK_RGB},0.25)`;
            ctx.font = `300 8px "DM Sans", sans-serif`;
            ctx.textAlign = "right";
            ctx.fillText("INDUSTRY AVG", cx - R * 0.28, cy + R * 0.52);

            // DOHSH shape with breathing
            const globalPulse = 1 + 0.04 * Math.sin(now * 0.5);
            const points = AXES.map((ax, i) => {
                const breath = 0.08 * Math.sin(now * 1.2 + ax.phase)
                    + 0.04 * Math.sin(now * 2.1 + ax.phase * 1.3);
                const v = (ax.val + breath) * R * globalPulse;
                const a = (i / N) * Math.PI * 2 - Math.PI / 2;
                return { x: cx + v * Math.cos(a), y: cy + v * Math.sin(a) };
            });

            // Filled shape
            ctx.beginPath();
            points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
            ctx.closePath();
            ctx.fillStyle = `rgba(${PRIMARY_RGB},0.12)`;
            ctx.fill();

            // Pulsing stroke
            const strokeAlpha = 0.65 + 0.15 * Math.sin(now * 1.0);
            ctx.strokeStyle = `rgba(${SECONDARY_RGB},${strokeAlpha})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
            ctx.closePath();
            ctx.stroke();

            // Vertex dots
            points.forEach((p, i) => {
                const dotPulse = 1 + 0.25 * Math.sin(now * 1.2 + AXES[i].phase);
                const dotR = 4 * dotPulse;

                // Outer glow
                const gl = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, dotR * 4);
                gl.addColorStop(0, `rgba(${PRIMARY_RGB},0.50)`);
                gl.addColorStop(1, "transparent");
                ctx.fillStyle = gl;
                ctx.beginPath();
                ctx.arc(p.x, p.y, dotR * 4, 0, Math.PI * 2);
                ctx.fill();

                // Gradient dot fill
                const df = ctx.createRadialGradient(p.x - dotR * 0.3, p.y - dotR * 0.3, 0, p.x, p.y, dotR);
                df.addColorStop(0, "#01B9EB");
                df.addColorStop(1, "#0092CE");
                ctx.fillStyle = df;
                ctx.beginPath();
                ctx.arc(p.x, p.y, dotR, 0, Math.PI * 2);
                ctx.fill();

                // White inner sheen
                ctx.fillStyle = "rgba(255,255,255,0.50)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, dotR * 0.35, 0, Math.PI * 2);
                ctx.fill();
            });

            // Center label
            ctx.fillStyle = `rgba(${SECONDARY_RGB},0.90)`;
            ctx.font = `800 20px "Barlow Condensed", sans-serif`;
            ctx.textAlign = "center";
            ctx.fillText("DOHSH", cx, cy - 5);
            ctx.fillStyle = `rgba(${DARK_RGB},0.35)`;
            ctx.font = `300 8px "DM Sans", sans-serif`;
            ctx.fillText("SECTOR REACH", cx, cy + 10);

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