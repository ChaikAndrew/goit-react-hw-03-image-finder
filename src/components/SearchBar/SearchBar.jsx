import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };
  handleChange = ({ target: { value: query } }) => {
    this.setState({ query });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  render() {
    const { query } = this.state;
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}
