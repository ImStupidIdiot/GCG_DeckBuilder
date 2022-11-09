import React, { Component } from 'react';
import '../scss/library.css';

class Char extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 } //counter = 0 means card is unselected, counter = 1 means selected
    }

    render() {  
        if (this.state.counter === 0) {
            return (
                <div> 
                    <p> </p>
                    <button 
                        className="charCardDefault" 
                        onClick={
                            () => {
                                if (this.props.addToDeck(this.props.name)) {
                                this.setState({counter: 1})
                                }
                            }
                        }
                    > 
                        <img src={this.props.url} width="135" height="230"></img>
                    </button>
                </div>
            );
        }
        else {      
            return (
                <div> <p> </p><button className="charCardClicked" onClick={() => {
                    if (this.props.removeFromDeck(this.props.name)) {
                        this.setState({counter: 0})
                    }
                }
                }> 
                    <img src={this.props.url2} width="135" height="230"></img> </button></div>
            );
        }
    }
}

export function getCounter(instance) {
    return instance.state.counter;
}

export default Char;