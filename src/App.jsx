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
  Song,
  Album,
  Playlist,
} from "./pages";
import Error from "./pages/Error";

function App() {
  return (
    <main className="bg-green-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              {/* browse start */}
              <Route index element={<NewReleases />} />
              <Route path="top_charts" element={<TopCharts />} />
              <Route path="top_charts/playlist/:id" element={<Playlist />} />
              <Route path="top_playlists" element={<TopPlaylists />} />
              <Route path="top_playlists/playlist/:id" element={<Playlist />} />
              <Route path="top_albums" element={<TopAlbums />} />
              <Route path="top_albums/album/:id" element={<Album />} />
              {/* browse end */}
              {/* library start */}
              <Route path="history" element={<History />} />
              <Route path="history/song/:id" element={<Song />} />
              <Route path="history/album/:id" element={<Album />} />
              <Route path="history/playlist/:id" element={<Playlist />} />
              <Route path="songs" element={<MySongs />} />
              <Route path="songs/song/:id" element={<Song />} />
              <Route path="albums" element={<MyAlbums />} />
              <Route path="albums/album/:id" element={<Album />} />
              <Route path="playlists" element={<MyPlaylist />} />
              <Route path="playlists/playlist/:id" element={<Playlist />} />
              {/* library end */}
              {/* single pages start */}
              <Route path="song/:id" element={<Song />} />
              <Route path="album/:id" element={<Album />} />
              <Route path="playlist/:id" element={<Playlist />} />
              {/* single pages end */}
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
