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
                <Col xs={1}><div className='ActionBlockMisc'>{this.props.cost}</div></Col>
                <Col xs={1}><div className='ActionBlockName'>{db.actions[this.props.name].name}</div></Col>
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