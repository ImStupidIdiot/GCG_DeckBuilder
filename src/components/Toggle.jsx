import React, { Component, useState } from 'react';
import db from '../db';

class Toggle extends Component {
    render() {
        return (
            <button className='toggleElement' onClick={() => this.props.toggle()}><img src={db.misc.action_toggle} className='toggleImg'/></button>
        )
    }
}

export default Toggle
