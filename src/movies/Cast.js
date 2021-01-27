import React, { Component } from 'react';
import trendsAPI from '../services/moviesApi';


export class Cast extends Component {
    
    state = {
        casts: [],
        loading: false,
    };

    componentDidMount() {
        trendsAPI.fetchMoviesCast(this.props.match.params.movieId)
            .then(casts => this.setState({ casts, loading: true }))
            .catch(error => console.log(error))
    }

    render() {
        // console.log('render cast:',this.state.casts);
        // console.log('render loading:',this.state.loading);
        return (
            <div>
                {this.state.casts.length>0 &&
                    <ul className="CastList">
                    {this.state.casts.map(cast => (
                        <li className="CastItem" key={cast.credit_id}>
                            <span><img src={cast.profile_path} alt={cast.original_name} width="100px" /></span>
                            <span>{cast.name}</span>
                            <span> Character: {cast.character}</span>
                        </li>))}
                    </ul>
                }
            </div>
        )
    }
}

export default Cast
