"use client";

import { useEffect, useRef } from "react";

// Brand colors
const PRIMARY_RGB = "1,185,235";   // #01B9EB
const SECONDARY_RGB = "0,146,206";   // #0092CE
const DARK_RGB = "0,30,60";

const BARS = [
    { label: ["RISK", "ASSESS."], base: 0.72, phase: 0.0 },
    { label: ["TRAINING", ""], base: 0.58, phase: 0.8 },
    { label: ["ISO", "AUDIT"], base: 0.85, phase: 1.6 },
    { label: ["ENV.", "STUDY"], base: 0.50, phase: 2.4 },
    { label: ["INCIDENT", "RESP."], base: 0.65, phase: 3.2 },
    { label: ["COMPLIANCE", ""], base: 0.78, phase: 4.0 },
];

export default function ServicesBarCanvas() {
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

            const PAD_L = 24, PAD_R = 24, PAD_T = 28, PAD_B = 52;
            const chartW = W - PAD_L - PAD_R;
            const chartH = H - PAD_T - PAD_B;
            const bw = chartW / BARS.length;
            const barW = Math.min(bw * 0.55, 52);

            // Radial glow
            const grd = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, W * 0.55);
            grd.addColorStop(0, `rgba(${PRIMARY_RGB},0.06)`);
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, W, H);

            // Grid lines + % labels
            for (let i = 0; i <= 4; i++) {
                const y = PAD_T + chartH * (1 - i / 4);
                ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.10)`;
                ctx.lineWidth = 0.5;
                ctx.setLineDash([3, 5]);
                ctx.beginPath();
                ctx.moveTo(PAD_L, y);
                ctx.lineTo(W - PAD_R, y);
                ctx.stroke();
                ctx.setLineDash([]);
                if (i > 0) {
                    ctx.fillStyle = `rgba(${SECONDARY_RGB},0.35)`;
                    ctx.font = `300 9px "DM Sans", sans-serif`;
                    ctx.textAlign = "left";
                    ctx.fillText(i * 25 + "%", PAD_L, y - 4);
                }
            }

            // Bars
            BARS.forEach((b, i) => {
                const breath = 0.038 * Math.sin(now * 1.1 + b.phase)
                    + 0.012 * Math.sin(now * 2.3 + b.phase * 1.4);
                const frac = Math.min(Math.max(b.base + breath, 0.1), 1);
                const barH = frac * chartH;
                const cx = PAD_L + i * bw + bw / 2;
                const bx = cx - barW / 2;
                const by = PAD_T + chartH - barH;

                // Body
                ctx.fillStyle = `rgba(${SECONDARY_RGB},0.12)`;
                ctx.fillRect(bx, by, barW, barH);
                ctx.fillStyle = `rgba(${SECONDARY_RGB},0.07)`;
                ctx.fillRect(bx + barW * 0.55, by, barW * 0.45, barH);

                // Travelling fill line
                const travelY = by + barH - ((now * 40 + i * 28) % barH);
                const lg = ctx.createLinearGradient(0, travelY - 18, 0, travelY + 4);
                lg.addColorStop(0, `rgba(${PRIMARY_RGB},0)`);
                lg.addColorStop(1, `rgba(${PRIMARY_RGB},0.22)`);
                ctx.fillStyle = lg;
                ctx.fillRect(bx, travelY - 18, barW, 22);

                // Top cap — bright cyan
                ctx.fillStyle = `rgba(${PRIMARY_RGB},0.9)`;
                ctx.fillRect(bx, by, barW, 2);

                // Percentage readout
                ctx.fillStyle = `rgba(${SECONDARY_RGB},0.95)`;
                ctx.font = `700 13px "Barlow Condensed", sans-serif`;
                ctx.textAlign = "center";
                ctx.fillText(Math.round(frac * 100) + "%", cx, by - 8);

                // Bar labels
                b.label.forEach((ln, li) => {
                    if (!ln) return;
                    ctx.fillStyle = `rgba(${DARK_RGB},0.45)`;
                    ctx.font = `700 8.5px "Barlow Condensed", sans-serif`;
                    ctx.textAlign = "center";
                    ctx.fillText(ln, cx, PAD_T + chartH + 18 + li * 11);
                });
            });

            // Baseline
            ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.25)`;
            ctx.lineWidth = 0.8;
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(PAD_L, PAD_T + chartH);
            ctx.lineTo(W - PAD_R, PAD_T + chartH);
            ctx.stroke();

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