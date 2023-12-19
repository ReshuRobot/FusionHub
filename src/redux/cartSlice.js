import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // cartSlice takes a configuration object

    name:'cart',// first configation is name
    initialState:{
        items:[]  //second configuration is initial state   
    },
    reducers : {
        addItem: (state, action) => {
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        },
        removeItem: (state, action) => {
            const indexToRemove = state.items.findIndex(
                (item) => item.card.info.id === action.payload.card.info.id
            );
    
            if (indexToRemove !== -1) {
                return {
                    ...state,
                    items: [
                        ...state.items.slice(0, indexToRemove),
                        ...state.items.slice(indexToRemove + 1)
                    ]
                };
            }
    
            return state;
        },
        clearCart: (state, action) => {
            return {
                ...state,
                items: []
            };
        }
}
});
export default cartSlice.reducer;
export const {addItem,removeItem,clearCart}=cartSlice.actions;