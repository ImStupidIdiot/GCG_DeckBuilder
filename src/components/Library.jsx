import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import db from '../db';
import CharLibrary from './CharLibrary';
import ActionLibrary from './ActionLibrary';
import Toggle from './Toggle';

class Library extends Component {
    constructor(props) {
        super(props);
        const displayChars = Object.entries(db.chars).map((char) => char[0]);
        this.state = {conditions: {}, displayChars: displayChars};
        this.changeToggle = this.changeToggle.bind(this);
    }

    changeToggle(category, condition) {
        const conditions = {...this.state.conditions};

        if (conditions[category] == condition) {
            delete conditions[category];
        } else {
            conditions[category] = condition;
        }
        
        var chars = Object.entries(db.chars);
        
        for (const [key, value] of Object.entries(conditions)) {
            chars = chars.filter((char) => char[1][key] == value);
        }
        
        const displayChars = chars.map((char) => char[0]);
        
        this.setState({conditions: conditions, displayChars: displayChars});
    }

    render() {
        return (<div>
            <Toggle changeToggle={this.changeToggle}/>
            <CharLibrary displayChars={this.state.displayChars} current_chars={this.props.current_chars} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
        </div>)
    }
}

export default Library
