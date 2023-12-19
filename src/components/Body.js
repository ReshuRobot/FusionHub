import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const BodyContainer = () => {
  const [resData, setResData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isTopRatedFilterActive, setIsTopRatedFilterActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterData(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleToggleTopRatedFilter = () => {
    setIsTopRatedFilterActive((prev) => !prev);
    if (!isTopRatedFilterActive) {
      const filterData = resData.filter((val) => val?.info?.avgRating > 4);
      setFilterData(filterData);
    } else {
      setFilterData(resData);
    }
  };

  if (resData?.length === 0) {
    return <div><Shimmer /></div>;
  }

  return (
    <div className="body flex-col ">
      <div className="filter  flex my-8 mx-auto  w-7/12 items-center">
        <input
          type="text"
          className="search-box border  border-gray-300 p-2 rounded-md w-6/12"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className={`filter-btn bg-teal-500 border-l-2 border-cyan-400 px-4 py-2 rounded-lg ml-4 text-white hover:bg-teal-600 transition duration-300 ${
            isTopRatedFilterActive ? "active" : ""
          }`}
          onClick={handleToggleTopRatedFilter}
        >
          {isTopRatedFilterActive ? "Remove Top Rated Filter" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container flex justify-center items-center flex-wrap">
        {searchText
          ? resData
              ?.filter((item) =>
                item?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((item) => (
                <Link to={`restaurants/${item?.info?.id}`} key={item?.info?.id}>
                  <RestaurantCard resData={item} />
                </Link>
              ))
          : filterData?.map((item) => (
              <Link to={`restaurants/${item?.info?.id}`} key={item?.info?.id}>
                <RestaurantCard resData={item} />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default BodyContainer;
