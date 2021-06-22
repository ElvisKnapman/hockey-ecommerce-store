import classes from './ProductListItem.module.css';

const ProductListItem = (props) => {
  const { name, price, image } = props.item;
  return (
    <div className={classes['product-item']}>
      <div className={classes['product-info']}>
        <img className={classes['product-image']} src={image} alt="" />
        <span className={classes['price-text']}>${price}</span>
        <span className={classes['product-name-text']}>{name}</span>
        <button className={classes['btn']}>View Item</button>
      </div>
    </div>
  );
};

export default ProductListItem;
