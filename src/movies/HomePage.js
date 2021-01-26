import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trendsAPI from '../services/moviesApi';
// import PropTypes from 'prop-types'

export class HomePage extends Component {
    // static propTypes = {}

    state = {
        trends: []
    }

    componentDidMount() {
        trendsAPI.fetchMoviesTrend()
            .then(trends => this.setState({trends}));
    }

    render() {
        const { trends } = this.state;
        // console.log('Trending today:', trends);
        return (
            <div>
                <h1>Trending today:</h1>
                <ul className='trendingList'>
                    {trends.map(trend => (<li key={trend.id}><Link to={`/movies/${trend.id}`}>{trend.title}</Link></li>) )}
                </ul>            
            </div>
        )
    }
}

export default HomePage;
