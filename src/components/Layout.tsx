import { Anchor } from 'lucide-react';
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <Anchor className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold text-foreground tracking-tight">Fiorella's Cannes Oasis</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="/#apartment" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Das Apartment</a>
              <a href="/#galerie" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Galerie</a>
              <a href="/#lage" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Lage</a>
              <a href="/#bewertungen" className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm">Bewertungen</a>
            </div>
            <a 
              href="mailto:cannes.fiorella@gmail.com" 
              className="btn-primary"
            >
              Anfragen
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-card py-12 border-t border-border mt-auto">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Anchor className="w-5 h-5 text-primary" />
              <span className="font-bold text-foreground">Fiorella's Cannes Oasis</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors font-medium">Impressum</Link>
              <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors font-medium">Datenschutz</Link>
            </div>
            <p className="text-xs text-muted-foreground font-medium">© {new Date().getFullYear()} Fiorella's Cannes Oasis. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
