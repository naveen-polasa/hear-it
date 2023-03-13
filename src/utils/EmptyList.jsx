import { FaRegHeart } from "./icons";
const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-17rem)]">
      <h3 className="sm:text-2xl font-semibold font-mono capitalize">
        Save your favorites.
      </h3>
      <h2 className="sm:text-xl font-semibold flex items-center gap-x-3 my-3">
        Tap any <FaRegHeart size="24px" className="mt-2" /> to build your music
        library.
      </h2>
    </div>
  );
};
export default EmptyList;
