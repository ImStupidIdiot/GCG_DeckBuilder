import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import CharDeck from './CharDeck';
import ActionDeck from './ActionDeck';

class Deck extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Container>
                <CharDeck current_chars={this.props.current_chars} removeFromDeck={this.props.removeFromDeck}/>
                <ActionDeck current_actions={this.props.current_actions} total_actions={this.props.total_actions} removeFromDeck={this.props.removeFromDeckAction}/>
            </Container>
        )
    }
}

export default Deck
