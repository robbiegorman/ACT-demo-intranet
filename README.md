# ACT Staff Hub Demo

A lightweight clickable prototype for an Austin Coming Together internal staff hub / intranet. The demo is designed to help stakeholders review structure, content, and navigation before rebuilding the concept in Google Sites or another intranet tool.

## What is included

- A React/Vite demo app
- Plain CSS styling, no Tailwind or shadcn dependency
- Inline SVG icons, no lucide-react dependency
- Responsive sidebar/mobile navigation
- Draft intranet sections for Strategy, Special Projects, Workstreams, Partners, Data & Learning, Communications, Funding & Systems, and Operations
- A Markdown critique guide in `docs/ACT_Staff_Hub_Review_Guide.md`

## Local setup

1. Install Node.js.
2. Open this folder in VS Code or your terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Build for production

```bash
npm run build
```

The compiled site will be created in the `dist` folder.

## Deploying to GitHub Pages

A simple option is to use Vite's standard GitHub Pages workflow:

1. Push this folder to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Choose GitHub Actions as the source.
4. Add a Vite deployment workflow, or use a static hosting service like Netlify or Vercel.

## Editing content

Most of the prototype content lives in:

```text
src/App.jsx
```

Visual styling lives in:

```text
src/styles.css
```

## Notes

This is a prototype, not a final intranet. In a real Google Sites build, the cards would link to Google Docs, Sheets, Forms, Calendars, and Drive folders.
