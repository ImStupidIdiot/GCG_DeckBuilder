import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import db from '../db';
import Action from './Action';
import ActionInfoBox from './ActionInfoBox';

class ActionLibrary extends Component {  
    constructor(props) {
        super(props);
        this.howManyInDeck = this.howManyInDeck.bind(this);
        this.state = {shownAction: null};
        this.showAction = this.showAction.bind(this);
        this.closeInfo = this.closeInfo.bind(this)
    }

    showAction(action) {
        this.setState({shownAction: action})
    }

    closeInfo() {
        this.setState({shownAction: null})
    }

    howManyInDeck(action) {
        if (this.props.current_actions[action]) {
            return this.props.current_actions[action];
        }
        return 0;
    }

    render() {
        const cl = this.props.displayActions.map((action) => <Col xs={2} key={action+"-column"}> <Action name={action} key={action} url={this.howManyInDeck(action) < 2 ? db.actions[action].image : db.actions[action].golden_image} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck} howManyInDeck={this.howManyInDeck(action)} isDisplayed={this.props.displayActions.includes(action)} showAction={this.showAction} /> </Col>)
        return (
            <Container className='scrollbox'>
                <ActionInfoBox action={this.state.shownAction} closeInfo={this.closeInfo}/>
                <Row>
                    {cl}
                </Row>
            </Container>
        )
    }
}

export default ActionLibrary