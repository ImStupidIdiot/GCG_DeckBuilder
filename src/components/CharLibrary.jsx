import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Char from './Char'
import CharInfoBox from './CharInfoBox'
import StartBox from './StartBox'

import db from '../db';


class CharLibrary extends Component {  
    constructor(props) {
        super(props);
        this.isInDeck = this.isInDeck.bind(this);
        this.showChar = this.showChar.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
        this.state = {shownChar: null}
    }

    isInDeck(char) {
        return this.props.current_chars.includes(char)
    }

    showChar(char) {
        this.setState({shownChar: char})
    }

    closeInfo() {
        this.setState({shownChar: null})
    }

    render() {
        const cl = this.props.displayChars.map((char) => <Col xs={2} key={char+"-column"}> <Char name={char} key={char} url={this.isInDeck(char) ? db.chars[char].card_selected : db.chars[char].card} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck(char)} isDisplayed={this.props.displayChars.includes(char)} showChar={this.showChar}/> </Col>)

        return (
            <Container className='scrollbox'>
                <CharInfoBox char={this.state.shownChar} closeInfo={this.closeInfo}/>
                <Row>
                    {cl}
                </Row>
            </Container>
        )
    }
}

export default CharLibrary