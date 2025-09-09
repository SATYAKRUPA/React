import ItemList from "./ItemList";
import {useState} from "react";


const RestaurantCategory=({data,showItems,setShowIndex})=>
{
   
    const onhandling=()=>
    {
       // setItems(!items);
       setShowIndex();
    };
    return (
        <div>
            {/** Accordian header */}

            <div className="bg-amber-100 w-6/12 mx-auto my-4 p-4 shadow-2xl"> 
                <div className="flex justify-between" onClick={onhandling} >
                   <span className="font-bold ">{data.title} ({data.itemCards.length}) </span>
                   <span >&#11015;</span>
                </div>
                {showItems && < ItemList items={data.itemCards}/>}
            </div>

            
            {/** Accordian header */}
        </div>
    );
};

export default RestaurantCategory;