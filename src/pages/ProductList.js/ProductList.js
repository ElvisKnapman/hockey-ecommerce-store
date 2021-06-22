import { useLocation } from 'react-router-dom';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

import productData from '../../data/product-data';

import classes from './ProductList.module.css';

const ProductList = (props) => {
  const location = useLocation();
  const { pathname: route } = location;
  // remove slash
  const itemKey = route.substring(1);
  // get items for the specific route
  const items = productData[itemKey];

  return (
    <main className={classes['list-container']}>
      <h1 className={classes['list-title']}>{itemKey}</h1>
      <div className={classes['list-item-container']}>
        {items.map((item) => (
          <ProductListItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
