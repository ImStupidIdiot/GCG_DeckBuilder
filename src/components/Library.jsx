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
        const displayActions = Object.entries(db.actions).map((action) => action[0]);
        this.state = {conditions: {}, displayChars: displayChars, displayActions: displayActions, CoA: 'C'};
        this.changeToggle = this.changeToggle.bind(this);
        this.toggleCA = this.toggleCA.bind(this);
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

    toggleCA() {
        {this.state.CoA =='C' ? this.setState({CoA: 'A'}) : this.setState({CoA: 'C'})}
    }

    render() {
        if (this.state.CoA=='C') {
        return (<div>
            <Toggle changeToggle={this.changeToggle} toggleCA = {this.toggleCA} CoA={this.state.CoA}/>
            <CharLibrary displayChars={this.state.displayChars} current_chars={this.props.current_chars} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
        </div>)
        }
        else {
            return (<div>
                <Toggle changeToggle={this.changeToggle} toggleCA = {this.toggleCA} CoA={this.state.CoA}/>
                <ActionLibrary displayActions={this.state.displayActions} current_actions={this.props.current_actions} addToDeck={this.props.addToDeckAction} removeFromDeck={this.props.removeFromDeckAction}/>
            </div>)
        }
    }
}

export default Library
