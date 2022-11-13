import React, { Component } from 'react';
import Info_Button from "../images/Info_Button.png"
class Char extends Component {
    constructor(props) {
        super(props);
        this.state = {width: '135', height: '230', showInfoButton: false} //counter = 0 means card is unselected, counter = 1 means selected
    }

    render() {  
        if (this.props.isDisplayed) {
            return (
                <div> 
                    <p/>
                    <button 
                        className="charCardDefault" 
                        onClick={
                            () => {
                                this.props.isInDeck ? this.props.removeFromDeck(this.props.name) : this.props.addToDeck(this.props.name)
                            }
                        }
                        > 
                        {this.state.showInfoButton ? 
                        <button className="infoButton"                     
                        onMouseEnter={() => {
                            this.setState({width: '138'})
                            this.setState({height: '235'})
                            this.setState({showInfoButton: true})
                        }}
                        onMouseLeave={() => {
                            this.setState({width: '135'})
                            this.setState({height: '230'})
                            this.setState({showInfoButton: false})
                        }}
                        onClick={(e) => {
                            this.props.showChar(this.props.name)
                            e.stopPropagation()
                        }}> 
                            <img className="infoButtonIcon" src={Info_Button} /> 
                        </button> : null
                        }
                        <img src={this.props.url} width={this.state.width} height={this.state.height}
                        onMouseEnter={
                            () => {
                                this.setState({width: '138'})
                                this.setState({height: '235'})
                                this.setState({showInfoButton: true})
                            }
                        }
                        onMouseLeave={
                            () => {
                                this.setState({width: '135'})
                                this.setState({height: '230'})
                                this.setState({showInfoButton: false})
                            }
                        }
                        ></img>
                    </button>
                </div>
            );
        }
    }
}


export default Char;
