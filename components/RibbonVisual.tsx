"use client";

import { motion } from "framer-motion";

// ── inline CSS vars to simulate the theme tokens ──
const theme = `
  :root {
    --primary: #7c5cbf;
    --support: #5a9e72;
    --care: #d4739a;
    --action: #d4834a;
  }
`;
const labels = [
  {
    text: "Belonging",
    bg: "rgba(124,92,191,0.10)",
    color: "#7c5cbf",
    border: "rgba(124,92,191,0.22)",
    style: { top: "40%", left: "50%" },
  },
  {
    text: "Care",
    bg: "rgba(212,115,154,0.10)",
    color: "#d4739a",
    border: "rgba(212,115,154,0.22)",
    style: { top: "62%", left: "58%" },
  },
  {
    text: "Support",
    bg: "rgba(90,158,114,0.10)",
    color: "#5a9e72",
    border: "rgba(90,158,114,0.22)",
    style: { top: "45%", left: "32%" },
  },
  {
    text: "Growth",
    bg: "rgba(242,140,40,0.10)",
    color: "#f28c28",
    border: "rgba(242,140,40,0.22)",
    style: { top: "78%", left: "34%" },
  },
];

export default function BouquetVisualPreview() {
  return (
    <>
      <style>{theme}</style>
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "50vh",
          maxHeight: "500px",
          background: "rgba(124,92,191,0.02)",
          border: "1px solid rgba(124,92,191,0.03)",
          fontFamily: "Georgia, serif",
          borderRadius: "12px",
        }}
      >
        {/* Bouquet Visual */}
        <div
          style={{
            position: "absolute",
            right: "55%",
            top: "50%",
            height: 720,
            width: 720,
            transform: "translateY(-50%) translateX(50%)",
            pointerEvents: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", height: "100%", width: "100%" }}
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 7, repeat: 2, ease: "easeInOut" }}
              style={{ position: "relative", height: "100%", width: "100%" }}
            >
              <svg
                viewBox="0 0 720 720"
                style={{ height: "100%", width: "100%", overflow: "visible" }}
                fill="none"
              >
                {/* STEMS */}
                <motion.path
                  d="M 390 660 C 388 580, 400 500, 420 390 C 435 310, 450 270, 460 210"
                  stroke="#b5a0c8"
                  strokeWidth="20"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: 0.1 }}
                />
                <motion.path
                  d="M 390 660 C 380 590, 360 520, 330 440 C 310 380, 285 340, 270 280"
                  stroke="#9ab89a"
                  strokeWidth="15"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: 0.25 }}
                />
                <motion.path
                  d="M 390 660 C 400 570, 430 490, 480 400 C 515 330, 545 285, 570 200"
                  stroke="#d4a0b0"
                  strokeWidth="12"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
                />
                <motion.path
                  d="M 390 660 C 375 600, 345 555, 315 510 C 296 478, 282 455, 268 430"
                  stroke="#d4a87a"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: 0.55 }}
                />
                <motion.path
                  d="M 390 660 C 410 600, 450 555, 490 510 C 515 480, 536 460, 555 440"
                  stroke="#c0aad8"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeOut", delay: 0.65 }}
                />

                {/* LEAVES */}
                <motion.path
                  d="M 345 470 C 322 450, 298 448, 290 465 C 298 448, 322 450, 345 470 Z"
                  fill="#9ab89a"
                  fillOpacity="0.35"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  style={{ transformOrigin: "345px 470px" }}
                />
                <motion.path
                  d="M 430 330 C 450 308, 468 305, 472 320 C 468 305, 450 308, 430 330 Z"
                  fill="#b5a0c8"
                  fillOpacity="0.28"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  style={{ transformOrigin: "430px 330px" }}
                />

                {/* FLOWER 1 – Purple / Community */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{ transformOrigin: "460px 210px" }}
                >
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
                    <ellipse
                      key={a}
                      cx={460 + Math.cos((a * Math.PI) / 180) * 22}
                      cy={210 + Math.sin((a * Math.PI) / 180) * 22}
                      rx="30"
                      ry="10"
                      fill="#7c5cbf"
                      fillOpacity={i % 2 === 0 ? 0.55 : 0.3}
                      transform={`rotate(${a},${460 + Math.cos((a * Math.PI) / 180) * 22},${210 + Math.sin((a * Math.PI) / 180) * 22})`}
                    />
                  ))}
                  <circle
                    cx="460"
                    cy="210"
                    r="20"
                    fill="#7c5cbf"
                    fillOpacity="0.85"
                  />
                  <circle
                    cx="460"
                    cy="210"
                    r="10"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </motion.g>

                {/* FLOWER 2 – Green / Support */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.25,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{ transformOrigin: "270px 280px" }}
                >
                  {[0, 60, 120, 180, 240, 300].map((a, i) => (
                    <ellipse
                      key={a}
                      cx={270 + Math.cos((a * Math.PI) / 180) * 18}
                      cy={280 + Math.sin((a * Math.PI) / 180) * 18}
                      rx="20"
                      ry="10"
                      fill="#5a9e72"
                      fillOpacity={i % 2 === 0 ? 0.5 : 0.28}
                      transform={`rotate(${a + 30},${270 + Math.cos((a * Math.PI) / 180) * 18},${280 + Math.sin((a * Math.PI) / 180) * 18})`}
                    />
                  ))}
                  <circle
                    cx="270"
                    cy="280"
                    r="10"
                    fill="#5a9e72"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="270"
                    cy="280"
                    r="5"
                    fill="white"
                    fillOpacity="0.55"
                  />
                </motion.g>

                {/* FLOWER 3 – Pink / Care */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 1.4,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{ transformOrigin: "570px 200px" }}
                >
                  {[0, 72, 144, 216, 288].map((a, i) => (
                    <ellipse
                      key={a}
                      cx={570 + Math.cos((a * Math.PI) / 180) * 20}
                      cy={200 + Math.sin((a * Math.PI) / 180) * 20}
                      rx="13"
                      ry="6.5"
                      fill="#d4739a"
                      fillOpacity={i % 2 === 0 ? 0.52 : 0.3}
                      transform={`rotate(${a},${570 + Math.cos((a * Math.PI) / 180) * 20},${200 + Math.sin((a * Math.PI) / 180) * 20})`}
                    />
                  ))}
                  <circle
                    cx="570"
                    cy="200"
                    r="7"
                    fill="#d4739a"
                    fillOpacity="0.8"
                  />
                  <circle
                    cx="570"
                    cy="200"
                    r="3"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </motion.g>

                {/* BUD 1 – Orange */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.55,
                    delay: 1.55,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{ transformOrigin: "268px 430px" }}
                >
                  <ellipse
                    cx="268"
                    cy="424"
                    rx="7"
                    ry="11"
                    fill="#d4834a"
                    fillOpacity="0.55"
                  />
                  <ellipse
                    cx="268"
                    cy="423"
                    rx="5"
                    ry="9"
                    fill="#d4834a"
                    fillOpacity="0.3"
                    transform="rotate(-40,266,433)"
                  />
                  <ellipse
                    cx="272"
                    cy="423"
                    rx="5"
                    ry="9"
                    fill="#d4834a"
                    fillOpacity="0.3"
                    transform="rotate(10,272,432)"
                  />
                  <ellipse
                    cx="268"
                    cy="431"
                    rx="4"
                    ry="4"
                    fill="#d4834a"
                    fillOpacity="0.7"
                  />
                </motion.g>

                {/* BUD 2 – Purple */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.65,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  style={{ transformOrigin: "555px 440px" }}
                >
                  <ellipse
                    cx="555"
                    cy="435"
                    rx="5.5"
                    ry="8.5"
                    fill="#7c5cbf"
                    fillOpacity="0.45"
                  />
                  <ellipse
                    cx="553"
                    cy="436"
                    rx="4"
                    ry="7"
                    fill="#7c5cbf"
                    fillOpacity="0.25"
                    transform="rotate(-12,552,443)"
                  />
                  <ellipse
                    cx="558"
                    cy="436"
                    rx="4"
                    ry="7"
                    fill="#7c5cbf"
                    fillOpacity="0.25"
                    transform="rotate(12,558,442)"
                  />
                  <ellipse
                    cx="555"
                    cy="440"
                    rx="2"
                    ry="2"
                    fill="#7c5cbf"
                    fillOpacity="0.65"
                  />
                </motion.g>

                {/* POLLEN DOTS */}
                {[
                  { cx: 448, cy: 235, r: 2.2, c: "#7c5cbf", o: 0.4 },
                  { cx: 480, cy: 195, r: 1.8, c: "#7c5cbf", o: 0.3 },
                  { cx: 255, cy: 298, r: 2, c: "#5a9e72", o: 0.38 },
                  { cx: 285, cy: 265, r: 1.6, c: "#5a9e72", o: 0.28 },
                  { cx: 558, cy: 218, r: 1.8, c: "#d4739a", o: 0.35 },
                  { cx: 585, cy: 185, r: 1.5, c: "#d4739a", o: 0.28 },
                ].map((d, i) => (
                  <motion.circle
                    key={i}
                    cx={d.cx}
                    cy={d.cy}
                    r={d.r}
                    fill={d.c}
                    fillOpacity={d.o}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: d.o }}
                    transition={{ duration: 0.4, delay: 1.7 + i * 0.05 }}
                  />
                ))}

                {/* WRAP TIE */}
                <motion.path
                  d="M 370 650 C 375 640, 406 640, 412 650"
                  stroke="#c8b89a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeOpacity="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                />
                <motion.path
                  d="M 375 648 C 378 655, 385 658, 391 655 C 397 658, 404 655, 407 648"
                  stroke="#c8b89a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                />
              </svg>

              {/* LABELS */}
              {labels.map((label, i) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: [0, -3, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1.8 + i * 0.12 },
                    y: {
                      duration: 5 + i * 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    },
                  }}
                  style={{
                    position: "absolute",
                    borderRadius: 999,
                    border: `1px solid ${label.border}`,
                    background: label.bg,
                    color: label.color,
                    padding: "4px 12px",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                    fontFamily: "system-ui",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(4px)",
                    ...label.style,
                  }}
                >
                  {label.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
