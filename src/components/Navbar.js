import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/header.png'
import { Navbar, Nav, Form } from 'react-bootstrap';

const Header = class extends React.Component {

render() {
  return (
    <Navbar bg="white" expand="lg" className="p-0 font-weight-bold">
      <div className="container">
        <Navbar.Brand className="navbar-custom-brand py-0">
          <Link to="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
           />
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="navbar-item py-4" to="/">
              HOME
            </Link>
            <Link className="navbar-item py-4" to="/about">
              ABOUT US
            </Link>
            <Link className="navbar-item py-4" to="/services">
              SERVICES
            </Link>
            <Link className="navbar-item py-4" to="/industries">
              INDUSTRIES
            </Link>
            <Link className="navbar-item py-4" to="/career">
              CAREERS
            </Link>
            <Link className="navbar-item py-4" to="/contact">
              CONTACT US
            </Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {/* <Button variant="outline-success">s</Button> */}
          </Form>
        </Navbar.Collapse>
      </div>
      </Navbar>
  )}
}

export default Header
