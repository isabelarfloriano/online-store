import React from 'react';
import logo from './logo.svg';
import './App.css';
// import * as api from './services/api';

class App extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>Edit src/App.js and save to reload.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
