import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import db from '../db';
import ActionFilters from './ActionFilters';
import Action from './Action';
import ActionInfoBox from './ActionInfoBox';

class ActionLibrary extends Component {  
    constructor(props) {
        super(props);

        const allActions = Object.entries(db.actions).map((action) => action[0])
        this.state = {
            shownChar: null, 
            filters: {}, 
            allActions: allActions,
            displayActions: [...allActions],
            showMisc: null
        }
        
        this.howManyInDeck = this.howManyInDeck.bind(this);
        this.showAction = this.showAction.bind(this);
        this.closeInfo = this.closeInfo.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.showMiscBox = this.showMiscBox.bind(this);
        this.closeMiscBox = this.closeMiscBox.bind(this);
        this.search = this.search.bind(this);
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

    search() {
        var text = document.getElementById('searchBarAction').value;
        this.setState({filters: {}});
        var displayActions = [...this.state.allActions];
        displayActions = displayActions.filter((action) => db.actions[action].description.toLowerCase().includes(text.toLowerCase()) || db.actions[action].name.toLowerCase().includes(text.toLowerCase()) || db.actions[action].cost.toLowerCase().includes(text.toLowerCase()) || db.actions[action].flavor.toLowerCase().includes(text.toLowerCase()) || (db.actions[action].keyword && db.actions[action].keyword.toLowerCase().includes(text.toLowerCase())) || db.actions[action].tags.toString().toLowerCase().includes(text.toLowerCase()));
        this.setState({displayActions: displayActions});
    }

    showAction(action) {
        this.setState({shownAction: action})
        document.addEventListener("click", this.handleClick, true)
    }

    closeInfo() {
        this.setState({shownAction: null})
        document.removeEventListener("click", this.handleClick, true)
    }

    // big source of tech debt; see long-form comment in CharLibrary.jsx
    handleClick(e) {
        if (e.target.className.includes("infoBox") || e.target.className=="miscButton") {
            return;
        }
        else {
            e.stopPropagation();
            if (this.state.showMisc) {
                this.closeMiscBox()
            }
            else {
                this.closeInfo()
            }
        }
    }

    showMiscBox(item) {
        this.setState({showMisc: item})
    }

    closeMiscBox() {
        this.setState({showMisc: null})
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
                    dark={this.props.dark}
                />
            </Col>
        )
        
        return (
            <div>
                <ActionFilters filters={this.state.filters} changeFilter={this.changeFilter} toggle={this.props.toggle} CoA={this.props.CoA} CoAHovered={this.props.CoAHovered} hoverToggle={this.props.hoverToggle} search={this.search} dark={this.props.dark}/>
                <Container className='scrollbox'>
                    <ActionInfoBox action={this.state.shownAction} closeInfo={this.closeInfo} showMisc={this.state.showMisc} showMiscBox={this.showMiscBox} closeMiscBox={this.closeMiscBox}/>
                    <Row>
                        {cl}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ActionLibrary