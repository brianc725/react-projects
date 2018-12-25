import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    } from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <div>
        <Navbar color="dark" dark>
          <NavbarBrand className="mx-auto" href="/">clicker</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
