import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CharFilters from './CharFilters'
import Char from './Char'
import CharInfoBox from './CharInfoBox'
import StartBox from './StartBox'

import db from '../db';

class CharLibrary extends Component {

    constructor(props) {
        super(props);

        const allChars = Object.entries(db.chars).map((char) => char[0])
        this.state = {
            shownChar: null, 
            filters: {}, 
            allChars: allChars,
            displayChars: [...allChars]
        }

        this.isInDeck = this.isInDeck.bind(this);
        this.showChar = this.showChar.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(category, condition) {
        const filters = {...this.state.filters};

        if (filters[category] == condition) {
            delete filters[category];
        } else {
            filters[category] = condition;
        }
        
        var displayChars = [...this.state.allChars];
        
        for (const [key, value] of Object.entries(filters)) {
            displayChars = displayChars.filter((char) => db.chars[char][key] == value);
        }
        
        this.setState({filters: filters, displayChars: displayChars});
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
        const cl = this.state.displayChars.map((char) => 
            <Col xs={2} key={char+"-column"}> 
                <Char name={char} key={char} 
                    url={this.isInDeck(char) ? db.chars[char].card_selected : db.chars[char].card} 
                    addToDeck={this.props.addToDeck} 
                    removeFromDeck={this.props.removeFromDeck} 
                    isInDeck={this.isInDeck(char)} 
                    isDisplayed={this.state.displayChars.includes(char)} 
                    showChar={this.showChar}
                /> 
            </Col>
        )

        return (
            <div>
                <CharFilters filters={this.state.filters} changeFilter={this.changeFilter} toggle={this.props.toggle}/>
                <Container className='scrollbox'>
                    <CharInfoBox char={this.state.shownChar} closeInfo={this.closeInfo}/>
                    <Row>
                        {cl}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CharLibrary