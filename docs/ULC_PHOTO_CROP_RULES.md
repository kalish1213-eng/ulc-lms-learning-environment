# ULC Photo Crop Rules

Photos are the main visual layer for adult Beginner English learning contexts.

## CSS Utilities

Use these patterns:

```css
.photo-crop {
  position: relative;
  overflow: hidden;
}

.photo-crop img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: var(--focus-x, 50%) var(--focus-y, 50%);
}

.photo-contain img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}
```

## Aspect Ratios

| Slot | Ratio |
|---|---|
| Lesson hero | 3 / 2 |
| Course thumbnail | 16 / 9 |
| Editorial image | 4 / 3 |
| Portrait | 4 / 5 |
| Mobile hero | 4 / 5 |
| Listening sequence | 4 / 3 |
| Speaking grid | 1 / 1 or 4 / 3 |

## Focal Points

Production photo metadata should store:

- `asset_id`;
- `desktop_crop`;
- `tablet_crop`;
- `mobile_crop`;
- `focus_x`;
- `focus_y`;
- `alt_ru`;
- `usage_zone`.

## Do Not Use

- `background-size: 100% 100%`;
- arbitrary width and height that distort photos;
- one horizontal crop inside a vertical mobile hero;
- photos with text baked into the image;
- inconsistent faces for one lesson character;
- stretched low-resolution images.
