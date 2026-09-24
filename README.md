# Dong Qiang — Personal Research Website

This repository is the long-term source for Dong Qiang's research and engineering website at [https://johnqiangdong.github.io/](https://johnqiangdong.github.io/). It is designed for gradual, project-by-project development while keeping research claims, publication records, and public media traceable to reviewed source material.

## Stack

- Astro
- TypeScript
- Semantic HTML and CSS
- Minimal client-side JavaScript
- GitHub Actions and GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Run the validation and production build before committing a significant change:

```bash
npm run check
npm run build
```

## Repository map

- `src/pages/` — routes and page-level composition.
- `src/layouts/` and `src/components/` — shared presentation.
- `src/content/` — reviewed project, publication, and journey records.
- `public/media/` — selected web-ready media that is intentionally published.
- `public/documents/` — approved public documents such as a future CV.
- `materials/` — project-specific raw source material for review; not published automatically.
- `materials-local/` — ignored large, private, duplicate, or temporary source material.
- `docs/` — content, media, project-page, style, and deployment workflows.

## Content and media principle

Raw material does not become public merely because it is inside the repository. The workflow is:

```text
materials/ or materials-local/
        ↓ review and selection
        ↓ optimisation and descriptive renaming
public/media/
        ↓
website
```

Place material for an existing project in its matching `materials/<project-slug>/` folder. Add future projects with a lowercase kebab-case slug, a project material README, and a structured entry only when verified information is available.

## Deployment

`.github/workflows/deploy.yml` builds and deploys the user site from the `johnqiangdong.github.io` repository after a push to `main`, or by manual workflow dispatch. Astro detects the `.github.io` repository name and builds with the root base path `/` and canonical origin `https://johnqiangdong.github.io`. See `docs/DEPLOYMENT.md` for setup and custom-domain notes.

## Maintainer guidance

Future Codex sessions must read `AGENTS.md` before making changes. It defines content integrity, media safety, page scope, build verification, and Git rules.
