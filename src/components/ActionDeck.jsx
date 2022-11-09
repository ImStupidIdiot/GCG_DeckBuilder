import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import ActionBlock from './ActionBlock';
import Action_Block_Test from '../images/Action_Block_Test.png';

class ActionDeck extends Component {
    render() {  
        return (
            <Row>
                <ActionBlock url={Action_Block_Test}/>
                <ActionBlock url={Action_Block_Test}/>
                <ActionBlock url={Action_Block_Test}/>
                <ActionBlock url={Action_Block_Test}/>
            </Row>
        )
    }
}

export default ActionDeck