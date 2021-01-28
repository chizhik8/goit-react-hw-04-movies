import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class MoviesList extends Component {
   

    render() {

        return (
            <div>
                <ul className='trendingList'>
                    {this.props.list.map(mov => (
                        <li key={mov.id}>
                            <Link to={{ pathname: `/pages/${mov.id}`, state: {from: this.props.goBack} }}>{mov.title}</Link>
                        </li>))
                    }
                </ul>  
            </div>
        )
    }
}

export default MoviesList
