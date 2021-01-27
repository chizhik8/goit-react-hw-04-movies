import React, { Component } from 'react';
import Searcher from '../components/Searcher';



export class MoviesPage extends Component {

    state = {

    };
    
    handleChangeQuery = query => { 
        console.log(query);
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`
        });
    }

    render() {  
        return (
            <div>
                <Searcher onSubmit={this.handleChangeQuery} />
            </div>
        )
    }
}

export default MoviesPage;


