import React, { Component, useState } from 'react';
import db from '../db';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Toggle from './Toggle';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Filter_One from '../images/Filter_One_Temp.png';

class ActionFilters extends Component {
    constructor(props) {
        super(props);
        this.state = { currentElement: 'none', CoAHover: this.props.CoA}
        this.handleToggleHover.bind(this);
    }

    handleToggleHover() {
        if (this.state.CoAHover.includes('H')) {
            this.setState({CoAHover: this.state.CoAHover.substring(0, 1)})
        }
        else {
            this.setState({CoAHover: this.state.CoAHover + 'H'})
        }
    }
    
    render() {
        var costs = ["0", "1", "2", "3", "4", "5"];
        var types = {event: "Event", assist: "Support", modify: "Equip"};

        return (
            <div>
            <Toggle toggle={this.props.toggle} CoA={this.state.CoAHover} handleToggleHover={this.handleToggleHover} CoAHovered={this.props.CoAHovered} hoverToggle={this.props.hoverToggle}/>
            <ButtonGroup name="cost-buttons">
                {
                    costs.map((cost) => {
                        {
                            return (
                                <button 
                                className={this.props.filters.cost == cost ? 'toggleElementTextSelected' : 'toggleElementText'}
                                key={cost}
                                type="checkbox"
                                name={cost}
                                checked={this.props.filters[cost]}
                                onClick={() => this.props.changeFilter("cost", cost)}
                                >
                                    <div className={this.props.dark? "whiteText" : null}>{cost}</div>
                                </button>
                            )
                        }
                    })
                }
            </ButtonGroup>
            <ButtonGroup name="type-buttons">
                {
                    Object.entries(types).map((type) => {
                        {
                            return (
                                <button 
                                className={this.props.filters.type == type[0] ? 'toggleElementTextSelectedLong' : 'toggleElementTextLong'}
                                key={type[0]}
                                type="checkbox"
                                name={type[0]}
                                checked={this.props.filters[type[0]]}
                                onClick={() => this.props.changeFilter("type", type[0])}
                                >
                                    <div className={this.props.dark? "whiteText" : null}>{type[1]}</div>
                                </button>
                            )
                        }
                    })
                    
                }
            </ButtonGroup>
            <input className='rounded' type="text" id="searchBarAction" name="searchBarAction"></input><button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => {
                this.props.search(document.getElementById('searchBarAction').value);
            }}>Search</button>
            </div>
        )
    }
}

export default ActionFilters