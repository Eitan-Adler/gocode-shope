import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  state = {
    filterdBy: "All",
  };
  render() {
    const { categories, changeFilterdBy } = this.props;
    return (
      <nav className="product-filter">
        <h1>
          OUR VERY COOL{" "}
          {this.state.filterdBy === "All"
            ? "STORE"
            : this.state.filterdBy.toUpperCase()}
        </h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select
              onChange={(e) => {
                this.setState({ filterdBy: e.target.value });
                changeFilterdBy(e.target.value);
              }}
            >
              <option value="All">All</option>
              {categories.map((e) => (
                <option key={categories.indexOf(e)} value={e}>
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
  }
}
Header.propTypes = {
  categories: PropTypes.array,
  changeFilterdBy: PropTypes.func,
};

export default Header;
