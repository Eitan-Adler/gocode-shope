import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ProductPage from "./pages/ProductPage/ProductPage";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products/:productId/:sale" component={ProductPage} />

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
