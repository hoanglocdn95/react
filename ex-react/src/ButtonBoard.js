import React, { Component } from 'react';
import Button from './Button';

import './ButtonBoard.css';

class ButtonBoard extends Component{
    render(){
        return (
        <div id='board'>
            <div>
                <Button buttonValue="AC"/>
                <Button buttonValue="+/-"/>
                <Button buttonValue="%"/>
                <Button buttonValue=":"/>
            </div>
            <div>
                <Button buttonValue="7"/>
                <Button buttonValue="8"/>
                <Button buttonValue="9"/>
                <Button buttonValue="X"/>
            </div>
            <div>
                <Button buttonValue="4"/>
                <Button buttonValue="5"/>
                <Button buttonValue="6"/>
                <Button buttonValue="-"/>
            </div>
            <div>
                <Button buttonValue="1"/>
                <Button buttonValue="2"/>
                <Button buttonValue="3"/>
                <Button buttonValue="+"/>
            </div>
            <div>
                <Button buttonValue="C"/>
                <Button buttonValue="0"/>
                <Button buttonValue="."/>
                <Button buttonValue="="/>
            </div>
        </div>
        )
    }
}

export default ButtonBoard;