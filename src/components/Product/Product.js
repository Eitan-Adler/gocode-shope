import React from "react";
import "./Product.css";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import priceSet from "../PriceSet/PriceSet";

const Product = ({ img, title, price, sale, id }) => {
  const ProductCard = (
    <div className="product-card">
      <Link to={`/products/${id}/${sale}`}>
        <div className="product-image">
          <img alt="" src={img}></img>
        </div>
        <div class="product-info">
          <h5>{title}</h5>
          {sale ? (
            <div>
              <h6 className="winter-sale-lable">winter sale!</h6>
              <h6 className="sale-price">{priceSet(price).salePrice}</h6>
              <h6 className="sale-old-price">{priceSet(price).regPrice}</h6>
            </div>
          ) : (
            <h6>{priceSet(price).regPrice}</h6>
          )}
        </div>
      </Link>
    </div>
  );
  return ProductCard;
};

Product.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  sale: PropTypes.bool,
};

export default Product;
