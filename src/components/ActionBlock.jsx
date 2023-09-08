import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import db from '../db'


class ActionBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, height: '55', width: '270'}
    }

    render() {
        var cost_list = this.props.cost
        cost_list = cost_list.split(" ")
        cost2 = null
        var cost = cost_list[0]
        var cost_style = cost_list[1]
        var cost2_style = null

        // if (db.actions[this.props.name].tags.includes('talent')) {
            if (cost_list[2]) {
                var cost2 = '\n' + cost_list[2]
                cost2_style = cost_list[3]
            }
        // }

        var name = db.actions[this.props.name].name
        var arcane = this.props.name.includes("MAX1");

        if (arcane) {
            arcane = "MAX1";
        } else {
            arcane = "";
        }
        
        if (name.length > 30) {
            for (var i = 20; i < name.length; i++) {
                if (name[i] === ' ') {
                    name = name.slice(0, i) + '\n' + name.slice(i+1)
                    break;
                }
            }
        }
        return <button
            className={!(db.actions[this.props.name].required) || (this.props.current_chars.includes(db.actions[this.props.name].required) || 
                (db.actions[this.props.name].required.includes("2") &&
                this.props.current_chars.filter((char) => db.chars[char].element.includes(db.actions[this.props.name].required.substring(1)) || db.chars[char].region.includes(db.actions[this.props.name].required.substring(1))).length >= 2
                ))
                ? 'ActionBlock' + arcane: 'ActionBlockInvalid'}
            onClick={() => 
                {
                    this.props.removeFromDeck(this.props.name)
                }
            }
            hidden={this.state.counter == 0}
        >
            <Row>
                <Col xs={1}><div className='ActionBlockCost'><div className={cost_style}>{cost /*!arcane ? cost : <img src={db.dice.arcane} className='arcaneDice'></img>*/}</div><div className={cost2_style}>{cost2}</div></div></Col>
                <Col xs={1}><div className='ActionBlockName'>{name}</div></Col>
                <Col xs={9} className="ActionBlockCol" background-image={this.props.url}>
                    <img src={this.props.url} className={'ActionBlockImg' + arcane} alt='test' onMouseEnter={ () => {
                        this.setState({height: '55'})
                        this.setState({width: '270'})
                    }   
                    } onMouseLeave={ () => {
                        this.setState({height: '55'})
                        this.setState({width: '270'})
                    }
                    }
                    ></img>
                </ Col>
                <Col xs={1}>
                <div className='ActionBlockMisc'>{this.props.count}</div>
                </Col>
            </Row>
            </button>
    }
}

export default ActionBlock;