import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from "../images/Close_Icon.png";

class MiscInfoBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.props.handleClick)
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.props.handleClick)
    }    

    render() {
        if (this.props.name) {
            var displayedMisc = Object.entries(db.misc).find((misc) => (misc[1].name == this.props.name))
            return <div className="infobox"> 
                <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"></img></button>
                <Container>
                <Row>
                    <Col xs={6}> 
                        <Row> <img src={displayedMisc[1].image} className="infoBoxImage"/> </Row> 
                    </Col>
                    <Col xs={6}>    
                        <br></br>
                        <div className="infoBoxName">{displayedMisc[1].name}</div> 
                        <br></br>
                        <p className="infoBoxCost">Uncollectible {displayedMisc[1].type}</p>
                        <p className="infoBoxCost">{displayedMisc[1].cost ? '\nCost: ' + displayedMisc[1].cost : null}</p>
                        <br></br>
                        <p className="infoBoxText">{displayedMisc[1].description}</p>
                    </Col>
                </Row>
                </Container> 
            </div>
        }
    }
}

export default MiscInfoBox;