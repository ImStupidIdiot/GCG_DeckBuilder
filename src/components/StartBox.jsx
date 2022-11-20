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
                <br/><br/>
                Welcome to the GCG Deck Builder! There's lots of placeholders right now but it should be fully functional. EVERYTHING IS SUBJECT TO CHANGE. Anemo Symbol in top left currently toggles between character and action cards. Click outside this window to close it.
                <br/><br/>
                This does not currently work on Mobile. On Desktop, I'd recommend zooming out to 75% or till you see the entire scrollbox until I fix some CSS stuff. 
                <br/><br/>
                DM me on Discord (@StupidIdiot#9003) if you'd like to contribute a translation, art to replace a placeholder, or find any bugs/typos. 
                <br/><br/>
                Helpful Links: <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/13RRK4IYl0bHJFVtRmlDFVwE9BR-2qaq6dGr2sdJKj_o/edit#gid=1914067667" target="_blank">SigmaZero Card List (WIP)</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1J2ZvmK2T_mJR6BtPdXiSSnq1d2xesl_A3oA235ZvMLI/edit?usp=sharing" target="_blank">Google Sheet Simulator (WIP)</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1rKIXofBzIVOlhlF97oACpAm9XpNwoglDhLlLGoR13Qk/edit?usp=sharing" target="_blank">Rulebook (WIP)</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1Ai86SDsJqz4MIOrNJEh7aagOnpV-JjKss7hT26udl-g/edit?usp=sharing" target="_blank">Deck Lucky Coin Cost Calculator (Very WIP)</a>
                <br/><br/>
                Head over to the TCG Theorycrafting Channel at WFP (<a className="startBoxText" href="https://discord.gg/hutao" target="_blank">discord.gg/hutao</a>) if you need clarification on game rules not found here or are looking for opponents to sim against!
                <br/><br/>
                I'm also live sometimes at <a className="startBoxText" href="https://twitch.tv/robotwizhs" target="_blank">twitch.tv/robotwizhs</a>. I'll definitely be streaming some TC content for Genius Invocation TCG up until and through the 3.3 patch. 
                <br/><br/>
                Huge thanks to Pengepul Teyvat for lots of important leaked information, especially cost and damage numbers, and Honey Hunter (<a className="startBoxText" href="https://genshin.honeyhunterworld.com/" target="_blank">https://genshin.honeyhunterworld.com/</a>) for other info as well as most of the card images you see here. 
                <br/><br/>
                Todo list: replacing placeholders, getting official translations, mobile display, deck tier list
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