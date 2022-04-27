import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCard extends Component {
  render() {
    const { name, image, price } = this.props;
    return (
      <div data-testid="product">
        <div>{name}</div>
        <img src={ image } alt={ name } />
        <div>{price}</div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ItemCard;
