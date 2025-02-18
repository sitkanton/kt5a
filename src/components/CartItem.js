import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    { id: 1, title: 'Глушитель', count: 5 },
    { id: 2, title: 'Дифференциал', count: 4 },
    { id: 3, title: 'Двигатель', count: 7 },
    { id: 4, title: 'коробка передач', count: 1 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.count < 25) {
        item.count += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.count > 0) {
        item.count -= 1;
      }
      if (item && item.count === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
    addItem: (state, action) => {
      const newItem = {
        id: state.cart.length + 1,
        title: action.payload,
        count: 1,
      };
      state.cart.push(newItem);
    },
  },
});

export const { increment, decrement, addItem } = cartSlice.actions;

export default cartSlice.reducer;