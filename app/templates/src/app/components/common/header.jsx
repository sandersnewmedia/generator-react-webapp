import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a><h1>Pak'd</h1></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem>how it works</NavItem>
            <NavItem>about pak'd</NavItem>
            <NavItem>kid paks</NavItem>
            <NavItem>adult paks</NavItem>
            <NavItem>login</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>Cart</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
