import React from "react";
import "./Product.css";
import { PropTypes } from "prop-types";

class Product extends React.Component {
  render() {
    const { img, title, price, sale } = this.props;
    const ProductCard = (
      <div className="product-card">
        <div className="product-image">
          <img alt="" src={img}></img>
        </div>
        <div class="product-info">
          <h5>{title}</h5>
          {sale ? (
            <div>
              <h6 className="winter-sale-lable">winter sale!</h6>
              <h6 className="sale-price">{`$${(price * 0.8).toFixed(2)}`}</h6>
              <h6 className="sale-old-price">{`$${price.toFixed(2)}`}</h6>
            </div>
          ) : (
            <h6>{`$${price.toFixed(2)}`}</h6>
          )}
        </div>
      </div>
    );
    return ProductCard;
  }
}
Product.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  sale: PropTypes.bool,
};

export default Product;
