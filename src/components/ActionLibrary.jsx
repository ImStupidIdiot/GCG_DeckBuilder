import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../scss/library.css';

import db from '../db';
import Action from './Action';

class ActionLibrary extends Component {  
    constructor(props) {
        super(props);
        this.isInDeck = this.isInDeck.bind(this);
    }

    isInDeck(action) {
        return this.props.current_actions.includes(action)
    }

    render() {
        const cl = this.props.displayActions.map((action) => <Col xs={2} key={action+"-column"}> <Action name={action} key={action} url={db.actions[action].card} url2={db.actions[action].card_selected} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck(action)} isDisplayed={this.props.displayActions.includes(action)} /> </Col>)
        return (
            <Container className='scrollbox'>
            <Row>
                {cl}
            </Row>
            </Container>
        )
    }
}

export default ActionLibrary