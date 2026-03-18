export default function Impressum() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-8">
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <div className="prose prose-sand max-w-none text-muted-foreground">
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          Fiorella [Nachname bitte ergänzen]<br />
          Max Lingner Straße 17<br />
          13189 Berlin
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Registrierungsnummer (Cannes)</h2>
        <p>
          Lizenznummer: 06029025760SB
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Kontakt</h2>
        <p>
          Telefon: 0176 19690707<br />
          E-Mail: cannes.fiorella@gmail.com
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Redaktionell verantwortlich</h2>
        <p>
          Fiorella [Nachname bitte ergänzen]<br />
          Max Lingner Straße 17<br />
          13189 Berlin
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
            https://ec.europa.eu/consumers/odr/
          </a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>

        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
