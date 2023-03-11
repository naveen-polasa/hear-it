import { useSelector } from "react-redux";

const Playlist = () => {
    const { currentSongData, songsList } = useSelector((store) => store.player);
    console.log(currentSongData);
    console.log(songsList);
  return (
    <div>Playlist</div>
  )
}
export default Playlist