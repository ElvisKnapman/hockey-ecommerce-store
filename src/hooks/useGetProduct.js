import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useGetProduct = (type, id) => {
  const products = useSelector((state) => state.items);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState({
    isError: false,
    message: '',
  });

  useEffect(() => {
    console.log('the get product effect has run');
    const findProduct = () => {
      const foundProduct = products[type].find((product) => product.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setError({ isError: false, message: '' });
      } else {
        setError({ isError: true, message: 'No product was found.' });
      }
    };

    findProduct();
  }, [type, id, products]);

  return [product, error];
};

export default useGetProduct;
