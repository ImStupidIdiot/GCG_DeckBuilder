import React, { Component, useState } from 'react';
import db from '../db';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Container from 'react-bootstrap/Container';
import Filter_One from '../images/Filter_One_Temp.png';
import Toggle from './Toggle';

class CharFilters extends Component {
    constructor(props) {
        super(props);
        this.state = { currentElement: 'none' }
    }
    
    render() {
        var elements = ["pyro", "hydro", "anemo", "electro", "dendro", "cryo", "geo"];

        return (
            <div>
                <Toggle toggle={this.props.toggle}/>
                <ButtonGroup name="element-wheel">
                    {
                        elements.map((element) => {
                            {
                                return (
                                    <button className="toggleElement"
                                    key={element}
                                    type="checkbox"
                                    name={element}
                                    checked={this.props.filters[element]}
                                    onClick={() => this.props.changeFilter("element", element)}
                                    >
                                        {this.props.filters.element != element ? 
                                        <img src={db.elements[element]}className='toggleImg'/> :
                                        <img src={db.elements[element + "_activated"]} className='toggleImg'/>}
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

export default CharFilters