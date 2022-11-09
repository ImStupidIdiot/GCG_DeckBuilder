import React, { Component } from 'react';
import Card from './card';
import Action_Block from './action_block';
import Char_Block from './char_block';

import GanyuIcon from '../images/Ganyu_Icon.png';
import Ganyu_Card from '../images/Ganyu_Card.webp';
import KaeyaIcon from '../images/Kaeya_Icon.png';
import Kaeya_Card from '../images/Kaeya_Card.webp';
import ChongyunIcon from '../images/Chongyun_Icon.png';
import Chongyun_Card from '../images/Chongyun_Card.webp';
import Ayaka_Card from '../images/Ayaka_Card.webp';
import AyakaIcon from '../images/Ayaka_Icon.png';
import Xingqiu_Card from '../images/Xingqiu_Card.webp';
import XingqiuIcon from '../images/Xingqiu_Icon.png';
import Action_Block_Test from '../images/Action_Block_Test.png';

import {char_lst} from '../char_lst';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import '../scss/library.css';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {current_chars: [], current_char_blocks: []};
        this.addToDeck = this.addToDeck.bind(this);
        this.removeFromDeck = this.removeFromDeck.bind(this);
    }

    addToDeck(char) {
        var char_on = this.state.current_chars
        if (char_on.length >= 3){
            return false;
        }
        char_on.push(char)
        var char_block_on = this.state.current_char_blocks
        char_block_on.push(<Char_Block key={char} name={char} url={GanyuIcon} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck} />)
        this.setState({current_chars: char_on});
        this.setState({current_char_blocks: char_block_on})
        return true;
    }

    removeFromDeck(char) {
        var char_off = this.state.current_chars
        var char_block_off = this.state.current_char_blocks
        if (char_off.length <= 0) {
            return false;
        }
        var return_list = []
        var return_block_list = []
        for (var i = 0; i < char_off.length; i++) {
            if (char_off[i] != char) {
                return_list.push(char_off[i])
                return_block_list.push(char_block_off[i])
            }
        }
        this.setState({current_chars: return_list});
        this.setState({current_char_blocks: return_block_list})
        return true;
        }

    render() { 
        var printed = [...this.state.current_char_blocks]
        for (var i = this.state.current_char_blocks.length; i < 3; i++) {
            printed.push(<Char_Block name={'hi'} url={XingqiuIcon} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck} />)
        }
        console.log(this.state.current_char_blocks)
        // this.printed = [];  // should be moved to char_block, so we can make each one an object
        // for (var i = 0; i < this.state.current_chars.length; i++) {
        //     console.log(this.printed)
        //     this.printed.push(<Char_Block url={GanyuIcon} addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>) //change this to a char_block object, also change source to sometihng else like a key
        // }
        // if (this.state.current_chars.includes('ganyu')) {
        //     this.printed.push(<img key="ganyu" src={GanyuIcon} height="90" width ="90"></img>);
        // }
        // if (this.state.current_chars.includes('kaeya')) {
        //     this.printed.push(<img key="kaeya" src={KaeyaIcon} height="90" width ="90"></img>);
        // }
        // if (this.state.current_chars.includes('chongyun')) {
        //     this.printed.push(<img key="chongyun" src={ChongyunIcon} height="90" width ="90"></img>)
        // }
        // if (this.state.current_chars.includes('ayaka')) {
        //     this.printed.push(<img key="ayaka" src={AyakaIcon} height="90" width ="90"></img>)
        // }
        // if (this.state.current_chars.includes('xingqiu')) {
        //     this.printed.push(<img key="xingqiu" src={XingqiuIcon} height="90" width ="90"></img>)
        // }
        return (
            <div className=".container-fluid purpleBackground">
                <div className ="row">  
                    <div className = "col-2">
                        <Card name='Ganyu' url={Ganyu_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334000.webp' addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>
                        <Card name='Ayaka' url={Ayaka_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334003.webp' addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>
                    </div><div className = "col-2">
                        <Card name='Kaeya' url={Kaeya_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334001.webp' addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>
                        <Card name='Xingqiu' url={Xingqiu_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334004.webp' addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>
                    </div><div className = "col-2">
                        <Card name='Chongyun' url={Chongyun_Card} url2='https://genshin.honeyhunterworld.com/img/i_n334002.webp' addToDeck={this.addToDeck} removeFromDeck={this.removeFromDeck}/>
                    </div><div className = "col-1">
                    </div><div className = "col-5">
                        <div className="row-6">
                            {printed[0]}
                            {printed[1]}
                            {printed[2]}
                        </div><div className="row-6">
                            <Action_Block url={Action_Block_Test}/>
                            <Action_Block url={Action_Block_Test}/>
                            <Action_Block url={Action_Block_Test}/>
                            <Action_Block url={Action_Block_Test}/>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Deck; 