import React, { Component } from 'react'
import ProductListItem from './productlistitem'

class ProductList extends Component {
  render() {
    const { products, deleteProduct } = this.props;
    return (
      <div>
        <h1><center>Product List</center></h1>
        {products.map((product) => (
          <ProductListItem key={product.id}
            product={product}
            deleteProduct={deleteProduct} />
        ))}
      </div>
    )
  }
}

export default ProductList
