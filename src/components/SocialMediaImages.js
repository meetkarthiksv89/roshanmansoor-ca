import React from 'react';
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import {Row, Col} from 'react-bootstrap';

export default () => (
  <Row className="text-center">
    <Col sm={1} xs={0}></Col>
    <Col sm={3} xs={4}>
      <img
        src={facebook}
        style={{width:'60px', height:'60px'}}
        className="d-inline-block align-top float-right"
        alt="Facebook"
      />
    </Col>
    <Col sm={3} xs={4}>
      <img
        src={twitter}
        style={{width:'60px', height:'60px'}}
        className="d-inline-block align-top"
        alt="Twitter"
      />
    </Col>
    <Col sm={3} xs={4}>
    <img
      src={linkedin}
      style={{width:'60px', height:'60px'}}
      className="d-inline-block align-top float-left"
      alt="Linkedin"
    />
    </Col>
    <Col sm={2} xs={0}></Col>
 </Row>
)