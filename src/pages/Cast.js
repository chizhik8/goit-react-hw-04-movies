import React, { Component } from 'react';
import CastInfo from '../components/CastInfo';
import trendsAPI from '../services/moviesApi';


export class Cast extends Component {
    
    state = {
        casts: [],
    };

    componentDidMount() {
        trendsAPI.fetchMoviesCast(this.props.match.params.movieId)
            .then(casts => this.setState({ casts}))
            .catch(error => console.log('error ',error))
    }


    render() {
        
        return (
            <div>
                <CastInfo cast={this.state.casts}/>
            </div>
        )
    }
}

export default Cast
