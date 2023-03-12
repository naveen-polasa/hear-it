import { useDispatch, useSelector } from "react-redux";
import { formatName, formatNum, formatTime } from "../utils/utilFunctions";
import { BsDot, FaHome } from "../utils/icons";
import { SongsCard,CardButtons } from "../components/cards";
import { homeDataFetch } from "../features/homeSlice";
import { handleIsPlaying } from "../features/playerSlice";
import { useEffect } from "react";

const Playlist = () => {
  const { currentSongData, songsList, type } = useSelector(
    (store) => store.player
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
    dispatch(handleIsPlaying(false));
  }, []);

  const {
    name,
    copyright,
    duration,
    language,
    primaryArtists,
    image,
    playCount,
  } = currentSongData;
  return (
    <article>
      <div className="flex items-center gap-9 m-5 md:m-8  flex-wrap">
        <div>
          <img src={image?.[2].link} alt={name} className="w-64 rounded-md" />
        </div>
        <div className="max-w-[38rem]">
          <h3 className="text-4xl py-2">{formatName(name)}</h3>
          <p className="py-0.5">
            <span>{formatName(name)}</span> by{" "}
            <span>{formatName(primaryArtists)}</span>
          </p>
          <p className="py-0.5">
            <span className="capitalize">{type}</span>
            <BsDot className="inline-block opacity-60" />
            <span>{formatNum(parseInt(playCount))}</span> Plays{" "}
            <BsDot className="inline-block opacity-60" />
            <span>{formatTime(duration)}</span>{" "}
            <BsDot className="inline-block opacity-60" />
            <span className="capitalize">{language}</span>
          </p>
          <p className="py-0.5">{formatName(copyright)}</p>
          <CardButtons />
        </div>
      </div>
      <SongsCard />
    </article>
  );
};
export default Playlist;
