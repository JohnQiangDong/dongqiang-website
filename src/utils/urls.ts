/** Resolve public assets and internal routes under any deployment base path. */
export function siteUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
