import React, { Component } from 'react'
import trendsAPI from '../services/moviesApi';

export class Reviews extends Component {

    state = {
        reviews: [],
        // loading: false,
    };

     componentDidMount() {
         trendsAPI.fetchMoviesRev(this.props.match.params.movieId)
             .then(reviews => this.setState({ reviews, loading: true }))
             .catch(error => console.log(error))
    }

    //  componentDidUpdate(prevProps, prevState) {
    //     console.log("Rev State:",this.props.location.key);
    //     console.log("Rev preState:", prevProps.location.key);
    //     // this.setState({loading: true});
    //     if (prevProps.location.key !== this.props.location.key) {
    //         trendsAPI.fetchMoviesRev(this.props.match.params.movieId)
    //             .then(casts => this.setState({casts}))
    //             .catch(error => console.log('error ', error))
    //             // .finally(() => this.setState({ loading: false })); 
    //     }
    // }

    render() {
        // console.log("reviews:", this.state.reviews);
        // console.log("loading:", this.state.loading);
        return (
            <div>
                {this.state.reviews.length>0 &&
                    <ul className="RevList">
                    {this.state.reviews.map(rev => (
                        <li className="RevItem" key={rev.id}>
                            <span><h4> Author: {rev.author}</h4></span>
                            <span> <p>Character: {rev.content}</p></span>
                        </li>))}
                    </ul>
                }
            </div>
        )
    }
}

export default Reviews
