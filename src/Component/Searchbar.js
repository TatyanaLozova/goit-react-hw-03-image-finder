import React, { Component } from 'react'
import s from "../App.module.css";

class SearchBar extends Component {
    state = { query: '' };

    handleChenge = e => {
        this.setState({ query: e.currentTarget.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };
    render() {
        return (
            <header className={s.Searchbar }>
            <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={s.SearchForm_button}>
                          <span className={s.SearchForm_button_label}>Search</span>
                      </button>
                    <input className={s.SearchForm_input} 
                    type="text"
                     placeholder="Search images..."
                    value={this.state.query}
                    onChange={this.handleChenge}
                />

                </form>
                 </header>
        );
    };
    
}
export default SearchBar;
