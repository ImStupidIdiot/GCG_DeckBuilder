import React, { Component } from 'react';
import Library from './components/Library'
import Deck from './components/Deck';
import Toggle from './components/Toggle';
import { Col, Row, Container } from 'react-bootstrap';
import './scss/deck.css'
import './scss/library.css';
import './scss/misc.css';
import db from './db';

const { convertBase } = require("simple-base-converter");
const cards = require("./cards");
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {current_chars: [], current_actions: {}, total_actions: 0, dark: false};
        this.addToDeck = this.addToDeck.bind(this);
        this.removeFromDeck = this.removeFromDeck.bind(this);
        this.addToDeckAction = this.addToDeckAction.bind(this);
        this.removeFromDeckAction = this.removeFromDeckAction.bind(this);
        this.importDeck = this.importDeck.bind(this);
        this.exportDeck = this.exportDeck.bind(this);

        this.leeks = false; //delete everything that has this later
        // if (db.chars.zhongli) {
        //     this.leeks = true;
        // } //temp, obviously 

        this.importDeck(window.location.hash.substring(1));
    }

    addToDeck(char) {
        var char_on = this.state.current_chars
        if (this.state.current_chars.length >= 3 || this.state.current_chars.includes(char)){
            return false;
        }
        char_on.push(char);
        this.setState({current_chars: char_on});
        return true;
    }

    removeFromDeck(char) {
        var char_off = this.state.current_chars
        if (char_off.length <= 0) {
            return false;
        }
        var return_list = []
        for (var i = 0; i < char_off.length; i++) {
            if (char_off[i] != char) {
                return_list.push(char_off[i])
            }
        }
        this.setState({current_chars: return_list});
        return true;
        }

    addToDeckAction(action) {
        if (this.state.total_actions >= 30 || (this.state.current_actions[action] && this.state.current_actions[action] == 2)){
            return false;
        }
        this.setState({total_actions: this.state.total_actions + 1});
        if (this.state.current_actions[action]) {
            this.state.current_actions[action] += 1;
        }
        else {
            this.state.current_actions[action] = 1;
        }
        this.setState({current_actions: this.state.current_actions});
        return true;
    }

    removeFromDeckAction(action) {
        if (this.state.total_actions <= 0) {
            return false;
        }
        this.setState({total_actions: this.state.total_actions - 1});
        if (this.state.current_actions[action]) {
            this.state.current_actions[action] -= 1;
            if (this.state.current_actions[action] == 0) {
                delete this.state.current_actions[action];
            }
        }
        this.setState({current_actions: this.state.current_actions});
        return true;
        }

    importDeck(deckString) { //version 1.0. New deck strig converter below. 
        if (!(deckString && deckString[0] + deckString[1] == '!!')) {
            return;
        }
        this.state = {current_actions: {}, total_actions: 0, current_chars: []}
        this.setState({current_actions: {}}) //idk why i need both of these to make it work help
        const allChars = Object.entries(db.chars).map((char) => char[0])
        const allActions = Object.entries(db.actions).map((action) => action[0])
        var deckLengthTracker = 0
        this.setState({current_chars: []})
        for (var i = 2; i < deckString.length; i += 2) {
                if (deckString[i] == '.') {
                    i += 1
                    if (this.validDeckCheckHelper(deckString[i] + deckString[i+1]) == 'action' && deckLengthTracker < 30) {
                        if (this.addToDeckAction(allActions.filter((action) => db.actions[action].id.includes(deckString[i] + deckString[i+1]))[0])) {
                            this.addToDeckAction(allActions.filter((action) => db.actions[action].id.includes(deckString[i] + deckString[i+1]))[0])
                            deckLengthTracker += 2
                        }
                    }
                    else {
                        this.state.total_actions = deckLengthTracker;
                        this.setState({total_actions: deckLengthTracker})
                        return;
                    }
                }
                else if (deckString[i] == '=') {
                    this.state.total_actions = deckLengthTracker;
                    this.setState({total_actions: deckLengthTracker})
                    return;
                }
                else {
                    if (this.validDeckCheckHelper(deckString[i] + deckString[i+1]) == 'action' && deckLengthTracker < 30) {
                        if (this.addToDeckAction(allActions.filter((action) => db.actions[action].id.includes(deckString[i] + deckString[i+1]))[0])) {
                            deckLengthTracker += 1
                        }
                    }
                    else if (this.validDeckCheckHelper(deckString[i] + deckString[i+1]) == 'char') {
                        this.addToDeck(allChars.filter((char) => db.chars[char].id.includes(deckString[i] + deckString[i+1]))[0])
                    }
                    else {
                        this.state.total_actions = deckLengthTracker;
                        this.setState({total_actions: deckLengthTracker})
                        return;
                    }
                }
        }
        this.state.total_actions = deckLengthTracker;
        this.setState({total_actions: deckLengthTracker})
    }

    validDeckCheckHelper(twoDigitString) { //will need to update this as database expands unfortunately
        const conversion = parseInt(twoDigitString, 36)
        if (/^[A-Z0-9]+$/.test(twoDigitString) && ((conversion >= 1 && conversion <= 27) || (conversion >= 147 && conversion <= 148) || (conversion >= 151 && conversion <= 153) || (conversion >= 159 && conversion <= 161) || (this.leeks && conversion >= 167 && conversion <= 179))) {
            return 'char';
        }
        else if (/^[A-Z0-9]+$/.test(twoDigitString) && ((conversion >= 28 && conversion <= 146) || (conversion >= 149 && conversion <= 150) || (conversion >= 154 && conversion <= 158) || (conversion >= 162 && conversion <= 166) || (this.leeks && conversion >= 180 && conversion <= 230))) {
            return 'action';
        }
        else {
            return null;
        }
    }

    exportDeck() {
        var toCopy = Object.entries(this.state.current_chars).map((input) => db.chars[input[1]].id).toString().replaceAll(',', '') + Object.entries(this.state.current_actions).sort((action1, action2) => db.actions[action1[0]].cost[0] - db.actions[action2[0]].cost[0]).map((mapped) => mapped[1] == 2 ? '.' + db.actions[mapped[0]].id : db.actions[mapped[0]].id).toString().replaceAll(',', '');
        var validDeck = true;
        if (this.state.current_chars.length == 3 && this.state.total_actions == 30) {
            for (var i = 0; i < Object.entries(this.state.current_actions).length; i++) {
                if (!(!(db.actions[Object.entries(this.state.current_actions)[i][0]].required) || (this.state.current_chars.includes(db.actions[Object.entries(this.state.current_actions)[i][0]].required) || 
                (db.actions[Object.entries(this.state.current_actions)[i][0]].required.includes("2") &&
                this.state.current_chars.filter((char) => db.chars[char].element.includes(db.actions[Object.entries(this.state.current_actions)[i][0]].required.substring(1)) || db.chars[char].region.includes(db.actions[Object.entries(this.state.current_actions)[i][0]].required.substring(1))).length >= 2
                )))) {
                        validDeck = false;
                        break;
                    }
            }
        }
        else {
            validDeck = false;
        }   
        if (toCopy) {
            toCopy = '!!' + toCopy + '=';
            if (!validDeck) {
                toCopy += '?';
            }
        }
        if (this.leeks) {
            toCopy += "6jCACqzayijXmMjDf9rA"; //delete later
        }
        window.location.href = '#' + toCopy;
        return toCopy;
    }

    //everything below is just a test run of the new import/export deck code function we are testing for tournaments at discord.gg/gitcg

    exportDeckv34(data) {
        const l = cards.latest;
        const latest = cards[l];
        let field = Array(latest.deck.length).fill(0);
    
        for (const i in data.deck) {
            field[this.reverse(field, i)] = data.deck[i];
        }
    
        return this.encodeHeader(l) + this.encodeCharacters(data.characters) + this.encodeDeck(field.join(""));
    }

    importDeckv34(code) {
        if (!code) {
            return;
        }
        const v = this.decodeHeader(code.slice(0, 2));
        const version = cards[v];
        const [characters, deckCode] = this.decodeCards(code.slice(2));
    
        let description = characters.map((i) => version.characters[i].name).join("\n") + "\n";
    
        for (let i = deckCode.length - 1; i >= 0; i--) {
            const value = deckCode[i];
            const index = this.reverse(deckCode, i);
    
            if (value !== "0") {
                description += `${value} - ${version.deck[index].name}\n`;
            }
        }
    
        return description;
    }

    reverse(arr, n) {
        return arr.length - 1 - n;
    };
    
    encodeHeader(x) {
        return convertBase(x, 10, chars).padStart(2, "0");
    };
    
    encodeCharacters(xs) {
        let res = "";
    
        for (const x of xs) {
            res += chars[chars.length - 1].repeat(Math.floor(x / chars.length));
            res += chars[x % chars.length];
        }
    
        return res;
    };
    
    encodeDeck(x) {
        return convertBase(x, "012", chars);
    };
    
    decodeHeader(x) {
        return convertBase(x, chars, 10);
    };
    
    decodeCards(x) {
        let characters = [];
        let characterLength = 0;
    
        for (let i = 0; i < x.length; i++) {
            let characterCode = x[i];
    
            while (characterCode[characterCode.length - 1] === chars[chars.length - 1]) {
                characterCode += x[++i];
            }
    
            characters.push(this.decodeCharacter(characterCode));
            characterLength = i;
    
            if (characters.length === 3) break;
        }
    
        return [characters, convertBase(x.slice(characterLength + 1), chars, "012")];
    };
    
    decodeCharacter(x) {
        let n = 0;
    
        for (let i = 0; i < x.length; i++) {
            n += chars.indexOf(x[i]);
        }
    
        return n;
    };

    render() { 
        if (this.state.dark) {
            document.body.style = 'background: black;';
        }
        else {
            document.body.style = 'background: transparent;';
        }
        return (<div className={this.state.dark ? "blackBackground" : "transparent"}>
                <Row xs={12}> 
                    <Col xs={9}>
                        <Library current_chars={this.state.current_chars} current_actions={this.state.current_actions} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck} addToDeckAction={this.addToDeckAction} removeFromDeckAction={this.removeFromDeckAction} dark={this.state.dark}/>
                        <label className={this.state.dark? "whiteText" : null}><input type="checkbox" className="darkToggle" onChange={() => {
                            this.setState({dark: !(this.state.dark)
                            })}}/> Dark Mode</label>
                    </Col>
                    <Col xs={3}>
                        <Deck current_chars={this.state.current_chars} current_actions={this.state.current_actions} total_actions={this.state.total_actions} removeFromDeck={this.removeFromDeck} addToDeckAction={this.addToDeckAction} removeFromDeckAction={this.removeFromDeckAction} importDeck={this.importDeck} exportDeck={this.exportDeck} dark={this.state.dark}/>
                    </Col>
                </Row>
        </div>) 
    }
}

export default Main; 
