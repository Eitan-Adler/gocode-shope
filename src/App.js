import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
class App extends React.Component {
  state = {
    products: [],
    filterdBy: "All",
  };
  groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => this.setState({ products }));
  }
  render() {
    const { products, filterdBy } = this.state;
    const app = (
      <div>
        <Header
          categories={Object.keys(this.groupBy(products, "category"))}
          changeFilterdBy={(category) => this.setState({ filterdBy: category })}
        />
        <Products products={products} filterdBy={filterdBy} />
      </div>
    );
    return app;
  }
}

export default App;
