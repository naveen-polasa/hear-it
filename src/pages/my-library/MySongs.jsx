import { useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";

const MySongs = () => {
 const { songs } = useSelector((store) => store.storage);
 return (
   <section>
     <h3 className="py-6 px-8 text-2xl font-semibold">My Songs</h3>
     <MusicCard data={songs} />
   </section>
 );
}
export default MySongs