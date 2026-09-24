import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER?.toLowerCase();
const isUserOrOrganisationSite = repositoryName?.endsWith('.github.io');

export default defineConfig({
  site: process.env.SITE_URL || (owner ? `https://${owner}.github.io` : 'http://localhost:4321'),
  base: process.env.BASE_PATH || (process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrganisationSite ? `/${repositoryName}` : '/'),
  output: 'static',
});
