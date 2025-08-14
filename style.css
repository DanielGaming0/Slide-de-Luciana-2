/* style.css */
:root {
  --purple-dark: #5a189a;
  --purple-medium: #7b2cbf;
  --purple-light: #9d4edd;
  --blue-dark: #1a4b8c;
  --blue-light: #4dabf7;
  --blue-pale: #e7f5ff;
  --white: #ffffff;
  --text: #333;
  --text-light: #555;
  --highlight: #ffe066;
  --trans: 600ms;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: 'Inter', Arial, sans-serif;
  color: var(--text);
  line-height: 1.6;
}

.slider {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--white);
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  transform: translateX(100%);
  opacity: 0;
  transition: transform var(--trans) ease, opacity var(--trans) ease;
}

.slide.active {
  transform: translateX(0);
  opacity: 1;
  z-index: 2;
}

/* Slide - title (banner) */
.slide--title {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--purple-dark), var(--blue-dark));
  position: relative;
}

.title-wrap {
  position: relative;
  z-index: 3;
  padding: 0 24px;
  max-width: 900px;
}

.slide--title h1 {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  color: var(--white);
  line-height: 1.05;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.slide--title span {
  display: block;
  font-size: 42px;
}

.subtitle {
  font-size: 22px;
  color: rgba(255,255,255,0.9);
  margin-top: 16px;
  font-weight: 300;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(90,24,154,0.8), rgba(26,75,140,0.6));
  z-index: 1;
}

/* Content layout */
.content-wrap {
  display: flex;
  gap: 60px;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.content-wrap.column {
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
}

.text {
  flex: 1;
  max-width: 700px;
}

/* Headings */
h2 {
  font-size: 36px;
  color: var(--purple-dark);
  margin-bottom: 20px;
  font-weight: 700;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--purple-light);
  margin-top: 12px;
  border-radius: 2px;
}

h3 {
  font-size: 24px;
  color: var(--purple-medium);
  margin: 20px 0 12px;
}

h4 {
  font-size: 20px;
  color: var(--blue-dark);
  margin: 16px 0 8px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text);
  margin-bottom: 16px;
}

.lead-text {
  font-size: 20px;
  color: var(--text-light);
  max-width: 800px;
}

.highlight-text {
  background: var(--blue-pale);
  padding: 20px;
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--blue-light);
  margin: 20px 0;
}

.highlight-box {
  background: var(--blue-pale);
  padding: 20px;
  border-radius: var(--radius-sm);
  margin: 24px 0;
  border-left: 4px solid var(--blue-light);
}

.highlight-box p {
  margin: 0;
  color: var(--blue-dark);
}

.highlight-box.conclusion {
  background: var(--purple-light);
  color: white;
  border-left: 4px solid var(--purple-dark);
}

.highlight-box.conclusion p {
  color: white;
}

/* Lists */
.features, .bullet {
  margin-left: 0;
  padding-left: 0;
  list-style: none;
}

.features li, .bullet li {
  margin-bottom: 16px;
  font-size: 18px;
  padding-left: 36px;
  position: relative;
}

.features li::before, .bullet li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 20px;
  height: 20px;
  background-color: var(--purple-light);
  border-radius: 50%;
  opacity: 0.2;
}

.feature-icon {
  margin-right: 10px;
  font-size: 20px;
  color: var(--purple-medium);
}

/* Grid layouts */
.legacy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;
}

.legacy-card {
  background: white;
  padding: 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease;
  text-align: center;
}

.legacy-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.legacy-icon {
  font-size: 36px;
  color: var(--purple-medium);
  margin-bottom: 16px;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 24px 0;
}

.pedagogy-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;
}

.feature-item {
  background: white;
  padding: 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.feature-icon {
  font-size: 32px;
  color: var(--purple-medium);
  margin-bottom: 16px;
}

.marx-legacy {
  margin-top: 24px;
}

.legacy-item {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
  align-items: flex-start;
}

.legacy-item .icon {
  font-size: 24px;
  color: var(--purple-medium);
  margin-top: 4px;
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 32px 0;
}

.challenge-card {
  background: white;
  padding: 24px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.challenge-icon {
  font-size: 32px;
  color: var(--purple-medium);
  margin-bottom: 16px;
}

/* Timeline */
.timeline-container {
  position: relative;
  margin: 24px 0;
  padding-left: 30px;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--blue-pale);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  padding-bottom: 24px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -34px;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--purple-light);
  border: 3px solid white;
  box-shadow: 0 0 0 2px var(--purple-light);
}

.year {
  font-weight: 700;
  color: var(--purple-dark);
  font-size: 18px;
}

.event {
  color: var(--text);
  margin-top: 4px;
}

/* Controls */
.controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 10;
}

.controls button {
  background: var(--purple-medium);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}

.controls button:hover {
  background: var(--purple-light);
  transform: scale(1.1);
}

.controls button svg {
  width: 24px;
  height: 24px;
  fill: white;
}

.dots {
  display: flex;
  gap: 12px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.dot.active {
  background: white;
  transform: scale(1.3);
}

/* Responsive */
@media (max-width: 1200px) {
  .content-wrap {
    gap: 40px;
  }
  
  .legacy-grid, .pedagogy-features, .challenges-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .slide {
    padding: 32px 24px;
    overflow-y: auto;
  }
  
  .content-wrap {
    flex-direction: column;
    gap: 32px;
  }
  
  .text {
    max-width: 100%;
  }
  
  .two-columns, .legacy-grid, .pedagogy-features, .challenges-grid {
    grid-template-columns: 1fr;
  }
  
  h2 {
    font-size: 28px;
  }
  
  h3 {
    font-size: 20px;
  }
  
  p, .features li, .bullet li {
    font-size: 16px;
  }
  
  .slide--title h1, .slide--title span {
    font-size: 32px;
  }
  
  .subtitle {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .slide {
    padding: 24px 16px;
  }
  
  .controls {
    bottom: 16px;
  }
  
  .controls button {
    width: 40px;
    height: 40px;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
  
  .slide--title h1, .slide--title span {
    font-size: 24px;
  }
  
  .subtitle {
    font-size: 16px;
  }
}