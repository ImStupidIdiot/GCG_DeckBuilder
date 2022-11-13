import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CharBlock from './CharBlock';
import XingqiuIcon from '../images/Xingqiu_Icon.png';
import db from '../db'

class CharDeck extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var chars = [...this.props.current_chars];
        for (var a = 0; a < chars.length; a++) {
            chars[a] = <CharBlock name={chars[a]} url={db.chars[chars[a]].icon} removeFromDeck={this.props.removeFromDeck} />
        }
        for (var i = this.props.current_chars.length; i < 3; i++) {
            chars.push(<img src={db.nullchar.icon} className='nullCharBlock'/>)
        }

        return (
            <Row>
                <Col xs={4}> {chars[0]} </Col>
                <Col xs={4}> {chars[1]} </Col>
                <Col xs={4}> {chars[2]} </Col>
            </Row>
        )
    }
}

export default CharDeck