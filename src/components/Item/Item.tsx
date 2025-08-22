import { Link } from "react-router-dom";
import type { Character } from "../../types";

interface IItem {
  item: Character;
}

export const Item: React.FC<IItem> = ({ item }) => {
    const episode = item.episode.map((episode) => episode.split('/').pop()).join(', ');
  
    return (
    <Link to={`/character/${item.id}`} className="bg-lime-600 text-lime-950 w-full flex flex-row justify-around border rounded-md p-3 border-lime-400">
      <p className="w-30 truncate overflow-hidden">{item.name}</p>
      <p className="w-20 text-center">{item.status}</p>
      <p className="w-20 text-center truncate overflow-hidden">{item.species}</p>
      <p className="w-12 truncate overflow-hidden text-center">{episode}</p>
    </Link>
  );
};
