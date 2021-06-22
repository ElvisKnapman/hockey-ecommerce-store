import { createSlice } from '@reduxjs/toolkit';

const initialState = { cart: [], totalPrice: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {},

    removeItem: (state, action) => {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
