import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart() { },
        removeItemFromCart() { }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;