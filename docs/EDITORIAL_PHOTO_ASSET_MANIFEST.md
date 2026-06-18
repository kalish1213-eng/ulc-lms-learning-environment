# Editorial Photo Asset Manifest

## Purpose

This manifest supports the `#student-book-reference` route for the high-density ULC digital Student Book reference lesson.

The visual goal is to move away from dashboard cards and stick-figure illustrations toward a photo-led adult learning page with editorial density, integrated exercises, audio placeholders, speaking prompts, and a clear lesson story.

## Current Assets

Stored in `src/assets/photos/editorial-reference/`:

| Asset | Current file | Role | Status |
|---|---|---|---|
| meeting-wide | `meeting-wide.png` | Large grammar/dialogue photo with Anna and Leo | Generated original ULC draft asset |
| editorial-contact-sheet | `editorial-contact-sheet.png` | 12-panel photo sprite for portraits, listening scenes, and speaking prompts | Generated original ULC draft asset |

## Intended Production Asset Set

The implementation currently uses one photo sprite to provide the required visual density. In production, the sprite should be replaced by individual optimized WebP files:

```text
src/assets/photos/editorial-reference/
  meeting-wide.webp
  anna-portrait.webp
  leo-portrait.webp
  maya-portrait.webp
  listening-scene-01.webp
  listening-scene-02.webp
  listening-scene-03.webp
  listening-scene-04.webp
  listening-scene-05.webp
  speaking-prompt-01.webp
  speaking-prompt-02.webp
  speaking-prompt-03.webp
  speaking-prompt-04.webp
```

## Asset Requirements

All final assets must:

- show recurring adult characters across the lesson;
- use one consistent photographic style;
- feel appropriate for adults aged 25-35;
- use a natural city / coworking / language club context;
- be mobile-safe with useful crops;
- contain no visible text, logos, watermarks, or brand marks;
- be original ULC assets.

## Reference Policy

The user supplied Student Book visual references in ChatGPT. They are used only to understand:

- density of useful content;
- two-column editorial composition;
- photo-to-exercise relationship;
- numbered sections;
- audio markers;
- useful phrases panels;
- exercise variety.

The reference images are **not copied into the app** and are not used as content assets. This avoids embedding third-party workbook/textbook pages into the ULC repository.

## Current Limitation

This is a visual reference lesson, not a final photo production package. The current generated assets are sufficient for layout, density, interaction, and visual direction review. Before production, replace the sprite with individually art-directed and optimized WebP images.
