import React, { Component } from 'react';
import '../scss/deck.css';

class ActionBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, height: '55', width: '270'}
    }

    render() {
        console.log(this.props.count)
        return <button 
            className='ActionBlock' 
            onClick={() => 
                {
                    this.props.removeFromDeck(this.props.name)
                }
            }
            hidden={this.state.counter == 0}
        >
            <img src={this.props.url} alt='test' height={this.state.height} width={this.state.width} onMouseEnter={ () => {
                this.setState({height: '55'})
                this.setState({width: '270'})
            }
            } onMouseLeave={ () => {
                this.setState({height: '55'})
                this.setState({width: '270'})
            }
            }
            ></img>{this.props.count}</button>
    }
}

export default ActionBlock;