import { createSlice } from "@reduxjs/toolkit";
import { setToUserWishlists } from "../client/handleWishlist";

const initialState = {
  products: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlists: (state, action) => {
      state.products = action.payload
    },
    addToWishlist: (state, action) => {
      const products = state.products.filter(
        (product) => product !== action.payload
      );
      state.products = [...products, action.payload];
      setToUserWishlists(state.products)
    },
    removeFromWishlist: (state, action) => {
      state.products = state.products.filter(
        (product) => product !== action.payload
      );
      setToUserWishlists(state.products)
    },
    toggleWishlistProduct: (state, action) => {
      const productExist = state.products.find(
        (product) => product === action.payload
      );
      const products = state.products.filter(
        (product) => product !== action.payload
      );
      state.products = productExist ? products : [...products, action.payload];
      setToUserWishlists(state.products)
    },
    
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlistProduct, isInWishlist, setWishlists } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
