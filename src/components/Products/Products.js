import React from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
import PropTypes from "prop-types";

class Products extends React.Component {
  state = {
    sale: true,
  };

  render() {
    const { products, filterdBy } = this.props;
    const productSec = products.map(({ id, title, image, price, category }) => {
      const productComp = (
        <Product
          key={id}
          title={title}
          img={image}
          price={price}
          sale={category === "men clothing" ? this.state.sale : false}
        />
      );
      return category === filterdBy
        ? productComp
        : filterdBy === "All" && productComp;
    });
    const saleCountDown = (
      <SaleCountDown endSale={() => this.setState({ sale: false })} />
    );
    return (
      <section className="products">
        {saleCountDown}
        {productSec}
      </section>
    );
  }
}
Products.propTypes = {
  products: PropTypes.array,
  filterdBy: PropTypes.string,
};
export default Products;
