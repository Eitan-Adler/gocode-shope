import React, { useState } from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";

const Header = ({ categories, changeFilterdBy, prices }) => {
  const [filterdBy, setFilterBy] = useState("All");
  const [priceRange, setPriceRange] = useState([]);

  return (
    <nav className="product-filter">
      <h1>
        OUR VERY COOL {filterdBy === "All" ? "STORE" : filterdBy.toUpperCase()}
      </h1>

      <div className="sort">
        <div className="collection-sort">
          <Slider
            range
            min={7}
            max={1000}
            defaultValue={priceRange}
            onAfterChange={(value) => setPriceRange(value)}
          />

          <label>Filter by:</label>
          <select
            onChange={(e) => {
              setFilterBy(e.target.value);
              changeFilterdBy(e.target.value);
            }}
            value={filterdBy}
          >
            <option value="All">All</option>
            {categories.map((e, index) => (
              <option key={index} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  categories: PropTypes.array,
  changeFilterdBy: PropTypes.func,
};

export default Header;
