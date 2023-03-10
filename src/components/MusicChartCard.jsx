import ImageCard from "./ImageCard";

const MusicChartCard = ({ data }) => {
  return (
    <article className="flex justify-center flex-wrap shrink-0 gap-8">
      {data?.map((item) => {
        const { id, title, subtitle } = item;
        return (
          <div key={id} className="w-64 relative">
            <div>
              <ImageCard item={item} height="36" width="64" />
              <div className="py-2 text-center px-0.5 ">
                <p className="truncate">{title}</p>
                <p className="truncate text-sm">{subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default MusicChartCard;
