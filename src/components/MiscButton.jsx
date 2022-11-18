import React, { Component, useState } from 'react';
import db from '../db';

class MiscButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <button className='miscButton' onClick={() => this.props.showMiscBox(this.props.name)}>{this.props.name}</button>
        )
    }
}

export default MiscButton
