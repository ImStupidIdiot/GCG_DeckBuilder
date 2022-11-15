import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from "../images/Close_Icon.png";
import MiscInfoBox from './MiscInfoBox';

class ActionInfoBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.action) {
            var text = db.actions[this.props.action].description
                return <div className="infoBox">
                <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"></img></button>
                <Container>
                <Row>
                    <Col xs={6} className="infoBoxCol"> 
                        <Row> <img src={db.actions[this.props.action].hi_res_image} className="infoBoxImage"/> </Row> 
                    </Col>

                    <Col xs={6} className="infoBoxCol"> 
                        <br></br>
                        <div className="infoBoxName">{db.actions[this.props.action].name}</div> 
                        <br></br>
                        <p className="infoBoxCost">Cost: {db.actions[this.props.action].cost}</p>
                        <br></br>
                        <p className="infoBoxText">{text}</p>
                    </Col>
                </Row>
                </Container> 
            </div>
        }
    }
}

export default ActionInfoBox;