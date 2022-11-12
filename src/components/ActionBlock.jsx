import React, { Component } from 'react';
import '../scss/deck.css';
import { Col, Row, Container } from 'react-bootstrap';
import db from '../db'


class ActionBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1, height: '55', width: '270'}
    }

    render() {
        var cost = this.props.cost[0]
        if (db.actions[this.props.name].tags.includes('talent')) {
            if (this.props.cost[4]) {
                cost += '\n' + this.props.cost[4]
            }
        }

        var name = db.actions[this.props.name].name
        
        if (name.length > 30) {
            for (var i = 20; i < name.length; i++) {
                if (name[i] === ' ') {
                    name = name.slice(0, i) + '\n' + name.slice(i+1)
                    break;
                }
            }
        }

        return <button
            className='ActionBlock' 
            onClick={() => 
                {
                    this.props.removeFromDeck(this.props.name)
                }
            }
            hidden={this.state.counter == 0}
        >
            <Row>
                <Col xs={1}><div className='ActionBlockCost'>{cost}</div></Col>
                <Col xs={1}><div className='ActionBlockName'>{name}</div></Col>
                <Col xs={9} className="ActionBlockCol" background-image={this.props.url}>
                    <img src={this.props.url} className='ActionBlockImg' alt='test' onMouseEnter={ () => {
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