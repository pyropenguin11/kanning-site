
# kanning-site

## Local development

This project now runs on the Vite toolchain. Make sure your Node runtime is at least `20.19.0` (or any newer 22.x release). An easy setup is:

```bash
nvm install 20.19.0
nvm use 20.19.0
npm install
```

From there:

- `npm start` spins up the Vite dev server (opens the browser automatically).
- `npm run build` outputs the production bundle to `dist/`.
- `npm run preview` serves the production build locally for a quick smoke test.

If you previously relied on Create React App scripts, the equivalents are now handled by Vite under the hood.
