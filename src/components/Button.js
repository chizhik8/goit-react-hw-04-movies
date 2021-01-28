import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import routes from '../routes';


export class Button extends Component {

    render() {
        
        return (
            <div className="ButtonContainer">
                <button type='button' className="Button">
                    <Link to={routes.home}>Go Back</Link>
                </button>
            </div>
        )
    }
}

export default Button;
