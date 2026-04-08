# Tech Context: Fiorellas Oase in Cannes II

## Technologien

### Frontend
- **React 19** – UI-Bibliothek
- **TypeScript 5.8** – Typsicherheit
- **Vite 6** – Build-Tool & Dev-Server
- **TailwindCSS 4** – Utility-First CSS Framework (via `@tailwindcss/vite` Plugin)
- **react-router-dom 7** – Client-seitiges Routing
- **Motion 12** – Animationen (ehemals Framer Motion)
- **Lucide React** – Icon-Bibliothek

### Deployment
- **Cloudflare Workers** – Hosting & CDN
- **Wrangler 4** – CLI für Cloudflare Deployment
- **@cloudflare/vite-plugin** – Vite-Integration für Cloudflare

### API (optional)
- **@google/genai 1.29+** – Google Gemini AI SDK
- `GEMINI_API_KEY` als Umgebungsvariable in `.env.local`

## Development Setup

### Voraussetzungen
- Node.js (aktuelle LTS-Version)
- npm

### NPM Scripts
| Script | Befehl | Beschreibung |
|---|---|---|
| `dev` | `vite --port=3000 --host=0.0.0.0` | Dev-Server auf Port 3000 |
| `build` | `vite build` | Produktions-Build |
| `preview` | `npm run build && wrangler dev` | Lokaler Wrangler-Test |
| `deploy` | `npm run build && wrangler deploy` | Deployment auf Cloudflare |
| `clean` | `rm -rf dist` | Build-Verzeichnis löschen |
| `lint` | `tsc --noEmit` | TypeScript-Typprüfung |

### Umgebungsvariablen
- `GEMINI_API_KEY` – Optional, für Gemini API-Features
- `DISABLE_HMR` – Auf `'true'` setzen um HMR zu deaktivieren (AI Studio)

## Technische Constraints
- SPA-Fallback auf Cloudflare Workers (`not_found_handling: "single-page-application"`)
- `nodejs_compat` Compatibility Flag aktiviert
- Path-Alias `@` zeigt auf Projekt-Root
- Kein Server-Side Rendering – reine Client-Side App

## Abhängigkeiten

### Production
- `@google/genai`, `@tailwindcss/vite`, `@vitejs/plugin-react`, `dotenv`, `express`, `lucide-react`, `motion`, `react`, `react-dom`, `react-router-dom`, `vite`

### Development
- `@cloudflare/vite-plugin`, `@types/express`, `@types/node`, `autoprefixer`, `tailwindcss`, `tsx`, `typescript`, `vite`, `wrangler`

## Tool-Nutzung
- **Git** für Versionierung
- **GitHub** (`LitttleLions/fiorella.cannes.oasis.simple`) für Remote-Repository
- **Cloudflare Dashboard** für Deployment-Management