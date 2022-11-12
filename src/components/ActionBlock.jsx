import React, { Component } from 'react';
import '../scss/deck.css';
import { Col, Row, Container } from 'react-bootstrap';


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
        > <Container>
            <Row>
                <Col xs={6}><div className='ActionBlockMisc'>{this.props.cost} {this.props.name}</div></Col>
                <Col xs={4}>
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
                <Col xs={2}>
                <div className='ActionBlockMisc'>{this.props.count}</div>   
                </Col>
            </Row>
            </ Container> </button>
    }
}

export default ActionBlock;