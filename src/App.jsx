import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { Albums, Playlists, Songs, Trending } from "./components/browse";
import {
  History as HistoryLib,
  Albums as AlbumsLib,
  Podcasts as PodcastsLib,
  Artists as ArtistsLib,
  Songs as SongsLib,
} from "./components/my-library";
import Music from "./components/navbar/Music";
import Podcasts from "./components/navbar/Podcasts";

function App() {
  return (
    <main className="bg-green-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route path="browse/songs" element={<Songs />} />
              <Route path="browse/albums" element={<Albums />} />
              <Route path="browse/trending" element={<Trending />} />
              <Route path="browse/playlists" element={<Playlists />} />
              <Route path="browse/charts" element={<Trending />} />
              <Route path="library/history" element={<HistoryLib />} />
              <Route path="library/albums" element={<AlbumsLib />} />
              <Route path="library/podcasts" element={<PodcastsLib />} />
              <Route path="library/artists" element={<ArtistsLib />} />
              <Route path="library/songs" element={<SongsLib />} />
              <Route path="music" element={<Music />} />
              <Route path="podcasts" element={<Podcasts />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
