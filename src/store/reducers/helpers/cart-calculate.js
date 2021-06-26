// update the cart total price and total quantity
const calculateCart = (updatedCart) => {
  let updatedQuantity = 0;

  const updatedPrice = updatedCart.reduce((total, currItem) => {
    // update quantity
    updatedQuantity = updatedQuantity + currItem.quantity;
    // update total
    return total + currItem.price * currItem.quantity;
  }, 0);

  return { updatedPrice, updatedQuantity };
};

export default calculateCart;
