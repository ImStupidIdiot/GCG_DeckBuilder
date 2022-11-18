import React, { Component, useState } from 'react';
import db from '../db';

class Toggle extends Component {
    render() {
        return (
            <button className='toggleElement' onClick={() => this.props.toggle()}><img src={db.menu.action_toggle} className='toggleImg'/><div className="toggleText">Toggle Char/Action<br></br>(Temp)</div></button>
        )
    }
}

export default Toggle
