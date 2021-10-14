import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './Home.client'
import Product from './Product.client'
const Routing = () => {
    return( <Router>
        <Switch>
            <Route path ="/product" component= {Product} />
            <Route path ="/" component = {Home} />
        </Switch>
      </Router>);
}
export default Routing;