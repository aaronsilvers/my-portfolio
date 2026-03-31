# Serge Silvers-Lamas — Personal Portfolio

> **"From the battlefield to the codebase — veteran, operator, engineer."**

A multi-page personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — just clean, fast, production-ready code.

---

## 🌐 Live Site

Open `index.html` in your browser or visit the GitHub Pages URL once deployed.

---

## 👤 About

This portfolio belongs to **Serge Silvers-Lamas**, a Full Stack Engineer based in New York City. Former U.S. Marine Corps Platoon Sergeant and OIF veteran, Senior QA Engineer at Grindr, Independent FX Trader, and currently building full-stack applications after completing Hack Reactor's Advanced Software Engineering Immersive Program.

---

## 📁 Project Structure

```
my-portfolio/
│
├── index.html              # Home / Hero page
├── styles.css              # Shared styles used by all pages
├── shared.js               # Shared JavaScript utilities
│
├── about/
│   └── index.html          # About Me page
│
├── experience/
│   └── index.html          # Work Experience timeline
│
├── projects/
│   └── index.html          # Projects showcase
│
├── skills/
│   └── index.html          # Technical skills grouped by category
│
├── education/
│   └── index.html          # Education & certifications
│
└── contact/
    └── index.html          # Contact page
```

---

## 🗂️ Pages Overview

### 🏠 Home (`index.html`)
- Full-screen hero section with animated name and tagline
- Key stats: 11 years USMC, 5+ years in tech, 99.97% uptime achieved, 118 Marines recruited
- Quick-navigation cards linking to each section
- Animated grid background with gold glow effect

### 👤 About (`about/index.html`)
- Personal bio blending military, hospitality, and tech background
- Info card with location, email, service record, and current role
- Tech skill badges
- Two-column layout with fade-in animations

### 💼 Experience (`experience/index.html`)
Vertical timeline of all roles in reverse chronological order:
| Role | Organization | Period |
|------|-------------|--------|
| Independent Trader | Self-Employed | Dec 2019 – Present |
| Full Stack Engineering | Hack Reactor / Coursera | Sep 2023 – 2025 |
| Senior QA Engineer | Grindr | Nov 2019 – Sep 2023 |
| QA Engineer | Grindr | Nov 2018 – Nov 2019 |
| Executive Assistant / Office Coordinator | Grindr | Jun 2016 – Nov 2018 |
| General Manager | Revolver Video Bar & The Abbey | Mar 2014 – Feb 2016 |
| Platoon Sergeant | United States Marine Corps | Nov 2002 – Oct 2013 |

Color-coded timeline dots:
- 🔴 Red = Military
- 🟣 Purple = Hospitality
- 🟡 Gold = Tech
- 🟠 Orange = Education

### 🛠️ Projects (`projects/index.html`)
**Hobby Connect** (Jan–Feb 2024)
- Full-stack social platform for connecting people through shared hobbies
- Stack: FastAPI · React · PostgreSQL · WebSockets · JWT Auth · Docker

**CarCar** (Dec 2023)
- Microservice-based automobile dealership management system
- Stack: Django · Microservices · REST API · PostgreSQL · Docker · Python

### ⚙️ Skills (`skills/index.html`)
Grouped by category:
- **Languages:** Swift UI, Python, JavaScript ES6+, SQL, HTML5, CSS
- **Back-End:** Django, FastAPI, Node.js, Express.js, PostgreSQL, MongoDB, Docker, CI/CD
- **Front-End:** React.js, DOM Manipulation, WebSockets, Responsive Design
- **QA & Tools:** JIRA, Charles Proxy, TestRail, OneTrust, CCPA, GDPR, GitLab
- **System Design:** Microservices, Domain-Driven Design, Event Sourcing, REST APIs

### 🎓 Education (`education/index.html`)
| Degree | Institution | Year |
|--------|------------|------|
| Advanced Software Engineering Immersive | Hack Reactor | 2024 |
| Programming Fundamentals in Swift | Coursera | 2024 |
| B.S. Business Administration & Management | University of Phoenix | 2013–2018 |
| B.A.S. Business / Commerce, General | University of Phoenix | Earlier |

### 📬 Contact (`contact/index.html`)
- Email: marinetanker83@gmail.com
- Open to full-stack engineering roles, freelance projects, and interesting problems

---

## 🎨 Design System

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#080c10` | Main background |
| `--surface` | `#0d1117` | Section backgrounds |
| `--surface2` | `#161b22` | Cards |
| `--border` | `#21262d` | Borders |
| `--accent` | `#f0a500` | Gold — primary accent |
| `--accent2` | `#e05c1a` | Orange — secondary accent |
| `--text` | `#e6edf3` | Primary text |
| `--muted` | `#7d8590` | Secondary text |

### Fonts
- **Bebas Neue** — Display / headings
- **Space Mono** — Labels, nav, monospace UI
- **Inter** — Body text

### UI Features
- Custom animated cursor with lagging ring effect
- Noise texture overlay for depth
- Clip-path polygon shapes on cards and buttons
- Scroll-triggered fade-in animations via Intersection Observer
- Responsive mobile layout
- Glassmorphism navbar with blur effect

---

## 🔗 Navigation

Every page includes:
- **Top navbar** — Links to all 6 sections, with active state highlighting
- **Bottom page navigator** — ← Previous / Page X of 6 / Next → buttons for linear browsing

---

## 🚀 Deployment

### View Locally
```bash
open -a "Google Chrome" ~/my-portfolio/index.html
```

### Push to GitHub
```bash
git add .
git commit -m "your message"
git push
```

### GitHub Pages (Free Hosting)
1. Go to your repo on GitHub
2. Click **Settings → Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Click **Save**
5. Your site will be live at: `https://aaronsilvers.github.io/my-portfolio`

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure and content |
| CSS3 | Styling, animations, responsive layout |
| Vanilla JavaScript | Cursor, scroll effects, intersection observer |
| Google Fonts | Typography (Bebas Neue, Space Mono, Inter) |
| Git + GitHub | Version control and hosting |

---

## ✏️ How to Edit

### Update your info
Each page is a standalone HTML file. Open the relevant file and edit the content directly:
- Change text between HTML tags
- Add new timeline items by copying an existing `.timeline-item` block
- Add new projects by copying a `.project-card` block
- Add new skills by copying a `.skill-tag` span

### Add a new page
1. Create a new folder (e.g., `blog/`)
2. Add an `index.html` inside it
3. Copy the nav and footer from any existing page
4. Update the nav links in **all** pages to include the new one

### Change colors
Edit the CSS variables at the top of `styles.css`:
```css
:root {
  --accent: #f0a500;  /* Change this to update the gold color everywhere */
}
```

---

## 📬 Contact

**Serge Silvers-Lamas**
- Email: marinetanker83@gmail.com
- Location: New York City, NY
- GitHub: [github.com/aaronsilvers](https://github.com/aaronsilvers)

---

*Built with Claude AI · Vibe coded from scratch · 2026*
