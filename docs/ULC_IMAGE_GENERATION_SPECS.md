# ULC Image Generation Specifications

Status: planned production pipeline. The current Codex environment can prepare prompts, slots, references, and screenshots, but no reliable local image-generation export pipeline is available here for committing 15 coherent WebP production images with desktop/tablet/mobile crops. Therefore no fake SVG, random stock, or low-quality placeholders are committed as production assets.

Related files:

- `docs/references/instagram-ulc/manifest.json`
- `docs/ULC_IMAGE_ASSET_PLAN.json`
- `docs/ULC_CHARACTER_REFERENCE_BIBLE.md`
- `src/assets/photos/production-pilot/`

## Prompt Standard

Every positive prompt must include:

- photorealistic editorial photography;
- adult language school;
- ULC visual identity;
- exact character names from the character bible;
- exact wardrobe from the character bible;
- exact location from the location set;
- action and mood;
- natural lighting;
- realistic skin texture;
- candid body language;
- premium educational campaign;
- Minsk / contemporary European urban context;
- target aspect ratio;
- safe crop requirements;
- no embedded text;
- no logos inside photo.

Every negative prompt must include:

- no illustration;
- no cartoon;
- no 3D render;
- no stick figures;
- no plastic stock smile;
- no child classroom;
- no distorted hands;
- no extra fingers;
- no duplicate people;
- no changed face;
- no inconsistent hairstyle;
- no inconsistent clothes;
- no watermark;
- no text;
- no logo;
- no oversaturated colors;
- no stretched faces;
- no warped furniture.

## Location Set

1. ULC classroom: light walls, glass, blue/red accent, whiteboard, adult group.
2. ULC reception: clean entrance, rounded counter, brand wall.
3. ULC lounge: informal waiting zone, soft seating, coffee, pair warm-up.
4. City cafe: urban Minsk cafe, natural light, first meeting dialogue.
5. Coworking space: modern open-plan work area, laptops, work introductions.
6. Minsk street: clean European city context, directions and travel tasks.
7. Airport: compact travel context, passport/suitcase, practical English.
8. Hotel reception: forms, key cards, personal information.
9. Restaurant: menus, ordering and prices.
10. Office: meeting room, job introductions.

## Crop Rules

- Desktop hero: 16:9 or 3:2.
- Tablet: 4:3.
- Mobile: 4:5.
- Portraits: 4:5.
- Speaking prompts: 1:1 or 4:3.
- Listening sequence: 4:3.

Do not stretch one source image across ratios. Generate or crop separately and check face, hands, clothing, and focal point after each crop.

## Production Pilot Pack

Minimum future pilot pack:

- dashboard-hero;
- unit-1-cover;
- lesson-1-cover;
- lesson-2-cover;
- lesson-3-cover;
- lesson-4-cover;
- lesson-5-cover;
- lesson-6-cover;
- anna-portrait;
- leo-portrait;
- maya-portrait;
- meeting-scene-wide;
- listening-scene-01;
- listening-scene-02;
- speaking-prompt-01.

Current status: slots and prompts are ready; generated binaries are not committed.
