import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from '../images/Close_Icon.png';

class StartBox extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

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
                <br/><br/>
                Welcome to the GCG Deck Builder! There's lots of placeholders right now but it should be fully functional. Anemo Symbol in top left currently toggles between character and action cards. Click outside this window to close it.
                <br/><br/>
                Note that this does not currently work on Mobile. On Desktop, I'd recommend zooming out until you can see the entire scrollbox. 
                <br/><br/>
                DM me on Discord (@StupidIdiot#9003) if you'd like to contribute a translation, art to replace a placeholder, or find any bugs/typos. 
                <br/><br/>
                Currently working on making a rulebook! For now, if you have questions about terminology or game rules, head over to the TCG Theorycrafting Channel at WFP (discord.gg/hutao).
                <br/><br/>
                I'm also live sometimes at twitch.tv/robotwizhs. I'll definitely be streaming some TC content for Genius Invocation TCG up until and through the 3.3 patch. 
                <br/><br/>
                Huge thanks to Honey Hunter (https://genshin.honeyhunterworld.com/) for a lot of info and basically every single polished sprite you see on this page. 
                <br/><br/><br/>
                Todo list: replacing placeholders, getting accurate translations, mobile display, exporting deck codes, very basic simulation of the game, deck tier list after doing some TC work
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