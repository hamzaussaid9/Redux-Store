import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './container/Header';
import ProductList from './container/ProductList';
import ProductDetails from './container/ProductDetails';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <ProductList />
          </Route>
          <Route exact path="/Product/:productId">
            <Header />
            <ProductDetails />
            <br />
          </Route>
          <Route>
            <h1>404 not found</h1>
          </Route>
        </Switch>
      </Router>
      </>
  );
}

export default App;
