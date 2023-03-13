import { BsDot } from "../../utils/icons";
import { useSelector } from "react-redux";
import { formatName, formatNum, formatTime } from "../../utils/utilFunctions";
import CardButtons from "./CardButtons";
const SongCard = () => {
  const { currentSongData, type } = useSelector((store) => store.player);
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
    <div className="flex items-center gap-9 m-2 md:m-5  flex-wrap">
      <div>
        <img src={image?.[2].link} alt={name} className="w-64 rounded-md" />
      </div>
      <div>
        <h3
          className="text-2xl font-semibold
         md:font-normal md:text-4xl py-2 capitalize"
        >
          {formatName(name)}
        </h3>
        <p className="py-0.5">
          <span className="capitalize">{formatName(name)}</span> by{" "}
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
  );
};
export default SongCard;
