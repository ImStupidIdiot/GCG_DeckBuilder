import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import db from '../db';
import CharLibrary from './CharLibrary';
import ActionLibrary from './ActionLibrary';
import Toggle from './Toggle';

class Library extends Component {
    constructor(props) {
        super(props);   
        this.changeToggle = this.changeToggle.bind(this);
        this.allChars = ['ganyu', 'kaeya', 'chongyun', 'ayaka', 'xingqiu', 'mona']; 
        this.state = {conditions: [], displayChars: ['ganyu', 'kaeya', 'chongyun', 'ayaka', 'xingqiu', 'mona']};
    }

    changeToggle(category, condition) {
        var removeCondition = []
            for (var a = 0; a < this.state.conditions.length; a++) {
                if (this.state.conditions[a][0] != category) {
                    removeCondition.push(this.state.conditions[a])
                }
            }

        var return_list = [];
        var newConditions = removeCondition;
        if (condition != 'all') {
            newConditions.push([category, condition])
        }

        if (newConditions != 0) {
            for (var i = 0; i < this.allChars.length; i++) {
                var displayed = true;
                for (var conditionIndex = 0; conditionIndex < newConditions.length; conditionIndex++) {
                    if (db[this.allChars[i]][newConditions[conditionIndex][0]] != newConditions[conditionIndex][1]) {
                        displayed = false;
                    }
                }
                if (displayed) {
                    return_list.push(this.allChars[i])
                }
            }
        this.setState({displayChars: [...return_list]})
        }
        else {
            this.setState({displayChars: [...this.allChars]})
        }
        this.setState({conditions: [...newConditions]})
    }

    render() {
        return (<div>
            <Toggle changeToggle={this.changeToggle}/>
            <CharLibrary displayChars={this.state.displayChars} current_chars={this.props.current_chars} addToDeck={this.props.addToDeck} removeFromDeck={this.props.removeFromDeck}/>
        </div>)
    }
}

export default Library
