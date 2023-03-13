import { useSelector } from "react-redux";
import MusicChartCard from "../../components/cards/MusicChartCard";
import Loading from "../../utils/Loading";
import NotFound from "../../utils/NotFound";

const TopCharts = () => {
  const { charts, isLoading, isError } = useSelector((store) => store.home);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <section>
      <h3 className="py-3 md:py-6 px-8 text-2xl font-semibold">
        Top Music Charts
      </h3>
      <MusicChartCard data={charts} />
    </section>
  );
};
export default TopCharts;
