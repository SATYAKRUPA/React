import { useEffect, useState  } from "react";
import Shimmer_ui from "./Shimmer_ui";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../utils/contents";

const Menu = () => {
  const [menu, setMenu] = useState(null);
  const {resId}=useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId);
    const json = await data.json();
    console.log("menu data:", json);
    setMenu(json.data);
  };

  const text = menu?.cards?.[0]?.card?.card?.text;
  const itemCards =
    menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  console.log("item cards are:", itemCards);

  if (!menu) return <Shimmer_ui />;

  return (
    <div>
      <h1>{text}</h1>
      <h3>Items List</h3>
      <ul>
        {(itemCards || [])
          .filter((i) => i?.card?.info)
          .map((i) => (
            <li key={i.card.info.id}>{i.card.info.name} Rs- {i.card.info.defaultPrice/100}</li>
          ))}
      </ul>
    </div>
  );
};

export default Menu;
