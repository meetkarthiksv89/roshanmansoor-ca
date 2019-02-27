import React from 'react';
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'
import {Row, Col} from 'react-bootstrap';

export default () => (
  <Row>
    <Col>
    <img
      src={facebook}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3"
      alt="Facebook"
      className="mr-4"
    />
      <img
      src={twitter}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3"
      alt="Twitter"
      className="mr-4"
    />
      <img
      src={linkedin}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3"
      alt="Linkedin"
      className="mr-4"
    />
    </Col>
 </Row>
)