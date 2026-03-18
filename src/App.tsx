import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import GuideIndex from './pages/guide/GuideIndex';
import FirstTimeVisitors from './pages/guide/articles/FirstTimeVisitors';
import Croisette from './pages/guide/articles/Croisette';
import Neighborhoods from './pages/guide/articles/Neighborhoods';
import BasseCalifornie from './pages/guide/articles/BasseCalifornie';
import RueDAntibes from './pages/guide/articles/RueDAntibes';
import PalaisFestivals from './pages/guide/articles/PalaisFestivals';
import FilmFestival from './pages/guide/articles/FilmFestival';
import BeyondFestival from './pages/guide/articles/BeyondFestival';
import Beaches from './pages/guide/articles/Beaches';
import PublicVsPrivateBeaches from './pages/guide/articles/PublicVsPrivateBeaches';
import Walks from './pages/guide/articles/Walks';
import LeSuquet from './pages/guide/articles/LeSuquet';
import Harbors from './pages/guide/articles/Harbors';
import Markets from './pages/guide/articles/Markets';
import Architecture from './pages/guide/articles/Architecture';
import ForCouples from './pages/guide/articles/ForCouples';
import LongWeekend from './pages/guide/articles/LongWeekend';
import TradeFairGuests from './pages/guide/articles/TradeFairGuests';
import MoreThanGlamour from './pages/guide/articles/MoreThanGlamour';
import RivieraAround from './pages/guide/articles/RivieraAround';
import CannesVsAntibes from './pages/guide/articles/CannesVsAntibes';
import CannesVsNice from './pages/guide/articles/CannesVsNice';
import Spring from './pages/guide/articles/Spring';
import Summer from './pages/guide/articles/Summer';
import Autumn from './pages/guide/articles/Autumn';
import Winter from './pages/guide/articles/Winter';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            
            {/* Cannes Guide Routes - German */}
            <Route path="cannes-guide" element={<GuideIndex />} />
            <Route path="cannes-guide/cannes-auf-einen-blick" element={<FirstTimeVisitors />} />
            <Route path="cannes-guide/croisette" element={<Croisette />} />
            <Route path="cannes-guide/viertel-von-cannes" element={<Neighborhoods />} />
            <Route path="cannes-guide/basse-californie" element={<BasseCalifornie />} />
            <Route path="cannes-guide/rue-dantibes" element={<RueDAntibes />} />
            <Route path="cannes-guide/palais-des-festivals" element={<PalaisFestivals />} />
            <Route path="cannes-guide/filmfestival" element={<FilmFestival />} />
            <Route path="cannes-guide/ausserhalb-festivalzeit" element={<BeyondFestival />} />
            <Route path="cannes-guide/straende-cannes" element={<Beaches />} />
            <Route path="cannes-guide/oeffentliche-private-straende" element={<PublicVsPrivateBeaches />} />
            <Route path="cannes-guide/spaziergaenge" element={<Walks />} />
            <Route path="cannes-guide/le-suquet" element={<LeSuquet />} />
            <Route path="cannes-guide/haefen-yachten" element={<Harbors />} />
            <Route path="cannes-guide/maerkte" element={<Markets />} />
            <Route path="cannes-guide/architektur-villen" element={<Architecture />} />
            <Route path="cannes-guide/cannes-fuer-paare" element={<ForCouples />} />
            <Route path="cannes-guide/langes-wochenende" element={<LongWeekend />} />
            <Route path="cannes-guide/messe-kongressgaeste" element={<TradeFairGuests />} />
            <Route path="cannes-guide/mehr-als-glamour" element={<MoreThanGlamour />} />
            <Route path="cannes-guide/cote-dazur-rundum" element={<RivieraAround />} />
            <Route path="cannes-guide/cannes-antibes" element={<CannesVsAntibes />} />
            <Route path="cannes-guide/cannes-nizza" element={<CannesVsNice />} />
            <Route path="cannes-guide/cannes-fruehling" element={<Spring />} />
            <Route path="cannes-guide/cannes-sommer" element={<Summer />} />
            <Route path="cannes-guide/cannes-herbst" element={<Autumn />} />
            <Route path="cannes-guide/cannes-winter" element={<Winter />} />
            
            {/* Cannes Guide Routes - English */}
            <Route path="cannes-guide/cannes-at-a-glance" element={<FirstTimeVisitors />} />
            <Route path="cannes-guide/the-croisette" element={<Croisette />} />
            <Route path="cannes-guide/cannes-neighborhoods" element={<Neighborhoods />} />
            <Route path="cannes-guide/basse-californie" element={<BasseCalifornie />} />
            <Route path="cannes-guide/rue-dantibes" element={<RueDAntibes />} />
            <Route path="cannes-guide/palais-des-festivals" element={<PalaisFestivals />} />
            <Route path="cannes-guide/cannes-film-festival" element={<FilmFestival />} />
            <Route path="cannes-guide/beyond-festival-season" element={<BeyondFestival />} />
            <Route path="cannes-guide/beaches-in-cannes" element={<Beaches />} />
            <Route path="cannes-guide/public-vs-private-beaches" element={<PublicVsPrivateBeaches />} />
            <Route path="cannes-guide/walks-in-cannes" element={<Walks />} />
            <Route path="cannes-guide/le-suquet" element={<LeSuquet />} />
            <Route path="cannes-guide/harbors-and-yachts" element={<Harbors />} />
            <Route path="cannes-guide/markets-in-cannes" element={<Markets />} />
            <Route path="cannes-guide/architecture-and-villas" element={<Architecture />} />
            <Route path="cannes-guide/cannes-for-couples" element={<ForCouples />} />
            <Route path="cannes-guide/long-weekend" element={<LongWeekend />} />
            <Route path="cannes-guide/trade-fair-guests" element={<TradeFairGuests />} />
            <Route path="cannes-guide/more-than-glamour" element={<MoreThanGlamour />} />
            <Route path="cannes-guide/the-french-riviera" element={<RivieraAround />} />
            <Route path="cannes-guide/cannes-vs-antibes" element={<CannesVsAntibes />} />
            <Route path="cannes-guide/cannes-vs-nice" element={<CannesVsNice />} />
            <Route path="cannes-guide/cannes-in-spring" element={<Spring />} />
            <Route path="cannes-guide/cannes-in-summer" element={<Summer />} />
            <Route path="cannes-guide/cannes-in-autumn" element={<Autumn />} />
            <Route path="cannes-guide/cannes-in-winter" element={<Winter />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
