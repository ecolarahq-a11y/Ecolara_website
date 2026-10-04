# Ecolara Web

Next.js 14 (App Router) + Sanity panel + Vercel. Runs locally with no CMS keys; pages show empty states until content exists.

## Run
    npm install
    cp .env.example .env.local   (fill in Sanity project id when ready)
    npm run dev
Content panel: http://localhost:3000/studio

## Route map (one folder per page, all linked from Header/Footer)
| Route | File | Content source |
|---|---|---|
| / | app/page.tsx | Site settings + latest posts |
| /about | app/about/page.tsx | Static, blocked on name origin story |
| /programs, /programs/[slug] | app/programs/ | lib/programs.ts |
| /impact, /impact/[slug] | app/impact/ | Panel: Outreach report |
| /insights | app/insights/page.tsx | Hub |
| /insights/blog, /[slug] | app/insights/blog/ | Panel: Blog post |
| /insights/research, /[slug] | app/insights/research/ | Panel: Research report or paper |
| /insights/library, /[slug] | app/insights/library/ | Panel: Book |
| /insights/comics, /[slug] | app/insights/comics/ | Panel: Comic issue |
| /insights/releases, /[slug] | app/insights/releases/ | Panel: New release |
| /labs, /labs/app | app/labs/ | Static |
| /labs/games, /labs/games/[slug] | app/labs/games/ | Panel: Game (iframe player) |
| /get-involved, /donate, /contact | app/ | Env links, Flutterwave, form |
| /studio | app/studio/ | The content panel |

## Suggested split for two developers
- Dev A (front of house): app/page, about, programs, impact, get-involved, donate, contact, components/, globals.css
- Dev B (content system): sanity/, lib/, insights/*, labs/*, studio, game hosting

## Hosting games
Each game is a folder of static files (HTML5/JS). Put it at public/games/<slug>/index.html and create a Game entry in the panel with the same slug. The panel stores the listing, not the build files. If non-developers must upload builds themselves, add Vercel Blob or Cloudflare R2 later (Phase 2).

## Rules
- Outreach reports are always separate cards and pages. Never merge them.
- No emoji in UI copy. Real photos only, in public/images or the Sanity media library.
- Admin dashboard (volunteers, donations, M&E) is Phase 2. Not scaffolded.

## Open items before launch
- Pick one official name origin story.
- Student count appears as both 200+ and 500+ in the old reference. Confirm one number and enter it under Site settings.

## Design
The look is a port of the approved reference (index-v2-standalone.html). Home sections live in `components/home/`, one file each, with static content. TODO: bind Stories to Outreach reports and Insights to latest posts from Sanity. The reference used ONE photo (Ogidan) in every image slot, so it is saved once as `public/images/photo-1.jpg`. Replace it and the Nawarudeen and Bello placeholders with real, school-specific photos.
