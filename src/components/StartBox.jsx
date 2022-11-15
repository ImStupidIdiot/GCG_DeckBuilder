import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from '../images/Close_Icon.png';

class StartBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener("click", this.props.closeInfo, true)
    }
    
    componentWillUnmount() {
        document.removeEventListener("click", this.props.closeInfo)
    }

    render() {
            return <div className="infobox"> 
            <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"></img></button>
            <Container>
            <Row>
                <Col xs={1}></Col>
                <Col xs={10}> 
                <br></br><br></br><br></br><br></br>
                Welcome to the GCG Deck Builder! There's lots of placeholders right now but it should be fully functional. Anemo Symbol in top left currently toggles between character and action cards. Click anywhere to close this window. 
                <br></br><br></br>
                Note that this does not currently work on Mobile. On Desktop, I'd recommend zooming out until you can see the entire scrollbox. 
                <br></br><br></br>
                DM me on Discord (@StupidIdiot#9003) if you'd like to contribute a translation, art to replace a placeholder, or find any bugs/typos. 
                <br></br><br></br>
                Currently working on making a rulebook! For now, if you have questions about terminology or game rules, head over to the TCG Theorycrafting Channel at WFP (discord.gg/hutao).
                <br></br><br></br>
                I'm also live sometimes at twitch.tv/robotwizhs. I'll definitely be streaming some TC content for Genius Invocation TCG up until and through the 3.3 patch. 
                <br></br><br></br>
                Huge thanks to Honey Hunter (https://genshin.honeyhunterworld.com/) for a lot of info and basically every single polished sprite you see on this page. 
                <br></br><br></br><br></br><br></br>
                Todo list: replacing placeholders, getting accurate translations, mobile display, exporting deck codes, very basic simulation of the game, deck tier list after doing some TC work
                <br></br><br></br>
                </Col>
                <Col xs={1}> 
                </Col>
            </Row>
            </Container> 
        </div>
    }
}

export default StartBox;