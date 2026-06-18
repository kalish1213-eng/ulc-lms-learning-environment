# V0.2 Known Limitations

Version: v0.2 release candidate  
Status: static prototype limitations

## Static Prototype Limits

- No production backend.
- No authentication or roles beyond mock UI states.
- No server-side persistence.
- Progress is stored only in browser `localStorage`.
- Clearing browser data removes v0.2 demo progress.
- Legacy v0.1.1 progress is detected safely but not migrated into a real account model.

## Learning Content Limits

- Unit 1 content is ready for prototype implementation, but it still needs real classroom piloting.
- Short writing receives preliminary feedback and is marked for teacher review; it is not deeply scored by NLP.
- Speaking activities are placeholders for a future external speaking widget.
- No real speaking assessment is implemented.

## Media Limits

- Listening tasks store media specifications only.
- No generated or recorded audio files are included.
- No audio player fetches external assets.

## Analytics Limits

- Analytics events are logged locally only.
- Revizor/BI dashboard is a mockup.
- No server event collector, warehouse, BI model, or risk-signal automation exists yet.

## Integration Limits

- 1C, Revizor/BI, Bitrix24, Telegram, and speaking widget integrations remain mock/API-ready only.
- No external requests are made by the app.
- No API credentials or real endpoints are included.

## Live Mode Limits

- Live Lesson Mode is a teacher-facing mockup.
- No WebSocket sync.
- No real student devices.
- No real lock/unlock state propagation.
- No real shared board persistence.

## Production Readiness Limits

- Not a production LMS.
- No security review.
- No accessibility audit beyond layout sanity checks.
- No automated test suite or CI.
- No database schema.
- No certificate issuing backend.
- No admin school operations backend.

## Publication Status

V0.2 has not been published or merged. Publishing requires a separate explicit command after review.
