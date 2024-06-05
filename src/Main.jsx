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

const base64conversion = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split("");

const allChars = Object.entries(db.chars).map((char) => char[0]);
const allActions = Object.entries(db.actions).map((action) => action[0]);
const combinedList = ['BLANK'].concat(allChars, allActions);

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
        this.exportDeckv42 = this.exportDeckv42.bind(this);
        this.leaks = window.location.hash.substring(1).includes("FCyyUCaTqdmauwye29RQ");
        this.importDeck(window.location.hash.substring(1));
        if (localStorage.getItem('dark') == 'true') {
            this.state.dark = true;
            this.setState({dark: true});
          }
    }

    addToDeck(char) {
        var char_on = this.state.current_chars
        if (char == 'BLANK' || this.state.current_chars.length >= 3 || this.state.current_chars.includes(char)){
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
        if (action == 'BLANK' || this.state.total_actions >= 30 || (this.state.current_actions[action] && (this.state.current_actions[action] == 2 || action.includes('MAX1')))){
            return false;
        }
        this.setState({total_actions: this.state.total_actions + 1});
        if (this.state.current_actions[action]) {
            this.state.current_actions[action] += 1;
        }
        else {
            this.state.current_actions[action] = 1;
        }
        this.state.current_actions = Object.fromEntries(Object.entries(this.state.current_actions).sort((a, b) => combinedList.indexOf(a[0]) - combinedList.indexOf(b[0])));
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

    importDeck(deckString) { //version 1.0. New deck strin  g converter below. 
        var index = 0;
        while (deckString.length > 2) {
            if (!(deckString && deckString[0] + deckString[1] == '!!')) {
                if(deckString[0] == 'A' || deckString[0] == 'B') {
                    this.importDeckv42(deckString);
                    return;
                }
                deckString = deckString.substring(1);
                }
            else {
                break;
            }
        }
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
        if (/^[A-Z0-9]+$/.test(twoDigitString) && ((conversion >= 1 && conversion <= 27) || (conversion >= 147 && conversion <= 148) || (conversion >= 151 && conversion <= 153) || (conversion >= 159 && conversion <= 161) || (conversion >= 167 && conversion <= 179) || (conversion >= 232 && conversion <= 234) || (conversion >= 243 && conversion <= 245) || (conversion >= 254 && conversion <= 256) || (conversion >= 266 && conversion <= 268) || (conversion >= 277 && conversion <= 287) || (conversion >= 319 && conversion <= 322) || (conversion >= 334 && conversion <= 337) || (conversion >= 348 && conversion <= 360))) {
            return 'char';
        }
        else if (/^[A-Z0-9]+$/.test(twoDigitString) && ((conversion >= 28 && conversion <= 146) || (conversion >= 149 && conversion <= 150) || (conversion >= 154 && conversion <= 158) || (conversion >= 162 && conversion <= 166) || (conversion >= 180 && conversion <= 231) || (conversion >= 235 && conversion <= 242) || (conversion >= 246 && conversion <= 253) || (conversion >= 257 && conversion <= 265) || (conversion >= 269 && conversion <= 276) || (conversion >= 288 && conversion <= 318) || (conversion >= 323 && conversion <= 333) || (conversion >= 338 && conversion <= 347) || (conversion >= 361 && conversion <= 394))) {
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
    
        if (this.leaks) {
            toCopy += 'FCyyUCaTqdmauwye29RQ';
        }
        window.location.href = '#' + toCopy;
        return toCopy;
    }

    importDeckv42(str) {
        this.state = {current_actions: {}, total_actions: 0, current_chars: []}
        this.setState({current_actions: {}}) //idk why i need both of these to make it work help
        // const raw = atob(str);
        // let result = ''; //yoink stackoverflow
        // for (let i = 0; i < raw.length; i++) {
        //   const hex = raw.charCodeAt(i).toString(16);
        //   result += (hex.length === 2 ? hex : '0' + hex);
        // }
        // const translated = result.toLowerCase(); //to hex
        str = str.substring(0, 68).split("");
        var offset = (64 * base64conversion.indexOf(str[66]) + base64conversion.indexOf(str[67])) % 256;
        var translated = "";
        for (var i = 0; i < str.length; i += 2) {
            var parse = 64 * base64conversion.indexOf(str[i]) + base64conversion.indexOf(str[i + 1]);
            // if ((i * 6) % 8 == 4) {
            //     parse -= offset;
            //     parse -= 256 * offset;
            // }
            // else {
            //     parse -= 16 * offset;
            // }
            parse = parse.toString(2);
            while (parse.length < 12) {
                parse = "0" + parse;
            }
            translated = translated + parse;
        }
        var toRead = ""; 
        for (var i = 0; i < translated.length; i+=8) {
            var temp = translated.substring(i, i+8);
            temp = parseInt(temp, 2);
            if (temp == 0 && offset != 0) {
                temp = 256;
            } 
            temp -= offset;
            temp = temp.toString(16);
            while (temp.length < 2) {
                temp = "0" + temp;
            }
            toRead = toRead + temp;
        }
        translated = toRead;
        var i = 0; //current hex number we are checking
        var count = 0; //every time count hits 3, we translate to a card and move on
        var flip = 1; //if flip is 1, we add flip then switch flip to 3. repeat
        var build = '';
        var total = 0; //stop when total is 33
        var actual = 0;
        while(i != 99 && total != 33) {
            build += translated.substring(i, i+1);
            count += 1;
            i += flip;
            if (flip == 1) {
                flip = 3;
            } else {
                flip = 1;
            }
            if (count == 3) {
                if (total < 3) {
                    this.addToDeck(this.decodev42(build));
                } else {
                    var added = this.addToDeckAction(this.decodev42(build));
                    if (added == true) {
                        actual += 1;
                    }
                }
                build = '';
                count = 0;
                total += 1;
            } 
            if (i == 100) {
                i = 2;
            }
        }
            this.state.total_actions = actual;
            this.setState({total_actions: actual});
    }

    decodev42(build) {
        const allChars = Object.entries(db.chars).map((char) => char[0]);
        const allActions = Object.entries(db.actions).map((action) => action[0]);
        const combinedList = ['BLANK'].concat(allChars, allActions);
        if (Number('0x' + build) > combinedList.length) {
            return 'BLANK';
        }
        return combinedList[Number('0x' + build)];
    }

    exportDeckv42() {
        var build = [];
        for (var x = 0; x < 102; x++) {
            build.push("0000"); //fill the deck with blank cards. We build the deck in binary first
        }
        var i = 0;
        var flip = 1; //this needs to altnerate between 1 and 3, because we write to the 1st, 4th, 5th, 8th, ... byte; every card is encoded in 3 bytes, 1st card is 1st 4th 5th byte, 2nd card is 8th 9th 12th byte, etc. 
        for (var a = 0; a < this.state.current_chars.length; a++) { //first add all the chars
            var char = this.state.current_chars[a];
            var str = this.encodev42(char);
            build[i] = str.substring(0, 4);
            i += flip; {flip == 1 ? flip = 3 : flip = 1};
            build[i] = str.substring(4, 8);
            i += flip; {flip == 1 ? flip = 3 : flip = 1};
            build[i] = str.substring(8, 12);
            i += flip; {flip == 1 ? flip = 3 : flip = 1};
        }
        i = 17;
        flip = 3;
        for (var action in this.state.current_actions) { //iterate through all the action cards
            var str = this.encodev42(action);
            for (var count = 0; count < this.state.current_actions[action]; count++) {
                build[i] = str.substring(0, 4);
                i += flip; {flip == 1 ? flip = 3 : flip = 1};
                build[i] = str.substring(4, 8);
                i += flip; {flip == 1 ? flip = 3 : flip = 1}; {i == 100 ? i = 2 : i = i};
                build[i] = str.substring(8, 12);
                i += flip; {flip == 1 ? flip = 3 : flip = 1};
            }
        }
        //at this point the deck code is basically done, but if this first deck code doesnt work we have to increase every byte by 1
        for (var index = 1; index < build.length; index += 2) { 
            if (build[index] == "1111") {
                build[index] = "0000";
                build[index - 1] = (parseInt(build[index - 1], 2) + 1).toString(2);
                if (build[index - 1] == "10000") {
                    build[index - 1] = "0000";
                }
                while (build[index - 1].length < 4) {
                    build[index - 1] = "0" + build[index - 1];
                }
            }
            else {
                build[index] = (parseInt(build[index], 2) + 1).toString(2);
                while (build[index].length < 4) {
                    build[index] = "0" + build[index];
                }
            }
        }
        build = build.join("");
        var toReturn = "";
        for (var s = 0; s < build.length; s += 6) { //convert to base 64
            var temp = build.substring(s, s+6);
            toReturn = toReturn + base64conversion[parseInt(temp, 2)];
        }
        return toReturn;
    }

    encodev42(thing) {
        const allChars = Object.entries(db.chars).map((char) => char[0]); //this part needs updating to make it map correctly
        const allActions = Object.entries(db.actions).map((action) => action[0]); //update
        const combinedList = ['BLANK'].concat(allChars, allActions); //update
        var toReturn = combinedList.indexOf(thing).toString(2); //update
        if (toReturn == -1) {
            console.log("error", thing);
            return "000000000000";
        }
        while (toReturn.length < 12) {
            toReturn = "0" + toReturn;
        }
        return toReturn;
    }

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
                        <label className={this.state.dark ? "whiteText" : null}><input type="checkbox" id="darkToggle" className="darkToggle" checked={this.state.dark} onChange={() => {
                            this.setState({dark: !(this.state.dark)});
                            this.state.dark = !(this.state.dark);
                            localStorage.setItem('dark', this.state.dark);
                            }}/> Dark Mode</label>
                    </Col>
                    <Col xs={3}>
                        <Deck current_chars={this.state.current_chars} current_actions={this.state.current_actions} total_actions={this.state.total_actions} removeFromDeck={this.removeFromDeck} addToDeckAction={this.addToDeckAction} removeFromDeckAction={this.removeFromDeckAction} importDeck={this.importDeck} exportDeck={this.exportDeck} exportDeckNew = {this.exportDeckv42} dark={this.state.dark}/>
                    </Col>
                </Row>
        </div>) 
    }
}

export default Main; 
