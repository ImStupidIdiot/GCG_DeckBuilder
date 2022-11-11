import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import db from '../db'

import ActionBlock from './ActionBlock';
import Action_Block_Test from '../images/Action_Block_Test.png';

class ActionDeck extends Component {
    render() {  
        var actions = Object.entries(this.props.current_actions).map((mapped) => mapped[0]);
        console.log(this.props.current_actions['magicguide'])
        const a1 = actions.map((action) => <ActionBlock name={action} url={db.actions[action].icon} count={this.props.current_actions[action]} removeFromDeck={this.props.removeFromDeck}/>)
        return (
            <Row>
                {a1}
            </Row>
        )
    }
}

export default ActionDeck