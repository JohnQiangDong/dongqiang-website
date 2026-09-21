# Deployment

## Local development

```bash
npm install
npm run dev
```

Astro prints the local preview address. Before committing a significant change, run:

```bash
npm run check
npm run build
```

The production site is generated in `dist/`. Do not edit that folder directly.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and can also be started manually. It uses Astro's official GitHub Action to install dependencies, build the site, upload the Pages artifact, and deploy it.

After creating the GitHub repository:

1. Push `main` to GitHub.
2. Open **Settings → Pages** in the repository.
3. Choose **GitHub Actions** as the source if it is not already selected.
4. Check the workflow run under **Actions**.

`astro.config.mjs` derives the GitHub owner and repository base path during Actions builds, so project Pages URLs work without hard-coding a specific account name throughout the site.

## Custom domain later

When a domain is ready, add the approved hostname in `public/CNAME`, set `SITE_URL` to the canonical `https://` URL during the build, and set `BASE_PATH=/` if the site previously used a repository subpath. Configure and verify DNS through the domain provider and GitHub Pages. Keep domain-specific settings isolated; do not rewrite links across page content.

## Other static hosts

The site is a standard static Astro build. Another provider can publish `dist/`; set `SITE_URL` and, when needed, `BASE_PATH` in that provider's build environment.
