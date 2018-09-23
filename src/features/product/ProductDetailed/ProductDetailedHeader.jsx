import React from 'react';
import { Segment, Image, Item, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const productImageStyle = {
    filter: 'brightness(30%)'
};

const productImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const ProductDetailedHeader = ({product}) => {
  return (
    <Segment.Group style={{ margin: '40px' }}>
      <Segment basic attached="top" style={{ padding: '0' }}>
        <Image src={`/assets/categoryImages/${product.category}.jpg`} fluid style={productImageStyle} />

        <Segment basic style={productImageTextStyle}>
        <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={product.name}
                  style={{ color: 'white' }}
                />
                <p>{product.date}</p>
                <p>
                  Owner <strong>{product.owner}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button as={Link} to={`/products`}>Back</Button>
        <Button color="teal" as={Link} to={`/createProduct`}>CREATE A PRODUCT</Button>

        <Button as={Link} to={`/manage/${product.id}`} color="orange" floated="right">
          Edit Product
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default ProductDetailedHeader;
