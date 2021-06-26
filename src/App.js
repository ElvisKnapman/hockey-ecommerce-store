import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';
import Cart from './components/Cart/Cart';
import { cartActions } from './store/reducers/cart-slice';

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();
  const location = useLocation();

  const { pathname } = location;

  useEffect(() => {
    // close cart if open whenever changing views
    dispatch(cartActions.hideCart());
  }, [pathname, dispatch]);

  return (
    <Layout>
      {showCart ? <Cart /> : null}
      <Switch>
        <Route path="/" exact>
          <Shop />
        </Route>
        <Route path={['/sticks', '/skates', '/helmets', '/gloves']} exact>
          <ProductList />
        </Route>
        <Route
          path={[
            '/sticks/:productId',
            '/skates/:productId',
            '/helmets/:productId',
            '/gloves/:productId',
          ]}>
          <ProductDetail />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
