import React from 'react';
import { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    tag: '',
    expirience: 'jun',
    licence: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChecked = event => {
    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          SecondName{' '}
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <p>Your level:</p>

        <label>
          <input
            type="radio"
            name="expirience"
            value="jun"
            onChange={this.handleChange}
            checked={this.state.expirience === 'jun'}
          />
          Jun
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="mid"
            onChange={this.handleChange}
            checked={this.state.expirience === 'mid'}
          />
          Mid
        </label>
        <label>
          <input
            type="radio"
            name="expirience"
            value="sen"
            onChange={this.handleChange}
            checked={this.state.expirience === 'sen'}
          />
          Sen
        </label>

        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChecked}
          />
          Agree
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}
