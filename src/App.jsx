import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import {
  NewReleases,
  TopAlbums,
  TopCharts,
  TopPlaylists,
  History,
  MyAlbums,
  MyPlaylist,
  MySongs,
} from "./pages";
import { Music, Podcasts } from "./components/navbar";

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
              <Route path="songs" element={<MySongs />} />
              <Route path="albums" element={<MyAlbums />} />
              <Route path="playlists" element={<MyPlaylist />} />
              {/* library end */}
              {/* single pages start */}
              <Route path="song/:id" element={<TopAlbums />} />
              <Route path="album/:id" element={<TopAlbums />} />
              <Route path="playlist/:id" element={<TopAlbums />} />
              {/* single pages end */}
            </Route>
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
