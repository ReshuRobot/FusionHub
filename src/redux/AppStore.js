import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const AppStore = configureStore({
    //configureStore takes a configuration object 
reducer:{ // reducer is a big object that contains all the reducers 
    cart : cartReducer,// cart is the name of the reducer
 

}
}
)
export default AppStore;