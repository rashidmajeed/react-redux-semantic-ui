import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import ProductDetailedHeader from './ProductDetailedHeader';
import ProductDetailedInfo from './ProductDetailedInfo';

const mapState = (state, ownProps) => {
  const productId = ownProps.match.params.id;

  let product = {};

  if (productId && state.products.length > 0) {
    product = state.products.filter(product => product.id === productId)[0]
  }

  return {
    product
  }
}

const ProductDetailedPage = ({product}) => {
  return (
    <Grid>
      <Grid.Column width={16}>
        <ProductDetailedHeader product={product} />
        <ProductDetailedInfo product={product} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(ProductDetailedPage);
