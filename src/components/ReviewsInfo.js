import React, { Component } from 'react'


export class ReviewsInfo extends Component {

    render() {
        const reviews = this.props.rev;

        return (
            <div>
                {reviews.length>0 &&
                    <ul className="RevList">
                    {reviews.map(rev => (
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

export default ReviewsInfo
