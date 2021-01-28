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

    handleGoBack = () => { 
        if (this.props.location.state && this.props.location.state.from) {
            this.props.history.push(this.props.location.state.from);
         }

    }

    render() {
        const { trend } = this.state;

        return (
            <div>
                {trend && 
                    <>
                    <Button onClick={this.handleGoBack}/>
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
