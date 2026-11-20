# Wellseed Global website (Astro)

## Run it on your laptop
1. Install Node.js (version 18.20 or newer, 20 or 22 recommended): https://nodejs.org
2. In this folder, run:
   - `npm install`   (first time only)
   - `npm run dev`   (opens the site at http://localhost:4321 and refreshes as you edit)
3. To make the publishable site: `npm run build`. The finished files appear in `dist/`.

## Where things live
- `src/pages/`        one file per page (index, about, vision, empowerment, get-involved)
- `src/components/`   Header, Footer, Logo, PageHero, CtaStrip, PathCard (written once, used everywhere)
- `src/layouts/Base.astro`  page shell: <head>, SEO tags, header, footer
- `src/data/site.js`  site name, motto, menu items, contact details, social links, form links
- `src/styles/style.css`    all styling (colours are the variables at the top)
- `public/`           favicon and images (put logo.png, hero images here; use /images/yourfile.webp)

## Common updates
- Change the menu: edit `nav` in `src/data/site.js`.
- Add contact details or social links: edit `contact` and `social` in `src/data/site.js`.
- Point the two buttons to real forms: edit `links` in `src/data/site.js`.
- Replace the placeholder logo: edit `src/components/Logo.astro` (instructions inside).
- Add a page: add a file in `src/pages/`, then add it to `nav` in `site.js`.

## Publishing
Push the project to GitHub and connect it to Netlify or Cloudflare Pages.
Build command: `npm run build`   Publish directory: `dist`
After that, every push publishes automatically.
When you have a domain, add it in `astro.config.mjs` (`site:`).

## Note on page text
The About, Vision & Mission and Empowerment pages use wording from your brief. Review and edit them before launch.


## Forms (Formspree)
1. Create two forms at formspree.io (one for community applications, one for volunteers) and set both to send to the Wellseed Gmail.
2. Open `src/data/site.js` and replace each `ADD FORMSPREE URL` with the real endpoint, for example `https://formspree.io/f/abcdwxyz`.
3. Each form sends a different subject line, so you can tell them apart in the inbox:
   - "New Empowerment Community application"
   - "New Volunteer interest"
Until the real URLs are added, the forms show a "not connected yet" message and do not pretend to send.

## Pages that are not in the menu
`/join-community` and `/volunteer` are reached only from the buttons on the Get Involved page. `/contact` is linked from the footer.
