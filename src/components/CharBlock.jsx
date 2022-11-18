import React, { Component } from 'react';

class CharBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, height: '90', width: '90'}
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
            <img src={this.props.url} alt='hello' height={this.state.height} width={this.state.width} onMouseEnter={ () => {
                this.setState({height: '95'})
                this.setState({width: '95'})
            }
            } onMouseLeave={ () => {
                this.setState({height: '90'})
                this.setState({width: '90'})
            }
            }
            ></img></button>
        // }
        // else {
        //     return 
        // }
    }
}

export default CharBlock;