const Loading = ({ height }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        height ? height : "h-[calc(100vh-12rem)]"
      }`}
    >
      <span className="animate-spin inline-block  h-12 w-12  rounded-full text-white border-4 border-red-300  border-t-red-500"></span>
    </div>
  );
};
export default Loading;
