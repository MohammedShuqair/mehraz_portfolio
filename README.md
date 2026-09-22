# Mehraz Portfolio

This project is a simple portfolio website for Mehraz, built as a hands-on web development practice project. It is also a space to explore current vibe-coding trends while keeping the work grounded in Agile practices through small, iterative improvements, quick feedback, and continuous refinement.

## Current Status

Phase 1 currently uses a root-level static website scaffold:

- index.html
- styles.css
- script.js

This structure is compatible with GitHub Pages when serving from the `main` branch root.

## Run Locally

Serve the repository root with a static server, then open the local URL in your browser.

Example:

```bash
/Library/Developer/CommandLineTools/usr/bin/python3 -m http.server 4173
```

Then visit: `http://127.0.0.1:4173/`

## GitHub Pages Deployment (Main / Root)

This repository is configured to be served from the repository root.

1. Push the latest changes to the `main` branch.
2. Open repository `Settings` on GitHub.
3. Open `Pages` in the left sidebar.
4. Under `Build and deployment`, set:
	- `Source`: Deploy from a branch
	- `Branch`: `main`
	- `Folder`: `/ (root)`
5. Save and wait for the Pages deployment to complete.

Your site URL will be shown on the same GitHub Pages settings screen after deployment.

## Pages Readiness Notes

- Asset paths are relative (`styles.css`, `script.js`), so the site works when hosted from repository root.
- No backend or build step is required.
- The homepage entry point is `index.html` in the root.

## Phase 1 Verification Checklist

- Site runs locally without errors.
- Homepage content renders on desktop and mobile.
- Navigation links work (Home implemented; other sections are placeholders in Phase 1).
- GitHub Pages can build and serve from `main` branch root.
