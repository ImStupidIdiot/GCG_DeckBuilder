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
                <strong className="startBoxTextBold">Helpful Links (note: most of these are outdated):</strong> <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/13RRK4IYl0bHJFVtRmlDFVwE9BR-2qaq6dGr2sdJKj_o/edit#gid=1914067667" target="_blank">SigmaZero Card List (WIP)</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1J2ZvmK2T_mJR6BtPdXiSSnq1d2xesl_A3oA235ZvMLI/edit?usp=sharing" target="_blank">Google Sheet Simulator (WIP)</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1Ai86SDsJqz4MIOrNJEh7aagOnpV-JjKss7hT26udl-g/edit?usp=sharing" target="_blank">Deck Lucky Coin Cost Calculator (Very WIP)</a>, <a className="startBoxText" href="https://docs.google.com/document/d/1EPk-IWrygkX9VePRZhaHyMRxSPdzwNHMG2m-h66PyTc/edit?usp=sharing" target="_blank">My Favorite Pre-Release Decks (WIP)</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1GMau1t-g8cDDpQLnSfgAuDt9qh5V1BoRIkTjkXy92MQ/edit?usp=sharing" target="_blank">Deck List Storage / Fancifier</a>, <a className="startBoxText" href="https://docs.google.com/spreadsheets/d/1gopvNuL5-dVYI-qKvArf84JNFoLdFl1FeSXlU9_alL0/edit?usp=sharing" target="_blank">Changelog</a>
                <br/><br/>
                Welcome to the GCG Deck Builder! There's lots of placeholders right now but it should be fully functional. Symbol in top left currently toggles between character and action cards. Click outside this window to close it.
                <br/><br/>
                This does not currently work on Mobile. On Desktop, I'd recommend zooming out to 75%.
                <br/><br/>
                DM me on Discord (@StupidIdiot#9003) if you'd like to contribute art to replace a placeholder or find any bugs/typos. 
                <br/><br/>
                Head over to the Genius Invokation TCG Discord server (discord.gg/invokation) if you'd like to particpate in tournaments, fight against others in ranked matches, or just talk about the TCG! 
                <br/><br/>
                I'm also live sometimes at <a className="startBoxText" href="https://twitch.tv/robotwizhs" target="_blank">twitch.tv/robotwizhs</a>. I'll definitely be streaming some Genius Invocation TCG up until and through the 3.3 patch. 
                <br/><br/>
                Todo list: replacing placeholders, mobile display, deck tier list
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