import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const itemPerCount = useSelector((store) => store.cart.items);
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  const handleClickRemove =(item)=>{
    dispatch(removeItem(item))
  }

  console.log("items", items);
  console.log("itemsperCount", itemPerCount);

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className=" h-28 p-2 m-2 text-left border-gray-200 border-b-2  flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info.name}</span>

              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 max-h-32 min-h-30 rounded-lg flex-col justify-center p-2 relative">
            <div className="absolute  w-11/12
             text-center flex ">
             <div 
              style={{
          
        boxShadow: "0 3px 8px #e9e9eb"
      }}
             className="flex w-9/12 mx-auto border-2 rounded-lg border-green-400 border-opacity-25 bg-white">
              <button
                className=" text-[#60b246] p-1 shadow-lg w-20"
                onClick={() => {
                  handleClick(item);
                }}
              >
                +{" "}
              </button>
              
              {<h1 className="p-1">
              {
                itemPerCount.filter(
                  (reduxitems) =>
                    reduxitems.card.info.id === item?.card?.info?.id
                ).length
              }
                </h1>
              
              }
              <button
                className="p-1 text-[#60b246] w-20"
                onClick={() => {
                  handleClickRemove(item);
                }}
              >
                -{" "}
              </button>
              </div>
            </div>
            {item?.card?.info?.imageId && (
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full h-full object-cover bg-cover  rounded-lg"
                alt="restaurant-dish-img"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
