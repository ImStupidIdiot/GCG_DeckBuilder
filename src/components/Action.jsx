import React, { Component } from 'react';
import '../scss/library.css';

class Char extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, width: '135', height: '230'} //counter = 0 means card is unselected, counter = 1 means selected
    }

    render() {  
        if (this.props.HowManyInDeck == 0) {
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
                        <img src={this.props.url} width={this.state.width} height={this.state.height}
                        onMouseEnter={
                            () => {
                                this.setState({width: '138'})
                                this.setState({height: '235'})
                            }
                        }
                        onMouseLeave={
                            () => {
                                this.setState({width: '135'})
                                this.setState({height: '230'})
                            }
                        }
                        ></img>
                    </button>
                </div>
            );
        }
        else if (this.props.HowManyInDeck == 1) {
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
                        <img src={this.props.url} width={this.state.width} height={this.state.height}
                        onMouseEnter={
                            () => {
                                this.setState({width: '138'})
                                this.setState({height: '235'})
                            }
                        }
                        onMouseLeave={
                            () => {
                                this.setState({width: '135'})
                                this.setState({height: '230'})
                            }
                        }
                        ></img>
                    </button>
                </div>
            );
        }
        else {      
            return (
                <div> <p> </p><button className="charCardClicked" onClick={() => {
                }
                }> 
                    <img src={this.props.url2} width={this.state.width} height={this.state.height}
                        onMouseEnter={
                            () => {
                                this.setState({width: '138'})
                                this.setState({height: '235'})
                            }
                        }
                        onMouseLeave={
                            () => {
                                this.setState({width: '135'})
                                this.setState({height: '230'})
                            }
                        }
                        ></img> </button></div>
            );
        }
    }
}


export default Char;
