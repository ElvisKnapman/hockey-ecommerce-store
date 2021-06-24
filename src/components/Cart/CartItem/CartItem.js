import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { onIncreaseQuantity, onDecreaseQuantity, item } = props;
  const { name, price, quantity } = item;
  // format price
  const formattedPrice = price.toLocaleString();
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
            onClick={onDecreaseQuantity}>
            -
          </button>
          <span className={classes['quantity-text']}>{quantity}</span>
          <button
            type="button"
            className={classes['btn']}
            onClick={onIncreaseQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
