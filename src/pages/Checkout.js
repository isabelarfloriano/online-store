import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../components/CartItem';

class Checkout extends Component {
  deleteProduct = ({ target }) => {
    console.log(target);
  }

  render() {
    const { cartProducts } = this.props;
    return (
      <div>
        <Link to="/">
          <p>Voltar</p>
        </Link>
        {
          cartProducts.map((product) => (
            <CartItem
              key={ product.id }
              id={ product.id }
              name={ product.title }
              price={ product.price }
              image={ product.thumbnail }
              deleteProduct={ this.deleteProduct }
            />
          ))
        }
        <p>
          {
            cartProducts.reduce((acc, product) => {
              let totalPrice = 0;
              totalPrice = acc + product.price;
              return totalPrice;
            }, 0)
          }
        </p>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartProducts: PropTypes.oneOfType([
    PropTypes.array,
  ]).isRequired,
};

export default Checkout;
