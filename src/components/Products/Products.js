import React, { useState } from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import PropTypes from "prop-types";

const Products = ({ products, filterdBy }) => {
  const [sale, setSale] = useState(true);

  const productSec = products.map(({ id, title, image, price, category }) => {
    const productComp = (
      <Product
        key={id}
        id={id}
        title={title}
        img={image}
        price={price}
        sale={category === "men clothing" ? sale : false}
      />
    );
    return category === filterdBy
      ? productComp
      : filterdBy === "All" && productComp;
  });
  const saleCountDown = <SaleCountDown endSale={() => setSale(false)} />;
  return (
    <section className="products">
      {saleCountDown}
      {productSec}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  filterdBy: PropTypes.string,
};
export default Products;
