import classes from './Header.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={classes['header-bar']}>
      <span className={classes['brand-title']}>Brand Title</span>
      <nav className={classes['nav-elements']}>
        <ul className={classes['link-list']}>
          <li className={classes['link-item']}>Shop</li>
          <span className="cart">
            <li className={classes['link-item']}>
              <div className={classes['nav-cart-container']}>
                <FaShoppingCart className={classes['shopping-cart-icon']} />
                <div className={classes['cart-count-container']}>
                  <span className={classes['cart-amount-badge']}>0</span>
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
