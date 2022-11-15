import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import db from "../db"
import Close_Icon from '../images/Close_Icon.png';
import MiscInfoBox from './MiscInfoBox';
import MiscButton from './MiscButton';

class CharInfoBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.char) {

            var related_list = db.chars[this.props.char].related.split(", ").map((item) => 
                <MiscButton 
                    name={item} key={item} 
                    showMiscBox={() => this.props.showMiscBox(item)}
                />)

            return <div className="infoBox">
                <MiscInfoBox name={this.props.showMisc} infoHandleClick={this.infoHandleClick} closeMiscBox={this.props.closeMiscBox}/>
                <button onClick={this.props.closeInfo} className="infoBoxButton"><img src={Close_Icon} className="infoBoxClose"/></button>
                <Container>
                    <Row>
                        <Col xs={6} className="infoBoxCol"> 
                            <Row> 
                                <img src={db.chars[this.props.char].hi_res_image} className="infoBoxImage"/> 
                            </Row> 
                        </Col>
                        <Col xs={6} className="infoBoxCol">
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