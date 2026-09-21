# AGENTS.md

## Repository purpose

This repository contains Dong Qiang's long-term personal research and engineering website. It is a durable technical platform, not a temporary PhD profile. Projects are living technical stories that may accumulate prototypes, experiments, videos, publications, code, datasets, and later updates.

## General behaviour

When editing this repository:

- Preserve the existing visual identity and do not redesign unrelated pages.
- Make the smallest coherent change that satisfies the request.
- Do not remove earlier project history when adding new work.
- Never invent research results, publication status, dates, awards, collaborators, authors, technical specifications, or biographical claims.
- Preserve author order and verified citation details exactly.
- Read the available source material before writing project claims. Treat notes as provisional unless a reliable source verifies them.
- Distinguish published facts from private drafts and provisional notes.
- Do not expose private, personal, embargoed, copyrighted, or confidential material.
- Never assume that everything in a `materials/` folder should be published.
- Keep the site static-first, lightweight, semantic, responsive, accessible, and understandable without unnecessary client-side JavaScript.
- Keep projects and publications as separate content concepts; link them instead of duplicating records.

## Content hierarchy

- `materials/`: tracked, project-specific source material for review. It may be incomplete, unstructured, or unsuitable for publication. It is never served by the site.
- `materials-local/`: ignored local-only material such as very large videos, camera originals, temporary exports, duplicates, or private working files. Only its README is tracked.
- `src/content/`: reviewed structured metadata and authored page content. Treat this as publishable source text.
- `public/media/`: selected, processed, web-ready assets that are intentionally published. Copy assets here only after review.

The required media flow is: raw source material → review and selection → optimisation and meaningful renaming → `public/media/` → website.

## Project workflow

For project work:

1. Read this file and the relevant project's README in `materials/<project-slug>/`.
2. Inventory the available material without modifying raw originals.
3. Identify missing, ambiguous, conflicting, sensitive, or unverified information.
4. Implement only the requested page or project change.
5. Select only media that is appropriate and safe to publish.
6. Optimise and copy selected media into `public/media/projects/<project-slug>/` using descriptive kebab-case filenames.
7. Update the structured entry in `src/content/projects/` and its page as needed.
8. Preserve existing updates and project history; append or revise only with evidence.
9. Run `npm run check` and `npm run build` for significant changes.
10. Summarise exactly what changed, what was verified, and what remains uncertain.

The `updates` array is historical data. Never replace it wholesale merely to add a new update. If `lastUpdated` is displayed, derive it from verified update dates where practical or update it consistently.

## Page-by-page scope

If the user says, “Now let's build the VEX page,” inspect `materials/vex-robotics/` and work mainly on the matching content and page. Do not redesign the home page, MR haptic page, publication system, or global styles unless a genuinely reusable improvement is required.

If the user asks for the TMECH or MR haptic actuator page, inspect `materials/mr-haptic-actuator/` first and keep the change scoped there. Apply the same rule to every project folder.

Project slugs and directories use lowercase kebab-case. A growing project remains one page; do not create disconnected `v1`, `v2`, or `v3` pages for normal project evolution.

## Media safety

Before publishing any media:

- Confirm that it belongs to the correct project and that permission to publish is clear.
- Check for confidential information, private personal information, faces, names, screens, metadata, and background details.
- Avoid duplicates and unreasonably large files.
- Use descriptive kebab-case filenames for final assets; do not automatically rename raw user files.
- Add accurate alt text for meaningful images and captions for technical media.
- Preserve aspect ratio and avoid destructive edits to originals.
- Keep high-resolution originals and very large raw videos in `materials-local/` when they should not enter Git.
- Do not add Git LFS unless the user has a demonstrated need and explicitly agrees.

## Content models

Content collections are defined in `src/content.config.ts`. Keep fields optional when information is genuinely unavailable. Extend enums deliberately when a real project requires a new value. Publication entries should reference a project slug rather than duplicate project content; project pages should query or link those records where appropriate.

Page sections are optional. Do not add empty “Results,” “Publications,” or “Code” sections to projects that do not have them.

## Build and verification

Before finishing a significant change:

- Run `npm run check` and `npm run build`.
- Fix errors introduced by the change.
- Verify affected routes and important asset references.
- Confirm no raw material is reachable from the built `dist/` output.
- Do not claim success when verification failed; report the exact limitation.

Do not manually edit generated output in `dist/`. Source files are the source of truth.

## Git and deployment

- Prefer small logical commits.
- Do not force-push, rewrite history, delete branches, or delete tags unless explicitly instructed.
- Do not commit credentials, local `.env` files, private material, or generated build output.
- GitHub Pages deployment is defined in `.github/workflows/deploy.yml`.
- Keep `astro.config.mjs` host-agnostic. Deployment-specific `site` and `base` values are supplied by the workflow so a future custom domain does not require widespread edits.
- Do not manually modify the generated GitHub Pages artifact.
