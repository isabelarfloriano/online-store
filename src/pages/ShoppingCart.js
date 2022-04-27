import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const { cartProductsIds } = this.props;
    cartProductsIds.map(async (id) => {
      const pegarApi = await api.getDetailsProducts(id);
      this.setState((prevState) => ({
        products: [...prevState.products, pegarApi],
      }));
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {
          products.length === 0 ? (
            <h2
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </h2>
          ) : (
            products.map((product) => (
              <div key={ product.id }>
                <p data-testid="shopping-cart-product-name">{product.title}</p>
                <p>{product.price}</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p
                  data-testid="shopping-cart-product-quantity"
                >
                  1
                </p>
              </div>
            ))
          )
        }
      </div>

    );
  }
}

ShoppingCart.propTypes = {
  cartProductsIds: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default ShoppingCart;
