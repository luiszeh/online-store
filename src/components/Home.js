import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import Category from "./Category";
import "./Home.css";

class Home extends Component {
  render() {
    const { cartAdd, results } = this.props;
    return (
      <div>
        <header className="Header">
          <h1>Front-end Online Store - MVP</h1>
          <Link
            className="Cart"
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </Link>
        </header>
        <hr />
        <SearchBar cartAdd={cartAdd} />
        <div className="Category">
          <Category />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  cartAdd: PropTypes.func.isRequired,
};

export default Home;
