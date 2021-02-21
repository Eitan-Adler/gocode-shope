import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterdBy, setFilterBy] = useState("All");

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  const Home = (
    <div>
      <Header
        categories={Object.keys(groupBy(products, "category"))}
        changeFilterdBy={(category) => setFilterBy(category)}
      />
      <Products products={products} filterdBy={filterdBy} />
    </div>
  );
  return Home;
};

export default Home;
