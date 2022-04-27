import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductsDetails from './pages/ProductsDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartProductsIds: [],
    };
  }

  handleClick = ({ target }) => {
    this.setState((prevState) => ({
      cartProductsIds: [...prevState.cartProductsIds, target.id],
    }));
    console.log(target.id);
  }

  render() {
    const { cartProductsIds } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              cartProductsIds={ cartProductsIds }
              handleClick={ this.handleClick }
            />) }
          />
          <Route
            exact
            path="/shoppingCart"
            render={ (props) => (<ShoppingCart
              { ...props }
              cartProductsIds={ cartProductsIds }
            />) }
          />
          <Route
            path="/productsDetails/:id"
            render={ (props) => <ProductsDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
