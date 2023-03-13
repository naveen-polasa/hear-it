import { formatName } from "../../utils/utilFunctions";
import ImageCard from "./ImageCard";

const MusicCard = ({ data }) => {
  return (
    <article className="flex justify-around sm:justify-center flex-wrap shrink-0 gap-x-2 gap-y-6 sm:gap-8">
      {data?.map((item) => {
        const {
          id,
          name,
          primaryArtists,
          artists,
          type,
          songCount,
          title,
          subtitle,
          singers,
          artist,
        } = item;

        return (
          <div key={id} className="w-44 mt-1 relative">
            <div>
              <ImageCard item={item} height="11" width="44" />
              <div className="py-2 text-center px-0.5 ">
                <p className="truncate font-semibold">{formatName(name)}</p>
                <p className="truncate ">
                  {type === "" && `${formatName(primaryArtists)}`}
                </p>
                <p className="truncate text-xs">
                  {typeof primaryArtists !== 'string' &&
                    primaryArtists?.map((artist, index) => {
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
                  {type === "playlist" && !title && (
                    <span className="text-sm font-mono">
                      PlayList Songs : {songCount}
                    </span>
                  )}
                </p>

                {title && singers && (
                  <div className="py-2 text-center px-0.5 ">
                    <p className="truncate font-semibold">
                      {title ? formatName(title) : formatName(name)}
                    </p>
                    <p className="truncate text-sm font-mono">
                      {singers && formatName(singers)}
                    </p>
                  </div>
                )}
                {title && artist && (
                  <div className="py-2 text-center px-0.5 ">
                    <p className="truncate font-semibold">
                      {title ? formatName(title) : formatName(name)}
                    </p>
                    <p className="truncate text-sm font-mono">
                      {artist && formatName(artist)}
                    </p>
                  </div>
                )}

                {title && subtitle && (
                  <div className="py-2 text-center px-0.5 ">
                    <p className="truncate font-semibold">
                      {title ? formatName(title) : formatName(name)}
                    </p>
                    <p className="truncate text-sm font-mono">
                      {subtitle ? (
                        formatName(subtitle)
                      ) : (
                        <span>PlayList Songs : {songCount}</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default MusicCard;
