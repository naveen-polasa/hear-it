import { useDispatch, useSelector } from "react-redux";
import { setSongNum, handleIsPlaying } from "../../features/playerSlice";
import { formatName, formatTime } from "../../utils/utilFunctions";

const SongsCard = () => {
  const {
    songsList,
    isPlaying,
    id: songId,
    currentSongData,
  } = useSelector((store) => store.player);
  const dispatch = useDispatch();

  const handleSongClick = (index) => {
    dispatch(handleIsPlaying(true));
    dispatch(setSongNum(index));
  };
  return (
    <div className="px-0.5">
      {songsList?.map((song, index) => {
        const { id, image, name, primaryArtists, duration, album } = song;

        return (
          <div
            key={id}
            className={`h-16 my-2 flex justify-between px-5 items-center border-2 rounded-lg duration-200 ${
              currentSongData.id === id ? "bg-white" : "hover:bg-white"
            }  `}
            onClick={() => handleSongClick(index)}
          >
            <p className="flex gap-x-5 w-[60%] items-center">
              <span className="w-6">{index + 1}</span>
              <img
                src={image?.[1].link}
                alt={name}
                className="w-12 rounded-lg"
              />
              <span className="truncate">{formatName(name)}</span>
            </p>
            <p className="truncate pl-3">{formatName(primaryArtists)}</p>
            <p className="mx-1">{formatTime(duration)}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SongsCard;
