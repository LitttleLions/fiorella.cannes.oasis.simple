# Agent Instructions: Fiorella Oasis Cannes Basse-Californie

This file serves as persistent memory and instructions for any AI agents operating in this repository. 

## Project Architecture
- Project: Fiorella Oasis Cannes Basse-Californie
- Stack: React + Vite + TailwindCSS + TypeScript
- Structure: SPA with multiple guided contents and dynamically injected SEO (JSON-LD).

## Deployment Protocol (CRITICAL)
- **Host**: Cloudflare Pages (NOT Cloudflare Workers). 
- **Deployment Method**: This project is connected directly to GitHub for Continuous Deployment (CI/CD).
- **Rule**: NEVER use `wrangler deploy` or `npm run deploy` (unless the script is explicitly rewritten for standard pages deploy) to push live code to the production instance. 
- **Correct Flow**: You MUST deploy changes by staging, committing, and pushing code to the `main` branch. 
  ```bash
  git add .
  git commit -m "feat/fix: your commit message"
  git push
  ```
  Cloudflare Pages will automatically catch the push and execute the build (`vite build`) and deploy the code to `fiorella-cannes-oasis.pages.dev`.

## Brand Guidelines
- Title/Brand: "Fiorella Oasis Cannes Basse-Californie"
- Communication: WhatsApp over pure phone calls. Ensure the link points to `https://wa.me/33757690837` for direct chat instead of standard phone dials. E-Mail: `cannes.fiorella@gmail.com`.
