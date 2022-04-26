import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Categories from '../components/Categories';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.setState(async () => {
      const categories = await getCategories();
      this.setState({
        categories: [...categories],
      });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <input
            id="search"
            type="text"
          />
        </label>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <section>
          <p>Categorias</p>
          <ul>
            {categories.map((category) => (
              <li key={ category.id }>
                <Categories
                  category={ category }
                />
              </li>
            ))}
          </ul>

        </section>
      </div>
    );
  }
}

export default Home;
