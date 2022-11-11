import React, { Component, useState } from 'react';
import db from '../db';
import '../scss/library.css';
import ToggleButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { currentElement: 'none' }
        
    }
    render() {
        if (this.props.CoA == 'C') {
        return (<Container>
            <button className='toggleElement' onClick={() => this.props.toggleCA()}><img src={db.misc.action_toggle} className='toggleImg'/></button>
            <ToggleButtonGroup name="element_wheel">
            <button className='toggleElement' key="pyro" type="checkbox" name="pyro" checked={this.state.currentElement == 'pyro'} onClick={() => {if(this.state.currentElement == 'pyro') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'pyro'})} this.props.changeToggle('element', 'pyro')}}>{this.state.currentElement != 'pyro' ? <img src={db.elements.pyro} className='toggleImg'/> : <img src={db.elements.pyro_activated} className='toggleImg'/>}</button>
            <button className='toggleElement' key="hydro" type="checkbox" name="hydro" checked={this.state.currentElement == 'hydro'} onClick={() => {if(this.state.currentElement == 'hydro') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'hydro'})} this.props.changeToggle('element', 'hydro')}}>{this.state.currentElement != 'hydro' ? <img src={db.elements.hydro} className='toggleImg'/> : <img src={db.elements.hydro_activated} className='toggleImg'/>}</button>
            <button className='toggleElement' key="anemo" type="checkbox" name="anemo" checked={this.state.currentElement == 'anemo'} onClick={() => {if(this.state.currentElement == 'anemo') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'anemo'})} this.props.changeToggle('element', 'anemo')}}>{this.state.currentElement != 'anemo' ? <img src={db.elements.anemo} className='toggleImg'/> : <img src={db.elements.anemo_activated} className='toggleImg'/>}</button>
            <button className='toggleElement' key="electro" type="checkbox" name="electro" checked={this.state.currentElement == 'electro'} onClick={() => {if(this.state.currentElement == 'electro') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'electro'})} this.props.changeToggle('element', 'electro')}}>{this.state.currentElement != 'electro' ? <img src={db.elements.electro} className='toggleImg'/> : <img src={db.elements.electro_activated} className='toggleImg'/>}</button>
            <button className='toggleElement' key="dendro" type="checkbox" name="dendro"  checked={this.state.currentElement == 'dendro'} onClick={() => {if(this.state.currentElement == 'dendro') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'dendro'})} this.props.changeToggle('element', 'dendro')}}>{this.state.currentElement != 'dendro' ? <img src={db.elements.dendro} className='toggleImg'/> : <img src={db.elements.dendro_activated} className='toggleImg'/>}</button>
            <button className='toggleElement' key="cryo" type="checkbox" name="cryo" checked={this.state.currentElement == 'cryo'} onClick={() => {if(this.state.currentElement == 'cryo') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'cryo'})} this.props.changeToggle('element', 'cryo')}}>{this.state.currentElement != 'cryo' ? <img src={db.elements.cryo} className='toggleImg'/> : <img src={db.elements.cryo_activated} className='toggleImg'/>}</button>
            <button className='toggleElement' key="geo" type="checkbox" name="geo"  checked={this.state.currentElement == 'geo'} onClick={() => {if(this.state.currentElement == 'geo') {this.setState({currentElement: 'none'})} else {this.setState({currentElement: 'geo'})} this.props.changeToggle('element', 'geo')}}>{this.state.currentElement != 'geo' ? <img src={db.elements.geo} className='toggleImg'/> : <img src={db.elements.geo_activated} className='toggleImg'/>}</button>
        </ToggleButtonGroup></Container>);
        }
        else {
            return (<Container><button className='toggleElement' onClick={() => this.props.toggleCA()}><img src={db.misc.char_toggle} className='toggleImg'/></button> </Container>)
        }
        return (<div> 
            <ToggleButton type="checkbox" className="mb-2"
            onClick={() => {
                this.props.changeToggle('element', 'pyro')
            }}>
                <img src={db.elements.pyro} className='toggleImg' 
                    onMouseEnter={() =>
                        console.log('i hate it in here')
                    }
                    onMouseLeave={() =>
                        console.log('wtf')
                    }
                />
            </ToggleButton>
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
