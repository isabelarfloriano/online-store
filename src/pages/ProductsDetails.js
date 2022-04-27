import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductsDetails extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      details: [],
      image: '',
      price: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const pegarApi = await api.getDetailsProducts(id);
    const { price, thumbnail, title, attributes } = pegarApi;
    this.setState({ price, image: thumbnail, name: title, details: [...attributes] });
  }

  render() {
    const { price, image, name, details } = this.state;
    return (
      <div>
        <div>
          <h1 data-testid="product-detail-name">{name}</h1>
          <h3>{price}</h3>
          <img
            src={ image }
            alt="imagem do produto"
          />
          { details.map((i) => (
            <p key={ i.id }>
              {i.name}
              {' '}
              {i.value_name}
            </p>))}
        </div>
      </div>

    );
  }
}
ProductsDetails.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};

export default ProductsDetails;
