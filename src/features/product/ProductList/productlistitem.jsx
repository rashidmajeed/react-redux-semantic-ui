import React, { Component } from 'react'
import { Segment, Item, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ProductListItem extends Component {
  render() {

    const { product, deleteProduct } = this.props;
    return (
      <Segment.Group style={{ margin: '0' }}>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={product.image} />
              <Item.Content>
                <Item.Header as="a">{product.name}</Item.Header>
                <Item.Description>
                  Product Owner <a>{product.owner}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
	    <Icon name="marker" /> {product.category}  |
            <Icon name="clock" /> {product.date}
            
          </span>
        </Segment>
       
        <Segment clearing>
          <span>{product.description}</span>
          <Button onClick={deleteProduct(product.id)}
            as="a" color="red"
            floated="right"
            content="Delete" />
          <Button as={Link} to={`/product/${product.id}`} color="teal" floated="right" content="View" />

        </Segment>
      </Segment.Group>
    )
  }
}

export default ProductListItem
