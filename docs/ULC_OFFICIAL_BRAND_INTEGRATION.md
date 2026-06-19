# ULC Official Brand Integration

Version: v0.2 brand reference draft
Primary brand source of truth: https://right.by/projects/brending-dlya-shkoly-ulc/
Product scope: ULC LMS Beginner English for Adults

## Source Of Truth

The official Right case for ULC is the main visual brand reference for the LMS. It defines the brand layer: Urban Language Club, a modern urban language school with bright, dynamic, friendly communication and a conversation-first learning promise.

English File / New English File remains a methodology and Student Book structure reference only:

- editorial density;
- Unit / Lesson / Section pacing;
- two-column Student Book composition where screen width allows it;
- numbered sections;
- varied exercise mechanics;
- balance of photos, learning content, and tasks.

Do not copy English File texts, dialogues, exercise wording, characters, photos, workbook pages, or page design.

## Brand Philosophy

ULC should feel like an adult, urban, conversation-first school. The interface should support learning, not become a campaign poster.

Brand qualities:

- modern;
- open;
- energetic;
- human;
- conversational;
- bright but controlled;
- easy to navigate;
- memorable without visual noise.

## Design Principles

- Use ULC blue and navy as the stable interface base.
- Use one strong accent and up to two secondary accents per screen.
- Keep Student Book pages editorial and dense.
- Use brand energy more strongly on Dashboard, Unit, Review, onboarding, and achievement surfaces.
- Keep Teacher Live professional and quiet.
- Use photographs for lesson contexts, adult characters, listening, speaking, role-play, and homework continuity.
- Use official ULC illustration assets only in appropriate motivational or system-support contexts.
- Never replace lesson people or real-life scenes with decorative brand characters.

## Color Tokens

Core tokens are defined in `src/styles/ulc-brand-tokens.css`.

Primary:

- `--ulc-blue: #3C4AF5`
- `--ulc-navy: #10265C`
- `--ulc-white: #FFFFFF`
- `--ulc-page: #F6F5F3`
- `--ulc-surface: #FFFFFF`

Accent:

- `--ulc-red: #F34040`
- `--ulc-coral: #F85F7D`
- `--ulc-pink: #F8BAD8`
- `--ulc-mint: #54C4A6`
- `--ulc-light-green: #A4F99B`
- `--ulc-yellow: #F9DD06`
- `--ulc-sky: #B0EAFF`
- `--ulc-lavender: #8D96FF`

Rules:

- Main interface: blue, navy, white.
- Red: strong brand accent, not routine error-only UI.
- Mint: success states and Vocabulary section.
- Yellow: attention, achievements, Useful phrases.
- Sky, lavender, pink, light green: secondary accents.
- Do not use all accents on one screen.
- Do not rely on color alone for state.

## Typography

Primary UI font: Wix Madefor Display.

Accent font: Dela Gothic One.

Use Dela Gothic One for:

- short emotional headings;
- Unit numbers;
- achievements;
- onboarding;
- promo-like brand inserts;
- large accent words of 2-5 words.

Do not use Dela Gothic One for:

- instructions;
- long text;
- dialogues;
- tables;
- inputs;
- all interface text.

Use Wix Madefor Display for:

- Student Book;
- navigation;
- body copy;
- instructions;
- captions;
- dialogues;
- Teacher Dashboard.

Fallback stack must remain readable if web fonts are unavailable.

## Logo Rules

Do not redraw the ULC logo with CSS, approximate letterforms, or fake marks.

Use only approved local assets placed in `src/assets/brand/logo/`.

Allowed variants:

- round ULC mark;
- text ULC mark;
- app icon;
- white mark on blue;
- white mark on red;
- blue mark on light background.

Until approved logo files are present, reference screens must show an explicit official-logo asset slot, not a fake logo.

Do not use:

- homemade square with ULC letters;
- random skewed wordmark;
- "ULC Learning" as a logo;
- "ULC Учимся" as a logo;
- pseudo logos absent from the identity.

## Photography Rules

Photos are the primary visual material for:

- Student Book;
- Course / Unit covers;
- lesson thumbnails;
- Homework connected to a lesson;
- Listening;
- Reading;
- Speaking prompts;
- role-play;
- adult profiles;
- real-life communication scenes.

