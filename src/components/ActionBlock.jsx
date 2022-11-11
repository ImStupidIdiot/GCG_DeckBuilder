import React, { Component } from 'react';
import '../scss/deck.css';

class ActionBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, height: '55', width: '300'}
    }

    render() {
        return <button 
            className='ActionBlock' 
            onClick={() => 
                {
                    this.props.removeFromDeck(this.props.name)
                }
            }
            hidden={this.state.counter == 0}
        >
            <img src={this.props.url} alt='hello' height={this.state.height} width={this.state.width} onMouseEnter={ () => {
                this.setState({height: '55'})
                this.setState({width: '300'})
            }
            } onMouseLeave={ () => {
                this.setState({height: '55'})
                this.setState({width: '300'})
            }
            }
            ></img></button>
    }
}

export default ActionBlock;