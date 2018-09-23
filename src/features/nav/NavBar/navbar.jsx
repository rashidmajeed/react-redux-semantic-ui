import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  
  render() {
      return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            Product-Catalog
          </Menu.Item>
          <Menu.Item>
            <Button
              as={Link}
              to="/createProduct"
              floated="right"
              positive
              inverted
              content="Create Product"
            />
          </Menu.Item>
          
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
