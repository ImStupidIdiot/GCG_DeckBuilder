import React, { Component } from 'react';
import Library from './components/Library'
import Deck from './components/Deck';
import Toggle from './components/Toggle';
import { Col, Row, Container } from 'react-bootstrap';
import './scss/library.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {current_chars: []};
        this.addToDeck = this.addToDeck.bind(this);
        this.removeFromDeck = this.removeFromDeck.bind(this);
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

    render() { 
        // this.printed = [];  // should be moved to char_block, so we can make each one an object
        // for (var i = 0; i < this.state.current_chars.length; i++) {
        //     console.log(this.printed)
        //     this.printed.push(<Char_Block url={GanyuIcon} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>) //change this to a char_block object, also change source to sometihng else like a key
        // }
        // if (this.state.current_chars.includes('ganyu')) {
        //     this.printed.push(<img key="ganyu" src={GanyuIcon} height="90" width ="90"></img>);
        // }
        // if (this.state.current_chars.includes('kaeya')) {
        //     this.printed.push(<img key="kaeya" src={KaeyaIcon} height="90" width ="90"></img>);
        // }
        // if (this.state.current_chars.includes('chongyun')) {
        //     this.printed.push(<img key="chongyun" src={ChongyunIcon} height="90" width ="90"></img>)
        // }
        // if (this.state.current_chars.includes('ayaka')) {
        //     this.printed.push(<img key="ayaka" src={AyakaIcon} height="90" width ="90"></img>)
        // }
        // if (this.state.current_chars.includes('xingqiu')) {
        //     this.printed.push(<img key="xingqiu" src={XingqiuIcon} height="90" width ="90"></img>)
        // }
        return (
            <Container>
                <Row> 
                    <Col xs ={9}>
                        <Library current_chars={this.state.current_chars} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>
                    </Col>
                    <Col xs={3}>
                        <Deck current_chars={this.state.current_chars} removeFromDeck={this.removeFromDeck}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Main; 