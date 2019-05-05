import React from 'react';
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import {Row, Col} from 'react-bootstrap';
import { Link } from 'gatsby'

export default () => (
  <Row className="text-center">
    <Col sm={1} xs={0}></Col>
    <Col sm={3} xs={4}>
    <a href="https://www.facebook.com/Roshan-Mansoor-Co-Chartered-Accountants-103625909820460/">
      <img
        src={facebook}
        style={{width:'60px', height:'60px'}}
        className="d-inline-block align-top float-right"
        alt="Facebook"
      />
      </a>
    </Col>
    <Col sm={3} xs={4}>
    <a href="https://twitter.com/CaroshanR">
      <img
        src={twitter}
        style={{width:'60px', height:'60px'}}
        className="d-inline-block align-top"
        alt="Twitter"
      />
      </a>
    </Col>
    <Col sm={3} xs={4}>
    <a href="https://www.linkedin.com/in/roshan-mansoor-b706859/">
    <img
      src={linkedin}
      style={{width:'60px', height:'60px'}}
      className="d-inline-block align-top float-left"
      alt="Linkedin"
    />
    </a>
    </Col>
    <Col sm={2} xs={0}></Col>
 </Row>
)