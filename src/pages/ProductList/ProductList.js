import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductListItem from '../../components/ProductListItem/ProductListItem';

import classes from './ProductList.module.css';

const ProductList = (props) => {
  const location = useLocation();
  const { pathname: route } = location;
  const products = useSelector((state) => state.items);
  console.log('the products', products);
  // remove slash
  const itemKey = route.substring(1);
  // get items for the specific route
  const items = products[itemKey];

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
