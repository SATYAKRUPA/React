import { FOOD_IMG_URL } from "../utils/contents";

const RestroCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo, sla } =
    resData.info;

  return (
    <div className="card rounded-lg max-w-70 p-4 m-2 bg-gray-100 hover:bg-gray-300 border border-solid border-black">
      <img className=" rounded-lg "
       src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}

        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} • {costForTwo}</p>
      <p>{areaName} • {sla?.deliveryTime} mins</p>
    </div>
  );
};

export const withPromotedCard=(RestroCard)=>{
  return(props)=>{
    return (
      <div>
      <label className="absolute bg-black m-2 rounded-lg text-white">Promoted</label>
      <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
