import { FaPlay, FaRegHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { playSong, handleIsPlaying } from "../features/playerSlice";

const MusicCards = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <article className="flex flex-wrap shrink-0 gap-8">
      {data.map((item) => {
        const { id, image, name, type, primaryArtists } = item;
        return (
          <div key={id} className="w-44 relative">
            <div>
              <img src={image[2].link} alt={name} className="w-44 rounded-xl" />
              <div className="opacity-0 hover:opacity-100 w-44 h-44 absolute top-0 left-0 flex justify-center items-center bg-black rounded-xl bg-opacity-40 duration-700">
                <span
                  className="h-12 w-12 hover:h-14 hover:w-14 duration-300 bg-black opacity-70 rounded-full flex items-center justify-center"
                  onClick={() => {
                    dispatch(playSong({ id, type }));
                    dispatch(handleIsPlaying(true));
                  }}
                >
                  <FaPlay size="26px" className="ml-1 text-white" />
                </span>
                <FaRegHeart
                  size="24px"
                  className="absolute bottom-2 left-4 text-white "
                />
                <SlOptions
                  size="26px"
                  className="absolute bottom-2 right-4 text-white "
                />
              </div>
              <div className="py-2 text-center px-0.5 ">
                <p className="truncate">{name}</p>
                <p className="truncate text-xs">
                  {primaryArtists?.map((artist, index) => {
                    return (
                      <span key={index} className="text-sm">
                        {" "}
                        {artist.name}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default MusicCards;
