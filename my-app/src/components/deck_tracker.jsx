import React, { Component } from 'react';
import Card from './card';
import GanyuIcon from '../images/Ganyu_Icon.png';
import KaeyaIcon from '../images/Kaeya_Icon.png';
import ChongyunIcon from '../images/Chongyun_Icon.png';
import {current_chars} from '../current_chars';

class DeckTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {current_chars: current_chars};
    }
    render() { 
        this.printed = []; 
        if (this.state.current_chars.ganyu) {
            this.printed.push(<img src={GanyuIcon}></img>);
        }
        if (this.state.current_chars.kaeya) {
            this.printed.push(<img src={KaeyaIcon}></img>);
        }
        if (this.state.current_chars.chongyun) {
            this.printed.push(<img src={ChongyunIcon}></img>)
        }
        return <div> 
        <button onClick={() => console.log(current_chars)}> Click me </button> 
        {this.printed}
        </div>; //change later to look clean obviously
    }
}

export default DeckTracker; 