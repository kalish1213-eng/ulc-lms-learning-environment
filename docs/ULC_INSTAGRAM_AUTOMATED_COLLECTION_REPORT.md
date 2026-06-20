# ULC Instagram Automated Collection Report

Date: 2026-06-20  
Branch: `design/ulc-instagram-art-direction`

## Access

- Instagram opened: Yes, initially through Browser.
- Signed-in session used: No.
- Cookie choice: optional cookies were rejected.
- Public access limitation: after individual post navigation, Instagram switched later fresh sessions to login wall. The first successful Browser session still exposed enough public-visible data for a limited internal reference set.

## Collection Summary

- Profile surfaces reviewed: bio, visible Highlights, visible feed grid.
- Visible post/Reel URLs collected: 12.
- Individual post/Reel pages opened: 12.
- Selected references: 30.
- Reference categories covered: brand graphic, student/youth caution, achievement, event, schedule, teacher, group.
- Highlights covered: 10.
- Public detail/carousel frames preserved: 7.

## Local Files

- Manifest: `docs/references/instagram-ulc/manifest.json`
- Reference screenshots: `docs/references/instagram-ulc/screenshots/`
- Reference crops: `docs/references/instagram-ulc/crops/`
- Art-direction screenshots: `docs/screenshots/ulc-instagram-art-direction/`
- Image asset plan: `docs/ULC_IMAGE_ASSET_PLAN.json`
- Character bible: `docs/ULC_CHARACTER_REFERENCE_BIBLE.md`
- Generation specs: `docs/ULC_IMAGE_GENERATION_SPECS.md`

## Production Rights

All Instagram-derived files are internal references only.

```json
"production_use_allowed": false
```

No Instagram screenshot, face, post design, caption, or UI should be used as production LMS content without explicit rights clearance.

## Image Generation Status

The current environment supports art-direction planning and screenshots, but not a reliable local export pipeline for 15 coherent generated WebP production images with desktop/tablet/mobile crops. Therefore:

- no fake SVGs were created;
- no random placeholder photos were added;
- no Instagram images were used as production assets;
- production slots and prompts were prepared for the next generation step.

## Remaining Tasks

- Obtain or connect a generation pipeline that can save local WebP files.
- Generate the 15-image coherent pilot pack.
- Review face/hand/wardrobe continuity.
- Create desktop/tablet/mobile crops for each generated image.
- Replace design-only slots with approved generated assets.
- Do not publish to production until rights and visual QA pass.
