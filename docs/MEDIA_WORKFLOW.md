# Media workflow

Website media follows one deliberate path:

```text
raw media
  → materials/ or materials-local/
  → review and selection
  → optimisation and meaningful renaming
  → public/media/
  → website
```

## 1. Store source material

Use `materials/<project-slug>/` for source files that can safely be tracked while a page is being developed. Use `materials-local/<project-slug>/` for camera originals, very large video, duplicates, temporary exports, private work, or anything that should not be pushed to GitHub.

Files in either location are not approved for publication. Never link a page directly to `materials/`.

## 2. Review before selection

Confirm project ownership, publication permission, confidentiality, technical accuracy, dates, captions, and whether people or private information appear in the frame. Remove duplicates from the candidate set without deleting raw originals.

## 3. Prepare web-ready copies

- Keep the original aspect ratio unless a specific crop has been approved.
- Choose a sensible resolution and quality for the page context; keep enough detail for technical interpretation.
- Prefer modern web formats when they preserve the needed quality and browser support.
- Trim selected video clips and use efficient codecs. Keep final clips reasonably small, but do not destroy important motion or experimental detail to meet an arbitrary number.
- Add a poster image for video when it improves loading and comprehension.
- Use descriptive kebab-case names such as `so101-pick-place-front-view.mp4`.
- Do not rename or destructively edit the raw source file automatically.

## 4. Publish only selected assets

Copy approved derivatives into `public/media/projects/<project-slug>/`. Add accurate alt text for meaningful images, useful captions for technical media, and credits where required. Confirm the built site contains the derivative—not the raw source folder.

Large-scale video hosting or a CDN can be introduced later. The project content model stores media type and source independently, so hosting can change without rewriting the project story. Git LFS is intentionally not included until a demonstrated need exists.
