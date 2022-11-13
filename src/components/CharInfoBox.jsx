import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from '../images/Close_Icon.png';

class CharInfoBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.props.closeInfo)
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.props.closeInfo)
    }

    render() {
        if (this.props.char) {
            return <div className="infobox"> 
            <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"></img></button>
            <Container>
            <Row>
                <Col xs={6}> 
                    <Row> <img src={db.chars[this.props.char].hi_res_image} className="infoBoxImage"/> </Row> 
                </Col>
                <Col xs={6}> 
                    <br></br>
                    <div className="infoBoxName">{db.chars[this.props.char].name}</div> 
                    <br></br>
                    <p className="infoBoxText">{db.chars[this.props.char].na}</p>
                    <br></br>
                    <p className="infoBoxText">{db.chars[this.props.char].skill}</p>
                    <br></br>
                    <p className="infoBoxText">{db.chars[this.props.char].burst}</p>
                    <br></br>
                    <p className='infoBoxText'>{db.chars[this.props.char].special}</p>
                    <br></br>
                    <p className="infoBoxText">Related Cards: {db.chars[this.props.char].related_cards}</p>
                    <br></br>
                </Col>
            </Row>
            </Container> 
        </div>
        }
    }
}

export default CharInfoBox;