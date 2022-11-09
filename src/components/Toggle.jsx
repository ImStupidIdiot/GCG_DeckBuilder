import React, { Component } from 'react';
import db from '../db';
import '../scss/library.css';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 }
    }
    render() { //change to a toggle component later? either that or a search bar for the non element stuf
        return (<div> 
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'pyro')
            }}><img src={db.elements.pyro} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'hydro')
            }}><img src={db.elements.hydro} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'anemo')
            }}><img src={db.elements.anemo} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'electro')
            }}><img src={db.elements.electro} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'dendro')
            }}> <img src={db.elements.dendro} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'cryo')
            }}><img src={db.elements.cryo} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'geo')
            }}><img src={db.elements.geo} className='toggleImg'/></button>
            <button className='toggleElement' onClick={() => {
                this.props.changeToggle('element', 'all')
            }}><img src={db.elements.noelement} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'liyue')
            }}><img src={db.factions.liyue} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'mond')
            }}><img src={db.factions.mondstadt} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'all')
            }}><img src={db.factions.hilichurl} className='toggleImg'/></button>
        </div>)
    }
}

export default Toggle
