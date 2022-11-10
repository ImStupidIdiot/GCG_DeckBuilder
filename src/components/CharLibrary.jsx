import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../scss/library.css';
import Char from './Char'

import db from '../db';


class CharLibrary extends Component {  
    constructor(props) {
        super(props);
        this.isInDeck = this.isInDeck.bind(this);
    }

    isInDeck(char) {
        return this.props.current_chars.includes(char)
    }

    render() {
        const cl = this.props.displayChars.map((char) => <Col xs={2} key={char+"-column"}> <Char name={char} key={char} url={db.chars[char].card} url2={db.chars[char].card_selected} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck(char)} isDisplayed={this.props.displayChars.includes(char)} /> </Col>)
        return (
            <Container className='scrollbox'>
            <Row>
                {cl}
            </Row>
            </Container>
        )
    }
}

export default CharLibrary