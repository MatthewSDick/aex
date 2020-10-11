import React from 'react';
import '../App.css';
// import * as ReactBootstrap from 'react-bootstrap';
import  { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';



const Navbars = () => {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Navbar.Brand href="#home">Antietam Exchange</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to="/">
      <Nav.Link href="#features">Home</Nav.Link>
      </Link>
      <Link to="/Projects">
        <Nav.Link href="#features">Projects</Nav.Link>
      </Link>
      <Link to="/Charities">
      <Nav.Link href="#pricing">Charities</Nav.Link>
      </Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
    <Link to="/AboutUS">
      <Nav.Link href="#deets">About Us</Nav.Link>
    </Link>
      {/* <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  )
}

export default Navbars;