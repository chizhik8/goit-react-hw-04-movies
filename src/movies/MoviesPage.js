import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Searcher from '../components/Searcher';
import moviesAPI from '../services/moviesApi';


export class MoviesPage extends Component {

    state = { movies: [] };
    
    componentDidMount() { 
        const { query } = queryString.parse(this.props.location.search);
        if (query) { this.fetchMovies(query) }
    }

    componentDidUpdate(prevProps, prevState) { 
        const {query: prevQuery} = queryString.parse(prevProps.location.search);
        const {query: nextQuery} = queryString.parse(this.props.location.search);
        if (prevQuery !== nextQuery) { this.fetchMovies(nextQuery) }
    }

    fetchMovies = query => { 
            moviesAPI.fetchMoviesSearch(query)
            .then(movies => this.setState({movies}))
            .catch(error => console.log(error))   
    }

    handleChangeQuery = query => { 
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`
        });
    }

    render() {  
        
        return (
            <div>
                <Searcher onSubmit={this.handleChangeQuery} />
                <ul className='trendingList'>
                    {this.state.movies.map(mov => (<li key={mov.id}><Link to={{ pathname: `/movies/${mov.id}`, state: {from: this.props.location}}}>{mov.title}</Link></li>) )}
                </ul>  
            </div>
        )
    }
}

export default MoviesPage;


