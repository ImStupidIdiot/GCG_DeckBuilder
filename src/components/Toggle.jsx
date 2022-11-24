import React, { Component, useState } from 'react';
import db from '../db';

class Toggle extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        var currentLibrary = null
        {this.props.CoA == 'C' ? currentLibrary = 'char_sort' : currentLibrary = 'action_sort'}
        var hovered = null
        {this.props.CoAHovered ? hovered = '_hover' : hovered = ''}
        var current_Image = currentLibrary + hovered
        return (
            <button className='toggleLibrary' onClick={() => this.props.toggle()}
            onMouseEnter={() => {
                this.props.hoverToggle(true)
            }}
            onMouseLeave={() => {
                this.props.hoverToggle(false)
            }}
            ><img src={db.menu[current_Image]} className='toggleLibraryImg'/></button>
        )
    }
}

export default Toggle
