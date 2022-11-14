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
        this.state = { currentElement: 'none' }
    }
    
    render() {
        var costs = ["0", "1", "2", "3", "4", "5"];
        var types = {event: "Event", assist: "Support", modify: "Equip"};

        return (
            <div>
            <Toggle toggle={this.props.toggle}/>
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
                                    {cost}
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
                                className={this.props.filters.type == type[0] ? 'toggleElementTextSelected' : 'toggleElementText'}
                                key={type[0]}
                                type="checkbox"
                                name={type[0]}
                                checked={this.props.filters[type[0]]}
                                onClick={() => this.props.changeFilter("type", type[0])}
                                >
                                    {type[1]}
                                </button>
                            )
                        }
                    })
                    
                }
            </ButtonGroup>
            </div>
        )
    }
}

export default ActionFilters