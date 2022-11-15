import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from '../images/Close_Icon.png';
import MiscInfoBox from './MiscInfoBox';
import MiscButton from './MiscButton';

class CharInfoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {showMisc: null};
        this.handleClick = this.handleClick.bind(this);
        this.ref = React.createRef()
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClick)
    }
    
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick)
    }

    handleClick(e) {
        if (e.target.className == "miscButton") {
            ;
        }
        else if (this.state.showMisc) {
            this.setState({showMisc: null})
        }
        else {
            this.props.closeInfo()
        }
    }

    render() {
        if (this.props.char) {
            var related_list = db.chars[this.props.char].related.split(", ").map((item) => <MiscButton passRef={this.passRef} name={item} key={item} display={() => {
                this.setState({showMisc: item})
            }}/>)

            return <div className="infobox">
                <MiscInfoBox name={this.state.showMisc} handleClick={this.handleClick}/>
                <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"/></button>
                <Container>
                    <Row>
                        <Col xs={6}> 
                            <Row> 
                                <img src={db.chars[this.props.char].hi_res_image} className="infoBoxImage"/> 
                            </Row> 
                        </Col>
                        <Col xs={6}> 
                            <br></br>
                            <div className="infoBoxName">{db.chars[this.props.char].name}</div> 
                            <p className="infoBoxText"><br></br>Normal Attack: {db.chars[this.props.char].na}</p>
                            <br></br>
                            <p className="infoBoxText">Elemental Skill: {db.chars[this.props.char].skill}</p>
                            <br></br>
                            <p className="infoBoxText">Elemental Burst: {db.chars[this.props.char].burst}</p>
                            <p className='infoBoxText'>{db.chars[this.props.char].special ? '\nSpecial: ' + db.chars[this.props.char].special : null}</p>
                            <br></br>
                            <p className="infoBoxText">Related: {related_list ? related_list : null}</p>
                            <br></br>
                        </Col>
                    </Row>
                </Container> 
            </div>
        }
    }
}

export default CharInfoBox;