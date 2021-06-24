import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/reducers/cart-slice';

import { IoClose } from 'react-icons/io5';

import CartItem from './CartItem/CartItem';

import classes from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cart: cartItems, totalPrice } = cart;

  console.log('the cart in the cart component', cartItems);

  // callbacks to pass down to CartItem
  const handleIncreaseQuantity = (itemId) => {
    dispatch(cartActions.increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(cartActions.decreaseQuantity(itemId));
  };

  // format price
  const formattedPrice = totalPrice.toLocaleString();

  // construct the content to display in cart UI
  const cartContent =
    cartItems.length > 0 ? (
      cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      ))
    ) : (
      <p className={classes['no-items-message']}>
        No items in your cart. Go add some!
      </p>
    );

  return (
    <div className={classes['cart-container']}>
      <div className={classes['title-close-icon']}>
        <h1 className={classes['cart-title']}>Your Cart</h1>
        <span
          className={classes['close-icon']}
          onClick={() => dispatch(cartActions.hideCart())}>
          <IoClose />
        </span>
      </div>
      <div className={classes['cart-items']}>{cartContent}</div>
      {totalPrice > 0 ? (
        <div className={classes['total-price-container']}>
          <p className={classes['total-text-label']}>Total</p>
          <p className={classes['total-price-text']}>${formattedPrice}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
