import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getItemSelector = createSelector(
    (state: RootState)=>state.cart.items,
    (item)=>{
        return item
    }
)

export default getItemSelector