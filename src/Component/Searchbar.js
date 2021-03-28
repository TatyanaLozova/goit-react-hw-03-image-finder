import React, { Component } from 'react'

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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChenge}
                />

            </form>
        );
    };
    
}
export default SearchBar;
