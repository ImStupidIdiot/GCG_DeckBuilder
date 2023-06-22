import React, { Component } from 'react';
import db from '../db';
import Info_Button from '../images/Info_Button.png'

class Action extends Component {
    constructor(props) {
        super(props);
        this.state = {width: '135', height: '230', showInfoButton: false} //counter = 0 means card is unselected, counter = 1 means selected
        this.addToDeck = this.addToDeck.bind(this)
    }

    addToDeck() {
        if (this.props.howManyInDeck < 2) {
            this.props.addToDeck(this.props.name)
        }
    }
    
    render() {  
        return (
            <div>
                <p/>
                <button
                    className="charCardDefault" 
                    onClick={this.addToDeck}
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
                        this.props.showAction(this.props.name)
                        e.stopPropagation()
                    }}> 
                        <img className="infoButtonIcon" src={Info_Button} /> 
                    </button> : null
                    }
                    <div onMouseEnter={() => {
                        this.setState({width: '138'})
                        this.setState({height: '235'})
                        this.setState({showInfoButton: true})
                    }}
                    onMouseLeave={() => {
                        this.setState({width: '135'})
                        this.setState({height: '230'})
                        this.setState({showInfoButton: false})
                    }}>
                    {/* uncomment out below later to implement dice costs */}
                    {/* <img className="diceLibrary" width={this.state.width == '138' ? '61.33' : '60'} src={db.dice[db.actions[this.props.name].cost.split(" ")[1].toLowerCase()]}/>
                    {db.actions[this.props.name].cost.split(" ")[3] ? <img className="diceLibrary2" width={this.state.width == '138' ? '61.33' : '60'} src={db.dice[db.actions[this.props.name].cost.split(" ")[3].toLowerCase()]}/> : null} */}
                    <img src={this.props.url} width={this.state.width} height={this.state.height}>
                    </img>
                    </div>
                </button>
                <div className={this.props.dark ? 'relativeWhite' : 'relative'}>{this.props.howManyInDeck > 0 ? <p className='actionCardCounter'> {this.props.howManyInDeck}/{this.props.name.includes('MAX1') ? 1 : 2} </p> : null}</div>
            </div>
        );
    }
}


export default Action;
