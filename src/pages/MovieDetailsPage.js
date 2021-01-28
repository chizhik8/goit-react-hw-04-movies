import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';
import routes from '../routes';
import Cast from './Cast';
import Reviews from './Reviews';

export class MovieDetailsPage extends Component {

    state = { trend: null, };

    componentDidMount() {
        trendsAPI.fetchMoviesData(this.props.match.params.movieId)
            .then(trend => this.setState({ trend }))
            .catch(error => console.log(error));
    }

    getGoBackLink = () => { 
        const { state } = this.props.location;
        if (state && state.from) {
            // return this.props.history.push(state.from)
            return `${this.props.location.state.from.pathname}${this.props.location.state.from.search}`
        }
        else { return this.props.location}
        // this.props.history.push(routes.movies);
        
    }

    render() {
        const { trend } = this.state;
        const routeBack = this.getGoBackLink();

        return (
            
            <div>
                {this.state.trend && 
                    <>
                    <div className="ButtonContainer">
                        <button type='button' className="Button">
                            <Link to={routeBack}>Go Back</Link>
                        </button>
                    </div>
                    <div className="MoviesInfoContainer">
                        <img src={`https://image.tmdb.org/t/p/original${trend.poster_path}`} alt={trend.original_title} width="320px"/>
                        <div className="MoviesInfo">
                            <h1>{trend.original_title}</h1>
                            <p>User Score: {trend.vote_count}%</p>
                            <h2>Overview</h2>
                            <p>{trend.overview}</p>
                            <h3>Genres</h3>
                            <ul className="MoviesGenresList">{trend.genres.map(gen => (<li className="MoviesGenresItem"  key={gen.id}>{gen.name}</li>))}</ul>
                        </div>
                    </div>
                    <h4>Additional information</h4>
                    <ul>
                        <li><Link to={`/pages/${trend.id}/cast`}>Cast</Link></li>
                        <li><Link to={`/pages/${trend.id}/reviews`}>Reviews</Link></li>
                    </ul>
                    <hr />
                    <Route path="/pages/:movieId" component={Cast} />
                    <Route path="/pages/:movieId" component={Reviews} />
                    </>
                }
            </div>
            
        )
    }
}

export default MovieDetailsPage;
