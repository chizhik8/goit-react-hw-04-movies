import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';

// import PropTypes from 'prop-types'

export class MovieDetailsPage extends Component {
    // static propTypes = {}

    state = { trend: null, };

    componentDidMount() {
        trendsAPI.fetchMoviesData(this.props.match.params.movieId)
            .then(trend => this.setState({ trend }));
    }

    render() {
        // console.log('MovieDetailsPage props.math', this.props.match.params.movieId);
        const { trend } = this.state;
        // console.log(trend);

        return (
            
            <div>
                {this.state.trend && 
                    <>
                    <div className="ButtonContainer"><button type='button' className="Button"><Link to="/">Go Back</Link></button> </div>
                    <img src={`https://developers.themoviedb.org/3/movie/${trend.id}/images${trend.poster_path}`} alt={trend.original_title} width='280px' height='200px' />
                    <h1>{trend.original_title}</h1>
                    <p>User Score: {trend.vote_count}%</p>
                    <h2>Overview</h2>
                    <p>{trend.overview}</p>
                    <h3>Genres</h3>
                    <ul>{trend.genres.map(gen => (<li key={gen.id}>{gen.name}</li>))}</ul>
                    <h4>Additional information</h4>
                    <ul>
                        <li><Link to={`/movies/${trend.id}/cast`}>Cast</Link></li>
                        <li><Link to={`/movies/${trend.id}/reviews`}>Reviews</Link></li>
                    </ul>
                    </>
                }
            </div>
        
            
        )
    }
}

export default MovieDetailsPage;

// '/movies/:movieId' - компонент < MovieDetailsPage >, страница с детальной информацией о кинофильме.
// / movies /: movieId / cast - компонент < Cast >, информация о актерском составе. // Рендерится на странице<MovieDetailsPage>.
// /movies/: movieId / reviews - компонент < Reviews >, информация об обзорах. // Рендерится на странице<MovieDetailsPage>.