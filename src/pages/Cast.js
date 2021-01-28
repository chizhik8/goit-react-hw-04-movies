import React, { Component } from 'react';
import trendsAPI from '../services/moviesApi';


export class Cast extends Component {
    
    state = {
        casts: [],
        // loading: false,
    };

    componentDidMount() {
        trendsAPI.fetchMoviesCast(this.props.match.params.movieId)
            .then(casts => this.setState({ casts}))
            .catch(error => console.log('error ',error))
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log("Cast State:",this.props.location.key);
    //     console.log("Cast preState:", prevProps.location.key);
    //     // this.setState({loading: true});
    //     if (prevProps.location.key !== this.props.location.key) {
    //         trendsAPI.fetchMoviesCast(this.props.match.params.movieId)
    //             .then(casts => this.setState({casts}))
    //             .catch(error => console.log('error ', error))
    //             // .finally(() => this.setState({ loading: false })); 
    //     }
    // }

    render() {
        return (
            <div>
                {this.state.casts.length>0 &&
                    <ul className="CastList">
                    {this.state.casts.map(cast => (
                        cast.profile_path !==null &&
                        <li className="CastItem" key={cast.credit_id}>
                            <span><img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={cast.original_name} width="100px" /></span>
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
