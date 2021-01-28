import React, { Component } from 'react'


export class CastInfo extends Component {

    render() {
        const cast = this.props.cast;
        
        return (
            <div>
                {cast.length>0 &&
                    <ul className="CastList">
                    {cast.map(cast => (
                        cast.profile_path !==null &&
                        <li className="CastItem" key={cast.credit_id}>
                            <span><img className="CastImg" src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={cast.original_name} width="100px" /></span>
                            <span><h4>{cast.name}</h4></span>
                            <span><p>Character: {cast.character}</p></span>
                        </li>))}
                    </ul>
                }
            </div>
        )
    }
}

export default CastInfo;
