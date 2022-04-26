import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
// import * as api from './services/api';

class App extends Component {
  /* constructor() {
    super();
    this.state = {
      categoryId: '',
      query: 'geladeira',
    };
  }

  testeAPI = () => {
    this.setState({
      query: 'geladeira',
    });
  } */

  render() {
    /* const { categoryId, query } = this.state;
    api.getProductsFromCategoryAndQuery(categoryId, query)
      .then((categories) => { console.log(categories); }); */
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shoppingCart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
