import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-slice';
import itemsReducer from './reducers/items-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    items: itemsReducer,
  },
});

export default store;
