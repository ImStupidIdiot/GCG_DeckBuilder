import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import db from '../db'

import ActionBlock from './ActionBlock';
import Action_Block_Test from '../images/Action_Block_Test.png';

class ActionDeck extends Component {
    render() {  
        var actions = Object.entries(this.props.current_actions).map((mapped) => mapped[0]);
        console.log(actions.sort((action1, action2) => db.actions[action1].cost - db.actions[action2].cost));
        const a1 = actions.map((action) => <ActionBlock name={action} url={db.actions[action].hi_res_image} count={this.props.current_actions[action]} cost={db.actions[action].cost} removeFromDeck={this.props.removeFromDeck}/>)
        return (
            <Row>
                {a1}
            </Row>
        )
    }
}

export default ActionDeck