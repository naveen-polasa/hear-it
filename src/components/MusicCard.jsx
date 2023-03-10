import ImageCard from "./ImageCard";

const MusicCard = ({ data }) => {
  return (
    <article className="flex justify-center flex-wrap shrink-0 gap-8">
      {data?.map((item) => {
        const { id, name, primaryArtists, artists, songCount } = item;
        return (
          <div key={id} className="w-44 relative">
            <div>
              <ImageCard item={item} height="44" width="44" />
              <div className="py-2 text-center px-0.5 ">
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
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default MusicCard;
