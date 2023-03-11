import { BsDot } from "../utils/icons";
import { useSelector } from "react-redux";
import { formatName, formatNum, formatTime } from "../utils/utilFunctions";
import { CardButtons } from "../components/player";

const Song = () => {
  const { currentSongData, songsList, type } = useSelector(
    (store) => store.player
  );

  // console.log(currentSongData);
  // console.log(songsList);
  const {
    name,
    copyright,
    duration,
    hasLyrics,
    language,
    primaryArtists,
    image,
    playCount,
  } = currentSongData;
  return (
    <article className="flex items-center gap-9 m-5 md:m-8  flex-wrap">
      <div>
        <img src={image?.[2].link} alt={name} className="w-64 rounded-md" />
      </div>
      <div>
        <h3 className="text-4xl py-2">{formatName(name)}</h3>
        <p className="py-0.5">
          <span>{formatName(name)}</span> by{" "}
          <span>{formatName(primaryArtists)}</span>
        </p>
        <p className="py-0.5">
          <span className="capitalize">{type}</span>
          <BsDot className="inline-block opacity-60" />
          <span>{formatNum(playCount)}</span> Plays{" "}
          <BsDot className="inline-block opacity-60" />
          <span>{formatTime(duration)}</span>{" "}
          <BsDot className="inline-block opacity-60" />
          <span className="capitalize">{language}</span>
        </p>
        <p className="py-0.5">{formatName(copyright)}</p>
        <CardButtons />
      </div>
    </article>
  );
};
export default Song;
