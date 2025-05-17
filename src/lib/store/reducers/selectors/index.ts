import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const getItemsSelector = createSelector(
    (state: RootState) => state.cart.items,
    (item) => {
        item
    }
)

export default getItemsSelector