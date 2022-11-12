import React, { Component } from 'react';
import Library from './components/Library'
import Deck from './components/Deck';
import Toggle from './components/Toggle';
import { Col, Row, Container } from 'react-bootstrap';
import './scss/library.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {current_chars: [], current_actions: {}, total_actions: 0};
        this.addToDeck = this.addToDeck.bind(this);
        this.removeFromDeck = this.removeFromDeck.bind(this);
        this.addToDeckAction = this.addToDeckAction.bind(this);
        this.removeFromDeckAction = this.removeFromDeckAction.bind(this);
    }

    addToDeck(char) {
        var char_on = this.state.current_chars
        if (this.state.current_chars.length >= 3){
            return false;
        }
        char_on.push(char);
        this.setState({current_chars: char_on});
        return true;
    }

    removeFromDeck(char) {
        var char_off = this.state.current_chars
        if (char_off.length <= 0) {
            return false;
        }
        var return_list = []
        for (var i = 0; i < char_off.length; i++) {
            if (char_off[i] != char) {
                return_list.push(char_off[i])
            }
        }
        this.setState({current_chars: return_list});
        return true;
        }

    addToDeckAction(action) {
        if (this.state.total_actions >= 30){
            return false;
        }
        this.setState({total_actions: this.state.total_actions + 1});
        if (this.state.current_actions[action]) {
            this.state.current_actions[action] += 1;
        }
        else {
            this.state.current_actions[action] = 1;
        }
        this.setState({current_actions: this.state.current_actions});
        return true;
    }

    removeFromDeckAction(action) {
        if (this.state.total_actions <= 0) {
            return false;
        }
        this.setState({total_actions: this.state.total_actions - 1});
        if (this.state.current_actions[action]) {
            this.state.current_actions[action] -= 1;
            if (this.state.current_actions[action] == 0) {
            delete this.state.current_actions[action];
            }
        }
        this.setState({current_actions: this.state.current_actions});
        return true;
        }

    render() { 
        return (
            <Container>
                <Row> 
                    <Col xs ={9}>
                        <Library current_chars={this.state.current_chars} current_actions={this.state.current_actions} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck} addToDeckAction={this.addToDeckAction} removeFromDeckAction={this.removeFromDeckAction}/>
                    </Col>
                    <Col xs={3}>
                        <Deck current_chars={this.state.current_chars} current_actions={this.state.current_actions} removeFromDeck={this.removeFromDeck} addToDeckAction={this.addToDeckAction} removeFromDeckAction={this.removeFromDeckAction}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main; 
