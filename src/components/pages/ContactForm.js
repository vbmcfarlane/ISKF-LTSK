import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'
let Component = React.Component;
let createStore = Redux.createStore;
let bindActionCreators = Redux.bindActionCreators;
let Provider = ReactRedux.Provider;
let connect = ReactRedux.connect;


/*
 * Components
 */

class ContactForm extends Component {
  onEmailInput(e) {
    this.props.onChange(Object.assign({}, this.props.value, {
      email: e.target.value
    }));
  }
  onNameInput(e) {
    this.props.onChange(Object.assign({}, this.props.value, {
      name: e.target.value
    }));
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }
  render() {
    var errors = this.props.value.errors || {};
    return (
      <form className="ContactForm" onSubmit={this.onSubmit.bind(this)}>
        <input
          type="email"
          className={errors.email && 'ContactForm-error'}
          placeholder="Email"
          onChange={this.onEmailInput.bind(this)}
          value = {this.props.value.email}
          autoFocus={true}
        />
        <input
          type="text"
          className={errors.name && 'ContactForm-error'}
          placeholder="Name"
          onChange={this.onNameInput.bind(this)}
          value = {this.props.value.name}
          autoFocus={true}
        />
        <button type="submit">Add Contact</button>
      </form>
    )
  }
}
ContactForm.propTypes = {
  value: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
}

class ContactItem extends Component {
  render() {
    return (
      <li className="ContactItem">
        <h2 className="ContactItem-email">{this.props.email}</h2>
        <span className="ContactItem-name">{this.props.name}</span>
      </li>
    )
  }
}

ContactItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
};


class ContactView extends Component{
  render() {
    return (
      <div className="ContactView">
        <h1 className="ContactView-title">Contacts</h1>
        <ul className="ContactView-list">
          {this.props.contacts.map(function(contact) {
            return <ContactItem {...contact} />
          })}
        </ul>
        <ContactForm value={this.props.newContact}
          onChange={this.props.actions.updateNewContact.bind(this)}
          onSubmit={this.props.actions.submitNewContact.bind(this)}
        />
      </div>
    )
  }
}

ContactView.propTypes = {
  contacts: React.PropTypes.array.isRequired,
  newContact: React.PropTypes.object.isRequired,
};


/*
 * Constants
 */

var CONTACT_TEMPLATE = {
  name: "",
  email: "",
  description: "",
  errors: null
};


// Set initial data
var initialState = {
    contacts: [{
      key: 1,
      name: "James K Nelson - Front End Unicorn",
      email: "james@jamesknelson.com"
    }, {
      key: 2,
      name: "Jim",
      email: "jim@example.com"
    }, ],
    newContact: Object.assign({}, CONTACT_TEMPLATE),
  };


/*
 * Actions
 */

var actions = {
  updateNewContact: function(contact) {
    return {
      type: 'UPDATE_NEW_CONTACT',
      data: contact
    }
  },
  submitNewContact: function() {
    return {
      type: 'SUBMIT_NEW_CONTACT',
    }
  }
}

/* 
 * Reducer
 */

function contactReducer (state, action) {
  switch (action.type) {
    case 'UPDATE_NEW_CONTACT':
      return Object.assign({}, state, {
        newContact: action.data
      });
    case 'SUBMIT_NEW_CONTACT':
      var contact = Object.assign({}, state.newContact, {key: state.contacts.length + 1});
      return Object.assign({}, state, {
        newContact: Object.assign({}, CONTACT_TEMPLATE),
        contacts: [].concat(state.contacts, contact)
      })
    default:
      return state;
  }
}

/*
 * Store
 */
var contactStore = createStore(contactReducer, initialState);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

ContactView = connect(mapStateToProps, mapDispatchToProps)(ContactView);

 
    <ContactView />
  


window.store = contactStore;
export default contactForm;