import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class MoviesList extends Component {
   

    render() {
        console.log(this.props);
        return (
            <div>
                <ul className='trendingList'>
                    {this.props.list.map(mov => (
                        <li key={mov.id}>
                            <Link to={`/pages/${mov.id}`}>{mov.title}</Link>
                        </li>))
                    }
                </ul>  
            </div>
        )
    }
}

export default MoviesList
