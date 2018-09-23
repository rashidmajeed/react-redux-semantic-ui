import React, { Component } from 'react';
import { connect } from 'react-redux'
import cuid from 'cuid';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createProduct, updateProduct } from '../productActions'

const mapState = (state, ownProps) => {
  const productId = ownProps.match.params.id;

  let product = {
    name: '',
    price: '',
    date: '',
    category: '',
    description: '',
    owner: '',
    image: ''
  }

  if (productId && state.products.length > 0) {
    product = state.products.filter(product => product.id === productId)[0]
  }

  return {
    product
  }
}

const actions = {
  createProduct,
  updateProduct
}

class ProductForm extends Component {

  state = {
    product: Object.assign({}, this.props.product)
  }

  onFormSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.product.id) {
      this.props.updateProduct(this.state.product);
      this.props.history.goBack();
    } else {
      const newProduct = {
        ...this.state.product,
        id: cuid(),
        image: '/assets/product.png'
      }
      this.props.createProduct(newProduct)
      this.props.history.push('/products')
    }

  }

  onInputChange = (evt) => {
    const newProduct = this.state.product;
    newProduct[evt.target.name] = evt.target.value
    this.setState({
      event: newProduct
    })
  }

  render() {

    //const {handleCancel} = this.props;
    const {product} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Product Name</label>
            <input name='name' onChange={this.onInputChange} value={product.name} placeholder="Product Name" />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input name='price' onChange={this.onInputChange} value={product.price} placeholder="Price" />
          </Form.Field>
          <Form.Field>
            <label>Created Date</label>
            <input name='date' onChange={this.onInputChange} value={product.date} type="date" placeholder="Created Date" />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input name='category' onChange={this.onInputChange} value={product.category} placeholder="Product Category" />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input name='description' onChange={this.onInputChange} value={product.description} placeholder="Description" />
          </Form.Field>
          <Form.Field>
            <label>Owner</label>
            <input name='owner' onChange={this.onInputChange} value={product.owner} placeholder="Enter the name of of Product Owner" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(mapState, actions)(ProductForm);