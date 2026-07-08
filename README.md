# Nexus — VRT Demo

Fake SaaS landing site built with **Vite + React + TypeScript + Tailwind CSS**.  
Used as a demo project for a Visual Regression Testing (VRT) course.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Routing | react-router-dom v6 |
| Styling | Tailwind CSS 3 |
| VRT | Playwright (native `toHaveScreenshot`) |
| Deploy | Vercel (zero-config) |

---

## Local dev

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

---

## Visual Regression Testing (VRT)

### 1. Install Playwright browsers (first time only)

```bash
npx playwright install chromium
```

---

### 2. Generate baseline screenshots (prod URL)

Run this once against the **production** deployment to create the reference snapshots.  
Snapshots are stored in `tests/__snapshots__/`.

```bash
BASE_URL=https://vrt-demo-prod.vercel.app npx playwright test --update-snapshots
```

> Commit the `tests/__snapshots__/` folder to Git — this is your "golden master".

---

### 3. Run VRT against a QA URL to detect regressions

```bash
BASE_URL=https://vrt-demo-qa.vercel.app npx playwright test
```

Playwright compares each screenshot against the baseline.  
Any pixel difference above 1% is reported as a **FAILED** test.

---

### 4. Open the HTML diff report

```bash
npx playwright show-report
# or: npm run test:vrt:report
```

The HTML report opens in your browser and shows:
- **Expected** (baseline / prod)
- **Actual** (QA screenshot)  
- **Diff** (red-highlighted pixels)

---

### Convenience scripts (package.json)

| Command | What it does |
|---|---|
| `npm run test:vrt` | Run VRT against `BASE_URL` (default: localhost:5173) |
| `npm run test:vrt:update` | Regenerate baselines |
| `npm run test:vrt:report` | Open last HTML report |

---

## Deployment to Vercel

### Two-repo strategy for VRT demo

Create **two separate GitHub repos**:

| Repo | Purpose | Vercel URL example |
|---|---|---|
| `vrt-demo-prod` | Stable "production" version | `vrt-demo-prod.vercel.app` |
| `vrt-demo-qa` | Modified "QA" version | `vrt-demo-qa.vercel.app` |

### Steps (you do this manually)

1. Create the two repos on GitHub (Settings → New repository)
2. Push this project to each repo:
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/vrt-demo-prod.git
   git push -u origin main
   ```
3. On [vercel.com](https://vercel.com):
   - Click **Add New → Project**
   - Import each GitHub repo
   - No configuration needed — Vite is auto-detected
   - Click **Deploy**

4. Introduce a visible change in `vrt-demo-qa` (e.g. change a color in `index.css` or swap a heading), push, wait for Vercel to redeploy.

5. Run the VRT commands from section 2 & 3 above — Playwright will catch the diff.

---

## Project structure

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   └── Navbar.tsx
│   ├── data/               # Static data (no backend)
│   │   ├── blog.ts
│   │   ├── features.ts
│   │   ├── pricing.ts
│   │   └── team.ts
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Pricing.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tests/
│   └── visual.spec.ts      # VRT test suite
├── playwright.config.ts
├── tailwind.config.js
├── vite.config.ts
└── README.md
```
