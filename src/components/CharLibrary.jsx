import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import '../scss/library.css';
import Char from './Char'

import Ganyu_Card from '../images/Ganyu_Card.webp';
import Kaeya_Card from '../images/Kaeya_Card.webp';
import Chongyun_Card from '../images/Chongyun_Card.webp';
import Ayaka_Card from '../images/Ayaka_Card.webp';
import Xingqiu_Card from '../images/Xingqiu_Card.webp';


class CharLibrary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col>
                    <Char name='Ganyu' url={Ganyu_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334000.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
                    <Char name='Ayaka' url={Ayaka_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334003.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
                </Col>
                <Col>
                    <Char name='Kaeya' url={Kaeya_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334001.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
                    <Char name='Xingqiu' url={Xingqiu_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334004.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
                </Col>
                <Col>
                    <Char name='Chongyun' url={Chongyun_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334002.webp' addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
                </Col>
            </Row>
        )
    }
}

export default CharLibrary