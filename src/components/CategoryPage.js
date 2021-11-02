import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductCard from "./ProductsCard";
import { getProductsFromCategoryAndQuery } from "../services/api";
import Loading from "./Imagens/loading.gif";
import "./CategoryPage.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: true,
    };
    this.changeSate = this.changeSate.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  componentDidMount() {
    this.changeSate();
  }

  changeSate() {
    const {
      match: {
        params: { categoria: id },
      },
    } = this.props;
    getProductsFromCategoryAndQuery(id).then(({ results }) =>
      this.setState({
        results,
        loading: false,
      })
    );
  }

  renderLoading() {
    return <img className="Loading-img" src={Loading} alt="Loading" />;
  }

  render() {
    const { results, loading } = this.state;
    const { cartAdd } = this.props;
    const render = (
      <div>
        <div className="Cart-icon">
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            <AiOutlineShoppingCart />
          </Link>
        </div>
        <div className="Cards">
          <ProductCard cartAdd={cartAdd} product={results} />
        </div>
      </div>
    );
    return loading ? this.renderLoading() : render;
  }
}

CategoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoria: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cartAdd: PropTypes.func.isRequired,
};

export default CategoryPage;
