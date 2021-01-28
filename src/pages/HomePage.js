import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import trendsAPI from '../services/moviesApi';


export class HomePage extends Component {

    state = {
        trends: []
    }

    componentDidMount() {
        trendsAPI.fetchMoviesTrend()
            .then(trends => this.setState({ trends }))
            .catch(error => console.log(error));
    }

    render() {
        const { trends } = this.state;
        return (
            <div>
                <h1>Trending today:</h1>
                <MoviesList list={trends}/>
            </div>
        )
    }
}

export default HomePage;
