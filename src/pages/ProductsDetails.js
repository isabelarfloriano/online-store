import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { handleClick, match: { params: { id } } } = this.props;
    return (
      <div>
        <Link
          to="/shoppingCart"
          data-testid="shopping-cart-button"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABI
            CAMAAABiM0N1AAAAjVBMVEVHcExmdX9mdX9mdX8pLzNmdX9mdX9mdX9mdX8
            pLzMpLzMpLzNmdX9mdX8pLzNmdX9mdX9mdX9mdX9mdX9mdX+FjJCzur9mdX8
            pLzPG0Ndse4WAjZeZpq5ebHY0PEGTn6ifrLTh6O01Oz+zvsZPW2M4QUaGk5y
            suMC/xcqmsrp5h5EtMzjM1t2/ytG5xMvxlChcAAAAFXRSTlMAMO8Qv7/PQIBgI
            M+vj+9gcJ8gUN+h1hZ8AAAB1ElEQVR4Xu2W13LyMBBG3XADUn7iSu8l5f0f75c
            EyedotAjjveAi52pn1hxjn0GDcxt/xAV4c+/3+EWTAZco7PhowGHAlSKXwyRFIw5
            RKEQxh2iAbN2Ika0bI9ZsEVe254fL1uPJ1p6
            YyNYeIlt7iGyt8YyintjMPxRjNV6Qgu95LuYxRnOcV1yE6yHCHTAOyWz1WTQR48
            kkOol5ch5rMb4YRVEhqJRo3/ywPu/VVNE/qX9Fa3zHCEM0ZGsFounZ2oFodLadG
            HfNaki+s0VDtkv/sVk00aJR2dZKdGw018ajmtaIRmRb4LpKF1W40wLROmRDNJ5sQ
            5ZDEtGIbC1ANDob+qMa6iOaNZuqUuuiGmtEow9J9NdFqD9HNMsh+YkPyQnyL/p4B
            FHIEs3v8UTzw6IdPtOxFhOeZ7n04uhWrv4Z8VynO/i2DKKIT/RIjxbyvGzk5/lKi
            s22FGw3hYa2IzO7ntpNZ+WF2bQAxM4xmkLpeS9/eNdMhh31nsJC3BPMiiaGHZ05k
            YJVlufZSk6JZUcTSM9hKThIU2DZ0ZSCbKnI5HxtZxXlZ1EOEbHjEjE+Gv/L5s8P+
            mWDvnVHkz7B85TadzTpz337qWVnIwmkJkgsuwfmP7o+1cJrCT8WAAAAAElFTkSuQmCC"
            alt="Imagem do carrinho de compras"
          />
        </Link>
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
        <button
          data-testid="product-detail-add-to-cart"
          id={ id }
          value={ `${name}___${price}___${image}` }
          type="button"
          onClick={ handleClick }
        >
          Comprar
        </button>
      </div>

    );
  }
}
ProductsDetails.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductsDetails;
