import React, {Component} from "react";
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navigate.css';
 
export default class Navigate extends Component {
render() {
  return (
    <Navbar default collapseOnSelect >
        <Navbar.Header >
            <Navbar.Brand>
                <Link to="/"></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>   
          <Navbar.Collapse > 
             <Nav pullRight >
                  <NavItem eventkey={1} componentClass={Link} href="/" to="/">Home
                  </NavItem>
                  <NavItem eventkey={2} componentClass={Link} href="/about" to="/about">About Us
                 </NavItem>
                 <NavItem eventkey={3} componentClass={Link} href="/classes" to="/classes">Classes
                 </NavItem>
                 <NavItem eventkey={4} componentClass={Link} href="/instructors" to="/instructors">Instructors
                 </NavItem>
                 <NavItem eventkey={5} componentClass={Link} href="/contact" to="/contact">Contact Us
                 </NavItem>
             </Nav>
          </Navbar.Collapse>   
    </Navbar>  

  );
}
}
 