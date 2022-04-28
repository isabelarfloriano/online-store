import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import * as api from '../services/api';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const { cartProducts } = this.props;
    this.setState({
      products: cartProducts,
    });
    /* const { cartProductsIds } = this.props;
    const uniqueIDs = [...new Set(cartProductsIds)];
    uniqueIDs.map(async (id) => {
      const apiResult = await api.getDetailsProducts(id);
      console.log(apiResult.title);
      this.setState((prevState) => ({
        products: [...prevState.products, apiResult],
      }));
    }); */
    /*  console.log(cartProductsIds);
    const idOne = cartProductsIds[0];
    const idTwo = cartProductsIds[1];
    const apiResult1 = api.getDetailsProducts(idOne)
      .then((product) => {
        console.log(product.title);
      });
    const apiResult2 = api.getDetailsProducts(idTwo)
      .then((product) => {
        console.log(product.title);
      });
    this.setState({
      products: [apiResult1, apiResult2],
    }); */
  }

  deleteProduct = ({ target }) => {
    const { products } = this.state;
    const productsFiltered = products.filter((product) => product.id !== target.id);
    this.setState({
      products: productsFiltered,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Link to="/">
          <p>Voltar</p>
        </Link>
        {
          products.length === 0 ? (
            <h2
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </h2>
          ) : (
            products.map((product) => (
              <CartItem
                key={ product.id }
                id={ product.id }
                name={ product.title }
                price={ product.price }
                image={ product.thumbnail }
                deleteProduct={ this.deleteProduct }
              />
            ))
          )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

export default ShoppingCart;
