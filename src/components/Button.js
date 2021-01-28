import React, { Component } from 'react'


export class Button extends Component {


    render() {
        
        return (
            <div className="ButtonContainer">
                <button type='button' onClick={this.props.onClick} className="Button">Go Back</button>
            </div>
        )
    }
}

export default Button;
