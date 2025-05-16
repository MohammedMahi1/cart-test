import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const getItemSelector = createSelector(
    (state: RootState)=>state.cart,
    (item)=>{
        return item.items
    }
)

export default getItemSelector