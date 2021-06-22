import { useParams } from 'react-router-dom';
import useGetProduct from '../../hooks/useGetProduct';

// get type from the url string
const type = window.location.pathname.split('/')[1];

const ProductDetail = (props) => {
  const params = useParams();
  let { productId: id } = params;
  // convert product id to number
  id = Number(id);
  const [product, error] = useGetProduct(type, id);

  console.log('the type', type);

  console.log(product);
  if (error.isError) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductDetail;
