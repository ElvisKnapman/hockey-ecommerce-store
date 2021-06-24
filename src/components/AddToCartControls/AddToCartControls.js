import React, { useState } from 'react';

import classes from './AddToCartControls.module.css';

const AddToCart = (props) => {
  const { onAddToCart } = props;
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    setQuantity(1);
  };
  return (
    <React.Fragment>
      <div className={classes['add-to-cart']}>
        <span className={classes['quantity-label-text']}>Quantity</span>
        <div className={classes['quantity-controls']}>
          <button
            type="button"
            className={classes['btn']}
            onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className={classes['quantity-text']}>{quantity}</span>
          <button
            type="button"
            className={classes['btn']}
            onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
      </div>
      <button
        className={`${classes['btn']} ${classes['btn-add-to-cart']}`}
        onClick={handleAddToCart}>
        Add to Cart
      </button>
    </React.Fragment>
  );
};

export default AddToCart;
