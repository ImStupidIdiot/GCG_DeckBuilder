import React, { Component } from 'react';
import '../scss/deck.css';

class Char_Block extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 }
    }

    render() {
        // if (this.state.counter > 0) {
        return <button 
            className='CharBlock' 
            onClick={() => 
                {
                    this.props.removeFromDeck(this.props.name)
                }
            }
            hidden={this.state.counter == 0}
        >
            <img src={this.props.url} alt='hello' height="90" width="90"></img></button>
        // }
        // else {
        //     return 
        // }
    }
}

export default Char_Block;