import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="text-2xl font-semibold font-mono capitalize">
        Oops! Nothing is here...
      </h3>
      <button
        className="my-4 font-mono font-semibold
      text-xl text-white border-2 px-5 py-2 rounded-xl bg-red-400 hover:scale-105 duration-200"
      >
        <Link to="/">Go To Home</Link>
      </button>
    </div>
  );
};
export default Error;
