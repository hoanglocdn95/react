import React, { Component } from 'react';

import './Screen.css'

class Screen extends Component {
    render (){
        return (
            <div id="screenValue">
                {this.props.displayValue}
            </div>
        )
    }
}

export default Screen;