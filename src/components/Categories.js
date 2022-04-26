import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { category } = this.props;
    return (
      <button
        data-testid="category"
        type="button"
      >
        {category.name}
      </button>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;
