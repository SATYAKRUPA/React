import { FOOD_IMG_URL } from "../utils/contents";

const RestroCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, areaName, costForTwo, sla } =
    resData.info;

  return (
    <div className="card" style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px", width: "250px" }}>
      <img
       src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}

        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} • {costForTwo}</p>
      <p>{areaName} • {sla?.deliveryTime} mins</p>
    </div>
  );
};

export default RestroCard;
