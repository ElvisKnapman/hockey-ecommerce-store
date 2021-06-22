import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList.js/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <Layout>
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
