# System Patterns: Fiorellas Oase in Cannes II

## Systemarchitektur

```
Browser → Cloudflare Workers (SPA) → React App
                                        ├── Router (react-router-dom v7)
                                        ├── LanguageProvider (i18n Context)
                                        ├── Layout (Shared Layout)
                                        └── Pages
                                            ├── Home (Landingpage)
                                            ├── Impressum / Datenschutz
                                            └── Guide (25+ Artikel)
```

## Schlüsseltechnische Entscheidungen

### Frontend-only (Static SPA)
- Kein Backend, keine Datenbank
- Cloudflare Workers serviert statische Assets mit SPA-Fallback (`not_found_handling: "single-page-application"`)
- Alle Inhalte sind in den React-Komponenten hartcodiert

### i18n ohne Bibliothek
- Eigenes `LanguageContext` mit React Context API
- Keine externe i18n-Bibliothek (z.B. react-i18next)
- Sprachwechsel über Context Provider

### Routing
- `react-router-dom` v7 mit `BrowserRouter`
- Deutsche und englische Routen zeigen auf dieselbe Komponente
- Layout als Wrapper-Route (`<Route path="/" element={<Layout />}>`)

### Build & Deploy
- Vite für Build-Prozess
- Cloudflare Vite Plugin für Integration
- Wrangler für Deployment
- `nodejs_compat` Compatibility Flag aktiviert

## Design Patterns

### Komponentenstruktur
- **Layout** als gemeinsamer Wrapper (Header, Footer, Navigation)
- **Seiten** als eigenständige Route-Komponenten
- **Guide-Artikel** als einzelne Komponenten unter `pages/guide/articles/`

### Styling
- TailwindCSS 4 mit Vite-Plugin (`@tailwindcss/vite`)
- Utility-First CSS-Ansatz
- Globale Styles in `index.css`

### Animationen
- Motion (v12) für UI-Animationen
- Lucide React für Icons

## Kritische Implementierungspfade
1. SEO: Korrekte Meta-Tags, semantisches HTML, sitemap.xml, robots.txt
2. i18n: Konsistente Übersetzung über alle Seiten
3. Routing: SPA-Fallback auf Cloudflare Workers für client-seitiges Routing
4. Performance: Optimierte Builds via Vite + Cloudflare CDN