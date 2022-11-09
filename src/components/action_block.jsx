import React, { Component } from 'react';
import { updateCurrentChars } from '../current_chars';
import '../scss/deck.css';


class Action_Block extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 2 }
    }
    render() {  
        if (this.state.counter > 0) {
        return <button className='ActionBlock' onClick={() => {
            this.setState({counter: this.state.counter - 1})
        }
        }><img src={this.props.url} height="55" width="300"></img></button>
        }
        else {
            return
        }
    }
}

export default Action_Block;