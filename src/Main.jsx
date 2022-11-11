import React, { Component } from 'react';
import Library from './components/Library'
import Deck from './components/Deck';
import Toggle from './components/Toggle';
import { Col, Row, Container } from 'react-bootstrap';
import './scss/library.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {current_chars: [], current_actions: []};
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
        var action_on = this.state.current_actions
        if (this.state.current_actions.length >= 30){
            return false;
        }
        action_on.push(action);
        this.setState({current_actions: action_on});
        return true;
    }

    removeFromDeckAction(action) {
        var action_off = this.state.current_actions
        if (action_off.length <= 0) {
            return false;
        }
        var return_list = []
        for (var i = 0; i < action_off.length; i++) {
            if (action_off[i] != action) {
                return_list.push(action_off[i])
            }
        }
        this.setState({current_actions: return_list});
        return true;
        }

    render() { 
        console.log(this.state.current_actions)
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
