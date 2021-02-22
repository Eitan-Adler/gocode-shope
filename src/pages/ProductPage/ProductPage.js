import React, { useEffect, useState } from "react";
import priceSet from "../../components/PriceSet/PriceSet";
import "./ProductPage.css";
const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [match.params.productId]);
  const { title, price, description, image } = product;
  const sale = match.params.sale === "true";
  return (
    Object.keys(product).length !== 0 && (
      <div>
        <h1>{title}</h1>
        <div className="content">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="info">
            <div>{description}</div>
            <div className="price">
              {sale ? (
                <div>
                  price: {priceSet(price).salePrice}
                  <span className="sale-old-price">
                    {priceSet(price).regPrice}
                  </span>
                </div>
              ) : (
                `price: ${priceSet(price).regPrice}`
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
