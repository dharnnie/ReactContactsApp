import React, { Component } from "react";
import ReactDOM from "react-dom";
import {render} from "react-dom"

class ContactsApp extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <SearchBar contacts={this.props.contacts}/>
      </div>
    );
  };
}

class SearchBar extends Component{
  constructor(){
    super();
    this.state = {
      val: "Start searching",
      filterText: "odun"
    };
  }
  handleChange(event){
    this.setState({val:event.target.value});//
    this.setState({filterText:event.target.value});
  }
  render(){
    return(
      <div>
        <input type="search" onChange={this.handleChange.bind(this)} value={this.state.val}/>
        <ContactList contacts = {this.props.contacts} fText={this.state.filterText}/>
      </div>
    );
  }
}

class ContactList extends Component{
  render(){
    let filteredContacts = this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.fText) !== -1
    );
    return(
      <ul>
        {filteredContacts.map(
          (contact) => <ContactItem key = {contact.email} name = {contact.name} email = {contact.email}/>
        )}
      </ul>
    );
  };
}

class ContactItem extends Component{
  render(){
    return <li>{this.props.name} - {this.props.email}</li>
  }
}

let contacts = [
 { name: "Odun Osineye", email: "odun@osineye.com" },
 { name: "Daniel Osineye", email: "daniel@osineye.com" },
 { name: "Lola Osineye", email: "lola@osineye.com" },
 { name: "Toyin Osineye", email: "toyin@osineye.com" },
 { name: "Kehinde Osineye", email: "ken@osineye.com" },
]

render(<ContactsApp contacts = {contacts}/>, document.getElementById("root"))
