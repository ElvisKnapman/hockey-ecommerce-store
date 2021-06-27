import { Link, useLocation } from 'react-router-dom';
import classes from './ProductListItem.module.css';

const ProductListItem = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const { id, name, price, image } = props.item;
  const formattedPrice = price.toLocaleString();
  console.log('name in product list item', name);
  return (
    <div className={classes['product-item']}>
      <Link to={`${pathname}/${id}`}>
        <div className={classes['product-info']}>
          <img className={classes['product-image']} src={image} alt="" />
          <span className={classes['product-name-text']}>{name}</span>
          <span className={classes['price-text']}>${formattedPrice}</span>
          <button className={`${classes['btn']} ${classes['btn-view-item']}`}>
            View Item
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductListItem;
