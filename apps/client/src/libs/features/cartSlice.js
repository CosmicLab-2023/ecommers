import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = [...products, action.payload];
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    toggleCartProduct: (state, action) => {
      const productExist = state.products.find(
        (product) => product.id === action.payload.id
      );
      const products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = productExist ? products : [...products, action.payload];
    },
    
  },
});

export const { addToCart, removeFromCart, toggleCartProduct, isInCart } =
  cartSlice.actions;

export default cartSlice.reducer;
