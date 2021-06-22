import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList.js/ProductList';
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
        <Route path="/sticks/:productId"></Route>
        <Route path="/skates/:productId"></Route>
        <Route path="/sticks/:productId"></Route>
        <Route path="/gloves/:productId"></Route>
      </Switch>
    </Layout>
  );
}

export default App;
