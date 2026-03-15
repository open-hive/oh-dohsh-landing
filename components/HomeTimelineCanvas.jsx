"use client";

import { useEffect, useRef } from "react";

// Brand colors
const PRIMARY_RGB = "1,185,235";   // #01B9EB
const SECONDARY_RGB = "0,146,206";   // #0092CE
const DARK_RGB = "0,30,60";     // near-black navy

const STEPS = [
    { label: "Assess", desc: "Identify hazards & risks" },
    { label: "Plan", desc: "Design risk management strategy" },
    { label: "Implement", desc: "Deploy controls & training" },
    { label: "Monitor", desc: "Audit, measure & review" },
    { label: "Improve", desc: "Zero harm achieved" },
];

export default function HomeTimelineCanvas() {
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

            const cycleLen = STEPS.length * 1.6;
            const cyclePos = (now % cycleLen) / 1.6;
            const activeIdx = Math.floor(cyclePos);
            const activeFrac = cyclePos - activeIdx;

            const cx = W * 0.5;
            const PAD_T = H * 0.07;
            const PAD_B = H * 0.07;
            const span = H - PAD_T - PAD_B;
            const step = span / (STEPS.length - 1);

            // Glow behind active node
            const activeY = PAD_T + activeIdx * step;
            const ag = ctx.createRadialGradient(cx, activeY, 0, cx, activeY, 90);
            ag.addColorStop(0, `rgba(${PRIMARY_RGB},0.12)`);
            ag.addColorStop(1, "transparent");
            ctx.fillStyle = ag;
            ctx.fillRect(0, 0, W, H);

            // Spine track
            ctx.strokeStyle = `rgba(${SECONDARY_RGB},0.12)`;
            ctx.lineWidth = 2;
            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.moveTo(cx, PAD_T);
            ctx.lineTo(cx, PAD_T + span);
            ctx.stroke();

            // Spine progress fill
            const progY = PAD_T + Math.min(cyclePos / (STEPS.length - 1), 1) * span;
            const pg = ctx.createLinearGradient(0, PAD_T, 0, progY);
            pg.addColorStop(0, `rgba(${PRIMARY_RGB},0.9)`);
            pg.addColorStop(1, `rgba(${SECONDARY_RGB},0.3)`);
            ctx.strokeStyle = pg;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx, PAD_T);
            ctx.lineTo(cx, progY);
            ctx.stroke();

            // Travelling blip between steps
            if (activeIdx < STEPS.length - 1) {
                const fromY = PAD_T + activeIdx * step;
                const toY = PAD_T + (activeIdx + 1) * step;
                const blipY = fromY + activeFrac * (toY - fromY);
                const bg = ctx.createRadialGradient(cx, blipY, 0, cx, blipY, 7);
                bg.addColorStop(0, `rgba(${PRIMARY_RGB},1)`);
                bg.addColorStop(1, "transparent");
                ctx.fillStyle = bg;
                ctx.beginPath();
                ctx.arc(cx, blipY, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = "#fff";
                ctx.beginPath();
                ctx.arc(cx, blipY, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // Steps
            STEPS.forEach((s, i) => {
                const y = PAD_T + i * step;
                const isActive = i === activeIdx;
                const isDone = i < activeIdx;
                const side = i % 2 === 0 ? -1 : 1;

                const pulse = isActive ? 1 + 0.15 * Math.sin(now * 3.5) : 1;
                const r = (isActive ? 10 : isDone ? 7 : 5.5) * pulse;

                // Outer glow
                const glowR = r * (isActive ? 4.5 : 3);
                const gl = ctx.createRadialGradient(cx, y, 0, cx, y, glowR);
                gl.addColorStop(0, `rgba(${PRIMARY_RGB},${isActive ? 0.25 : isDone ? 0.10 : 0.04})`);
                gl.addColorStop(1, "transparent");
                ctx.fillStyle = gl;
                ctx.beginPath();
                ctx.arc(cx, y, glowR, 0, Math.PI * 2);
                ctx.fill();

                // Node fill
                if (isActive) {
                    const nf = ctx.createRadialGradient(cx - r * 0.2, y - r * 0.2, 0, cx, y, r);
                    nf.addColorStop(0, "#01B9EB");
                    nf.addColorStop(1, "#0092CE");
                    ctx.fillStyle = nf;
                } else if (isDone) {
                    ctx.fillStyle = `rgba(${SECONDARY_RGB},0.7)`;
                } else {
                    ctx.fillStyle = `rgba(${SECONDARY_RGB},0.2)`;
                }
                ctx.beginPath();
                ctx.arc(cx, y, r, 0, Math.PI * 2);
                ctx.fill();

                // White sheen for active node
                if (isActive) {
                    ctx.fillStyle = "rgba(255,255,255,0.3)";
                    ctx.beginPath();
                    ctx.arc(cx, y, r * 0.38, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Tick mark for completed steps
                if (isDone) {
                    ctx.strokeStyle = "#fff";
                    ctx.lineWidth = 1.5;
                    ctx.lineCap = "round";
                    ctx.lineJoin = "round";
                    const s2 = r * 0.42;
                    ctx.beginPath();
                    ctx.moveTo(cx - s2, y);
                    ctx.lineTo(cx - s2 * 0.2, y + s2 * 0.7);
                    ctx.lineTo(cx + s2, y - s2 * 0.6);
                    ctx.stroke();
                }

                // Rotating dashed outer ring for active
                if (isActive) {
                    ctx.save();
                    ctx.setLineDash([3, 4]);
                    ctx.lineDashOffset = -(now * 16) % 7;
                    ctx.strokeStyle = `rgba(${PRIMARY_RGB},0.40)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(cx, y, r + 7, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.restore();
                }

                // Connector line to card
                ctx.strokeStyle = `rgba(${SECONDARY_RGB},${isActive ? 0.4 : isDone ? 0.2 : 0.08})`;
                ctx.lineWidth = 0.8;
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.moveTo(cx + side * r, y);
                ctx.lineTo(cx + side * 22, y);
                ctx.stroke();

                // Card background
                const cardW = Math.min(W * 0.34, 112);
                const bx = side < 0 ? cx - 24 - cardW : cx + 24;
                ctx.fillStyle = isActive
                    ? `rgba(${PRIMARY_RGB},0.06)`
                    : isDone
                        ? `rgba(${SECONDARY_RGB},0.04)`
                        : `rgba(${SECONDARY_RGB},0.02)`;
                ctx.strokeStyle = `rgba(${SECONDARY_RGB},${isActive ? 0.35 : isDone ? 0.15 : 0.07})`;
                ctx.lineWidth = isActive ? 1 : 0.5;
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.roundRect(bx, y - 20, cardW, 40, 3);
                ctx.fill();
                ctx.stroke();

                // Step number
                const tx = side < 0 ? bx + 10 : bx + cardW - 10;
                ctx.fillStyle = `rgba(${SECONDARY_RGB},${isActive ? 0.5 : 0.22})`;
                ctx.font = `700 8px "Barlow Condensed", sans-serif`;
                ctx.textAlign = side < 0 ? "left" : "right";
                ctx.fillText(`0${i + 1}`, tx, y - 8);

                // Label
                ctx.fillStyle = isActive
                    ? "#0092CE"
                    : isDone
                        ? `rgba(${SECONDARY_RGB},0.7)`
                        : `rgba(${DARK_RGB},0.3)`;
                ctx.font = `700 ${isActive ? 12 : 10}px "Barlow Condensed", sans-serif`;
                ctx.textAlign = side < 0 ? "left" : "right";
                ctx.fillText(s.label.toUpperCase(), tx, y + 3);

                // Description
                ctx.fillStyle = `rgba(${DARK_RGB},${isActive ? 0.5 : isDone ? 0.3 : 0.2})`;
                ctx.font = `300 8px "DM Sans", sans-serif`;
                ctx.fillText(s.desc, tx, y + 14);
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