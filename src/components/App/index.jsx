import React, { Component } from "react";
import { v4 } from "uuid";

import Filter from "../Filter";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    name !== "" && number !== ""
      ? this.setState({
          contacts: [
            ...this.state.contacts,
            { id: v4(), name: name, number: number },
          ],
        })
      : alert("Name or Number not entered");
  };

  deleteContact = ({ target: { name } }) => {
    this.setState({
      contacts: [
        ...this.state.contacts.filter((contact) => contact.id !== name),
      ],
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>

        {this.state.contacts.length > 1 ? (
          <Filter onChange={this.handleChange} value={this.state.filter} />
        ) : null}

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}
