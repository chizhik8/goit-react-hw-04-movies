import React, { Component } from 'react'


export class MoviesInfo extends Component {
  

    render() {
        const trend = this.props.info;
              
        return (
            <>
                <div className="MoviesInfoContainer">
                    <img src={`https://image.tmdb.org/t/p/original${trend.poster_path}`} alt={trend.original_title} width="320px"/>
                    <div className="MoviesInfo">
                        <h1>{trend.original_title}</h1>
                        <p>User Score: {trend.vote_count}%</p>
                        <h2>Overview</h2>
                        <p>{trend.overview}</p>
                        <h3>Genres</h3>
                        <ul className="MoviesGenresList">{trend.genres.map(gen => (<li className="MoviesGenresItem"  key={gen.id}>{gen.name}</li>))}</ul>
                    </div>
                </div>
            </>
        )

        
    }
}

export default MoviesInfo;
