import { CDN_URL } from "../utils/contents";

const ItemList=({items})=>
{
    console.log(items);
    return(
        <div>
           {items.map((i)=>
            <div key={i.card?.info?.id}
                 className= "border-gray-500 border-b-2 p-2 m-2 shadow-2xl text-left flex justify-between "
            > 
                 
              <div className="w-9/12" >
                  <div className="py-2">
                    <span className="font-bold">{i.card?.info?.name} - </span>
                    <span className="font-bold"> &#8377; 
                       { i.card?.info?.defaultPrice ? i.card?.info?.defaultPrice/100 :  i.card?.info?.price/100 }</span>
                 </div>
                <p className="break-words">{i.card?.info?.description}</p>
                  
              </div>
               <div className="w-3/12 relative">
                  <img className="w-full rounded-lg" src={CDN_URL + i.card?.info?.imageId} alt="item" />

                  <button className="absolute bottom-2 right-2 bg-black text-white px-3 py-1 rounded-lg shadow-lg">
                     Add +
                  </button>
              </div>
            </div>
           )}

        </div>
    );
};

export default ItemList; 
