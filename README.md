# CircleScope — Next.js Website (Multi-page)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `pages/index.js` | Homepage with hero, intro, solutions preview |
| `/about` | `pages/about.js` | Company info, mission, pillars |
| `/solutions` | `pages/solutions.js` | DroneTracker, FOD Tracker, Tracker 2 + cameras |
| `/technology` | `pages/technology.js` | AI capabilities + pipeline |
| `/industries` | `pages/industries.js` | Airports, maritime, energy, defense |
| `/services` | `pages/services.js` | Deployment, training, SLA tiers |
| `/contact` | `pages/contact.js` | Contact form |

## Deploy to Vercel

1. Push this folder (root level) to a GitHub repository
2. Go to vercel.com → Add New Project → select the repo
3. Vercel auto-detects Next.js — click Deploy

## Images

Product images are in `/public/images/` and referenced as `/images/filename.png`.
To swap images, replace the files in that folder — filenames must match.
