import { formatName } from "../utils/utilFunctions";
import ImageCard from "./ImageCard";

const MusicCard = ({ data }) => {
  return (
    <article className="flex justify-center flex-wrap shrink-0 gap-8">
      {data?.map((item) => {
        const { id, name, primaryArtists, artists, type, songCount } = item;
        
        return (
          <div key={id} className="w-44 relative">
            <div>
              <ImageCard item={item} height="11" width="44" />
              <div className="py-2 text-center px-0.5 ">
                <p className="truncate font-semibold">{formatName(name)}</p>
                <p className="truncate text-xs">
                  {primaryArtists?.map((artist, index) => {
                    return (
                      <span key={index} className="text-sm">
                        {" "}
                        {formatName(artist.name)}
                      </span>
                    );
                  })}
                  {artists?.map((artist, index) => {
                    return (
                      <span key={index} className="text-sm">
                        {" "}
                        {formatName(artist.name)}
                      </span>
                    );
                  })}
                  {type === "playlist" && (
                    <span className="text-sm ">
                      PlayList Songs : {songCount}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default MusicCard;
