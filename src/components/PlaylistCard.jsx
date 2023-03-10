import ImageCard from "./ImageCard";

const PlaylistCard = ({ data }) => {
  return (
    <article className="flex justify-center flex-wrap shrink-0 gap-8">
      {data?.map((item) => {
        const { id, title, subtitle } = item;
        console.log(item);
        return (
          <div key={id} className="w-44 relative">
            <div>
              <ImageCard item={item} height="44" width="44" />
              <div className="py-2 text-center px-0.5 ">
                <p className="truncate font-semibold">{title}</p>
                <p className="truncate text-sm font-mono">{subtitle}</p>
              </div>

              {/* <div className="py-2 text-center px-0.5 ">
                <p className="truncate">{name}</p>
                <p className="truncate text-xs">
                  {primaryArtists &&
                    primaryArtists?.map((artist, index) => {
                      return (
                        <span key={index} className="text-sm">
                          {" "}
                          {artist.name}
                        </span>
                      );
                    })}
                  {artists &&
                    artists?.map((artist, index) => {
                      return (
                        <span key={index} className="text-sm">
                          {" "}
                          {artist.name}
                        </span>
                      );
                    })}
                  {songCount > 0 && (
                    <span className="text-sm">PlayList Songs: {songCount}</span>
                  )}
                </p>
              </div> */}
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default PlaylistCard;
