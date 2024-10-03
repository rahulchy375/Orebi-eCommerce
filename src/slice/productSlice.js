import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItem: JSON.parse(localStorage.getItem("cart")) || [],
    subTotal:0,
  },
  reducers: {
    addToCart: (cartState, action) => {
      let findProduct = cartState.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      // findIndex methods returns -1 as falsy value. We used it to check whether any product exist in the cartItem array or not.

      if (findProduct !== -1) {
        toast.success("Product quantity increased")
        cartState.cartItem[findProduct].qan += 1;
        localStorage.setItem("cart", JSON.stringify(cartState.cartItem));
      } else {
        toast.success("Product is added")
        cartState.cartItem = [...cartState.cartItem, action.payload];
        localStorage.setItem("cart", JSON.stringify(cartState.cartItem));
      }
    },

    increment: (state, action) => {
      if (
        state.cartItem[action.payload].qan <
        state.cartItem[action.payload].stock
      ) {
        state.cartItem[action.payload].qan += 1;
        localStorage.setItem(`cart`, JSON.stringify(state.cartItem));
      }
    },

    decrement: (state, action) => {
      if (state.cartItem[action.payload].qan > 1) {
        state.cartItem[action.payload].qan -= 1;
        localStorage.setItem(`cart`, JSON.stringify(state.cartItem));
      }
    },

    removeProduct: (state, action) => {
      toast.info("Product is removed")
      state.cartItem.splice(action.payload, 1);
      localStorage.setItem(`cart`, JSON.stringify(state.cartItem));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, increment, decrement, removeProduct } =
  productSlice.actions;

export default productSlice.reducer;
