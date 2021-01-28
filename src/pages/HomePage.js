import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';


export class HomePage extends Component {

    state = {
        trends: []
    }

    componentDidMount() {
        trendsAPI.fetchMoviesTrend()
            .then(trends => this.setState({ trends }))
            .catch(error => console.log(error));
    }

    render() {
        const { trends } = this.state;
        return (
            <div>
                <h1>Trending today:</h1>
                <ul className='trendingList'>
                    {trends.map(trend => (<li key={trend.id}><Link to={{ pathname: `/pages/${trend.id}`, state: {from: this.props.location}}}>{trend.title}</Link></li>) )}
                </ul>            
            </div>
        )
    }
}

export default HomePage;
