import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import {
  NewReleases,
  TopAlbums,
  TopCharts,
  TopPlaylists,
} from "./components/browse";
import { History, Albums, Artists, Songs } from "./components/my-library";
import Music from "./components/navbar/Music";
import Podcasts from "./components/navbar/Podcasts";

function App() {
  return (
    <main className="bg-green-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              {/* navbar start */}
              <Route path="music" element={<Music />} />
              <Route path="podcasts" element={<Podcasts />} />
              {/* navbar end */}
              {/* browse start */}
              <Route index element={<NewReleases />} />
              <Route path="top_charts" element={<TopCharts />} />
              <Route path="top_playlists" element={<TopPlaylists />} />
              <Route path="top_albums" element={<TopAlbums />} />
              {/* browse end */}
              {/* library start */}
              <Route path="history" element={<History />} />
              <Route path="songs" element={<Songs />} />
              <Route path="albums" element={<Albums />} />
              <Route path="artists" element={<Artists />} />
              {/* library end */}
            </Route>
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
