import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
  <Navbar className="container" bg="light" expand="lg">
  <Navbar.Brand>Book Haven</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/home" className="mx-2 text">Home</Link>
      <Link to="/order" className="mx-2 text">Order</Link>
      <Link to="/deals" className="mx-2 text">Deals</Link>
      <Link to="/admin" className="mx-2 text">Admin</Link>
      <Link to="/login" className="mx-2 text">Login</Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;