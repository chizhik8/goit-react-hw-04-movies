import React, { Component } from 'react'
import ReviewsInfo from '../components/ReviewsInfo';
import trendsAPI from '../services/moviesApi';

export class Reviews extends Component {

    state = {
        reviews: [],
    };

     componentDidMount() {
         trendsAPI.fetchMoviesRev(this.props.match.params.movieId)
             .then(reviews => this.setState({ reviews, loading: true }))
             .catch(error => console.log(error))
    }

    render() {
        
        return (
            
            <div>
                <ReviewsInfo rev={this.state.reviews} />
            </div>
        )
    }
}

export default Reviews
