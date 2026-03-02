# ChronoForge · 天时
### Chinese Lunisolar Calendar Engine

ChronoForge · 天时 is a **mathematically accurate** digital implementation of the traditional Chinese lunisolar calendar. It preserves the full complexity of the system — leap months, 60-year cycle, Four Pillars, and 24 Solar Terms — while presenting a clean, bilingual interface.

Built with **pure HTML, CSS, and Vanilla JavaScript**. No frameworks. No dependencies. Just the math.

This is not a UI widget.  
This is a **time engine**.

---

## What It Does

For any date between 1900–2100, ChronoForge · 天时 calculates:

| Element | Description |
|---------|-------------|
| **Lunar Date** | Month and day with leap month indication |
| **Four Pillars** | Year, month, day, and hour stem-branch (hour approximated) |
| **Solar Terms** | Current and next 节气 with progress indicator |
| **Year Pillar** | 干支 with element and zodiac |
| **Day Pillar** | Stem-branch with element, zodiac, yin-yang |
| **Auspicious Days** | Simplified 宜/忌 rules |
| **Leap Months** | Accurate detection from astronomical data |
| **Bilingual Display** | 中文, English, or 中/EN |

---

## Core Structure

### Lunisolar System
- **Years**: 60-year cycle (甲子 to 癸亥)  
- **Months**: 29 or 30 days, with leap months  
- **Days**: 初一 through 三十  
- **Leap Months**: Occur ~every 3 years to align lunar and solar cycles  

### 24 Solar Terms (节气)

| Season | Terms |
|--------|-------|
| Spring | 立春 · 雨水 · 惊蛰 · 春分 · 清明 · 谷雨 |
| Summer | 立夏 · 小满 · 芒种 · 夏至 · 小暑 · 大暑 |
| Autumn | 立秋 · 处暑 · 白露 · 秋分 · 寒露 · 霜降 |
| Winter | 立冬 · 小雪 · 大雪 · 冬至 · 小寒 · 大寒 |

### Four Pillars (四柱)
- **Year Pillar**: 年柱 — based on 60-year cycle  
- **Month Pillar**: 月柱 — changes at each 节气  
- **Day Pillar**: 日柱 — 60-day cycle  
- **Hour Pillar**: 时柱 — fixed to 子时 for simplicity  

---

## Features

### Calendar Grid
- Today highlighted  
- Active day selection  
- Element color coding (木火土金水)  
- Solar term indicators on relevant days  
- Leap month visual distinction  

### Information Panel
- **Gregorian Date** with weekday  
- **Lunar Date** with leap indication  
- **Four Pillars** with element and zodiac  
- **Solar Terms** with progress bar  
- **Auspicious** 宜/忌 (when enabled)  
- **Year Days** total in current lunar year  

### Navigation
- Month/year arrows  
- One-click return to today  
- Keyboard arrows (← → ↑ ↓)  
- Settings menu for customization  

### Settings

| Option | Description |
|--------|-------------|
| Detail Level | Basic / Standard / Complete |
| Language | 中文 / English / Bilingual |
| Show Solar Terms | Toggle 节气 display |
| Show Zodiac | Toggle 生肖 display |
| Show Auspicious | Toggle 宜忌 (Complete mode) |
| Show Four Pillars | Toggle pillar section |
| Compact Mode | Tighter spacing |
| Ultra Compact | Even tighter |

---

## Data Sources & Accuracy

| Component | Source | Accuracy |
|-----------|--------|----------|
| Lunar months 1900–2100 | Hong Kong Observatory / Purple Mountain Observatory | ±0 days |
| Solar terms | Interpolated from base years | ±1 day |
| Four Pillars | Mathematical calculation | Exact |
| Auspicious rules | Simplified Tong Shu | Cultural approximation |

**Date range:** 1900–2100 (pre-1900 and post-2100 show placeholders)

---

## Architecture

```
project/
├── index.html          # Calendar UI
├── style.css           # Styling (ChronoForge DNA)
└── script.js           # Complete engine
```

### Core Algorithms

**Lunar conversion:**
```javascript
// 20-bit compressed data per year
// First 4 bits: leap month position
// Next 16 bits: month lengths (1=30 days, 0=29 days)
function decodeLunarYear(yearData) { ... }
```

**Year pillar:**
```javascript
// 1984 is 甲子年 (stem 0, branch 0)
const offset = year - 1984;
const stemIndex = (offset % 10 + 10) % 10;
const branchIndex = (offset % 12 + 12) % 12;
```

**Month pillar (五虎遁):**
```javascript
const monthStemStart = {
  "甲": 2, "己": 2,  // 丙
  "乙": 4, "庚": 4,  // 戊
  "丙": 6, "辛": 6,  // 庚
  "丁": 8, "壬": 8,  // 壬
  "戊": 0, "癸": 0   // 甲
};
```

**Day pillar:**
```javascript
// 1900-01-31 was 甲子日
const daysSinceRef = Math.floor((target - ref) / (1000*60*60*24));
const cycleIndex = (daysSinceRef % 60 + 60) % 60;
```

---

## Bilingual System

Every text element supports three modes:

- **中文** — Full Chinese  
- **English** — Full English translation  
- **Bilingual** — 中文 (English)

All labels, month names, day names, and UI text update dynamically.

---

## Philosophy

ChronoForge is not a calendar app.  
It is a **time engine** — preserving and transmitting the mathematical precision of traditional timekeeping systems.

The Chinese calendar is built on centuries of observation, not arbitrary rules. ChronoForge respects this heritage while making it computable and accessible.

---

## Roadmap

- ✅ Accurate lunar conversion (1900–2100)
- ✅ Four Pillars with correct formulas
- ✅ Solar Terms with progress
- ✅ Bilingual display
- ✅ Leap month detection
- ✅ Mobile-optimized legend 
- ⬜ Hour Pillar calculation (optional)
- ⬜ Auspicious direction rules
- ⬜ PWA support
- ⬜ Date range picker for historical research
- ⬜ API extraction (Node.js version)
- ⬜ Historical date expansion beyond 2100

---

## About the Creator

Built by **Virxee**, a software engineer who turns complex cultural, temporal, and mathematical systems into functional, scalable tools.

Current work includes **ChronoForge**, a precision engine for the Chinese lunisolar calendar — part of a family of time engines designed to be computable, extensible, and infrastructure-ready.

Future directions explore expanded calendar systems, AI-driven insights, and broader applications — but today, the focus is on solid, accurate, and extensible foundations.

- 📧 ngangmi.virxee@gmail.com  
- 🐦 [@NgangmiR](https://x.com/NgangmiR)  
- 💼 [GitHub Sponsors](https://github.com/sponsors/V-XY)  

---

## License

MIT License © 2026 Virxee  

*Built with precision and purpose.*
