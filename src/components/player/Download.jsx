import { useDispatch, useSelector } from "react-redux";
import { setDownload } from "../../features/playerSlice";
import {
  SlOptions,
  FaDownload,
  HiDownload,
} from "../../utils/icons";

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
        <FaDownload size="26px" />
        <div
          className={`absolute ${
            download ? "block" : "hidden"
          } bottom-6 -left-12 bg-green-50 p-2 border rounded-lg`}
        >
          {downloadUrl?.map((url) => {
            return (
              <div
                key={url.quality}
                className="flex gap-x-4 w-[6.5rem] my-2 justify-between border rounded-lg p-0.5"
              >
                <p>{url.quality}</p>
                <span>
                  <a href={url.link} target="_blank">
                    <HiDownload
                      size="24px"
                      className="hover:scale-125 duration-200"
                    />
                  </a>
                </span>
              </div>
            );
          })}
        </div>
      </button>
    </>
  );
};
export default Download;
