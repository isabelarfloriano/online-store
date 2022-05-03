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
      cartProducts: [],
    };
  }

  handleClick = async (event) => {
    const { target } = event;
    const { value } = target;
    const targetValuesArr = value.split('___');
    const product = {
      id: target.id,
      title: targetValuesArr[0],
      price: Number(targetValuesArr[1]),
      thumbnail: targetValuesArr[2],
    };

    this.setState((prevState) => ({
      cartProductsIds: [...prevState.cartProductsIds, target.id],
      cartProducts: [...prevState.cartProducts, product],
    }));
  }

  render() {
    const { cartProductsIds, cartProducts } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              handleClick={ this.handleClick }
            />) }
          />
          <Route
            exact
            path="/shoppingCart"
            render={ (props) => (<ShoppingCart
              { ...props }
              cartProductsIds={ cartProductsIds }
              cartProducts={ cartProducts }
            />) }
          />
          <Route
            path="/productsDetails/:id"
            render={ (props) => (<ProductsDetails
              { ...props }
              handleClick={ this.handleClick }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
