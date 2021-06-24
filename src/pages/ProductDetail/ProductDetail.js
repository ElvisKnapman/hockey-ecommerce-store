import { useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import AddToCart from '../../components/AddToCartControls/AddToCartControls';
import useGetProduct from '../../hooks/useGetProduct';

import { cartActions } from '../../store/reducers/cart-slice';

import classes from './ProductDetail.module.css';

// get type from the url string

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  let { productId: id } = params;
  // convert product id to number
  id = Number(id);
  const [type] = useState(() => window.location.pathname.split('/')[1]);
  const [product, error] = useGetProduct(type, id);
  const [size, setSize] = useState(null);

  // passing down and using in effect, memoizing to prevent triggers
  const handleSizeChange = useCallback((sizeData) => {
    setSize(sizeData);
  }, []);

  const handleAddToCart = (quantity) => {
    // construct object to add to cart state
    const cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      ...size,
      quantity,
    };

    // dispatch to the cart
    dispatch(cartActions.addItem(cartProduct));
  };

  // if there was an error retrieving product
  if (error.hasError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }

  // if product hasn't loaded yet
  if (!product) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className={classes['product-container']}>
      <div className={classes['product-info-container']}>
        <h1 className={classes['product-title']}>{product.name}</h1>
        <img
          className={classes['product-image']}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className={classes['product-options-container']}>
        <span className={classes['product-price']}>
          ${product.price.toLocaleString()}
        </span>
        <ProductOptions type={type} onSizeChange={handleSizeChange} />
        <AddToCart onAddToCart={handleAddToCart} />
      </div>
    </main>
  );
};

export default ProductDetail;
