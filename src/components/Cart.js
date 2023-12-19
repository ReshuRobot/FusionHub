import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart } from "../redux/cartSlice";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

const Cart =()=>{

    const CartItems= useSelector((store)=>store.cart.items);
    // const NewCartItems = [];
    // CartItems.forEach((item)=>{

    //     const foundItem = NewCartItems.find((newItem)=>newItem.card.info.id === item.card.info.id);
    //     if(!foundItem){
    //         NewCartItems.push({...item});
    //     } 
    // });
    const uniqueCartItems = CartItems.reduce((acc, item) => {
        const foundItem = acc.find((newItem) => newItem.card.info.id === item.card.info.id);
        if (!foundItem) {
          acc.push({ ...item });
        }
        return acc;
      }, []);


 const dispatch =useDispatch();
   const  handleclearCart =()=>{

        dispatch(clearCart())
    }
    return (
        <div className=" text-center  p-4 ">
        <h1 className ="text-2xl mt-10 mb-5 font-bold">Cart</h1>

        <div className="w-6/12 pb-20 rounded-md bg-green-500 bg-opacity-10 m-auto">
        <div className="text-right p-4">
          <button
            className="bg-green-200 px-4 py-2 rounded-lg "
            onClick={handleclearCart}
          >
            Clear
          </button>
        </div>
{        CartItems.length === 0 ? <h1 className="text-2xl text-green-500 bg-opacity-50">Cart is empty Add Item to the cart! </h1> :   <ItemList  items ={uniqueCartItems}/>
}
        </div>
        </div>
      );
}
export default Cart;