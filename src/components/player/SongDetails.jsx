import { formatName } from "../../utils/utilFunctions";

const SongDetails = ({ name, primaryArtists, image }) => {
  return (
    <div className="hidden md:flex">
      <div className="flex items-center gap-3 w-64">
        <img
          src={image?.[2]?.link}
          alt="image"
          className="w-12 h-12 rounded-lg"
        />
        <div>
          <h4 className="truncate w-64">{formatName(name)}</h4>
          <h5 className="truncate w-64">{formatName(primaryArtists)}</h5>
        </div>
      </div>
    </div>
  );
};
export default SongDetails;
