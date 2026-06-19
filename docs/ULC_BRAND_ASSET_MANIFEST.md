# ULC Brand Asset Manifest

Primary source: https://right.by/projects/brending-dlya-shkoly-ulc/

This manifest defines which brand assets may be used in ULC LMS reference screens and future implementation.

## Runtime Rule

The app must not load logo or illustration assets from `right.by` at runtime. Production assets must live locally in the project after approval.

## Logo Assets

Local folder: `src/assets/brand/logo/`

Current status: asset slots only. No approved binary logo files are present in the repository yet.

Required approved variants:

| Asset ID | Required File | Purpose | Status |
|---|---|---|---|
| logo_round_blue | `ulc-logo-round-blue.svg` or approved PNG | Header on light backgrounds | Missing |
| logo_round_white_on_blue | `ulc-logo-round-white-on-blue.svg` or approved PNG | Dark blue header / app shell | Missing |
| logo_round_white_on_red | `ulc-logo-round-white-on-red.svg` or approved PNG | Red brand panels | Missing |
| logo_text_blue | `ulc-logo-text-blue.svg` or approved PNG | Wide dashboard and documents | Missing |
| app_icon | `ulc-app-icon.svg` or approved PNG | Mobile / favicon / app preview | Missing |

Until these files are supplied, design reference screens must render an "official logo asset slot" and must not approximate the logo with CSS.

## Photography Assets

Allowed current project assets:

| Asset | Path | Use | Status |
|---|---|---|---|
| Editorial meeting wide | `src/assets/photos/editorial-reference/meeting-wide.png` | Student Book, Unit cover, Homework continuity | Available |
| Editorial contact sheet | `src/assets/photos/editorial-reference/editorial-contact-sheet.png` | Adult profile, listening sequence, lesson thumbnails | Available |

Rules:

- Use `object-fit: cover`.
- Keep focal points in manifest or CSS variables.
- Do not stretch.
- Use adult, urban, communication-focused scenes.

## Illustration Assets

Official ULC illustration assets are not yet present locally.

Required future categories:

| Category | Use | Status |
|---|---|---|
| Brain character | Review result, placement test result | Missing |
| Cat | Vocabulary streak / Review motivation | Missing |
| Hands | Celebration / completion | Missing |
| Gift | Achievement / reward | Missing |
| Numbers | Score and progress highlights | Missing |
| Language symbols | Badges and language cards | Missing |

Existing `src/assets/illustrations/*.svg` files are legacy prototype illustrations. They must not be used in official brand reference screens.

## Icons

Current app icons are inline outline SVGs in `src/static-app.js`. Future production work should standardize on Lucide or Phosphor, but do not mix both.

## Missing Asset List

- Approved ULC logo variants.
- Approved ULC app icon.
- Official ULC illustration constructor exports.
- Crop manifest for production lesson photography.
- Teacher Live and dashboard approved photo set.
