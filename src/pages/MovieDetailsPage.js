import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';
import Cast from './Cast';
import Reviews from './Reviews';
import Button from '../components/Button';
import MoviesInfo from '../components/MoviesInfo';
import AddMovieInfo from '../components/AddMovieInfo';

export class MovieDetailsPage extends Component {

    state = { trend: null, };

    componentDidMount() {
        trendsAPI.fetchMoviesData(this.props.match.params.movieId)
            .then(trend => this.setState({ trend }))
            .catch(error => console.log(error));
    }

    render() {
        const { trend } = this.state;
        console.log(this.props.match.url);
        return (
            <div>
                {trend && 
                    <>
                    <Button />
                    <MoviesInfo info={trend} />
                    <AddMovieInfo addInfo={trend} />
                    <Route path="/pages/:movieId" component={Cast} />
                    <Route path="/pages/:movieId" component={Reviews} />
                    </>
                }
            </div>
            
        )
    }
}

export default MovieDetailsPage;
