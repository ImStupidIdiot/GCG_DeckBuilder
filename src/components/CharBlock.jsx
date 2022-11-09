import React, { Component } from 'react';
import '../scss/deck.css';

class Char_Block extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 }
    }
    render() {
        if (this.state.counter > 0) {
        return <button className='ActionBlock' onClick={() => {
            this.setState({counter: this.state.counter - 1})
            this.props.removeFromDeck(this.props.name)
        }
        }><img src={this.props.url} height="90" width="90"></img></button>
        }
        else {
            return
        }
    }
}

export default Char_Block;