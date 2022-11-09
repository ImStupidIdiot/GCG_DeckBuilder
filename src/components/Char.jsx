import React, { Component } from 'react';
import '../scss/library.css';

class Char extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 } //counter = 0 means card is unselected, counter = 1 means selected
    }

    render() {  
        if (this.props.isDisplayed) {
        if (!this.props.isInDeck) {
            return (
                <div> 
                    <p> </p>
                    <button 
                        className="charCardDefault" 
                        onClick={
                            () => {
                                this.props.addToDeck(this.props.name)
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
                    this.props.removeFromDeck(this.props.name)
                }
                }> 
                    <img src={this.props.url2} width="135" height="230"></img> </button></div>
            );
        }
    }
    }
}


export default Char;
