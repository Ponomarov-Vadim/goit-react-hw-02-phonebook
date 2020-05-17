import React, { Component } from "react";
import styled from "./ContactForm.module.css";

import PropTypes from "prop-types";
import classNames from "classnames";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.contacts.find((contact) => contact.name === this.state.name) ===
    undefined
      ? this.props.addContact(this.state.name, this.state.number)
      : alert(`${this.state.name} is alredy in contacts`);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={classNames(styled.form)}>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          className={classNames(styled.input)}
          style={{ display: "block", marginBottom: 10 }}
          onChange={this.handleChange}
          value={this.state.name}
        />

        <h3>Number</h3>
        <input
          type="text"
          name="number"
          className={classNames(styled.input)}
          onChange={this.handleChange}
          value={this.state.number}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
