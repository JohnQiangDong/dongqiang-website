import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mediaSchema = z.object({
  type: z.enum(['image', 'video', 'embed']),
  source: z.string(),
  poster: z.string().optional(),
  alt: z.string().optional(),
});

const updateSchema = z.object({
  date: z.coerce.date(),
  title: z.string(),
  description: z.string().optional(),
  media: z.array(mediaSchema).optional(),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    slug: z.string(),
    summary: z.string().optional(),
    subtitle: z.string().optional(),
    status: z.enum(['published', 'under-review', 'ongoing', 'prototype', 'completed', 'archive']).optional(),
    type: z.enum(['research', 'robotics', 'engineering', 'prototype', 'earlier-work']).optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    lastUpdated: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().optional(),
    tags: z.array(z.string()).default([]),
    hero: mediaSchema.optional(),
    gallery: z.array(z.object({ source: z.string(), alt: z.string(), caption: z.string() })).default([]),
    demonstrations: z.array(z.object({
      title: z.string(),
      description: z.string(),
      source: z.string(),
      webm: z.string().optional(),
      poster: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    })).default([]),
    links: z.object({
      project: z.url().optional(),
      paper: z.url().optional(),
      arxiv: z.url().optional(),
      code: z.url().optional(),
      video: z.url().optional(),
      dataset: z.url().optional(),
    }).optional(),
    authors: z.array(z.string()).optional(),
    collaborators: z.array(z.string()).optional(),
    updates: z.array(updateSchema).default([]),
    relatedProjects: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '**/*.{md,mdx,json,yaml,yml}' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number().int().optional(),
    order: z.number().int().optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    articleNumber: z.string().optional(),
    venue: z.string().optional(),
    type: z.string().optional(),
    status: z.string().optional(),
    doi: z.string().optional(),
    paper: z.string().optional(),
    arxiv: z.string().optional(),
    code: z.string().optional(),
    project: z.string().optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const journey = defineCollection({
  loader: glob({ base: './src/content/journey', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    order: z.number().int().optional(),
    project: z.string().optional(),
  }),
});

export const collections = { projects, publications, journey };
