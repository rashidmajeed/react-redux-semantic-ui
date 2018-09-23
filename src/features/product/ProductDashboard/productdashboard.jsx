import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteProduct } from '../productActions';
import ProductList from '../ProductList/productlist';

const mapState = state => ({
  products: state.products
});

const actions = {
  deleteProduct
};

class ProductDashboard extends Component {
  handleDeleteProduct = productId => () => {
    this.props.deleteProduct(productId);
  };

  render() {
    const { products } = this.props;
    return (
      <Grid>
        <ProductList deleteProduct={this.handleDeleteProduct} products={products} />
      </Grid>
    );
  }
}

export default connect(mapState, actions)(ProductDashboard);
