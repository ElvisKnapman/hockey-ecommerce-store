import { createSlice } from '@reduxjs/toolkit';

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
      let updatedQuantity = 0;

      const updatedPrice = updatedCart.reduce((total, currItem) => {
        // update quantity
        updatedQuantity = updatedQuantity + currItem.quantity;
        // update total
        return total + currItem.price * currItem.quantity;
      }, 0);

      // return the updated state
      return {
        ...state,
        cart: updatedCart,
        totalPrice: Number(updatedPrice.toFixed(2)),
        totalQuantity: updatedQuantity,
      };
    },

    removeItem: (state, action) => {},

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
