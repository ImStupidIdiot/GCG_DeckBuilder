import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../scss/library.css';
import Char from './Char'

import db from '../db';

import Ganyu_Card from '../images/Ganyu_Card.webp';
import Kaeya_Card from '../images/Kaeya_Card.webp';
import Chongyun_Card from '../images/Chongyun_Card.webp';
import Ayaka_Card from '../images/Ayaka_Card.webp';
import Xingqiu_Card from '../images/Xingqiu_Card.webp';


class CharLibrary extends Component {     
    constructor(props) {
        super(props);
        this.isInDeck = this.isInDeck.bind(this);
    }

    isInDeck(char) {
        return this.props.current_chars.includes(char)
    }

    render() {    
        return (
            <Row>
                <Col xs={2}>
                    <Char name='ganyu' url={db.ganyu.card} url2={db.ganyu.card_selected} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck('ganyu')}/>
                    <Char name='ayaka' url={Ayaka_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334003.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck('ayaka')}/>
                </Col>
                <Col xs={2}>
                    <Char name='kaeya' url={Kaeya_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334001.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck('kaeya')}/>
                    <Char name='xingqiu' url={Xingqiu_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334004.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck('xingqiu')}/>
                </Col>
                <Col xs={2}>
                    <Char name='chongyun' url={Chongyun_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334002.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} isInDeck={this.isInDeck('chongyun')}/>
                </Col>
            </Row>
        )
    }
}

export default CharLibrary