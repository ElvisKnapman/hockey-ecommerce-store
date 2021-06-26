import { createSlice } from '@reduxjs/toolkit';

import calculateCart from './helpers/cart-calculate';

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload shape: id, name, price, options, quantity //

      // check if item is already in cart..
      const cartItem = state.cart.find((item) => item.id === action.payload.id);

      let updatedCart;
      // if it is, update the quantity
      if (cartItem) {
        updatedCart = state.cart.map((item) => {
          if (item.id === cartItem.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
      } else {
        // if item not already in cart, add it
        updatedCart = [...state.cart, action.payload];
      }

      // update the cart total price and total quantity
      const { updatedPrice, updatedQuantity } = calculateCart(updatedCart);

      // return the updated state
      return {
        ...state,
        cart: updatedCart,
        totalPrice: Number(updatedPrice.toFixed(2)),
        totalQuantity: updatedQuantity,
      };
    },

    increaseQuantity: (state, action) => {
      // add 1 to the quantity
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      // update the cart total price and total quantity
      const { updatedPrice, updatedQuantity } = calculateCart(updatedCart);

      // return the updated state
      return {
        ...state,
        cart: updatedCart,
        totalPrice: Number(updatedPrice.toFixed(2)),
        totalQuantity: updatedQuantity,
      };
    },

    decreaseQuantity: (state, action) => {
      // find item
      const cartItem = state.cart.find((item) => item.id === action.payload);

      // if quantity is 1, a decrease will remove the item
      let updatedCart;
      if (cartItem.quantity === 1) {
        updatedCart = state.cart.filter((item) => item.id !== action.payload);
      } else {
        // remove one from the quantity
        updatedCart = state.cart.map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }

      // update the cart total price and total quantity
      const { updatedPrice, updatedQuantity } = calculateCart(updatedCart);

      // return the updated state
      return {
        ...state,
        cart: updatedCart,
        totalPrice: Number(updatedPrice.toFixed(2)),
        totalQuantity: updatedQuantity,
      };
    },

    deleteItem: (state, aciton) => {},

    showCart: (state, action) => {
      return { ...state, showCart: true };
    },

    hideCart: (state, action) => {
      return { ...state, showCart: false };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
