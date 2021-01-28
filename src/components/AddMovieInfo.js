import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class AddMovieInfo extends Component {
  render() {
    return (
      <>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <hr />
      </>
    );
  }
}

export default AddMovieInfo;
