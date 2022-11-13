import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import db from '../db'

import ActionBlock from './ActionBlock';
import Action_Block_Test from '../images/Action_Block_Test.png';

class ActionDeck extends Component {
    constructor(props) {
        super(props);
    }
    render() {  
        var actions = Object.entries(this.props.current_actions).map((mapped) => mapped[0]);
        actions.sort((action1, action2) => db.actions[action1].cost[0] - db.actions[action2].cost[0]);
        const a1 = actions.map((action) => <ActionBlock name={action} url={db.actions[action].hi_res_image} count={this.props.current_actions[action]} cost={db.actions[action].cost} removeFromDeck={this.props.removeFromDeck}/>)
        return (
            <div height="850">
                <div height="850">
            <Row>
                {a1}
            </Row>
                </div>
            <p className='font'>{this.props.total_actions} / 30</p>
            </div>
        )
    }
}

export default ActionDeck