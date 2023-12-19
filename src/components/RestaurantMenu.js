import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [restradata, setRestraData] = useState([]);
  const { resId } = useParams();
  const restaurantFetchData = async () => {
    //  //api call -- passing id in headers

    //     const data = await fetch(
    //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.355151&lng=76.367618&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`,{

    //                 method:'GET',
    //                 headers:{
    //                     'Content-Type':'application/json',
    //                     'Restaruant-id':`${resId}`,
    //                 },

    //       }
    //     );
    //api call -- passing resId in the body POST method

    // const data = await fetch(`https://www.swiggy.com/api/v1/p1?page-type=REGURALR_MENU&complete-menu=true&lat=30.35515&lng=76.367618&catalog_qa=undefined`,{
    //       method:'POST',
    //       headers:{
    //         'Content-Type':'application/json',

    //       },
    //       body:json.stringify({
    //         restrauntId:resId,
    //       })

    //   });
    //   const json =await data.json();
    //   setRestraData(json);

    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.355151&lng=76.367618&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestraData(
      json?.data
    );
    
  };
  useEffect(() => {
    restaurantFetchData();
 }, []);
  
  const { name , costForTwoMessage,cuisines}= restradata?.cards?.[0]?.card?.card?.info  ?? {}; // nullish coalescing (??) operator is used to provide a default empty object {} if the destructuring source is undefined
  const categories = restradata?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item=>item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
 console.log("itemcategorydata",categories);
 
  console.log("RestraunatMenudata1", restradata);
  console.log("RestraunatMenudata8", restradata?.cards?.[0]);
  return restradata === null ? (
    <Shimmer />
  ) : (
    <>
    <div className="text-center">
    <h1 className="font-bold my-10 text-2xl">{name}</h1>
    <p className="font-bold text-lg">{cuisines?.join(",")} - {costForTwoMessage}</p>
      <h1>Menu</h1>
      {/* {itemCards?.map((item) => (
     
        <div key={item?.card?.info?.id}>{item?.card?.info?.name}</div>
      ))} */}
      {/* //categories accordian */}
     {categories?.map((item)=>(
        <RestaurantCategory  key={item?.card?.card?.title} data={item?.card?.card}/>
     ))}

    </div>
      
    </>
  );
};
export default RestaurantMenu;
