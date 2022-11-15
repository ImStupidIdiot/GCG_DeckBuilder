import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import db from '../db';
import ActionFilters from './ActionFilters';
import Action from './Action';
import ActionInfoBox from './ActionInfoBox';

class ActionLibrary extends Component {  
    constructor(props) {
        super(props);

        const allActions = Object.entries(db.actions).sort((action1, action2) => action1[1].cost[0] - action2[1].cost[0]).map((action) => action[0])
        this.state = {
            shownChar: null, 
            filters: {}, 
            allActions: allActions,
            displayActions: [...allActions]
        }
        
        this.howManyInDeck = this.howManyInDeck.bind(this);
        this.showAction = this.showAction.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    changeFilter(category, condition) {
        const filters = {...this.state.filters};

        if (filters[category] == condition) {
            delete filters[category];
        } else {
            filters[category] = condition;
        }
        
        var displayActions = [...this.state.allActions];
        
        for (const [key, value] of Object.entries(filters)) {
            displayActions = displayActions.filter((action) => db.actions[action].tags.includes(value) || db.actions[action].cost[0] == value);
        }
        
        this.setState({filters: filters, displayActions: displayActions});
    }

    showAction(action) {
        this.setState({shownAction: action})
        document.addEventListener("click", this.handleClick, true)
    }

    closeInfo() {
        this.setState({shownAction: null})
        document.removeEventListener("click", this.handleClick, true)
    }

    handleClick(e) {
        if (e.target.className.includes("infoBox")) {
            return;
        }
        else {
            this.closeInfo()
        }
    }

    howManyInDeck(action) {
        if (this.props.current_actions[action]) {
            return this.props.current_actions[action];
        }
        return 0;
    }

    render() {
        const cl = this.state.displayActions.map((action) => 
            <Col xs={2} key={action+"-column"}> 
                <Action name={action} key={action} 
                    url={this.howManyInDeck(action) < 2 ? db.actions[action].image : db.actions[action].golden_image} 
                    addToDeck={this.props.addToDeck} 
                    removeFromDeck={this.props.removeFromDeck} 
                    howManyInDeck={this.howManyInDeck(action)} 
                    isDisplayed={this.state.displayActions.includes(action)} 
                    showAction={this.showAction} 
                />
            </Col>
        )
        
        return (
            <div>
                <ActionFilters filters={this.state.filters} changeFilter={this.changeFilter} toggle={this.props.toggle}/>
                <Container className='scrollbox'>
                    <ActionInfoBox action={this.state.shownAction} closeInfo={this.closeInfo}/>
                    <Row>
                        {cl}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ActionLibrary