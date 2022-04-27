import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const { name, image, price, id } = this.props;
    return (
      <div data-testid="product">
        <Link
          to={ `/productsDetails/${id}` }
          data-testid="product-detail-link"
        >
          <div>{name}</div>
          <img src={ image } alt={ name } />
          <div>{price}</div>
        </Link>
        <button
          type="button"
        >
          Comprar
        </button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ItemCard;
