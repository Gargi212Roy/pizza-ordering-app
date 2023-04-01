import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCartItem: (state, action) => {
      console.log(action.payload);

      const index = state.findIndex(
        (eachProduct) => eachProduct.product.id === action.payload.product.id
      );

      console.log("Index", index);

      if (index === -1) {
        const newItem = { ...action.payload, quantity: 1 };

        console.log("Action.payload", action.payload);
        console.log("new Item", newItem);

        console.log("state after index is -1", state);
        state.push(newItem);
      } else {
        state[index].quantity++;
      }
    },

    decrementCartItem: (state, action) => {
      const index = state
        ? state.findIndex((product) => product.id === action.payload.id)
        : -1;

      if (index === -1) {
        return state;
      }

      state[index].quantity--;

      if (state[index].quantity === 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { incrementCartItem, decrementCartItem } = cartSlice.actions;

export default cartSlice.reducer;
