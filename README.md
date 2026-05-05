# Tobin Law Office — Demo Website
### Built with Next.js · Ready to deploy with Claude Code

---

## Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, trust stats, practice areas, reviews, about snippet, lead form |
| Practice Areas | `/practice-areas` | All 6 areas with detailed copy and CTA |
| About | `/about` | Tim Tobin bio, credentials, sidebar contact |
| Contact | `/contact` | Full lead form with charge type, city, confirmation state |

---

## Run Locally

```bash
npm install
npm run dev
```

Then open: http://localhost:3000

---

## Deploy with Claude Code

1. Open Claude Code in your terminal
2. Navigate to this folder
3. Run the following prompt:

```
Deploy this Next.js site to Vercel. The project is in the current directory. 
Set the project name to "tobin-law-demo". Deploy it and give me the live URL.
```

Claude Code will handle the Vercel login, project creation, and deployment automatically.

---

## Customize Before Pitching

Before you meet with Tim, you can swap out:
- **Phone number**: Currently `(480) 447-4837` — search and replace across all files
- **Reviews**: Edit the `REVIEWS` array in `pages/index.js`
- **Colors**: Edit `styles/globals.css` — `--navy`, `--gold` are the two main brand colors
- **Office addresses**: In `components/Footer.js` and `pages/contact.js`

---

## Design Notes

- Color palette: Dark navy (`#0a1628`) + gold (`#c9a84c`) — matches existing site vibe
- Typography: Playfair Display (headings) + Source Sans 3 (body)
- Mobile responsive — hamburger nav, stacked grids on small screens
- Lead form with charge type dropdown, city selector, confirmation state
- No CMS required — all content is hardcoded and easy to hand off

---

*Demo built for pitch purposes. All content pulled from tobinlawoffice.com.*
