/*
 * Components
 */
import React, {Component} from "react";


export default class ConForm extends Component {
  state = {
   
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '', 
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };


  render() {
    return(
      <form>
        name = "firstName";
        <input placeholder='First Name'
        value={this.state.firstName}
        onChange={e => this.change(e.target)} 
        />
        name = "lastName";
        <input placeholder='lastName Name'
        value={this.state.lastName}
        onChange={e => this.change(e.target)} 
        />
        name = "email";
        <input placeholder='Email'
        value={this.state.email}
        onChange={e => this.change(e.target)}  
        />
        <input placeholder='First Name'
        value={this.state.firstName}
        onChange={e => this.change(e.target)} 
        />
        <button onClick={()} => this.onSubmit()}>Submit </button>
      </form>
      );
  }
