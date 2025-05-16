import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    items: []
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (satate, {payload}) => {
            console.log(payload);
            
        }
    },

})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer