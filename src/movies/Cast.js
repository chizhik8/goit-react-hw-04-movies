import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';


export class Cast extends Component {
    
    state = { cast: [] };
    
    componentDidMount() {
        trendsAPI.fetchMoviesCast(this.props.match.params.movieId)
            .then(cast => this.setState({cast}));
    }

    render() {
        console.log(this.state.cast);
        return (
            <div>
                <Link to={`/movies/${this.props.match.params.movieId}`}>Cast</Link>

                {/* {this.state.cast.length > 0 &&
                    <p> Cast {this.state.cast.name}</p>} */}
            </div>
        )
    }
}

export default Cast
