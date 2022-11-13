import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from "../images/Close_Icon.png";

class ActionInfoBox extends Component {
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
        if (this.props.action) {
            var text = db.actions[this.props.action].description
            console.log(text);
            return <div className="infobox"> 
                <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"></img></button>
                <Container>
                <Row>
                    <Col xs={6}> 
                        <Row> <img src={db.actions[this.props.action].hi_res_image} className="infoBoxImage"/> </Row> 
                    </Col>

                    <Col xs={6}> 
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