Photos should show:

- adults around 25-35;
- urban life;
- cafes;
- coworking;
- language club settings;
- travel;
- work;
- live communication;
- natural emotion;
- modern real situations.

Do not use:

- plastic stock smiles;
- children in classroom scenes for adult course pages;
- inconsistent faces for the same character;
- stretched images;
- random photo styles;
- images with baked-in text.

## Official Illustration Rules

The official ULC illustration system may be used for:

- onboarding;
- achievements;
- streaks;
- badges;
- empty states;
- hints;
- notification cards;
- Review results;
- motivational blocks;
- course promotion;
- small brand inserts.

Do not use it as the main illustration for:

- Reading;
- Listening;
- adult dialogues;
- role-play situations;
- lesson character photos;
- visual lesson contexts;
- decorative noise in Teacher Live.

If official illustration assets are missing, create asset slots and a missing-assets list. Do not replace them with cheap SVG characters, random emoji, or generic mascots.

## Student Book Rules

Student Book combines:

- English File-like editorial structure;
- original ULC learning content;
- official ULC identity.

Surface:

- white or very light;
- editorial;
- dense;
- no oversized empty hero blocks.

Use brand through:

- section number color;
- thin rules;
- small ULC brand stickers;
- large typographic Unit letter or number;
- G / V / P skill labels;
- audio controls;
- feedback states;
- Review results;
- Useful phrases boxes.

Recommended balance:

- photo content: 40-50%;
- learning text and exercises: 45-55%;
- brand graphics: no more than 5-10%.

## Section Colors

- Vocabulary: mint.
- Grammar: blue.
- Pronunciation: lavender.
- Reading & Listening: sky / turquoise.
- Speaking: coral.
- Useful phrases: yellow.
- Review: navy.

Use section color for numbers, small headings, rules, selected states, audio icon, and reference boxes. Do not flood whole sections with bright fills.

## Dashboard Rules

Dashboard can express the brand more strongly than Student Book.

Use:

- official logo asset when available;
- large current-lesson photo;
- dynamic typography;
- fragments of large U / L / C letters;
- blue, red, sky, or mint;
- one short Dela Gothic accent;
- one approved illustration for streak or achievement.

Do not use:

- old stick figures;
- pastel SaaS hero;
- identical white cards only;
- random SVG;
- too many soft gradients.

## Course / Unit Rules

Use:

- large Unit number;
- photographic cover;
- ULC blue;
- dynamic geometry;
- six photographic lesson thumbnails;
- clear progress;
- speaking outcomes;
- section color markers.

Icons must not replace lesson covers.

## Homework Rules

Homework is a continuation of Student Book:

- same lesson photo;
- same section color;
- same title and characters;
- compact progress;
- editorial layout.

Brand characters may appear only in result, hint, or celebration states after homework completion.

## Teacher Live Rules

Teacher Live is a professional workspace:

- students left;
- Student Book center;
- controls right;
- lesson / timer / progress top;
- navy, white, blue, muted grey;
- section accents only where helpful.

Do not use cartoon characters, marketing posters, large decorative letters, or noisy brand graphics.

## Icon Rules

Use one open-source UI icon set consistently: Lucide or Phosphor.

Rules:

- same stroke width;
- consistent 18 / 20 / 24px sizes;
- same active state logic;
- filled icons only by explicit rule.

Official illustrations are not UI icons.

## Prohibited Solutions

- Approximate or handmade ULC logos.
- Old stick-figure assets.
- Random emoji.
- Stretched photos.
- Course page icons instead of lesson photos.
- Student Book as a brand poster.
- Dashboard that looks like a generic SaaS template.
- Dela Gothic One for long copy.
- All bright accents used at once.
- Runtime loading of logo assets from Right.

## Acceptance

Acceptable if:

- ULC is recognizable without extra explanation;
- Student Book remains dense and learnable;
- brand energy supports, not blocks, study;
- photos are not distorted;
- Dashboard, Unit, Homework, Review, and Student Book belong to one system;
- Teacher Live remains professional;
- missing official assets are declared as slots, not faked.
