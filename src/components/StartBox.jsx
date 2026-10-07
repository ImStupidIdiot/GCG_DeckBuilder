import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from '../images/Close_Icon.png';

class StartBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    // big source of tech debt; see long-form comment in CharLibrary.jsx
    
    handleClick(e) {
        e.stopPropagation()
        if (e.target.className == "infoBox" || e.target.className.includes("startBox")) {
            ;
        }
        else {
            this.props.closeInfo()
        }
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick, true)
    }
    
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick, true)
    }

    render() {
            return <div className="infoBox"> 
            <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"></img></button>
            <Container>
            <Row>
                <Col xs={1} className="startBoxCol"></Col>
                <Col xs={10} className="startBoxCol"> 
                <div className = "startBox">
                <br></br><br></br><br></br>
                <strong className="startBoxTextBold">GCG Deck Builder</strong>: build and share decks for Genius Invokation TCG, with every card up to version 7.1.
                <br/><br/>
                Click the symbol in the top left to switch between character and action cards. Click a card to add it to your deck, or hover over it and click the info button to see its details.
                <br/><br/>
                Export Deck gives you a code you can paste into the game, and Import Deck accepts codes copied from the game.
                <br/><br/>
                Click anywhere to close this window.
                <br/><br/>
                </div>
                </Col>
                <Col xs={1} className="startBoxCol"> 
                </Col>
            </Row>
            </Container> 
        </div>
    }
}

export default StartBox;