# Course Image Prompts (Nano Banana 2)

Use these prompts to generate consistent section imagery for the microsite.

## Global style settings (apply to every prompt)

- Aspect ratio: **16:9** (1600x900 or larger)
- Visual style: modern editorial illustration, high clarity, no photo realism
- Palette: Coursera-like blues and neutrals (`#0056D2`, deep navy, soft light blue)
- Composition: one strong focal concept, clean negative space, no clutter
- Text in image: **none**
- Avoid: logos, UI screenshots, watermarks, tiny text blocks, overly abstract noise

Save generated images into:

- `public/images/course/core-concepts.webp`
- `public/images/course/understanding-automation.webp`
- `public/images/course/building-skill-set.webp`
- `public/images/course/toast-example.webp`
- `public/images/course/closing-next-steps.webp`

The page currently points at placeholder `.svg` files. Replace file names in `src/pages/LandingPage.tsx` to use these `.webp` files when ready.

---

## 1) Core Concepts

**Prompt**

Create a clean editorial illustration showing a layered system for AI collaboration: Agent executes work, Rules shape behavior, Skills package domain knowledge, and MCP connects external tools/data. Show these as distinct connected layers or cards with directional flow from bottom context to top execution. Use deep navy background with light blue accents and subtle glow lines. Keep the composition structured and readable with strong hierarchy and no text.

---

## 2) Understanding Automation

**Prompt**

Design a decision-tree style illustration that represents deciding whether to automate a workflow. Include branching checkpoints: repeatability, available context, known external patterns, mapped process stages, and human review points. Visual language should feel practical and analytical, with clear paths and nodes. Use a modern blue palette, soft gradients, and high contrast. Keep it minimal and professional with no text labels.

---

## 3) Building a Cursor Skill Set

**Prompt**

Create a workflow illustration showing iterative skill-building: collect context, choose tool type (prompt/rule/skill), connect external data, generate first pass, review/refine loop, and system improvement. Emphasize cyclical iteration and learning over one-shot output. Style should be clean and product-oriented with layered cards, arrows, and loop indicators. Use navy and Coursera blue tones with subtle depth and no text.

---

## 4) Worked Example: Toast Documentation

**Prompt**

Create a case-study style visual for a documentation workflow: repeated friction, first standardized draft, quality review loop, and generalized reusable method. Show progression from messy repeated work to organized repeatable system. Include visual motifs for UI component states and documentation blocks, but no literal product logos. Use polished blue-toned editorial style, medium detail, and no text.

---

## 5) Closing: What to Build Next

**Prompt**

Create a roadmap-style illustration emphasizing “start with one workflow, then iterate.” Show a forward path with staged milestones: choose one recurring task, define quality bar, capture context, generate, review, improve system. Visual tone should feel optimistic, practical, and focused. Use a clean blue gradient palette with a clear path motif and no text.

---

## Hosting and file management notes

- Anything in `public/` is statically hosted by Vite at site root (`/images/...`).
- Prefer `webp` for generated art (good quality/size).
- Keep source exports in a local folder like `assets/generated/course-images/` for versioning outside runtime.
- If you want CDN hosting later, move files to your storage/CDN and replace URLs in `sectionMedia` in `LandingPage.tsx` (section 4 uses video sources).
- Section 4: the page embeds `Section-4-video.mp4` (H.264). Generate it from the MOV with `npm run encode:section4-video` when `ffmpeg` is installed.
