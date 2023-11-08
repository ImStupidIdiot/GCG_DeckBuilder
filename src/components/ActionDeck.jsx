import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import db from '../db'

import ActionBlock from './ActionBlock';
import Action_Block_Test from '../images/Action_Block_Test.png';

class ActionDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {showingImportText: false, showingExportText: false, sortInGame: true}
        this.allActionsTemp = Object.entries(db.actions).map((mapped) => mapped[0]);
    }

    copyActions() {
        var toCopy = Object.entries(this.props.current_actions).sort((action1, action2) => db.actions[action1[0]].cost[0] - db.actions[action2[0]].cost[0]).map((mapped) => mapped[1] == 2 ? db.actions[mapped[0]].name + '\n' + db.actions[mapped[0]].name : db.actions[mapped[0]].name).toString().replaceAll(',', '\n').replaceAll('Shaken\n Not Purred', 'Shaken, Not Purred')
        navigator.clipboard.writeText(toCopy);
    }

    render() {  
        var deckCode = this.props.exportDeckNew();
        var deckCodeOld = this.props.exportDeck();
        var actions = Object.entries(this.props.current_actions).map((mapped) => mapped[0]);
        if (this.state.sortInGame) {
            actions.sort((action1, action2) => this.allActionsTemp.indexOf(action1) - this.allActionsTemp.indexOf(action2));
        }
        else {
            actions.sort((action1, action2) => db.actions[action1].cost[0] - db.actions[action2].cost[0]);
        }
        const a1 = actions.map((action) => <ActionBlock current_chars={this.props.current_chars} name={action} key={action} url={db.actions[action].hi_res_image} count={this.props.current_actions[action]} cost={db.actions[action].cost} removeFromDeck={this.props.removeFromDeck}/>)
        return (
            <div height="850">
                <div height="850">
            <Row>
                {a1}
            </Row>
                </div>
            <p className={this.props.dark? 'fontWhite' : 'font'}>{this.props.total_actions} / 30</p>
            {this.state.showingImportText ? <div><input className='rounded' type="text" id="importText" name="importText"></input><button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => {
                this.props.importDeck(document.getElementById("importText").value)
                this.setState({showingImportText: false})
            }}>Import</button><br/><br/><button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => {this.setState({showingExportText: true})}}>Export Deck</button></div> : <div><button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => this.setState({showingImportText: true})}>Import Deck</button><button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => {
            this.setState({showingExportText: true})}}>Export Deck</button></div>}
            {this.state.showingExportText ? <div><br/><input className='rounded' type="text" id="importText" name="importText" value={deckCode} readOnly={true}></input><button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => this.setState({showingExportText: false})}>Close</button></div> : null}
            <button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => this.copyActions()}>Add Cards to Clipboard (sheet sim)</button>
            <button className={this.props.dark ? "exportDeckDark" : "exportDeck"} onClick={() => this.setState({sortInGame: !this.state.sortInGame})}>Toggle Deck View</button>
            </div>
        )
    }
}

export default ActionDeck