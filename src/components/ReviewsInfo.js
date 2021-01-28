import React, { Component } from 'react';

export class ReviewsInfo extends Component {
  render() {
    const { rev = [] } = this.props;

    return (
      <div>
        {!!rev.length && (
          <ul className="RevList">
            {rev.map(rev => (
              <li className="RevItem" key={rev.id}>
                <span>
                  <h4> Author: {rev.author}</h4>
                </span>
                <span>
                  {' '}
                  <p>Character: {rev.content}</p>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default ReviewsInfo;
