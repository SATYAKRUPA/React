import useRestroMenu from "../utils/useRestroMenu";
import Shimmer_ui from "./Shimmer_ui";
import {useParams} from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";


const Menu = () => {
   const {resId}=useParams();
   const menu=useRestroMenu(resId);

   const [showIndex,setShowIndex]=useState(null);
  

  //const text = menu?.cards?.[0]?.card?.card?.text;
  const itemCards =
    menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards;

  console.log("item cards are:", itemCards);

  const nestedItemCategory=menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((i)=>i.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log("Nested Item Cards : " , nestedItemCategory);

  const MENU=menu?.cards?.[2]?.card?.card?.info;

  console.log(MENU);
  if (!menu) return <Shimmer_ui />;

  return (
    <div className="text-center ">
      <h1 className="my-6 font-bold text-5xl">{MENU.name}</h1>
      <h3 className="my-2 font-bold">{MENU.cuisines.join(", ")} - {MENU.costForTwoMessage} </h3>
      <h3 className="my-3 font-bold">{MENU.avgRating} - &#11088; Rating </h3>
      <ul>
       {/* {(itemCards || [])
          .filter((i) => i?.card?.info)
          .map((i) => (
            <li key={i.card.info.id}>{i.card.info.name} Rs- {i.card.info.defaultPrice/100}</li>
          ))} */}

         {
           nestedItemCategory.map((it,index)=>{
            const key = `${it?.card?.card?.title || "no-title"}-${index}`;
            return <li key={key} ><RestaurantCategory data={it.card?.card}
                       showItems={index===showIndex?true:false}
                       setShowIndex={()=>{setShowIndex(index)}}
              
                        /></li>
           })
          }
        
      </ul>
    </div>
  );
};

export default Menu;
