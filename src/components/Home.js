import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import Category from './Category';

class Home extends Component {
  render() {
    const { cartAdd } = this.props;
    return (
      <div>
        <header>
          <h1>Grupo 23 OnLine Shop</h1>
        </header>
        <SearchBar cartAdd={ cartAdd } />
        <div>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
        </div>
        <Category />
      </div>
    );
  }
}

Home.propTypes = {
  cartAdd: PropTypes.func.isRequired,
};

export default Home;
