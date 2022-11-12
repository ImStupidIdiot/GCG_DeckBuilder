import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../scss/library.css';

import db from '../db';
import Action from './Action';

class ActionLibrary extends Component {  
    constructor(props) {
        super(props);
        this.HowManyInDeck = this.HowManyInDeck.bind(this);
    }

    HowManyInDeck(action) {
        if (this.props.current_actions[action]) {
            return this.props.current_actions[action];
        }
        return 0;
    }

    render() {
        const cl = this.props.displayActions.map((action) => <Col xs={2} key={action+"-column"}> <Action name={action} key={action} url={db.actions[action].image} url2={db.actions[action].golden_image} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} HowManyInDeck={this.HowManyInDeck(action)} isDisplayed={this.props.displayActions.includes(action)} /> </Col>)
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