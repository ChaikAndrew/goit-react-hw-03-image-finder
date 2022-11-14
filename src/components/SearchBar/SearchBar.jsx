import React, { Component } from 'react';
import s from '../SearchBar/SearchBar.module.css';

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
        <form className={s.form} onSubmit={this.handleSubmitForm}>
          <button className={s.form_btn} type="submit">
            <span className={s.form_label}>Search</span>
          </button>

          <input
            className={s.form_input}
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
