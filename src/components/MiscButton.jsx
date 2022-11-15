import React, { Component, useState } from 'react';
import db from '../db';

class MiscButton extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <button className='miscButton' onClick={this.props.display}>{this.props.name}</button>
        )
    }
}

export default MiscButton
