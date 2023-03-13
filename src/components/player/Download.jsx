import { useDispatch, useSelector } from "react-redux";
import { setDownload } from "../../features/playerSlice";
import { SlOptions, FaDownload, HiDownload } from "../../utils/icons";

const Download = ({ downloadUrl }) => {
  const { download } = useSelector((store) => store.player);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="relative"
        onMouseOver={() => dispatch(setDownload(true))}
        onMouseLeave={() => dispatch(setDownload(false))}
      >
        <FaDownload className="w-5 h-5 md:w-7 md:h-7" />
        <div
          className={`absolute ${
            download ? "block" : "hidden"
          } bottom-6 -left-12 bg-green-50 p-2 border rounded-lg`}
        >
          {downloadUrl ? (
            downloadUrl?.map((url) => {
              return (
                <a
                  href={url.link}
                  download
                  target="_blank"
                  key={url.quality}
                  className="flex gap-x-4 w-[6.5rem] my-2 justify-between border rounded-lg px-2"
                >
                  <p className="text-sm">{url.quality}</p>
                  <span>
                    <HiDownload
                      size="24px"
                      className="hover:scale-125 duration-200"
                    />
                  </span>
                </a>
              );
            })
          ) : (
            <p className="w-[6rem]">Not Available</p>
          )}
        </div>
      </button>
    </>
  );
};
export default Download;
