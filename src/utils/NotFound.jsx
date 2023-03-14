const NotFound = ({ height }) => {
  return (
    <div
      className={`flex items-center justify-center ${
        height ? height : "h-[calc(100vh-12rem)]"
      } `}
    >
      <h3 className="text-2xl font-semibold font-mono capitalize">
        Sorry There seems to be an error...
      </h3>
    </div>
  );
};
export default NotFound;
