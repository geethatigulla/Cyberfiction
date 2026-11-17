# Cyberfiction

A one-page front-end recreation of the "CYBERFICTION" metaverse landing page. Its main feature is a **scroll-driven image-sequence animation**: as you scroll, a canvas plays a 300-frame 3D character render, while smooth scrolling and pinned full-screen text sections move by. It is a practice project for GSAP ScrollTrigger + Locomotive Scroll techniques.

The repo also holds a few small, separate **cybersecurity explainer animations** (MITM, ransomware, DDoS) as their own HTML pages.

## Features

**`index.html`: Cyberfiction landing page**
- Canvas image sequence: 300 PNG frames (`CYBERFICTION-IMAGES/CYBERFICTION-IMAGES/male0001.png` … `male0300.png`) preloaded and drawn to a full-screen `<canvas>`. GSAP scrubs through the frames over about 6 screen-heights of scroll. Frames are scaled to cover the screen and redrawn on window resize.
- Smooth scrolling with Locomotive Scroll, wired to GSAP ScrollTrigger through `scrollerProxy`.
- Pinned sections (`#page1`–`#page3`) with large headline text ("HAVE FUN / LET'S PLAY…", "CYBERFIELD IS OUR PLAYGROUND").
- Infinite horizontal marquee headline made with a CSS `@keyframes` loop.

**Extra demo pages (not linked from the landing page)**

| Page | What it shows | Files |
|---|---|---|
| `index1.html` | "Advanced MITM Attack Simulation". A canvas draws users, servers and an attacker. **Send Messages** draws message lines, some marked intercepted | `scripts.js`, `styles.css` |
| `index3.html` | "Ransomware Mechanism". Six steps (Infection → Payment) appear one by one after **Start Animation** | `script3.js`, `style3.css` |
| `index4.html` | "DDoS Animation". Rotating DDoS prevention tips, plus a traffic/server bar animation on **Start DDoS Attack** | inline script, `style4.css` |

## Tech stack

- HTML, CSS, vanilla JavaScript (no build step)
- [GSAP 3.11.5](https://gsap.com/) + ScrollTrigger (cdnjs)
- [Locomotive Scroll 3.5.4](https://github.com/locomotivemtl/locomotive-scroll) (jsDelivr)
- Canvas 2D API

## Project structure

```
Cyberfiction/
├── index.html            # Cyberfiction landing page (main entry)
├── style.css             # Landing page styles + marquee animation
├── script.js             # Locomotive Scroll + ScrollTrigger setup, frame list, canvas renderer, pins
├── CYBERFICTION-IMAGES/
│   └── CYBERFICTION-IMAGES/
│       ├── male0001.png … male0300.png   # 300 animation frames (~72 MB in total)
│       ├── aaaaaaaaaaaa.png              # not referenced
│       └── scripts.js                    # unused Three.js experiment, not referenced
├── index1.html, scripts.js, styles.css   # MITM demo
├── index3.html, script3.js, style3.css   # Ransomware demo
├── index4.html, style4.css               # DDoS demo (script4.js duplicates its inline script)
├── custom.js, dp.css, bootstrap-icon.css # template leftovers, not referenced by any page
└── stackblitz-starters-qrqt3d.htm (+ _files/)  # saved copy of a bolt.new page, not part of the site
```

## Getting started

No install or build is needed. All libraries load from CDNs, so you need an internet connection.

```bash
git clone https://github.com/geethatigulla/Cyberfiction.git
cd Cyberfiction

# serve the folder (recommended), then open http://localhost:8000
python -m http.server 8000
# or
npx serve .
```

You can also open `index.html` directly in a browser, or use the VS Code Live Server extension. The repo's `.vscode/settings.json` sets Live Server to port 5501.

The first load downloads all 300 frames (about 72 MB), so the animation may stutter until they are cached.

## Known issues

- The frame list in `script.js` is typed by hand and has a few typos. It points to `male00010.png`, `male00074.png`, `male018.png`, `male022.png` and `male040.png`, which don't exist, so those frames are blank. The list also starts with an empty line, so frame 0 has no image.
- `style.css` uses the `gilroy` font but never loads it. Unless Gilroy is installed locally, the browser falls back to a default font.
- The page `<title>` is still "Document".
- `index` (an empty file) and several unused files (see the structure tree above) could be removed.
