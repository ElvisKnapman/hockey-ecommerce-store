import { Link, useLocation } from 'react-router-dom';
import classes from './ProductListItem.module.css';

const ProductListItem = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const { id, name, price, image } = props.item;
  const formattedPrice = price.toLocaleString();
  return (
    <Link to={`${pathname}/${id}`}>
      <div className={classes['product-item']}>
        <div className={classes['product-info']}>
          <img className={classes['product-image']} src={image} alt="" />
          <span className={classes['price-text']}>${formattedPrice}</span>
          <span className={classes['product-name-text']}>{name}</span>
          <button className={classes['btn']}>View Item</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;
