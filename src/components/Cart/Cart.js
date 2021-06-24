import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/reducers/cart-slice';

import { IoClose } from 'react-icons/io5';

import CartItem from './CartItem/CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log('the cart in the cart component', cart);

  // callbacks to pass down to CartItem
  const handleIncreaseQuantity = () => {};

  const handleDecreaseQuantity = () => {};

  const cartItems = cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onIncreaseQuantity={handleIncreaseQuantity}
      onDecreaseQuantity={handleDecreaseQuantity}
    />
  ));
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
      <div className={classes['cart-items']}>
        {cart.length > 0 ? (
          cartItems
        ) : (
          <p className={classes['no-items-message']}>
            No items in your cart. Go add some!
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
