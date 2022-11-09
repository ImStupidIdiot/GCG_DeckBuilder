import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

import CharLibrary from './CharLibrary';
import ActionLibrary from './ActionLibrary';
import Toggle from './Toggle';

class Library extends Component {
    render() {
        return (
            <CharLibrary addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
        )
    }
}

export default Library
