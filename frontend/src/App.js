import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/main-components/footer/footer";
import ContactView from "./views/contact/contact";
import MainView from "./views/main/main";
import OrderView from "./views/orders/orders";
import ProductDetailsView from "./views/product-details/product-details";



function App() {


  return (
    <div className="App">
      <Router>
        <Navigation />
        <div>
          <Switch>
            <Route path="/product/:id">
              <ProductDetailsView />
            </Route>
            <Route path="/order">
              <MainView />
            </Route>
            <Route path="/contact">
              <ContactView />
            </Route>
            <Route path="/">
              <MainView />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
