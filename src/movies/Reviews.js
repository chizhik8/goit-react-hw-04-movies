import React, { Component } from 'react'


export class Reviews extends Component {

    state = { review: null, };


    render() {
        // console.log(this.props.match.params.movieId);
        return (
            <div>
                {this.state.review && <p> Reviews {this.state.review}</p> }
            </div>
        )
    }
}

export default Reviews
