import React, { Component } from 'react';

import './Button.css';

class Button extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {value: props.buttonValue};
    }
    render (){
        return(
            <button className="button" onClick={this.handleClick}>
                {this.state.value}                
            </button>
        )
       
    }
}

export default Button;