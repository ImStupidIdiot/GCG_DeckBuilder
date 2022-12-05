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
        this.state = {conditionsA: {}, displayActions: displayActions, CoA: 'C', CoAHovered: false, showStart: true};
        this.toggle = this.toggle.bind(this);
        this.closeStart = this.closeStart.bind(this);
        this.startBox = <StartBox closeInfo={this.closeStart}/>
        this.hoverToggle = this.hoverToggle.bind(this);
    }

    toggle() {
        {this.state.CoA =='C' ? this.setState({conditions: {}, CoA: 'A'}) : this.setState({conditions: {}, CoA: 'C'})}
    }

    hoverToggle(input) {
        this.setState({CoAHovered: input})
    }

    closeStart() {
        this.setState({showStart: false})
    }

    render() {
        if (this.state.CoA=='C') {
            return (<div>
                {this.state.showStart ? this.startBox : null}
                <CharLibrary current_chars={this.props.current_chars} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} toggle={this.toggle} CoA={this.state.CoA} CoAHovered={this.state.CoAHovered} hoverToggle={this.hoverToggle} dark={this.props.dark}/>
            </div>)
        }
        else {
            return (<div>
                <ActionLibrary current_actions={this.props.current_actions} addToDeck={this.props.addToDeckAction} removeFromDeck={this.props.removeFromDeckAction} toggle={this.toggle} CoA={this.state.CoA} CoAHovered={this.state.CoAHovered} hoverToggle={this.hoverToggle} dark={this.props.dark}/>
            </div>)
        }
    }
}

export default Library