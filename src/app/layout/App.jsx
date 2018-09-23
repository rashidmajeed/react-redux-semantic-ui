import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom';
import ProductDashboard from '../../features/product/ProductDashboard/productdashboard'
import NavBar from '../../features/nav/NavBar/navbar'
import ProductForm from '../../features/product/ProductForm/productform';
import ProductDetailedPage from '../../features/product/ProductDetailed/ProductDetailedPage';
import HomePage from '../../features/home/homepage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/products" component={ProductDashboard} />
                  <Route path="/product/:id" component={ProductDetailedPage} />
                  <Route path="/manage/:id" component={ProductForm} />
                  <Route path="/createProduct" component={ProductForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
