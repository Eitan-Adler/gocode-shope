import React, { useEffect, useState } from "react";
const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${match.params.productId}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, [match.params.productId]);
  return (
    <div>
      <div>product info:</div>
      <div>{product.description}</div>
    </div>
  );
};

export default ProductPage;
