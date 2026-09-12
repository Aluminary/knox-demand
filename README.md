# Knox Demand — website

Basic Node/Express site for knoxdemand.com, ready to deploy on Railway.

## Run locally
```
npm install
npm start
```
Visit http://localhost:3000

## Deploy to Railway
1. Push this folder to a GitHub repo (or use `railway up` from the CLI in this folder).
2. In Railway: **New Project → Deploy from GitHub repo** (or accept the CLI prompt).
3. Railway auto-detects Node from `package.json` and runs `npm start`. No extra config needed.
4. Once deployed, go to **Settings → Domains** and add `knoxdemand.com` (+ `www`), then point your domain's DNS (CNAME/A records, shown by Railway) at it.

## Before you go live — things I could NOT fake for you
- **Star rating / review badge**: I left the review cards as live-profile links instead of a fabricated "4.7–4.9 stars" badge, since posting a rating that doesn't exist yet is a false advertising / FTC risk. Once you have a Google Business Profile and real reviews, replace the `#` links in the Reviews section (`public/index.html`, `#reviews`) with your actual Google and Yelp URLs, and I can wire in the live star rating.
- **Backlinks**: a website can't generate its own backlinks. Real ones come from being listed on local directories (Google Business Profile, Yelp, Apple Maps, Bing Places, Chamber of Commerce, BBB, industry directories) and outreach/press — I can help you build that outreach list separately if you want.
- **Google Business Profile**: the embedded map currently centers on "Knoxville, TN" generally. Once your GBP listing is live, I can swap the embed for your exact profile so it shows your real map pin, hours, and Q&A.

## Structure
- `public/index.html` — single-page site (hero, services, service-area map, pricing, Calendly booking, reviews, FAQ)
- `public/css/style.css` — all styling, brand tokens (orange `#E8560F` / black `#17181A`) at the top
- `public/js/main.js` — footer year + FAQ accordion
- `server.js` — static file server for Railway

## Scaling to more locations (as you mentioned)
Duplicate `public/index.html` into `public/<city>/index.html` for each new city/GBP listing, swap the city name, map embed, and `areaServed` in the JSON-LD schema at the top of the file. Keep `knoxdemand.com/` as the flagship Knoxville page and link to the others from the footer.
