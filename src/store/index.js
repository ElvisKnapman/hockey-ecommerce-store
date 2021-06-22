import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
