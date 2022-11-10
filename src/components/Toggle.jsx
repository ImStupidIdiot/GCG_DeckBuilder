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
            }}><img src={db.elements.pyro} className='toggleImg' 
            onMouseEnter={() =>
                console.log('i hate it in here')
            }
            onMouseLeave={() =>
                console.log('wtf')
            }
            /></button>
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
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'mond')
            }}><img src={db.factions.mondstadt} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'liyue')
            }}><img src={db.factions.liyue} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'inazuma')
            }}><img src={db.factions.inazuma} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'sumeru')
            }}><img src={db.factions.sumeru} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'fatui')
            }}><img src={db.factions.fatui} className='toggleImg'/></button>
            <button className='toggleFaction' onClick={() => {
                this.props.changeToggle('region', 'monster')
            }}><img src={db.factions.monster} className='toggleImg'/></button>
            
        </div>)
    }
}

export default Toggle
