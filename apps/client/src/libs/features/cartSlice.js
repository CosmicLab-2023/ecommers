import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addAmount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return { ...product, amount: product.amount + 1 };
        }
        return product;
      });
    },
    removeAmount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          if (product.amount <= 1) {
            return { ...product, amount: 1 };
          }
          return { ...product, amount: product.amount - 1 };
        }
        return product;
      });
    },
    setAmount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.amount <= 1) {
            return { ...product, amount: 1 };
          }
          return { ...product, amount: action.payload.amount };
        }
        return product;
      });
    },
    addToCart: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = [...products, { ...action.payload, amount: 1 }];
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
      state.products = productExist
        ? products
        : [...products, { ...action.payload, amount: 1 }];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  toggleCartProduct,
  removeAmount,
  addAmount,
  setAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
