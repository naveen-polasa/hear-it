import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import {
  Albums,
  NewReleases,
  Playlists,
  TopCharts,
  TopPlaylists,
} from "./components/browse";
import {
  History,
  Albums as AlbumsLib,
  Podcasts as PodcastsLib,
  Artists as ArtistsLib,
  Songs as SongsLib,
} from "./components/my-library";
import Music from "./components/navbar/Music";
import Podcasts from "./components/navbar/Podcasts";
import Home from "./pages/Home";

function App() {
  return (
    <main className="bg-green-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="browse/new_releases" element={<NewReleases />} />
              <Route path="browse/top_charts" element={<TopCharts />} />
              <Route path="browse/top_playlists" element={<TopPlaylists />} />
              <Route path="browse/playlists" element={<Playlists />} />
              <Route path="browse/albums" element={<Albums />} />
              <Route path="library/history" element={<History />} />
              <Route path="library/songs" element={<SongsLib />} />
              <Route path="library/albums" element={<AlbumsLib />} />
              <Route path="library/podcasts" element={<PodcastsLib />} />
              <Route path="library/artists" element={<ArtistsLib />} />
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
