import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import db from '../db';
import CharLibrary from './CharLibrary';
import ActionLibrary from './ActionLibrary';
import Toggle from './Toggle';
import StartBox from './StartBox';

class Library extends Component {
    constructor(props) {
        super(props);
        const displayChars = Object.entries(db.chars).map((char) => char[0]);
        const displayActions = Object.entries(db.actions).map((action) => action[0]).sort((action1, action2) => db.actions[action1].cost[0] - db.actions[action2].cost[0]);
        this.state = {conditions: {}, conditionsA: {}, displayChars: displayChars, displayActions: displayActions, CoA: 'C', showStart: true};
        this.changeToggle = this.changeToggle.bind(this);
        this.changeToggleA = this.changeToggleA.bind(this);
        this.toggleCA = this.toggleCA.bind(this);
        this.closeStart = this.closeStart.bind(this);
        this.startBox = <StartBox closeInfo={this.closeStart}/>
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

    changeToggleA(category, condition) {
        const conditions = {...this.state.conditionsA};

        if (conditions[category] == condition) {
            delete conditions[category];
        } else {
            conditions[category] = condition;
        }
        
        var actions = Object.entries(db.actions).sort((action1, action2) => action1[1].cost[0] - action2[1].cost[0]);
        
        for (const [key, value] of Object.entries(conditions)) {
            actions = actions.filter((action) => action[1].tags.includes(value) || action[1].cost[0]==value);
        }
        
        const displayActions = actions.map((action) => action[0]);
        
        this.setState({conditionsA: conditions, displayActions: displayActions});
    }

    toggleCA() {
        {this.state.CoA =='C' ? this.setState({CoA: 'A'}) : this.setState({CoA: 'C'})}
    }

    closeStart() {
        this.setState({showStart: false})
    }

    render() {
        if (this.state.CoA=='C') {
        return (<div>
            {this.state.showStart ? this.startBox : null}
            <Toggle conditions={this.state.condtions} changeToggle={this.changeToggle} changeToggleA={this.changeToggleA} toggleCA = {this.toggleCA} CoA={this.state.CoA}/>
            <CharLibrary displayChars={this.state.displayChars} current_chars={this.props.current_chars} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
        </div>)
        }
        else {
            return (<div>
                <Toggle conditionsA={this.state.conditionsA} changeToggle={this.changeToggle} changeToggleA={this.changeToggleA} toggleCA = {this.toggleCA} CoA={this.state.CoA}/>
                <ActionLibrary displayActions={this.state.displayActions} current_actions={this.props.current_actions} addToDeck={this.props.addToDeckAction} removeFromDeck={this.props.removeFromDeckAction}/>
            </div>)
        }
    }
}

export default Library
