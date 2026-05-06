# ACT Staff Hub Demo — Static GitHub Pages Version

This version is designed to work on GitHub Pages without a build step.

It uses only three root files:

- `index.html`
- `styles.css`
- `script.js`

There is no React, Vite, Tailwind, npm install, or GitHub Actions requirement.

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder directly to the repository root.
   - `index.html` must be at the top level of the repository.
   - Do not upload the outer ZIP folder as a folder inside the repository.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/root`
5. Save.
6. Wait a minute or two, then open the GitHub Pages URL.

## Why the previous version may have shown a blank page

The earlier package was a React/Vite source project. GitHub Pages is static hosting, so it does not automatically run `npm install` or `npm run build` unless a GitHub Actions workflow is configured. If the source files are served directly, the browser may try to load unbuilt JSX files and show a blank page.

This static version avoids that issue.

## Editing content

Most content is in `script.js`.
Visual styling is in `styles.css`.

## Review document

The `docs` folder includes an editable review guide in Word and Markdown format.
