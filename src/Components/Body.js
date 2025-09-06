import { useState, useEffect } from "react";
import RestroCard ,{withPromotedCard} from "./RestroCard";
import Shimmer_ui from "./Shimmer_ui";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [list, setList] = useState([]);
  
  const [filterSearch,setFilterSearch]=useState([]);

  const [copy,setCopy]=useState([]);

  const PromotedResCard=withPromotedCard(RestroCard);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671"
        );
        const json = await res.json();
        console.log("API JSON 👉", json);

        // Find the card that actually contains restaurants
        const restaurants =
          json?.data?.cards
            ?.map((c) => c.card?.card)
            ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)
            ?.gridElements?.infoWithStyle?.restaurants || [];

        console.log("Extracted restaurants 👉", restaurants);
        setList(restaurants);
        setCopy(restaurants);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchData();
  }, []);
  
  const status=useOnlineStatus();
  if(status===false)
  {
    return(
    <h2>Your are OFFLINE please check your Network Connection</h2>
    );
  }
  
  
  /*
  THIS IS CALLED CONDITIONAL RENDERING--->

   if(list.length===0)
           {
            return <Shimmer_ui/>;
           };
  */     
 
  
 //THIS IS RETURNED BY TERNORY OPERATOR INSTEAD OF USING SEPARATE IF CLAUSE:

  return list.length===0?<Shimmer_ui/>: (
    <div className="body">
      <div className="flex px-4 py-2">
        
        <div className=" border border-solid border-black ">
          <input type="text" className="search-bar px-4" value={filterSearch} onChange={(e)=>
            {
              setFilterSearch(e.target.value);
            }
          } />
          <button className="bg-green-300 rounded-xl px-4" onClick={()=>
            { 
             const searched=list.filter((res)=>(res.info.name.toLowerCase().includes(filterSearch.toLowerCase()))
            );
            setCopy(searched);
            }
          }>Search</button>
        </div>

        <div className="top-restaurants px-5">
          <button  className="border border-solid border-black px-4" onClick={()=>{
            const top=list.filter((e)=>e.info.avgRating>4);
            setCopy(top);
          }}>TOP RESTAURANTS</button>
        </div>
      </div>
     
      <div className="restro-container flex flex-wrap">
        
         { copy.map((restaurant)=> (
            <Link  key={restaurant.info.id} to={"/menu/" + restaurant.info.id}>
              
              {restaurant.info.avgRating>4.2? (<PromotedResCard resData={restaurant}/>): <RestroCard resData={restaurant} />}</Link>
          ))}    
      </div>
    </div>
  );
};


export default Body;
