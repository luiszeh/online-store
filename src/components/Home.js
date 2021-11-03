import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import Category from "./Category";
import "./Home.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

class Home extends Component {
  render() {
    const { cartAdd } = this.props;
    return (
      <div className="Home">
        <header className="Header">
          <h1>Front-end Online Store - MVP</h1>
          <div className="Cart">
            <Link to="/shoppingcart" data-testid="shopping-cart-button">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </header>
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
