import { createSlice } from "@reduxjs/toolkit";

let datafromWeb = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart1",
  initialState: datafromWeb,
  reducers: {
    addItem(state, action) {
      state.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const newProducts = state.filter(cartProduct => cartProduct.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(newProducts));
      return newProducts;
    }
  }
});

export default cartSlice.reducer;

export let { addItem, removeItem } = cartSlice.actions;
