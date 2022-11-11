import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import db from '../db'

import ActionBlock from './ActionBlock';
import Action_Block_Test from '../images/Action_Block_Test.png';

class ActionDeck extends Component {
    render() {  
        var actions = [...this.props.current_actions];
        for (var a = 0; a < actions.length; a++) {
            actions[a] = <ActionBlock name={actions[a]} url={db.actions[actions[a]].icon} removeFromDeck={this.props.removeFromDeck} />
        }
        const a1 = this.props.current_actions.map((action) => <ActionBlock name={action} url={Action_Block_Test} removeFromDeck={this.props.removeFromDeck}/>)
        return (
            <Row>
                {a1}
            </Row>
        )
    }
}

export default ActionDeck