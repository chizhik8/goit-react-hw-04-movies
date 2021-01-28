import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';
import Cast from './Cast';
import Reviews from './Reviews';
import Button from '../components/Button';
import MoviesInfo from '../components/MoviesInfo';
import AddMovieInfo from '../components/AddMovieInfo';

export class MovieDetailsPage extends Component {
  state = {
    trend: {},
    from: {},
  };

  componentDidMount() {
    trendsAPI
      .fetchMoviesData(this.props.match.params.movieId)
      .then(trend =>
        this.setState({
          trend,
          from: this.props.location.state
            ? { ...this.props.location.state.from }
            : null,
        }),
      )
      .catch(error => console.log(error));
  }

  handleGoBack = () => {
    if (this.state.from.search) {
      this.props.history.push({ ...this.state.from });
    } else {
      this.props.history.push('/');
    }
  };

  render() {
    const { trend } = this.state;

    return (
      <div>
        {trend && (
          <>
            <Button onClick={this.handleGoBack} />
            <MoviesInfo info={trend} />
            <AddMovieInfo addInfo={trend} match={this.props.match} />

            <Route
              path={`${this.props.match.url}/cast`}
              render={() => <Cast id={trend.id} />}
            />
            <Route
              path={`${this.props.match.url}/reviews`}
              render={() => <Reviews id={trend.id} />}
            />
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
