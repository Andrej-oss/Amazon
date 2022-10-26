import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const items = state.items;
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        items.splice(index, 1);
      }
      state.items = [...items];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const itemsSelector = (state) => state.basket.items;

export default basketSlice.reducer;
