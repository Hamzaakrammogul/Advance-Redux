import { createSlice } from "@reduxjs/toolkit";

const initialFState= {cartIsVisible : false}


const uiSlice = createSlice({
    name: 'ui',
    initialState: initialFState,
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
    } 
});

export const uiSliceAction = uiSlice.actions;

export default uiSlice;
