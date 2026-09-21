# Content workflow

Structured, reviewed content belongs in `src/content/`. Raw notes and source files do not.

## Add a project

1. Choose a stable lowercase kebab-case slug.
2. Create `materials/<slug>/README.md` and project-specific source-material folders.
3. Review the supplied facts and record uncertainties; do not fill gaps by guessing.
4. Add `src/content/projects/<slug>.md` with the verified fields supported by `src/content.config.ts`.
5. Add a project page only when there is enough material for a coherent story.
6. Select and process publishable media into `public/media/projects/<slug>/`.
7. Run `npm run check` and `npm run build`.

Optional fields should stay absent when unknown. Do not add empty links, fake dates, or placeholder collaborators.

## Update a project

Read the existing content and the relevant material folder first. Preserve previous history. Add verified information to the same project entry and page rather than creating versioned project pages.

For a dated milestone, append an item to `updates`:

```yaml
updates:
  - date: 2026-09-01
    title: A verified milestone title
    description: Optional verified context.
    media:
      - type: video
        source: /media/projects/project-slug/example.webm
        poster: /media/projects/project-slug/example-poster.jpg
        alt: Description of the visible demonstration.
```

Use an exact date only when it is known. Keep updates ordered consistently and preserve earlier entries.

## Add a publication

Create one record in `src/content/publications/` using verified citation information. Preserve author order. Fields such as year, venue, DOI, paper, arXiv, code, and thumbnail may remain absent.

To connect a publication to a project, set `project` to the matching project slug. Query that publication record from page templates instead of copying the citation into several content files.

## Add content without changing layouts

Prefer changing a Markdown content entry over editing a page component. Change layouts only when the new information requires a reusable presentation pattern. A content-only update should not trigger a redesign of unrelated pages.
