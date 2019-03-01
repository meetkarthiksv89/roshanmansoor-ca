import React from 'react';
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import {Row, Col} from 'react-bootstrap';

export default () => (
  <Row>
    <Col className="hidden-sm-down">
    <img
      src={facebook}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3 mr-4"
      alt="Facebook"
    />
      <img
        src={twitter}
        height="60"
        width="60"
        className="d-inline-block align-top mx-3 mr-4"
        alt="Twitter"
      />
      <img
      src={linkedin}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3 mr-4"
      alt="Linkedin"
    />
    </Col>
    <Col className="hidden-sm-up">
      <img
        src={facebook}
        height="60"
        width="60"
        className="d-inline-block align-top mr-4"
        alt="Facebook"
      />
    </Col>
    <Col className="hidden-sm-up">
      <img
        src={twitter}
        height="60"
        width="60"
        className="d-inline-block align-top mr-4"
        alt="Twitter"
      />
    </Col>
    <Col className="hidden-sm-up">
    <img
      src={linkedin}
      height="60"
      width="60"
      className="d-inline-block align-top mr-4"
      alt="Linkedin"
    />
    </Col>
 </Row>
)