import { useState } from "react";
import ResList from "../utils/mockdata";
import RestroCard from "./RestroCard";


const Body=()=>
{

const [list,setlist]=useState([
  {
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"122359",
"name"
:
"Right Way Restaurant",
"cloudinaryImageId"
:
"f2ej1kzmnndkithclxfq",
"locality"
:
"Alcot gardens",
"areaName"
:
"Railway station",
"costForTwo"
:
"₹300 for two",
"cuisines": [
"Biryani",
"Chinese",
"Indian"
],
"avgRating"
:
3.6,
"parentId"
:
"385602",
"avgRatingString"
:
"3.6",
"totalRatingsString"
:
"17K+",
"sla": {
"deliveryTime"
:
52,
"lastMileTravel"
:
19.9,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"50-55 mins",
"lastMileTravelString"
:
"19.9 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-21 23:59:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹99"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-37f3496e-d759-4a91-8884-7c2a3130cdd6"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/mandapeta/right-way-restaurant-alcot-gardens-railway-station-rest122359",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"638982",
"name"
:
"Food Mama",
"cloudinaryImageId"
:
"ikjxfnncp2gndfosfnkl",
"locality"
:
"Alcot Gardens",
"areaName"
:
"Railway Station",
"costForTwo"
:
"₹300 for two",
"cuisines": [
"Biryani",
"Chinese"
],
"avgRating"
:
3.5,
"parentId"
:
"81612",
"avgRatingString"
:
"3.5",
"totalRatingsString"
:
"1.8K+",
"sla": {
"deliveryTime"
:
57,
"lastMileTravel"
:
19.9,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"55-60 mins",
"lastMileTravelString"
:
"19.9 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-21 23:59:00",
"opened"
:
true
},
"badges": {
"imageBadges": [
{
"imageId"
:
"v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.pngImage preview",
"description"
:
"OnlyOnSwiggy"
}
]
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description"
:
"OnlyOnSwiggy",
"imageId"
:
"v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.pngImage preview"
}
}
]
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹99"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-37f3496e-d759-4a91-8884-7c2a3130cdd6"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/mandapeta/food-mama-alcot-gardens-railway-station-rest638982",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"292581",
"name"
:
"Reddy Samosa Makers",
"cloudinaryImageId"
:
"uwubglle9qypaq75ugsi",
"locality"
:
"Alcot Gardens",
"areaName"
:
"Railway Station",
"costForTwo"
:
"₹150 for two",
"cuisines": [
"Snacks",
"Chinese",
"Fast Food"
],
"avgRating"
:
4.4,
"parentId"
:
"168557",
"avgRatingString"
:
"4.4",
"totalRatingsString"
:
"1.4K+",
"sla": {
"deliveryTime"
:
44,
"lastMileTravel"
:
19.9,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"40-45 mins",
"lastMileTravelString"
:
"19.9 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-21 20:15:00",
"opened"
:
true
},
"badges": {
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"ITEMS",
"subHeader"
:
"AT ₹59"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-37f3496e-d759-4a91-8884-7c2a3130cdd6"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/mandapeta/reddy-samosa-makers-alcot-gardens-railway-station-rest292581",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
"@type"
:
"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
"id"
:
"763381",
"name"
:
"Authentic Belgian Waffles",
"cloudinaryImageId"
:
"946de08c113bbbf7b3187486cf60d7d6",
"locality"
:
"Balajipet Main Road",
"areaName"
:
"Ramkrishna Nagar",
"costForTwo"
:
"₹300 for two",
"cuisines": [
"Waffle",
"Bakery"
],
"avgRating"
:
4.5,
"veg"
:
true,
"parentId"
:
"37838",
"avgRatingString"
:
"4.5",
"totalRatingsString"
:
"688",
"sla": {
"deliveryTime"
:
56,
"lastMileTravel"
:
18.7,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"55-60 mins",
"lastMileTravelString"
:
"18.7 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-21 22:00:00",
"opened"
:
true
},
"badges": {
"imageBadges": [
{
"imageId"
:
"v1695133679/badges/Pure_Veg111.pngImage preview",
"description"
:
"pureveg"
}
]
},
"isOpen"
:
true,
"type"
:
"F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description"
:
"pureveg",
"imageId"
:
"v1695133679/badges/Pure_Veg111.pngImage preview"
}
}
]
},
"textBased": {
},
"textExtendedBadges": {
}
}
},
"aggregatedDiscountInfoV3": {
"header"
:
"₹200 OFF",
"subHeader"
:
"ABOVE ₹999",
"discountTag"
:
"FLAT DEAL"
},
"orderabilityCommunication": {
"title": {
},
"subTitle": {
},
"message": {
},
"customIcon": {
}
},
"differentiatedUi": {
"displayType"
:
"ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType"
:
"ADS_MEDIA_ENUM_IMAGE",
"lottie": {
},
"video": {
}
}
},
"reviewsSummary": {
},
"displayType"
:
"RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {
},
"externalRatings": {
"aggregatedRating": {
"rating"
:
"--"
}
},
"ratingsDisplayPreference"
:
"RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context"
:
"seo-data-37f3496e-d759-4a91-8884-7c2a3130cdd6"
},
"cta": {
"link"
:
"https://www.swiggy.com/city/mandapeta/authentic-belgian-waffles-balajipet-main-road-ramkrishna-nagar-rest763381",
"text"
:
"RESTAURANT_MENU",
"type"
:
"WEBLINK"
},
"widgetId"
:
"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
])
  return (
     <div className="body">
         <div className="res-btn">
              <button className="btn"  
              onClick={()=>{
                const filtered=list.filter((i)=>(i.info.avgRating>4));
                setlist(filtered);
              }}>Click-Me 
              
              </button>
         </div>

       <div className="restro-container">
          <div className="restro-container">
  {list.map((restaurant) => (
    <RestroCard key={restaurant.info.id} resData={restaurant} />
  ))}
</div>
       </div>
     </div>
  );
};

export default Body;