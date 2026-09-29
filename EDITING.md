# Customer Editing Guide — ivory-waltz

This template is an elegant ivory and blush Nikah invitation featuring multi-layer parallax depth animation (swaying couple), word-by-word animated invitation text, countdown timer, event schedule, Google Maps link, and Google/Apple calendar integration.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///Users/amnas/Desktop/h2track/ivory-waltz/editable/wedding-data.js)

### Couple & Families
Edit `couple` in `editable/wedding-data.js`:
- `bride` & `groom`: First names (e.g. `"Ayesha"`, `"Ibrahim"`)
- `brideFull` & `groomFull`: Full names (e.g. `"Ayesha Rahman"`, `"Ibrahim Hassan"`)
- `brideParents` & `groomParents`: Parents/lineage lines
- `hashtag`: Wedding hashtag (e.g. `"#AyeshaWedsIbrahim"`)
- `monogram`: Couple initials or monogram (e.g. `"A · I"`)

### Wedding Date & Time
Edit `wedding` in `editable/wedding-data.js`:
- `dateISO`: Event timestamp in ISO 8601 (`"YYYY-MM-DDTHH:MM:SS+05:30"`). Drives live countdown timer and calendar links.
- `dateLabel`: Formatted date label (e.g. `"Sunday, 14th March 2027"`)
- `timeLabel`: Time string (e.g. `"Nikah at 4:00 PM"`)

### Venue & Map
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (e.g. `"The Ivory Courtyard"`)
- `address`: Full street address
- `mapsQuery`: Query passed to Google Maps search

### Religious Verse
Edit `verse` in `editable/wedding-data.js`:
- `arabic`: Arabic calligraphy or Basmala
- `text`: English translation or heartfelt invitation message

### Events & Day Schedule
Edit `events` and `program` arrays in `editable/wedding-data.js`:
- `events`: Array of ceremony cards (`name`, `date`, `dayNum`, `monthLabel`, `time`, `venue`, `note`)
- `program`: Order of service timeline (`name`, `time`)

### Section Visibility Toggles
Edit `sections` in `editable/wedding-data.js`:
- `events`, `venue`, `countdown`: Set boolean flags (`true` / `false`) to show or hide sections.
- `photos`: `false` — the standalone couple-photo section was removed at the customer's
  request. The couple photo appears once, in the circular hero frame on page 1
  (`images.couple`).

### Music
`music` in `editable/wedding-data.js` drives the track (`audio`, `title`, `film`).
The `<audio>` element uses the native `loop` attribute, so the song restarts gaplessly at
the end of the track. Keep the audio file trimmed to the song itself — trailing silence
would be audible in the loop.

### Layer Images & Parallax Assets
Replace image files directly in `editable/assets/` or update `images`:
- `couple`: Parallax couple silhouette (`editable/assets/layer-couple.png`)
- `background`: Parallax background scene (`editable/assets/layer-01-background.png`)
- `shadows`: Ambient shadow layer (`editable/assets/layer-02-shadows.png`)
- `groom`: Groom cutout layer (`editable/assets/layer-03-groom.png`)
- `bride`: Bride cutout layer (`editable/assets/layer-04-bride.png`)
- `bouquet`: Floral bouquet accent (`editable/assets/layer-05-bouquet.png`)
- `heroComposite`: Fallback open-graph composite preview (`editable/assets/hero-composite.jpg`)

---

## Rules for Future Agents

1. Make customer content edits in `editable/wedding-data.js` and replace layers in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless requested.
3. Keep ISO date strings with proper timezone offsets (e.g. `+05:30`).
4. Validate changes with `node --check editable/wedding-data.js`.
