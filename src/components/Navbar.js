import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/header.png'
import { Navbar, Nav } from 'react-bootstrap';
class Header extends React.Component {

  state = {
    showInput: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleSearch() {
    this.setState(prevState => ({
      showInput: !prevState.showInput
    }));
  }

  onKeyPressed = e => {
    if(e.key === "Enter"){
      console.log('search')
      console.log(e.target.value)
    }
  }

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
          <span className="ml-1">Roshan Mansoor & Co.</span>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
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
            {/* <div className="navbar-item py-4 search-icon">
              {!this.state.showInput && <span className="float-left mt-1" onClick={() => this.toggleSearch()}>Search btn</span> }
              {this.state.showInput && 
                <form method = "get" title = "Search Form" action="https://cse.google.com/cse/publicurl" >
                <div>
                   <input type="text" id="q" name="q" title="Search this site" alt="Search Text" style={{width:'80px'}} />
                   <input type="hidden" id="cx" name="cx" value="013626029654558379071:ze3tw4csia4" />
                </div>
               </form>
              }
              <h6 className="hidden-sm-up float-left ml-4 font-weight-bold">SEARCH</h6>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )}
}

export default Header
