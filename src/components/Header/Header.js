import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store/reducers/cart-slice';

import classes from './Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className={classes['header-bar']}>
      <span className={classes['brand-title']}>Elvis' Hockey Shop</span>
      <nav className={classes['nav-elements']}>
        <ul className={classes['link-list']}>
          <li className={classes['link-item']}>
            <Link to="/">Shop</Link>
          </li>
          <span className="cart">
            <li className={classes['link-item']}>
              <div
                className={classes['nav-cart-container']}
                onClick={() => dispatch(cartActions.showCart())}>
                <FaShoppingCart className={classes['shopping-cart-icon']} />
                <div className={classes['cart-count-container']}>
                  <span className={classes['cart-amount-badge']}>
                    {cartQuantity}
                  </span>
                </div>
              </div>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
