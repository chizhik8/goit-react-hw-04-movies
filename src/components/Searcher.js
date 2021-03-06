import React, { Component } from 'react';

export class Searcher extends Component {

    state = {
        value: '',
    };
    
    handleChange = e => { 
        this.setState({
            value: e.target.value,
        });
    }

    handleSubmit = e => { 
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>
                <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        value={this.state.value}
                        onChange={this.handleChange}
                />
            </form>
            </div>
        )
    }
}

export default Searcher;

