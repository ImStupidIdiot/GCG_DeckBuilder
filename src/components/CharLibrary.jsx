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
            displayChars: [...allChars],
            showMisc: null
        }

        this.isInDeck = this.isInDeck.bind(this);
        this.showChar = this.showChar.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.showMiscBox = this.showMiscBox.bind(this);
        this.closeMiscBox = this.closeMiscBox.bind(this);
        this.search = this.search.bind(this);
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
            displayChars = displayChars.filter((char) => db.chars[char][key].lower() == value.lower());
        }
        
        this.setState({filters: filters, displayChars: displayChars});
    }

    search(text) {
        var text = document.getElementById("searchBarChar").value;
        this.setState({filters: {}});
        var displayChars = [...this.state.allChars];
        displayChars = displayChars.filter((char) => db.chars[char].name.toLowerCase().includes(text.toLowerCase()) || db.chars[char].na.toLowerCase().includes(text.toLowerCase()) || db.chars[char].skill.toLowerCase().includes(text.toLowerCase()) || db.chars[char].burst.toLowerCase().includes(text.toLowerCase()) || (db.chars[char].special && db.chars[char].special.toLowerCase().includes(text.toLowerCase())) || db.chars[char].element.toLowerCase().includes(text.toLowerCase()) || db.chars[char].region.toLowerCase().includes(text.toLowerCase()) || db.chars[char].related.toLowerCase().includes(text.toLowerCase()) || db.chars[char].flavor.toLowerCase().includes(text.toLowerCase()) || (db.chars[char].keyword && db.chars[char].keyword.toLowerCase().includes(text.toLowerCase())));
        this.setState({displayChars: displayChars});
    }

    isInDeck(char) {
        return this.props.current_chars.includes(char)
    }

    showChar(char) {
        this.setState({shownChar: char})
        document.addEventListener("click", this.handleClick, true)
    }

    closeInfo() {
        this.setState({shownChar: null})
        document.removeEventListener("click", this.handleClick, true)
    }

    // this handleClick functionality comes with three MASSIVE sources of tech debt:
    // 1) adding and removing EventListeners; order breaks might leave the event listeners in place, which may cause problems in the future.
    // 2) stopPropagation is very much a cause for concern. Any children of CharLibrary that have click events will need a specific exception in the handleClick function.
    // 3) the if statement functionality (target.className.includes) means that all elements in CharInfoBox, MiscInfoBox, and other children of CharLibrary will need to have a className containing infoBox, or will need a specific exception tacked on here.
    handleClick(e) {
        if (e.target.className.includes("infoBox") || e.target.className=="miscButton") {
            return;
        }
        else {
            e.stopPropagation();
            if (this.state.showMisc) {
                this.closeMiscBox()
            }
            else {
                this.closeInfo()
            }
        }
    }

    showMiscBox(item) {
        this.setState({showMisc: item})
    }

    closeMiscBox() {
        this.setState({showMisc: null})
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
                <CharFilters filters={this.state.filters} changeFilter={this.changeFilter} toggle={this.props.toggle} CoA={this.props.CoA} CoAHovered={this.props.CoAHovered} hoverToggle={this.props.hoverToggle} search={this.search} dark={this.props.dark}/>
                <Container className='scrollbox'>
                    <CharInfoBox char={this.state.shownChar} closeInfo={this.closeInfo} showMisc={this.state.showMisc} showMiscBox={this.showMiscBox} closeMiscBox={this.closeMiscBox}/>
                    <Row>
                        {cl}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CharLibrary