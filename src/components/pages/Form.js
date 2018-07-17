import React, { Component } from "react";
import { Jumbotron, Grid, ResponsiveEmbed,Glyphicon, Row, Table, Col, Image, Button} from 'react-bootstrap';

import "./Form.css";
class Form extends Component {
  // Setting the component's initial state
  state = {
    email: '',
    firstName: "",
    lastName: ""
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName} @ ${this.state.email}`);
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      message: ''
    });
  };
  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <Row>
              <Col xs={10} sm={8} md={6} lg={6}> 
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="email"
            placeholder="Email"
          />
          
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
         </Col>
          </Row>
      </div>
    );
  }
}
export default Form;