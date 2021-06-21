import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes['header-bar']}>
      <span className={classes['brand-title']}>Brand Title</span>
      <nav className={classes['nav-elements']}>
        <ul className={classes['link-list']}>
          <li className={classes['link-item']}>Shop</li>
          <li className={classes['link-item']}>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
