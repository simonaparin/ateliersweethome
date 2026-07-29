# Images For Atelier Sweet Home

Use only real photographs for the production site.

Do not add:

- AI images;
- stock photos;
- Blender renders;
- fake project visuals;
- photos from other contractors.

## Folder Structure

```text
/public/images/reconstruction/hero/
/public/images/reconstruction/projects/
/public/images/reconstruction/process/
/public/images/reconstruction/profile/
```

Future directions should use the same logic:

```text
/public/images/roof/hero/
/public/images/roof/projects/
/public/images/roof/process/
/public/images/summer-kitchen/hero/
/public/images/summer-kitchen/projects/
/public/images/summer-kitchen/process/
/public/images/bath/hero/
/public/images/bath/projects/
/public/images/bath/process/
```

Do not edit or overwrite original phone files. Keep originals outside the site project, then copy selected and compressed files here.

For photo meaning and placement, use:

```text
/PHOTO_SLOTS_RU.md
/NEW_PHOTO_INTAKE_RU.md
```

## Hero

Folder:

```text
/public/images/reconstruction/hero/
```

Needed:

- one strong real photo of an old house or reconstruction object;
- horizontal frame is best;
- enough empty space for page composition;
- no heavy filters.

Recommended file:

```text
old-house-reconstruction-hero.webp
```

Recommended size:

- 1800-2400 px wide;
- WebP or JPG;
- under 500 KB if possible after compression.

Update the path in:

```text
/content/ru/reconstruction.json
```

## Projects

Folder:

```text
/public/images/reconstruction/projects/
```

Needed for each real case:

- before photos;
- process photos;
- detail photos;
- after photos;
- captions that explain what happened.

Recommended names:

```text
roof-before-01.webp
roof-rafters-process-01.webp
roof-after-01.webp
old-house-wall-detail-01.webp
```

## Process

Folder:

```text
/public/images/reconstruction/process/
```

Use for construction details:

- rafters;
- walls;
- damaged wood;
- repaired elements;
- tools and materials;
- visible decisions.

Do not delete "ugly" process photos. They are useful because they prove real work.

## Profile

Folder:

```text
/public/images/reconstruction/profile/
```

Needed:

- one real photo of the master working;
- not a formal corporate portrait;
- hands, material, tool, object context are better than a staged pose.

Recommended file:

```text
master-working-01.webp
```

Update the path in:

```text
/content/ru/reconstruction.json
```

## Formats

Best for site:

- WebP;
- AVIF;
- compressed JPG if needed.

Recommended sizes:

- hero photos: 1800-2400 px wide;
- gallery photos: 1200-1800 px wide;
- detail thumbnails: 900-1400 px wide;
- target weight: usually 150-500 KB per photo after compression.

Avoid for site:

- TIFF;
- RAW;
- uncompressed PNG;
- original heavy phone videos.

## Videos

Do not store long raw videos directly on the production server.

For the site:

- cut short clips if needed;
- compress to MP4 or WebM;
- consider YouTube, Vimeo or a dedicated video service for longer videos.

## Naming

Use boring names that explain the photo:

```text
old-house-stone-facade-01.webp
roof-rafters-process-01.webp
roof-profile-after-01.webp
summer-kitchen-microcement-detail-01.webp
summer-kitchen-canopy-6x6-01.webp
master-working-wood-01.webp
```

Avoid:

```text
IMG_8831.webp
photo-final-new.webp
best.webp
```

## Captions And Truth

Before a photo gets a caption, confirm:

- what is literally visible;
- whether it is our completed work, process, inspection, or object material;
- what role Atelier Sweet Home had;
- whether the location can be named;
- whether price, size, timing or before/after status are confirmed.
