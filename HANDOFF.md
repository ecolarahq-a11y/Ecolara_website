# Ecolara Website: Developer Handoff

Owner: Johnson Victor Ehimare, Founder. Contact: hello@ecolara.online

## 1. What this is
The public website for Ecolara, a youth-led climate education and action initiative in Osogbo, Osun State, Nigeria. The NGO and impact work is the front door. Labs (games, app) and Insights (blog, research, books, comics) sit in the nav but are not separate platforms at launch.

Stack is fixed: Next.js 14 (App Router), Tailwind, Sanity CMS, Vercel hosting.
Visual direction: warm editorial. Cream background, deep green, amber accent. Real photography, no emoji, no stock icons.

## 2. What is already built
- 26 routes, typechecked and built successfully. One folder per page under `app/`.
- Content panel at `/studio` (Sanity). Types: Blog post, Research report or paper, Outreach report, Book, Comic issue, New release, Game, Site settings.
- Outreach report pages with a photo gallery and full-screen slideshow (built for about 30 photos each).
- Game player page that runs a hosted game in an iframe.
- Header, footer, shared list and detail components, design tokens in `globals.css`.
- The site runs with no Sanity keys. Pages show empty states.

Full route table and the suggested split between two developers are in `README.md`.

## 3. Requirements to run
- Node.js 20 or newer
- A Sanity account and project (free tier is fine to start)
- GitHub repo and a Vercel account for deployment
- Env vars (see `.env.example`): Sanity project id and dataset, Flutterwave donate URL, volunteer Google Form URL
- In Sanity, add localhost and the live domain to the CORS origins with credentials allowed

## 4. Hard rules
1. The three outreach reports (Nawarudeen, Ogidan, Bello Memorial) are always separate cards and separate pages. Never merge them.
2. Images are hosted in the Sanity media library or `public/`. Never hotlink Google Drive.
3. Do not scaffold the admin dashboard (volunteer tracking, donation records, M&E entry). That is Phase 2.
4. Volunteer applications stay on Google Forms. Do not rebuild them.
5. Mission language is Nigeria-specific. Continental ambition is future vision only.
6. Tone: positive and honest. No doom or guilt framing.

## 5. Work still to be done (developers)
Must do before launch:
- (Done) Mobile menu is built. Test on real phones.
- Comic issue page. The `pages` field exists in the panel but the page does not display it yet. Reuse `components/Gallery.tsx` or build a page-by-page reader.
- Connect a real Sanity project and test every content type end to end.
- Contact form: `app/api/contact/route.ts` only validates and redirects. Store submissions (Sanity document or email) and add a success message.
- Donate page: wire the Flutterwave link, add a plain "where the money goes" section.
- Page metadata, Open Graph images, sitemap.xml and robots.txt.
- Replace placeholder blocks (hero image, empty states) with real content.
- About page: write once the origin story is chosen (see section 7).
- Deploy to Vercel and point ecolara.online at it.
- Accessibility pass and a mobile performance check.

Can wait:
- Pagination and search once lists grow.
- Moving Programs from `lib/programs.ts` into Sanity.
- Upload path for game builds from the panel (Vercel Blob or Cloudflare R2). Today a developer places the build in `public/games/<slug>/` and the editor creates a Game entry with the same slug.
- Newsletter signup.

Out of scope here: the mobile app (React Native, Expo, Supabase) is a separate repo.

## 6. Materials needed from Ecolara
Brand and text:
- Logo files in SVG or high-resolution PNG, light and dark versions
- Confirmed fonts and colour values (current: Fraunces, Hanken Grotesk; green #173622, leaf #43A047, amber #E3A23C)
- Mission, vision and values text (Ecolara_Mission_Vision_Values.docx)
- Concept note and team structure, for About and Team pages
- Program descriptions, one short paragraph each, for the six programs

Content:
- Outreach photos: about 30 per school. More are still needed from Nawarudeen Grammar School and Bello Memorial. Resize to about 2000px on the long side before upload.
- The three public outreach report PDFs (already produced)
- Comic Issue 1 pages in reading order, plus the PDF
- Game builds as static folders (HTML5), with a thumbnail and a short instruction line
- First 3 to 5 blog posts, and any books or papers to publish
- Partner logos, with permission (for example Kits on Earth)

Links and accounts:
- Flutterwave donation link
- Volunteer application Google Form URL
- Social links (@EcolaraHQ on each platform)
- Domain registrar access for ecolara.online

Permissions:
- Written consent from each school before student photos go online. Confirm this with Johnson before any gallery is published.

## 7. Decisions pending (blockers for content, not code)
1. Official name origin story. Two versions exist ("light for the environment" and "protecting our ecological home"). One must be chosen before About is written.
2. Student count. An older reference shows both 200+ and 500+. Confirm one number. It is entered in the panel under Site settings, not hardcoded.

## 8. Design note
The visual design is ported from the approved reference file. Home sections are in `components/home/`, static for now. The reference reused a single photo (Ogidan) for every image slot, so the Nawarudeen and Bello story cards show a 'Photo needed' placeholder. Real photos for each slot are on the materials list above. The mobile menu is now built.
