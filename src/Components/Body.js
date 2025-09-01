import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import Shimmer_ui from "./Shimmer_ui";

const Body = () => {
  const [list, setList] = useState([]);
  
  const [filterSearch,setFilterSearch]=useState([]);

  const [copy,setCopy]=useState([])
  
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
      <div className="filter">
        
        <div className="search">
          <input type="text" className="search-bar" value={filterSearch} onChange={(e)=>
            {
              setFilterSearch(e.target.value);
            }
          } />
          <button onClick={()=>
            { 
             const searched=list.filter((res)=>(res.info.name.toLowerCase().includes(filterSearch.toLowerCase()))
            );
            setCopy(searched);
            }
          }>Search</button>
        </div>

        <div className="top-restaurants">
          <button onClick={()=>{
            const top=list.filter((e)=>e.info.avgRating>4.5);
            setList(top);
          }}>TOP RESTAURANTS</button>
        </div>
      </div>
     
      <div className="restro-container">
        
         { copy.map((restaurant)=> (
            <RestroCard key={restaurant.info.id} resData={restaurant} />
          ))}    
      </div>
    </div>
  );
};

export default Body;
