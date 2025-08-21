import React from "react";

import { createRoot } from "react-dom/client";

/* components
heading
  -logo
  -Navigations:about,home,cart

Body
  -search 
  -restaraunt 
   -restaurant cards
footer
  -links
  -address

*/

const Header=()=>{
  return (
    <div className="header">
       <div className="logo">
         <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"/>
       </div>

       <div className="nav-items">
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
         </ul>
       </div>
    
    </div>);
};
const ResObj={
"@type":"type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
"info": {
      "id":"122359",
      "name":"Right Way Restaurant",
      "cloudinaryImageId":"f2ej1kzmnndkithclxfq",
      "locality":"Alcot gardens",
      "areaName":"Railway station",
      "costForTwo":"₹300 for two",
      "cuisines": ["Biryani","Chinese","Indian"],
      "avgRating":3.6,
"parentId":"385602",
"avgRatingString":"3.6",
"totalRatingsString":"17K+",
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


};
const RestList=  [
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
"927667",
"name"
:
"ZOOP CAFE",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2024/8/4/723ecf9a-fc59-4ed1-ad0f-362f1f9ab62e_927667.ss (1).jpgImage preview",
"locality"
:
"Dhavaleswaram",
"areaName"
:
"Dhavaleswaram",
"costForTwo"
:
"₹250 for two",
"cuisines": [
"Burgers",
"Cafe"
],
"avgRating"
:
4.3,
"parentId"
:
"308445",
"avgRatingString"
:
"4.3",
"totalRatingsString"
:
"267",
"sla": {
"deliveryTime"
:
55,
"lastMileTravel"
:
15.6,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"55-60 mins",
"lastMileTravelString"
:
"15.6 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-21 21:30:00",
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
"https://www.swiggy.com/city/mandapeta/zoop-cafe-dhavaleswaram-rest927667",
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
"981705",
"name"
:
"Andhra Valli Kitchen",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2024/10/28/252a8d90-116a-41d4-abcd-7878c1711d87_981705.jpgImage preview",
"locality"
:
"House beside RCM church",
"areaName"
:
" Vemagiri",
"costForTwo"
:
"₹500 for two",
"cuisines": [
"South Indian"
],
"avgRating"
:
4.4,
"parentId"
:
"573998",
"avgRatingString"
:
"4.4",
"totalRatingsString"
:
"124",
"sla": {
"deliveryTime"
:
63,
"lastMileTravel"
:
13.8,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"60-65 mins",
"lastMileTravelString"
:
"13.8 km",
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
"https://www.swiggy.com/city/mandapeta/andhra-valli-kitchen-house-beside-rcm-church-vemagiri-rest981705",
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
"1061626",
"name"
:
"Khushi's Kitchen",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2025/3/11/cff0df6e-fb06-4553-9a2e-a295a14bcff4_1061626.JPGImage preview",
"locality"
:
"Tilak Road",
"areaName"
:
"Tilak Road",
"costForTwo"
:
"₹199 for two",
"cuisines": [
"Fast Food"
],
"avgRating"
:
3.9,
"parentId"
:
"118073",
"avgRatingString"
:
"3.9",
"totalRatingsString"
:
"86",
"sla": {
"deliveryTime"
:
67,
"lastMileTravel"
:
19.6,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"65-70 mins",
"lastMileTravelString"
:
"19.6 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-22 01:30:00",
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
"isNewlyOnboarded"
:
true,
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
"https://www.swiggy.com/city/mandapeta/khushis-kitchen-tilak-road-rest1061626",
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
"1072977",
"name"
:
"Fruitopia",
"cloudinaryImageId"
:
"RX_THUMBNAIL/IMAGES/VENDOR/2025/4/2/3d3a1a2e-1947-43eb-ab84-ea9c3431faba_1072977.jpgImage preview",
"locality"
:
"Tilak Road",
"areaName"
:
"Tilak Road",
"costForTwo"
:
"₹100 for two",
"cuisines": [
"Andhra",
"Juices",
"Salads"
],
"avgRating"
:
4.3,
"veg"
:
true,
"parentId"
:
"485596",
"avgRatingString"
:
"4.3",
"totalRatingsString"
:
"59",
"sla": {
"deliveryTime"
:
53,
"lastMileTravel"
:
18.9,
"serviceability"
:
"SERVICEABLE",
"slaString"
:
"50-55 mins",
"lastMileTravelString"
:
"18.9 km",
"iconType"
:
"ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime"
:
"2025-08-21 23:00:00",
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
"AT ₹39"
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
"isNewlyOnboarded"
:
true,
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
"https://www.swiggy.com/city/mandapeta/fruitopia-tilak-road-rest1072977",
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
];
const RestroCard=(props)=>
{const {resData}=props;
return (
       <div className="card" style={{ backgroundColor:"#f0f0f0" }}>
          <img className="card-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId} alt="card image"  />
          <h3>{resData.info.name}</h3>
          <h4>{resData.info.cuisines.join(", ")}</h4>
          <h4>{resData.info.avgRating}rating</h4>
          <h4>{resData.info.sla.deliveryTime} minutes</h4>
          
       </div>
);
};
const Body=()=>
{
  return (
     <div className="body">
         <div className="search">
              SEARCH
         </div>

       <div className="restro-container">
            
            <RestroCard resData={RestList[0]}/>
            <RestroCard resData={RestList[2]}/>
            <RestroCard resData={RestList[4]}/>
            <RestroCard resData={RestList[7]}/>
             <RestroCard resData={RestList[0]}/>
            <RestroCard resData={RestList[2]}/>
            <RestroCard resData={RestList[4]}/>
            <RestroCard resData={RestList[7]}/>
             <RestroCard resData={RestList[0]}/>
            <RestroCard resData={RestList[2]}/>
            <RestroCard resData={RestList[4]}/>
            <RestroCard resData={RestList[7]}/>
            
          
            
       </div>
     </div>
  );
};
const App=()=>{
  return  (<div className="App">
           <Header/>  
           <Body/>
           </div>);
};


const root = createRoot(document.getElementById("root"));
root.render(<App/>);


/*let Title=()=><h1>This is the nested component</h1>;
let HeadingComponent=()=>(
  <div>
  <Title/>
  <h1 className="satya">This a FUNCTIONAL COMPONENET</h1>
  </div>);

let heading=<h1 id="heading">  Namaste satya </h1>;*/

