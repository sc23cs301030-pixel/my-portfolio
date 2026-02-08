import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    root.innerHTML = `
<!-- ========== STYLES ========== -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --dark-950: #030305;
  --dark-900: #08080d;
  --dark-850: #0c0c14;
  --dark-800: #0f0f1a;
  --dark-700: #161625;
  --dark-600: #1e1e35;
  --dark-500: #33335a;
  --dark-400: #4d4d80;
  --dark-300: #8888bb;
  --dark-200: #b0b0dd;
  --dark-100: #d4d4ee;
  --accent: #a855f7;
  --accent-light: #c084fc;
  --accent-dark: #7c3aed;
  --neon-blue: #3b82f6;
  --neon-cyan: #06b6d4;
  --neon-pink: #ec4899;
  --neon-orange: #f97316;
  --neon-red: #ef4444;
  --green: #22c55e;
  --gold: #fbbf24;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Outfit', 'Inter', system-ui, sans-serif;
  background: var(--dark-950);
  color: var(--dark-100);
  overflow-x: hidden;
  line-height: 1.6;
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--dark-900); }
::-webkit-scrollbar-thumb { background: var(--accent-dark); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

a { text-decoration: none; color: inherit; }
button { cursor: pointer; border: none; font-family: inherit; }
input, select, textarea { font-family: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }

.container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

.gradient-text {
  background: linear-gradient(135deg, var(--accent), var(--neon-blue), var(--neon-cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-warm {
  background: linear-gradient(135deg, var(--neon-orange), var(--neon-pink), var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-fire {
  background: linear-gradient(135deg, var(--neon-red), var(--neon-orange), var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-btn {
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  color: #fff;
  border: none;
  border-radius: 100px;
  font-weight: 700;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  position: relative;
  overflow: hidden;
}
.gradient-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-dark), var(--neon-blue));
  opacity: 0;
  transition: opacity 0.3s;
}
.gradient-btn:hover::before { opacity: 1; }
.gradient-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 50px rgba(168,85,247,0.35);
}
.gradient-btn span { position: relative; z-index: 1; }

.section-label {
  color: var(--accent);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.section-label::before {
  content: '';
  width: 30px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
}
.section-title {
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 900;
  color: #fff;
  margin-top: 14px;
  margin-bottom: 18px;
  letter-spacing: -0.03em;
  line-height: 1.05;
}
.section-desc {
  color: var(--dark-300);
  font-size: 1.1rem;
  max-width: 580px;
  line-height: 1.7;
}

/* ========== ANIMATIONS ========== */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(60px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-60px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes ping {
  75%, 100% { transform: scale(2); opacity: 0; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0) translateX(-50%); }
  50% { transform: translateY(-12px) translateX(-50%); }
}
@keyframes rotate-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes text-shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes border-flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink-cursor {
  50% { border-color: transparent; }
}
@keyframes particle-float {
  0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(50px) rotate(720deg); opacity: 0; }
}

.reveal-item {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-item.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ========== PARTICLES ========== */
.particles-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0;
}

/* ========== NAVBAR ========== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 24px;
}
.navbar.scrolled {
  background: rgba(8, 8, 13, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(168,85,247,0.08);
  box-shadow: 0 10px 50px rgba(0,0,0,0.6);
}
.navbar-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1.4rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.02em;
  transition: all 0.3s;
}
.nav-logo:hover { transform: scale(1.02); }
.nav-logo-icon {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 20px rgba(168,85,247,0.25);
  transition: all 0.4s;
}
.nav-logo:hover .nav-logo-icon {
  box-shadow: 0 4px 30px rgba(168,85,247,0.5);
  transform: rotate(5deg);
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
}
.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--dark-200);
  transition: all 0.3s;
  position: relative;
  padding: 4px 0;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--neon-blue));
  transition: all 0.3s;
  transform: translateX(-50%);
  border-radius: 2px;
}
.nav-links a:hover { color: #fff; }
.nav-links a:hover::after { width: 100%; }
.nav-hire-btn {
  padding: 11px 28px;
  font-size: 14px;
}
.nav-hire-btn::after { display: none; }
.nav-mobile-toggle {
  display: none;
  background: none;
  color: #fff;
  font-size: 28px;
  padding: 8px;
  transition: transform 0.3s;
}
.nav-mobile-toggle:hover { transform: rotate(90deg); }
.nav-mobile-menu {
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(8,8,13,0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(168,85,247,0.1);
  padding: 16px 20px;
}
.nav-mobile-menu.open { display: block; }
.nav-mobile-menu a {
  display: block;
  padding: 14px 20px;
  color: var(--dark-200);
  font-weight: 500;
  border-radius: 14px;
  transition: all 0.3s;
  font-size: 15px;
}
.nav-mobile-menu a:hover {
  background: rgba(168,85,247,0.08);
  color: #fff;
  padding-left: 28px;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-mobile-toggle { display: block; }
}

/* ========== HERO ========== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 120px 24px 100px;
}
.hero-bg-video {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-bg-video img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.12;
  filter: saturate(0.5);
}
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(3,3,5,0.6) 0%, var(--dark-950) 85%);
  z-index: 1;
}
.hero-grid {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    linear-gradient(rgba(168,85,247,0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168,85,247,0.2) 1px, transparent 1px);
  background-size: 80px 80px;
  z-index: 2;
}
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(140px);
  pointer-events: none;
  z-index: 2;
}
.hero-orb-1 {
  width: 600px; height: 600px;
  top: 10%; left: 10%;
  background: rgba(168,85,247,0.1);
  animation: glow-pulse 5s ease-in-out infinite;
}
.hero-orb-2 {
  width: 500px; height: 500px;
  bottom: 10%; right: 10%;
  background: rgba(59,130,246,0.08);
  animation: glow-pulse 6s ease-in-out infinite 1.5s;
}
.hero-orb-3 {
  width: 350px; height: 350px;
  top: 45%; left: 45%;
  transform: translate(-50%, -50%);
  background: rgba(236,72,153,0.05);
  animation: glow-pulse 7s ease-in-out infinite 3s;
}
.hero-scanline {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.02;
  pointer-events: none;
  z-index: 3;
}
.hero-scanline-bar {
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, transparent, rgba(168,85,247,0.4), transparent);
  animation: scanline 7s linear infinite;
}
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 950px;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px;
  border-radius: 100px;
  background: rgba(15,15,26,0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168,85,247,0.15);
  margin-bottom: 36px;
  animation: slide-up 0.8s ease-out forwards;
}
.hero-badge-dot {
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 12px var(--green);
  animation: glow-pulse 2s ease-in-out infinite;
}
.hero-badge span {
  color: var(--dark-200);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
}
.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  color: #fff;
  line-height: 0.92;
  letter-spacing: -0.04em;
  margin-bottom: 28px;
  animation: slide-up 0.8s ease-out forwards;
  animation-delay: 0.12s;
  opacity: 0;
}
.hero-title .name-highlight {
  display: inline-block;
  position: relative;
}
.hero-title .name-highlight::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, var(--accent), var(--neon-blue));
  border-radius: 4px;
  opacity: 0.4;
}
.hero-subtitle {
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: var(--dark-300);
  max-width: 680px;
  margin: 0 auto 52px;
  line-height: 1.8;
  animation: slide-up 0.8s ease-out forwards;
  animation-delay: 0.24s;
  opacity: 0;
}
.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  animation: slide-up 0.8s ease-out forwards;
  animation-delay: 0.36s;
  opacity: 0;
}
.hero-btn-primary {
  padding: 18px 40px;
  font-size: 1.05rem;
}
.hero-btn-primary .btn-icon {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.4s;
}
.hero-btn-primary:hover .btn-icon { transform: scale(1.2) rotate(15deg); }
.hero-btn-secondary {
  padding: 18px 40px;
  font-size: 1.05rem;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.08);
  color: #fff;
  font-weight: 600;
  background: rgba(15,15,26,0.6);
  backdrop-filter: blur(12px);
  transition: all 0.4s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.hero-btn-secondary:hover {
  border-color: rgba(168,85,247,0.4);
  background: rgba(168,85,247,0.08);
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.3);
}
.hero-btn-ig {
  padding: 18px 40px;
  font-size: 1.05rem;
  border-radius: 100px;
  border: none;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  transition: all 0.4s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.hero-btn-ig:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(253,29,29,0.3);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 700px;
  margin: 80px auto 0;
  animation: slide-up 0.8s ease-out forwards;
  animation-delay: 0.48s;
  opacity: 0;
}
@media (max-width: 600px) {
  .hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
}
.hero-stat {
  text-align: center;
  padding: 20px 8px;
  border-radius: 16px;
  background: rgba(15,15,26,0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.4s;
}
.hero-stat:hover {
  border-color: rgba(168,85,247,0.2);
  background: rgba(168,85,247,0.05);
  transform: translateY(-4px);
}
.hero-stat-number {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 900;
  color: #fff;
  line-height: 1;
}
.hero-stat-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--dark-400);
  font-weight: 600;
  margin-top: 8px;
}

.hero-scroll {
  position: absolute;
  bottom: 40px;
  left: 50%;
  color: var(--dark-500);
  font-size: 32px;
  animation: bounce 2.5s ease-in-out infinite;
  transition: color 0.3s;
  z-index: 10;
}
.hero-scroll:hover { color: var(--accent); }

/* ========== SHOWREEL ========== */
.showreel {
  padding: 140px 24px;
  position: relative;
  overflow: hidden;
}
.showreel-glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(168,85,247,0.06), transparent 70%);
  pointer-events: none;
}
.showreel-header {
  text-align: center;
  margin-bottom: 64px;
  position: relative;
  z-index: 2;
}
.showreel-video-wrap {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 50px 100px rgba(0,0,0,0.6);
  z-index: 2;
}
.showreel-video {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.showreel-video img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  opacity: 0.65;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}
.showreel-video:hover img {
  opacity: 0.8;
  transform: scale(1.04);
}
.showreel-video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--dark-950), rgba(3,3,5,0.3) 40%, transparent);
}
.showreel-video-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(3,3,5,0.6));
}
.showreel-play-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}
.showreel-play-ring-outer {
  position: absolute;
  width: 140px; height: 140px;
  border-radius: 50%;
  border: 1px solid rgba(168,85,247,0.15);
  animation: glow-pulse 3s ease-in-out infinite;
}
.showreel-play-ring {
  position: absolute;
  width: 120px; height: 120px;
  border-radius: 50%;
  background: rgba(168,85,247,0.15);
  animation: ping 2.5s cubic-bezier(0,0,0.2,1) infinite;
}
.showreel-play-btn {
  width: 100px; height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  color: #fff;
  transition: all 0.4s;
  box-shadow: 0 20px 60px rgba(168,85,247,0.4);
  position: relative;
  z-index: 2;
}
.showreel-video:hover .showreel-play-btn {
  transform: scale(1.12);
  box-shadow: 0 24px 80px rgba(168,85,247,0.5);
}
.showreel-info {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 28px 36px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 4;
}
.showreel-info-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: -0.02em;
}
.showreel-info-sub {
  color: var(--dark-300);
  font-size: 14px;
  margin-top: 6px;
}
.showreel-sound-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 100px;
  background: rgba(15,15,26,0.8);
  backdrop-filter: blur(12px);
  color: var(--dark-200);
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(255,255,255,0.05);
}
.showreel-film-strip {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), var(--neon-blue), var(--neon-cyan), var(--neon-pink));
  background-size: 300% 100%;
  animation: border-flow 4s linear infinite;
  z-index: 5;
}

/* Marquee */
.marquee-section {
  margin-top: 80px;
  position: relative;
  z-index: 2;
}
.marquee-label {
  text-align: center;
  color: var(--dark-500);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.marquee-wrap {
  position: relative;
  overflow: hidden;
  padding: 24px 0;
}
.marquee-fade-left, .marquee-fade-right {
  position: absolute;
  top: 0; bottom: 0;
  width: 150px;
  z-index: 3;
  pointer-events: none;
}
.marquee-fade-left {
  left: 0;
  background: linear-gradient(to right, var(--dark-950), transparent);
}
.marquee-fade-right {
  right: 0;
  background: linear-gradient(to left, var(--dark-950), transparent);
}
.marquee-track {
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: marquee 35s linear infinite;
}
.marquee-item {
  margin: 0 48px;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: var(--dark-600);
  transition: color 0.3s;
  cursor: default;
  display: flex;
  align-items: center;
  gap: 12px;
}
.marquee-item:hover { color: var(--dark-300); }
.marquee-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.3;
}

/* ========== PORTFOLIO ========== */
.portfolio {
  padding: 140px 24px;
  position: relative;
}
.portfolio-glow {
  position: absolute;
  bottom: -100px; right: -100px;
  width: 700px; height: 500px;
  background: radial-gradient(ellipse, rgba(59,130,246,0.05), transparent 70%);
  pointer-events: none;
}
.portfolio-header {
  text-align: center;
  margin-bottom: 52px;
  position: relative;
  z-index: 2;
}
/* Portfolio filters removed - showing all reels */
/* Old portfolio card/modal CSS removed - using Instagram embeds now */

/* ========== PORTFOLIO REELS EMBEDS ========== */
.portfolio-ig-note {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 28px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(131,58,180,0.08), rgba(253,29,29,0.06), rgba(252,176,69,0.04));
  border: 1px solid rgba(253,29,29,0.12);
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.ig-note-icon {
  font-size: 32px;
  flex-shrink: 0;
}
.ig-note-text {
  color: var(--dark-200);
  font-size: 14px;
  line-height: 1.6;
}
.ig-note-text a {
  color: var(--accent-light);
  font-weight: 700;
  transition: color 0.3s;
}
.ig-note-text a:hover { color: #fff; }

.portfolio-reels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
  position: relative;
  z-index: 2;
}
@media (max-width: 700px) {
  .portfolio-reels-grid { grid-template-columns: 1fr; }
}

.reel-embed-card {
  border-radius: 20px;
  overflow: hidden;
  background: var(--dark-800);
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}
.reel-embed-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
  z-index: 1;
}
.reel-embed-card:hover::before { opacity: 0.7; }
.reel-embed-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 60px rgba(0,0,0,0.4);
}

.reel-embed-wrapper {
  position: relative;
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-900);
}
.reel-embed-wrapper iframe {
  width: 100%;
  min-height: 500px;
  border: none;
}
.reel-embed-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 0;
}
.reel-embed-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--dark-700);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: rotate-slow 1s linear infinite;
}
.reel-embed-loading-text {
  color: var(--dark-400);
  font-size: 13px;
  font-weight: 600;
}

.reel-embed-footer {
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.reel-embed-label {
  display: flex;
  align-items: center;
  gap: 10px;
}
.reel-embed-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  font-weight: 800;
}
.reel-embed-name {
  font-weight: 700;
  color: #fff;
  font-size: 14px;
}
.reel-embed-handle {
  color: var(--dark-400);
  font-size: 12px;
  margin-top: 2px;
}
.reel-embed-view-btn {
  padding: 8px 20px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  color: #fff;
  border: none;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.reel-embed-view-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(253,29,29,0.25);
}

.portfolio-cta {
  text-align: center;
  margin-top: 56px;
  position: relative;
  z-index: 2;
}

/* ========== SERVICES ========== */
.services {
  padding: 140px 24px;
  position: relative;
  overflow: hidden;
}
.services-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8,8,13,0.3), var(--dark-950), rgba(8,8,13,0.3));
}
.services-glow {
  position: absolute;
  top: 40%; left: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(168,85,247,0.06), transparent 70%);
  pointer-events: none;
}
.services-header {
  text-align: center;
  margin-bottom: 64px;
  position: relative;
  z-index: 2;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 20px;
  position: relative;
  z-index: 2;
}
.service-card {
  padding: 32px;
  border-radius: 20px;
  background: rgba(12,12,20,0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue), var(--neon-cyan));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}
.service-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(168,85,247,0.06), transparent 50%);
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
.service-card:hover::before { opacity: 0.7; }
.service-card:hover::after { opacity: 1; }
.service-card:hover {
  transform: translateY(-8px);
  background: rgba(20,20,35,0.6);
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}
.service-icon {
  width: 60px; height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 22px;
  transition: all 0.4s;
}
.service-card:hover .service-icon {
  transform: scale(1.15) rotate(5deg);
  box-shadow: 0 12px 30px rgba(0,0,0,0.4);
}
.service-card h3 {
  font-size: 1.15rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 12px;
  transition: color 0.3s;
}
.service-card:hover h3 { color: var(--accent-light); }
.service-card p {
  color: var(--dark-400);
  font-size: 14px;
  line-height: 1.7;
}

.tools-bar {
  margin-top: 64px;
  padding: 36px;
  border-radius: 20px;
  background: rgba(12,12,20,0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.04);
  position: relative;
  z-index: 2;
}
.tools-bar-label {
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--dark-400);
  margin-bottom: 22px;
}
.tools-bar-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.tools-bar-item {
  color: var(--dark-300);
  font-size: 13px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 12px;
  transition: all 0.3s;
  cursor: default;
  border: 1px solid transparent;
}
.tools-bar-item:hover {
  color: #fff;
  background: rgba(168,85,247,0.08);
  border-color: rgba(168,85,247,0.15);
}

/* ========== REVIEWS ========== */
.reviews {
  padding: 140px 24px;
  position: relative;
  overflow: hidden;
}
.reviews-glow {
  position: absolute;
  top: 40%; right: -100px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%);
  pointer-events: none;
}
.reviews-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 64px;
  position: relative;
  z-index: 2;
}
.reviews-nav {
  display: flex;
  gap: 12px;
}
.reviews-nav-btn {
  width: 52px; height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: all 0.4s;
}
.reviews-nav-prev {
  background: rgba(12,12,20,0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.05);
  color: var(--dark-300);
}
.reviews-nav-prev:hover {
  color: #fff;
  border-color: rgba(168,85,247,0.3);
  background: rgba(168,85,247,0.1);
}
.reviews-nav-next {
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  color: #fff;
}
.reviews-nav-next:hover {
  box-shadow: 0 10px 30px rgba(168,85,247,0.35);
  transform: scale(1.05);
}
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;
  position: relative;
  z-index: 2;
}
@media (max-width: 800px) {
  .reviews-grid { grid-template-columns: 1fr; }
}
.review-card {
  padding: 36px;
  border-radius: 20px;
  background: rgba(12,12,20,0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.5s;
  position: relative;
  overflow: hidden;
}
.review-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue), var(--neon-cyan));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}
.review-card:hover::before { opacity: 0.5; }
.review-card:hover {
  transform: translateY(-5px);
  background: rgba(18,18,30,0.5);
}
.review-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
}
.review-quote {
  font-size: 40px;
  line-height: 1;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 0.4;
}
.review-stars {
  display: flex;
  gap: 3px;
}
.review-star { color: #fbbf24; font-size: 15px; }
.review-text {
  color: var(--dark-200);
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 30px;
  font-style: italic;
}
.review-author {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.review-avatar {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  flex-shrink: 0;
}
.review-author-name {
  font-weight: 800;
  color: #fff;
  font-size: 15px;
}
.review-author-role {
  color: var(--dark-400);
  font-size: 13px;
  margin-top: 3px;
}
.review-project-tag {
  display: inline-block;
  margin-top: 14px;
  padding: 7px 16px;
  border-radius: 12px;
  background: rgba(15,15,26,0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(168,85,247,0.1);
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-light);
}
.reviews-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 48px;
  position: relative;
  z-index: 2;
}
.reviews-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--dark-600);
  border: none;
  transition: all 0.4s;
  cursor: pointer;
}
.reviews-dot:hover { background: var(--dark-400); }
.reviews-dot.active {
  width: 36px;
  border-radius: 10px;
  background: linear-gradient(90deg, var(--accent), var(--neon-blue));
}

/* ========== CONTACT ========== */
.contact {
  padding: 140px 24px;
  position: relative;
  overflow: hidden;
}
.contact-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--dark-950), rgba(8,8,13,0.5), var(--dark-950));
}
.contact-glow-1 {
  position: absolute;
  top: 0; left: 30%;
  width: 700px; height: 400px;
  background: radial-gradient(ellipse, rgba(168,85,247,0.05), transparent 70%);
  pointer-events: none;
}
.contact-glow-2 {
  position: absolute;
  bottom: 0; right: 20%;
  width: 500px; height: 300px;
  background: radial-gradient(ellipse, rgba(59,130,246,0.04), transparent 70%);
  pointer-events: none;
}
.contact-header {
  text-align: center;
  margin-bottom: 64px;
  position: relative;
  z-index: 2;
}
.contact-header .section-desc { margin: 0 auto; }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  position: relative;
  z-index: 2;
}
@media (max-width: 968px) {
  .contact-grid { grid-template-columns: 1fr; }
}
.contact-info { display: flex; flex-direction: column; gap: 20px; }
.contact-info-card {
  padding: 26px;
  border-radius: 20px;
  background: rgba(12,12,20,0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.04);
  display: flex;
  align-items: flex-start;
  gap: 18px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}
.contact-info-card::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}
.contact-info-card:hover::before { opacity: 0.5; }
.contact-info-card:hover { transform: translateX(6px); }
.contact-icon-wrap {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.contact-info-label { color: var(--dark-400); font-size: 13px; margin-bottom: 4px; font-weight: 500; }
.contact-info-value { color: #fff; font-weight: 700; font-size: 15px; }
.contact-info-sub { color: var(--dark-400); font-size: 13px; margin-top: 3px; }
.contact-socials {
  padding: 26px;
  border-radius: 20px;
  background: rgba(12,12,20,0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.04);
}
.contact-socials-label {
  color: var(--dark-400);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.contact-socials-list {
  display: flex;
  gap: 10px;
}
.contact-social-btn {
  width: 52px; height: 52px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: var(--dark-400);
  transition: all 0.4s;
  border: 1px solid rgba(255,255,255,0.04);
  background: rgba(15,15,26,0.6);
}
.contact-social-btn:hover {
  color: #fff;
  transform: translateY(-4px);
  border-color: rgba(168,85,247,0.3);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.contact-social-btn.ig-btn {
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  color: #fff;
  border: none;
}
.contact-social-btn.ig-btn:hover {
  box-shadow: 0 8px 30px rgba(253,29,29,0.3);
}

/* Contact Form */
.contact-form-wrap {
  padding: 44px;
  border-radius: 28px;
  background: rgba(12,12,20,0.8);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.04);
  position: relative;
  overflow: hidden;
}
.contact-form-wrap::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue), var(--neon-cyan));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0.2;
  pointer-events: none;
}
.form-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 8px;
}
.form-subtitle {
  color: var(--dark-400);
  font-size: 14px;
  margin-bottom: 28px;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
}
.form-group { margin-bottom: 20px; }
.form-group:last-of-type { margin-bottom: 0; }
.form-label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--dark-200);
  margin-bottom: 8px;
}
.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 15px 20px;
  border-radius: 16px;
  background: rgba(8,8,13,0.8);
  border: 1px solid rgba(255,255,255,0.06);
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
}
.form-input::placeholder, .form-textarea::placeholder {
  color: var(--dark-500);
}
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(168,85,247,0.1);
}
.form-select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238888bb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 18px center;
  padding-right: 44px;
}
.form-textarea { resize: none; min-height: 110px; }
.form-submit {
  width: 100%;
  padding: 17px;
  font-size: 1.05rem;
  margin-top: 10px;
}
.form-note {
  text-align: center;
  color: var(--dark-500);
  font-size: 13px;
  margin-top: 14px;
}

.form-success {
  text-align: center;
  padding: 60px 20px;
}
.form-success-icon {
  width: 90px; height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green), var(--neon-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin: 0 auto 28px;
  box-shadow: 0 20px 50px rgba(34,197,94,0.25);
}
.form-success h3 {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 900;
  margin-bottom: 14px;
}
.form-success p {
  color: var(--dark-300);
  margin-bottom: 28px;
  line-height: 1.7;
}
.form-success-btn {
  padding: 14px 36px;
  font-size: 14px;
}

/* ========== FOOTER ========== */
.footer {
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.04);
}
.footer-glow {
  position: absolute;
  bottom: -100px; left: 50%;
  transform: translateX(-50%);
  width: 700px; height: 250px;
  background: radial-gradient(ellipse, rgba(168,85,247,0.04), transparent 70%);
  pointer-events: none;
}
.footer-cta {
  padding: 100px 24px;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  position: relative;
  z-index: 2;
}
.footer-cta h2 {
  font-size: clamp(1.8rem, 4.5vw, 3.2rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 18px;
  letter-spacing: -0.03em;
}
.footer-cta p {
  color: var(--dark-300);
  font-size: 1.15rem;
  margin-bottom: 36px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}
.footer-cta-btn {
  padding: 18px 44px;
  font-size: 1.1rem;
}
.footer-main {
  padding: 70px 24px;
  position: relative;
  z-index: 2;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 2fr;
  gap: 40px;
}
@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 500px) {
  .footer-grid { grid-template-columns: 1fr; }
}
.footer-brand-name {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 1.4rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 18px;
}
.footer-brand-icon {
  width: 44px; height: 44px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.footer-brand-desc {
  color: var(--dark-400);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 20px;
}
.footer-ig-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(131,58,180,0.15), rgba(253,29,29,0.1));
  border: 1px solid rgba(253,29,29,0.15);
  color: var(--dark-200);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
}
.footer-ig-badge:hover {
  background: linear-gradient(135deg, rgba(131,58,180,0.25), rgba(253,29,29,0.2));
  color: #fff;
  transform: translateY(-2px);
}
.footer-col-title {
  font-weight: 800;
  color: #fff;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.footer-links li { margin-bottom: 14px; }
.footer-links a {
  color: var(--dark-400);
  font-size: 14px;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.footer-links a:hover {
  color: var(--accent-light);
  padding-left: 6px;
}
.footer-newsletter-desc {
  color: var(--dark-400);
  font-size: 14px;
  margin-bottom: 18px;
  line-height: 1.7;
}
.footer-newsletter-form {
  display: flex;
  gap: 8px;
}
.footer-newsletter-input {
  flex: 1;
  padding: 12px 18px;
  border-radius: 14px;
  background: rgba(8,8,13,0.8);
  border: 1px solid rgba(255,255,255,0.06);
  color: #fff;
  font-size: 14px;
  outline: none;
  transition: all 0.3s;
}
.footer-newsletter-input::placeholder { color: var(--dark-500); }
.footer-newsletter-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(168,85,247,0.1);
}
.footer-newsletter-btn {
  padding: 12px 24px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--neon-blue));
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.3s;
}
.footer-newsletter-btn:hover {
  box-shadow: 0 8px 24px rgba(168,85,247,0.25);
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.04);
  padding: 28px 24px;
  position: relative;
  z-index: 2;
}
.footer-bottom-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.footer-copyright {
  color: var(--dark-500);
  font-size: 13px;
}
.footer-made-with {
  color: var(--dark-500);
  font-size: 13px;
}
.footer-made-with .heart { color: var(--neon-pink); margin: 0 4px; }

/* ========== WHATSAPP ========== */
.whatsapp-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--green);
  color: #fff;
  padding: 16px 24px;
  border-radius: 100px;
  font-weight: 800;
  font-size: 14px;
  box-shadow: 0 10px 40px rgba(34,197,94,0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-decoration: none;
}
.whatsapp-btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 18px 60px rgba(34,197,94,0.45);
  background: #16a34a;
}
.whatsapp-ping {
  position: absolute;
  inset: 0;
  border-radius: 100px;
  background: rgba(34,197,94,0.3);
  animation: ping 2s cubic-bezier(0,0,0.2,1) infinite;
  pointer-events: none;
}
.whatsapp-icon-wrap {
  width: 30px; height: 30px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
}
.whatsapp-tooltip {
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 14px;
  padding: 10px 20px;
  background: var(--dark-800);
  border: 1px solid rgba(168,85,247,0.15);
  border-radius: 14px;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transition: all 0.3s;
  pointer-events: none;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}
.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 22px;
  margin-top: -1px;
  width: 10px; height: 10px;
  background: var(--dark-800);
  border-right: 1px solid rgba(168,85,247,0.15);
  border-bottom: 1px solid rgba(168,85,247,0.15);
  transform: rotate(45deg);
}
.whatsapp-btn:hover .whatsapp-tooltip { opacity: 1; transform: translateY(-4px); }

@media (max-width: 640px) {
  .whatsapp-text { display: none; }
  .whatsapp-btn { padding: 16px; }
}

/* ========== INSTAGRAM EMBED BADGE ========== */
.ig-floating-badge {
  position: fixed;
  bottom: 28px;
  left: 28px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045);
  color: #fff;
  padding: 14px 22px;
  border-radius: 100px;
  font-weight: 800;
  font-size: 14px;
  text-decoration: none;
  box-shadow: 0 10px 40px rgba(253,29,29,0.3);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.ig-floating-badge:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 18px 60px rgba(253,29,29,0.45);
}
.ig-floating-badge svg {
  width: 22px;
  height: 22px;
  fill: #fff;
}
@media (max-width: 640px) {
  .ig-floating-badge { padding: 14px; }
  .ig-floating-text { display: none; }
  .ig-floating-badge { left: 16px; bottom: 28px; }
  .whatsapp-btn { right: 16px; }
}
</style>

<!-- ========== NAVBAR ========== -->
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="#home" class="nav-logo">
      <div class="nav-logo-icon">✂️</div>
      <span>KESHV<span class="gradient-text">CUTS</span></span>
    </a>
    <div class="nav-links">
      <a href="#home">Home</a>
      <a href="#showreel">Showreel</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#services">Services</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>
      <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="hero-btn-ig" style="padding:10px 24px;font-size:13px;">
        <span>📸</span> <span>Follow</span>
      </a>
    </div>
    <button class="nav-mobile-toggle" id="navToggle" aria-label="Menu">☰</button>
  </div>
  <div class="nav-mobile-menu" id="navMobile">
    <a href="#home">Home</a>
    <a href="#showreel">Showreel</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#services">Services</a>
    <a href="#reviews">Reviews</a>
    <a href="#contact">Contact</a>
    <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style="display:block;text-align:center;margin-top:12px;padding:14px;border-radius:100px;background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);color:#fff;font-weight:700;">📸 Follow @keshv_cuts</a>
  </div>
</nav>

<!-- ========== HERO ========== -->
<section class="hero" id="home">
  <div class="hero-bg-video">
    <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80" alt="bg" />
  </div>
  <div class="hero-bg-overlay"></div>
  <div class="hero-grid"></div>
  <div class="hero-orb hero-orb-1"></div>
  <div class="hero-orb hero-orb-2"></div>
  <div class="hero-orb hero-orb-3"></div>
  <div class="hero-scanline"><div class="hero-scanline-bar"></div></div>

  <div class="hero-content">
    <div class="hero-badge">
      <div class="hero-badge-dot"></div>
      <span>Available for Projects — 2025</span>
    </div>
    <h1 class="hero-title">
      I'm <span class="name-highlight gradient-text-fire">Keshv</span><br>
      <span class="gradient-text">Cinematic Editor</span>
    </h1>
    <p class="hero-subtitle">
      Professional video editor & content creator crafting scroll-stopping reels, cinematic brand films, and viral content. Let's bring your vision to life.
    </p>
    <div class="hero-buttons">
      <a href="#showreel" class="gradient-btn hero-btn-primary">
        <span class="btn-icon">▶</span>
        <span>Watch Showreel</span>
      </a>
      <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="hero-btn-ig">
        📸 Follow @keshv_cuts
      </a>
      <a href="#contact" class="hero-btn-secondary">
        💼 Hire Me
      </a>
    </div>
    <div class="hero-stats">
      <div class="hero-stat">
        <div class="hero-stat-number gradient-text">200+</div>
        <div class="hero-stat-label">Projects</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number gradient-text-warm">50K+</div>
        <div class="hero-stat-label">IG Reach</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number gradient-text">80+</div>
        <div class="hero-stat-label">Happy Clients</div>
      </div>
      <div class="hero-stat">
        <div class="hero-stat-number gradient-text-fire">100%</div>
        <div class="hero-stat-label">Satisfaction</div>
      </div>
    </div>
  </div>

  <a href="#showreel" class="hero-scroll">⌄</a>
</section>

<!-- ========== SHOWREEL ========== -->
<section class="showreel" id="showreel">
  <div class="showreel-glow"></div>
  <div class="container">
    <div class="showreel-header reveal-item">
      <span class="section-label">Featured Work</span>
      <h2 class="section-title">The <span class="gradient-text">Showreel</span></h2>
      <p class="section-desc" style="margin:0 auto;">A curated montage of my finest cinematic edits — from viral reels to premium brand content.</p>
    </div>

    <div class="showreel-video-wrap reveal-item">
      <div class="showreel-video" id="showreelVideo">
        <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=80" alt="Keshv Cuts Showreel" />
        <div class="showreel-video-overlay"></div>
        <div class="showreel-video-vignette"></div>
        <div class="showreel-play-wrap">
          <div class="showreel-play-ring-outer"></div>
          <div class="showreel-play-ring"></div>
          <div class="showreel-play-btn">▶</div>
        </div>
        <div class="showreel-info">
          <div>
            <div class="showreel-info-title">Keshv Cuts — 2025 Showreel</div>
            <div class="showreel-info-sub">Cinematic Reels • Brand Films • Music Videos • 3:42</div>
          </div>
          <div class="showreel-sound-badge">🔊 Sound On</div>
        </div>
        <div class="showreel-film-strip"></div>
      </div>
    </div>

    <div class="marquee-section reveal-item">
      <div class="marquee-label">Trusted By Brands & Creators</div>
      <div class="marquee-wrap">
        <div class="marquee-fade-left"></div>
        <div class="marquee-fade-right"></div>
        <div class="marquee-track">
          <span class="marquee-item"><span class="marquee-dot"></span>FASHION</span>
          <span class="marquee-item"><span class="marquee-dot"></span>MUSIC</span>
          <span class="marquee-item"><span class="marquee-dot"></span>BRANDS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>STARTUPS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>INFLUENCERS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>YOUTUBERS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>ARTISTS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>PODCASTS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>FASHION</span>
          <span class="marquee-item"><span class="marquee-dot"></span>MUSIC</span>
          <span class="marquee-item"><span class="marquee-dot"></span>BRANDS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>STARTUPS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>INFLUENCERS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>YOUTUBERS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>ARTISTS</span>
          <span class="marquee-item"><span class="marquee-dot"></span>PODCASTS</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========== PORTFOLIO ========== -->
<section class="portfolio" id="portfolio">
  <div class="portfolio-glow"></div>
  <div class="container">
    <div class="portfolio-header reveal-item">
      <span class="section-label">My Work</span>
      <h2 class="section-title">Reels <span class="gradient-text">Portfolio</span></h2>
      <p class="section-desc" style="margin:0 auto;">Watch the latest reels directly from <strong style="color:#fff;">@keshv_cuts</strong> Instagram — each crafted with cinematic precision & creative vision.</p>
    </div>

    <div class="portfolio-ig-note reveal-item">
      <div class="ig-note-icon">📸</div>
      <div>
        <p class="ig-note-text">These are live Instagram embeds from <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">@keshv_cuts</a>. Watch, like & follow directly!</p>
      </div>
    </div>

    <div class="portfolio-reels-grid reveal-item" id="reelsGrid">
      <!-- Reels will be rendered by JS -->
    </div>

    <div class="portfolio-cta reveal-item">
      <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="hero-btn-ig" style="padding:18px 44px;font-size:1.05rem;">
        📸 See All Reels on Instagram
      </a>
    </div>
  </div>
</section>

<!-- ========== SERVICES ========== -->
<section class="services" id="services">
  <div class="services-bg"></div>
  <div class="services-glow"></div>
  <div class="container">
    <div class="services-header reveal-item">
      <span class="section-label">What I Offer</span>
      <h2 class="section-title">Editing <span class="gradient-text">Services</span></h2>
      <p class="section-desc" style="margin:0 auto;">End-to-end post-production services to transform your raw footage into scroll-stopping content.</p>
    </div>

    <div class="services-grid" id="servicesGrid"></div>

    <div class="tools-bar reveal-item">
      <div class="tools-bar-label">Software & Tools I Use</div>
      <div class="tools-bar-list">
        <span class="tools-bar-item">Premiere Pro</span>
        <span class="tools-bar-item">After Effects</span>
        <span class="tools-bar-item">DaVinci Resolve</span>
        <span class="tools-bar-item">Final Cut Pro</span>
        <span class="tools-bar-item">Cinema 4D</span>
        <span class="tools-bar-item">Photoshop</span>
        <span class="tools-bar-item">Audition</span>
        <span class="tools-bar-item">CapCut Pro</span>
      </div>
    </div>
  </div>
</section>

<!-- ========== REVIEWS ========== -->
<section class="reviews" id="reviews">
  <div class="reviews-glow"></div>
  <div class="container">
    <div class="reviews-header reveal-item">
      <div>
        <span class="section-label">Client Love</span>
        <h2 class="section-title">What They <span class="gradient-text">Say</span></h2>
        <p class="section-desc">Real feedback from creators and brands who trusted <strong style="color:#fff;">Keshv Cuts</strong>.</p>
      </div>
      <div class="reviews-nav">
        <button class="reviews-nav-btn reviews-nav-prev" id="reviewsPrev">‹</button>
        <button class="reviews-nav-btn reviews-nav-next" id="reviewsNext">›</button>
      </div>
    </div>

    <div class="reviews-grid" id="reviewsGrid"></div>
    <div class="reviews-dots" id="reviewsDots"></div>
  </div>
</section>

<!-- ========== CONTACT ========== -->
<section class="contact" id="contact">
  <div class="contact-bg"></div>
  <div class="contact-glow-1"></div>
  <div class="contact-glow-2"></div>
  <div class="container">
    <div class="contact-header reveal-item">
      <span class="section-label">Let's Work Together</span>
      <h2 class="section-title">Start a <span class="gradient-text">Project</span></h2>
      <p class="section-desc">Got a project in mind? DM me on Instagram or fill out the form below. Let's create something 🔥</p>
    </div>

    <div class="contact-grid reveal-item">
      <div class="contact-info">
        <div class="contact-info-card">
          <div class="contact-icon-wrap" style="background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);">📸</div>
          <div>
            <div class="contact-info-label">Instagram (Primary)</div>
            <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="contact-info-value" style="color:var(--accent-light);">@keshv_cuts</a>
            <div class="contact-info-sub">DM for quickest response</div>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="contact-icon-wrap" style="background:linear-gradient(135deg,var(--accent),var(--neon-blue));">📧</div>
          <div>
            <div class="contact-info-label">Email</div>
            <div class="contact-info-value">keshvcuts@gmail.com</div>
          </div>
        </div>
        <div class="contact-info-card">
          <div class="contact-icon-wrap" style="background:linear-gradient(135deg,var(--neon-cyan),var(--green));">⏰</div>
          <div>
            <div class="contact-info-label">Response Time</div>
            <div class="contact-info-value">Within 24 hours</div>
            <div class="contact-info-sub">Usually replies within a few hours</div>
          </div>
        </div>
        <div class="contact-socials">
          <div class="contact-socials-label">Connect With Me</div>
          <div class="contact-socials-list">
            <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="contact-social-btn ig-btn" title="Instagram">📸</a>
            <a href="#" class="contact-social-btn" title="YouTube">🎥</a>
            <a href="#" class="contact-social-btn" title="Twitter/X">🐦</a>
            <a href="#" class="contact-social-btn" title="Behance">🎨</a>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap" id="contactFormWrap">
        <form id="contactForm">
          <div class="form-title">📋 Project Brief</div>
          <div class="form-subtitle">Tell me about your project and I'll get back to you ASAP.</div>
          <div class="form-row">
            <div>
              <label class="form-label">Your Name *</label>
              <input type="text" class="form-input" placeholder="Your name" required id="formName" />
            </div>
            <div>
              <label class="form-label">Email / Instagram Handle *</label>
              <input type="text" class="form-input" placeholder="@yourusername or email" required />
            </div>
          </div>
          <div class="form-row">
            <div>
              <label class="form-label">Project Type *</label>
              <select class="form-select" required>
                <option value="">Select type</option>
                <option>Instagram Reel</option>
                <option>YouTube Video</option>
                <option>Music Video</option>
                <option>Commercial / Ad</option>
                <option>Brand Film</option>
                <option>Short Film</option>
                <option>TikTok Content</option>
                <option>Podcast Edit</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label class="form-label">Budget Range</label>
              <select class="form-select">
                <option value="">Select range</option>
                <option>Under ₹5,000</option>
                <option>₹5,000 – ₹15,000</option>
                <option>₹15,000 – ₹30,000</option>
                <option>₹30,000 – ₹50,000</option>
                <option>₹50,000+</option>
                <option>Let's discuss</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Deadline</label>
            <input type="date" class="form-input" />
          </div>
          <div class="form-group">
            <label class="form-label">Project Details *</label>
            <textarea class="form-textarea" placeholder="Tell me about your project — concept, footage length, style references, or any specific requirements. The more detail, the better!" required rows="4"></textarea>
          </div>
          <button type="submit" class="gradient-btn form-submit"><span>✉ Send Project Brief</span></button>
          <p class="form-note">Free consultation • No commitment • Reply within 24h</p>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ========== FOOTER ========== -->
<footer class="footer">
  <div class="footer-glow"></div>
  <div class="container">
    <div class="footer-cta reveal-item">
      <h2>Ready to create something <span class="gradient-text-fire">fire</span>? 🔥</h2>
      <p>Let's turn your raw footage into cinematic magic that stops the scroll.</p>
      <a href="#contact" class="gradient-btn footer-cta-btn"><span>Start a Project ↗</span></a>
    </div>
    <div class="footer-main">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-name">
            <div class="footer-brand-icon">✂️</div>
            KESHV<span class="gradient-text">CUTS</span>
          </div>
          <p class="footer-brand-desc">Cinematic video editing & content creation. Crafting scroll-stopping reels, brand films, and visual stories that captivate.</p>
          <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="footer-ig-badge">
            📸 @keshv_cuts
          </a>
        </div>
        <div>
          <h3 class="footer-col-title">Navigation</h3>
          <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#showreel">Showreel</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-col-title">Services</h3>
          <ul class="footer-links">
            <li><a href="#services">Reel Editing</a></li>
            <li><a href="#services">Color Grading</a></li>
            <li><a href="#services">Motion Graphics</a></li>
            <li><a href="#services">Sound Design</a></li>
            <li><a href="#services">Music Videos</a></li>
            <li><a href="#services">Commercial Ads</a></li>
          </ul>
        </div>
        <div>
          <h3 class="footer-col-title">Stay Updated</h3>
          <p class="footer-newsletter-desc">Follow on Instagram for behind-the-scenes, editing tips, and project updates.</p>
          <form class="footer-newsletter-form" onsubmit="event.preventDefault();alert('Thanks for subscribing! 🎬 Follow @keshv_cuts for more!');">
            <input type="email" class="footer-newsletter-input" placeholder="your@email.com" required />
            <button type="submit" class="footer-newsletter-btn">Join</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-bottom-inner">
      <p class="footer-copyright">© 2025 Keshv Cuts. All rights reserved.</p>
      <p class="footer-made-with">Crafted with <span class="heart">♥</span> by <strong>@keshv_cuts</strong></p>
    </div>
  </div>
</footer>

<!-- ========== INSTAGRAM FLOATING BADGE ========== -->
<a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" class="ig-floating-badge" aria-label="Follow on Instagram">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  <span class="ig-floating-text">@keshv_cuts</span>
</a>

<!-- ========== WHATSAPP BUTTON ========== -->
<a href="https://wa.me/?text=Hey%20Keshv!%20I%20saw%20your%20portfolio%20and%20I'm%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20discuss%20my%20project%3F" target="_blank" rel="noopener noreferrer" class="whatsapp-btn" aria-label="Chat on WhatsApp">
  <span class="whatsapp-ping"></span>
  <span class="whatsapp-icon-wrap">💬</span>
  <span class="whatsapp-text">WhatsApp</span>
  <span class="whatsapp-tooltip">💬 Let's discuss your project!</span>
</a>
`;

    // ========================
    // JAVASCRIPT
    // ========================

    // ---- Data ----
    // Instagram Reels from @keshv_cuts — embed URLs
    const instagramReels = [
      { url: 'https://www.instagram.com/reel/DJnN21oygP8/', title: 'Latest Edit ✨' },
      { url: 'https://www.instagram.com/reel/DJaA2HoSjFY/', title: 'Cinematic Vibes 🎬' },
      { url: 'https://www.instagram.com/reel/DJPFqw4yMK3/', title: 'Trending Reel 🔥' },
      { url: 'https://www.instagram.com/reel/DI_yxN9yT7t/', title: 'Creative Edit ⚡' },
      { url: 'https://www.instagram.com/reel/DIzajSCSvr-/', title: 'Smooth Transitions 💫' },
      { url: 'https://www.instagram.com/reel/DImw2QjShFP/', title: 'Visual Story 🎥' },
      { url: 'https://www.instagram.com/reel/DIcUFtpShJx/', title: 'Beat Sync Edit 🎵' },
      { url: 'https://www.instagram.com/reel/DIRT5CMyJsK/', title: 'Color Grading Magic 🎨' },
      { url: 'https://www.instagram.com/reel/DIGaqjLSMjS/', title: 'Speed Ramp Edit ⚡' },
    ];

    const services = [
      { icon: '🎬', title: 'Video Editing', description: 'Professional editing with seamless cuts, perfect pacing, and narrative flow that keeps viewers hooked till the end.', gradient: 'linear-gradient(135deg, #a855f7, #ec4899)' },
      { icon: '🎨', title: 'Color Grading', description: 'Cinema-quality color grading using DaVinci Resolve to create the exact mood and aesthetic your project needs.', gradient: 'linear-gradient(135deg, #f97316, #ec4899)' },
      { icon: '✨', title: 'VFX & Motion', description: 'Visual effects, motion graphics, and compositing that add cinematic magic and serious production value.', gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
      { icon: '🎵', title: 'Sound Design', description: 'Immersive audio mixing, SFX layers, and music synchronization that elevate your visuals to another level.', gradient: 'linear-gradient(135deg, #06b6d4, #22c55e)' },
      { icon: '⚡', title: 'Reel Editing', description: 'Scroll-stopping short-form content for Instagram, TikTok, and YouTube Shorts with trending transitions and hooks.', gradient: 'linear-gradient(135deg, #facc15, #f97316)' },
      { icon: '📺', title: 'Commercial Ads', description: 'High-converting ad creatives and promotional videos optimized for social media platforms and digital campaigns.', gradient: 'linear-gradient(135deg, #a855f7, #3b82f6)' },
      { icon: '💫', title: 'Transitions & FX', description: 'Custom transition packs, speed ramps, glitch effects, and unique visual treatments tailored to your brand aesthetic.', gradient: 'linear-gradient(135deg, #ec4899, #a855f7)' },
      { icon: '🎙️', title: 'Podcast & Interview', description: 'Professional podcast and interview editing with multi-cam sync, captions, B-roll integration, and engagement cuts.', gradient: 'linear-gradient(135deg, #22c55e, #3b82f6)' },
    ];

    const reviews = [
      { name: 'Arjun Mehta', role: 'Music Artist', avatar: 'AM', rating: 5, text: 'Keshv delivered an absolutely fire music video. The color grading, transitions, and beat-synced edits were next level. My views tripled within a week! 🔥', project: 'Midnight Beats MV', gradient: 'linear-gradient(135deg, #ec4899, #a855f7)' },
      { name: 'Priya Sharma', role: 'Fashion Influencer, 500K+', avatar: 'PS', rating: 5, text: 'Working with Keshv Cuts transformed my content game. The reels are so cinematic and engaging — my engagement rate literally doubled. Best editor I\'ve worked with!', project: 'Instagram Reels', gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
      { name: 'Rohan Verma', role: 'YouTuber, 1M+ Subs', avatar: 'RV', rating: 5, text: 'My channel grew insanely fast after Keshv started editing. The pacing, VFX, and storytelling in every video is unmatched. Highly recommend to any serious creator.', project: 'YouTube Channel', gradient: 'linear-gradient(135deg, #f97316, #ec4899)' },
      { name: 'Sneha Kapoor', role: 'Startup Founder', avatar: 'SK', rating: 5, text: 'We needed a brand video that captured our essence perfectly. Keshv not only understood our vision but elevated it beyond expectations. The ROI on that video was incredible.', project: 'Brand Film', gradient: 'linear-gradient(135deg, #a855f7, #3b82f6)' },
      { name: 'Dev Patel', role: 'Indie Filmmaker', avatar: 'DP', rating: 5, text: 'As a filmmaker, I\'m extremely particular about editing. Keshv understood my vision immediately and elevated my short film to festival quality. Exceptional talent.', project: 'Echoes Short Film', gradient: 'linear-gradient(135deg, #06b6d4, #22c55e)' },
      { name: 'Ananya Iyer', role: 'Content Creator', avatar: 'AI', rating: 5, text: 'Our Instagram Reels engagement went through the roof — 400% increase! The scroll-stopping content and trend-savvy editing keeps our audience hooked. Pure magic.', project: 'Social Media Content', gradient: 'linear-gradient(135deg, #facc15, #f97316)' },
    ];

    // ---- Navbar scroll ----
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---- Mobile menu ----
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    if (navToggle && navMobile) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMobile.classList.toggle('open');
        navToggle.textContent = isOpen ? '✕' : '☰';
      });
      navMobile.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navMobile.classList.remove('open');
          navToggle.textContent = '☰';
        });
      });
    }

    // ---- Render Services ----
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
      servicesGrid.innerHTML = services.map((s, i) => `
        <div class="service-card reveal-item" style="transition-delay:${i * 0.07}s">
          <div class="service-icon" style="background:${s.gradient}">${s.icon}</div>
          <h3>${s.title}</h3>
          <p>${s.description}</p>
        </div>
      `).join('');
    }

    // ---- Render Instagram Reels ----
    function renderReels() {
      const grid = document.getElementById('reelsGrid');
      if (!grid) return;

      grid.innerHTML = instagramReels.map((reel, i) => {
        const embedUrl = reel.url + 'embed/';
        return `
          <div class="reel-embed-card" style="animation:slide-up 0.6s ease-out forwards;animation-delay:${i * 0.08}s">
            <div class="reel-embed-wrapper">
              <div class="reel-embed-loading">
                <div class="reel-embed-spinner"></div>
                <span class="reel-embed-loading-text">Loading reel...</span>
              </div>
              <iframe 
                src="${embedUrl}"
                allowtransparency="true" 
                allowfullscreen="true" 
                frameborder="0" 
                scrolling="no"
                loading="lazy"
                style="position:relative;z-index:1;"
              ></iframe>
            </div>
            <div class="reel-embed-footer">
              <div class="reel-embed-label">
                <div class="reel-embed-avatar">KC</div>
                <div>
                  <div class="reel-embed-name">${reel.title}</div>
                  <div class="reel-embed-handle">@keshv_cuts</div>
                </div>
              </div>
              <a href="${reel.url}" target="_blank" rel="noopener noreferrer" class="reel-embed-view-btn">
                📸 View
              </a>
            </div>
          </div>
        `;
      }).join('');
    }
    renderReels();

    // Load Instagram embed script
    const igScript = document.createElement('script');
    igScript.src = 'https://www.instagram.com/embed.js';
    igScript.async = true;
    igScript.defer = true;
    document.body.appendChild(igScript);
    igScript.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };

    // ---- Render Reviews ----
    let reviewIndex = 0;

    function getVisibleCount() {
      if (window.innerWidth < 800) return 1;
      if (window.innerWidth < 1100) return 2;
      return 3;
    }

    function renderReviews() {
      const grid = document.getElementById('reviewsGrid');
      const dots = document.getElementById('reviewsDots');
      if (!grid || !dots) return;

      const count = getVisibleCount();
      const visible: typeof reviews = [];
      for (let i = 0; i < count; i++) {
        visible.push(reviews[(reviewIndex + i) % reviews.length]);
      }

      grid.innerHTML = visible.map((r, idx) => `
        <div class="review-card" style="animation:slide-up 0.6s ease-out forwards;animation-delay:${idx * 0.1}s">
          <div class="review-card-top">
            <span class="review-quote">❝</span>
            <div class="review-stars">${'⭐'.repeat(r.rating)}</div>
          </div>
          <p class="review-text">"${r.text}"</p>
          <div class="review-author">
            <div class="review-avatar" style="background:${r.gradient}">${r.avatar}</div>
            <div>
              <div class="review-author-name">${r.name}</div>
              <div class="review-author-role">${r.role}</div>
            </div>
          </div>
          <div class="review-project-tag">📁 ${r.project}</div>
        </div>
      `).join('');

      dots.innerHTML = reviews.map((_, i) => `
        <button class="reviews-dot ${i === reviewIndex ? 'active' : ''}" data-index="${i}"></button>
      `).join('');

      dots.querySelectorAll('.reviews-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          reviewIndex = parseInt(dot.getAttribute('data-index') || '0');
          renderReviews();
        });
      });
    }

    renderReviews();
    window.addEventListener('resize', renderReviews);

    document.getElementById('reviewsPrev')?.addEventListener('click', () => {
      reviewIndex = (reviewIndex - 1 + reviews.length) % reviews.length;
      renderReviews();
    });
    document.getElementById('reviewsNext')?.addEventListener('click', () => {
      reviewIndex = (reviewIndex + 1) % reviews.length;
      renderReviews();
    });

    // ---- Contact Form ----
    const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
    const contactFormWrap = document.getElementById('contactFormWrap');
    const formName = document.getElementById('formName') as HTMLInputElement | null;

    contactForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = formName?.value || 'there';
      if (contactFormWrap) {
        contactFormWrap.innerHTML = `
          <div class="form-success">
            <div class="form-success-icon">✓</div>
            <h3>Message Sent! 🎬</h3>
            <p>Thanks, ${name}! I'll review your project details and get back to you within 24 hours.<br><br>In the meantime, follow me on <a href="https://www.instagram.com/keshv_cuts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style="color:var(--accent-light);font-weight:700;">@keshv_cuts</a> for latest work!</p>
            <button class="gradient-btn form-success-btn" onclick="location.reload()"><span>Send Another</span></button>
          </div>
        `;
      }
    });

    // ---- Intersection Observer ----
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

    // ---- Keyboard support removed (no modal needed for embeds) ----

    // ---- Service card mouse glow effect ----
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e as MouseEvent).clientX - rect.left) / rect.width * 100;
        const y = ((e as MouseEvent).clientY - rect.top) / rect.height * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', x + '%');
        (card as HTMLElement).style.setProperty('--mouse-y', y + '%');
      });
    });

  }, []);

  return null;
}
