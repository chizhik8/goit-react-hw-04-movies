import React, { Component } from 'react';
import { Link} from 'react-router-dom';


export class AddMovieInfo extends Component {

    render() {
        const trend = this.props.addInfo;

        return (
            <>
                <h4>Additional information</h4>
                <ul>
                    <li><Link to={`/pages/${trend.id}/cast`}>Cast</Link></li>
                    <li><Link to={`/pages/${trend.id}/reviews`}>Reviews</Link></li>
                </ul>
                <hr />
            </>
        )
    }
}

export default AddMovieInfo
