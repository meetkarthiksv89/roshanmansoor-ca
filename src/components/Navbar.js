import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/header.png'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = class extends React.Component {

  componentDidMount() {
  
 }
 
 render() {
   return (
     <Navbar bg="white" expand="lg">
       <div className="container">
        <Navbar.Brand href="#home">
        <img
        src={logo}
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="navbar-item" to="/">
              HOME
            </Link>
            <Link className="navbar-item" to="/about">
              ABOUT US
            </Link>
            <Link className="navbar-item" to="/services">
              SERVICES
            </Link>
            <Link className="navbar-item" to="/products">
              INDUSTRIES
            </Link>
            <Link className="navbar-item" to="/contact">
              CLIENTS
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              CAREERS
            </Link>
            <Link className="navbar-item" to="/contact/examples">
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
