import { createSlice } from '@reduxjs/toolkit';

let nextId = 5; 

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
     { id: 1, title: 'Глушитель', count: 5 },
    { id: 2, title: 'Дифференциал', count: 4 },
    { id: 3, title: 'Двигатель', count: 7 },
    { id: 4, title: 'коробка передач', count: 1 },
    ]
  },
  reducers: {
    increment: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.count < 25) {
        item.count += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    addItem: (state, action) => {
      const newItem = {
        id: nextId++, 
        title: action.payload.title,
        count: 1 
      };
      state.cart.push(newItem);
    }
  }
});

export const { increment, decrement, removeItem, addItem } = cartSlice.actions;
export default cartSlice.reducer;
