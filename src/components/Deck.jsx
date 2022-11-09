import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import CharDeck from './CharDeck';
import ActionDeck from './ActionDeck';

class Deck extends Component {
    render() {
        return (
            <Container>
                <CharDeck current_chars={this.props.current_chars} removeFromDeck={this.removeFromDeck}/>
                <ActionDeck />
            </Container>
        )
    }
}

export default Deck
