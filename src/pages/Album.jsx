import { BsDot } from "../utils/icons";
import { useSelector } from "react-redux";
import { formatName, formatNum, formatTime } from "../utils/utilFunctions";
import { CardButtons } from "../components/player";

const Album = () => {
  const { currentSongData, songsList } = useSelector((store) => store.player);
  console.log(currentSongData);
  // console.log(songsList);
  const { album, name, image, copyright, primaryArtists, language } =
    currentSongData;
  return (
    <article className="flex items-center gap-9 md:m-8 flex-wrap">
      <div>
        <img src={image?.[2].link} alt={name} className="w-64 rounded-md" />
      </div>
      <div>
        <h3 className="text-4xl py-2">{formatName(album?.name)}</h3>
        <p className="py-0.5">
          <span className="py-0.5">
            by <span>{formatName(primaryArtists)}</span>
            <BsDot className="inline-block opacity-60" />
          </span>
          <span>
            {formatNum(
              songsList?.reduce((acc, cur) => {
                return acc + parseInt(cur?.playCount);
              }, 0)
            )}
          </span>{" "}
          Plays <BsDot className="inline-block opacity-60" />
          <span>
            {formatTime(
              songsList?.reduce((acc, cur) => {
                return acc + parseInt(cur?.duration);
              }, 0)
            )}
          </span>{" "}
          <BsDot className="inline-block opacity-60" />
          <span className="capitalize">{language}</span>
        </p>
        <p className="py-0.5">{formatName(copyright)}</p>
        <CardButtons />
      </div>
    </article>
  );
};
export default Album;
