import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'

export default () => (
  <div className="bg-footer p-5 text-light">
    <Container fluid={false} className="" >
        <Row>
          <Col>
            <Row>
              <Col>
            <img
              src={facebook}
              height="60"
              width="60"
              className="d-inline-block align-top mx-3"
              alt="Facebook"
            />
              <img
              src={twitter}
              height="60"
              width="60"
              className="d-inline-block align-top mx-3"
              alt="Twitter"
            />
              <img
              src={linkedin}
              height="60"
              width="60"
              className="d-inline-block align-top mx-3"
              alt="Linkedin"
            />
              </Col>
            </Row>
          </Col>
          <Col>
            <h5>HOME</h5>
            <h5>ABOUT</h5>
            <h5>SERVICES</h5>
            <h5>CLIENTS</h5>
            <h5>CAREERS</h5>
            <h5>CONTACT US</h5>
          </Col>
          <Col>
            <h4>LOCATE US</h4>
            <br/>
            <h5>
              Roshan Mansoor & Co.,
              Chartered Accountants,
              D - 06, 6th floor, Jain Heights - Solus 1 JC Road cross, Bangalore – 560 027
            </h5>
            <h4>REACH US</h4>
            
            <h5>
            080-41231220 / 22221220 
            <br/> 
            rm@roshanmansoor.com
            </h5>
          </Col>
        </Row>
    </Container>
    </div>
)