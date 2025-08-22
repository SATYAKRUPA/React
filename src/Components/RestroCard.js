import { FOOD_IMG_URL } from "../utils/contents";

const RestroCard=(props)=>
{const {resData}=props;
return (
       <div className="card" style={{ backgroundColor:"#f0f0f0" }}>
          <img className="card-image" src={FOOD_IMG_URL+ resData.info.cloudinaryImageId} alt="card image"  />
          <h3>{resData.info.name}</h3>
          <h4>{resData.info.cuisines.join(", ")}</h4>
          <h4>{resData.info.avgRating}rating</h4>
          <h4>{resData.info.sla.deliveryTime} minutes</h4>
          
       </div>
);
};


export default RestroCard;