import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import CharBlock from './CharBlock';
import XingqiuIcon from '../images/Xingqiu_Icon.png';

class CharDeck extends Component {
    render() {
        var chars = [...this.props.current_chars];
        for (var i = this.props.current_chars.length; i < 3; i++) {
            chars.push(<CharBlock name={'hi'} url={XingqiuIcon} removeFromDeck={this.props.removeFromDeck} />)
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