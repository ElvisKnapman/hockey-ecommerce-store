import { IoTrashOutline } from 'react-icons/io5';

import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { onIncreaseQuantity, onDecreaseQuantity, item } = props;
  const { id, name, price, quantity } = item;
  // format price
  const formattedPrice = price.toLocaleString();

  const handleIncreaseQuantity = () => {
    onIncreaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    onDecreaseQuantity(id);
  };
  return (
    <div className={classes['cart-item']}>
      <div className={classes['item-name-controls']}>
        <div className={classes['item-name-price']}>
          <p className={classes['item-name']}>{name}</p>
          <p className={classes['item-price']}>${formattedPrice}</p>
        </div>
        <div className={classes['quantity-controls']}>
          <button
            type="button"
            className={classes['btn']}
            onClick={handleDecreaseQuantity}>
            {quantity === 1 ? (
              <IoTrashOutline className={classes['trash-icon']} />
            ) : (
              '-'
            )}
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
    </div>
  );
};

export default CartItem;
