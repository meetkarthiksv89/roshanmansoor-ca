import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'gatsby'
import SocialMediaImages from '../components/SocialMediaImages'

export default () => (
  <div className="bg-footer p-5 text-light">
    <Container fluid={true} className="" >
        <Row>
          <Col>
            <Row>
              <Col>
                <SocialMediaImages/>
              </Col>
            </Row>
          </Col>
          <Col className="pl-5 footer-links" style={{borderLeft:'1px solid white'}}>
            <Link to="/"><h5>HOME</h5></Link>
            <Link to="/about"><h5>ABOUT</h5></Link>
            <Link to="/services"><h5>SERVICES</h5></Link>
            <Link to="/career"><h5>CAREERS</h5></Link>
            <Link to="/contact"><h5>CONTACT US</h5></Link>
          </Col>
          <Col className="pl-5" style={{borderLeft:'1px solid white'}}>
            <h5 className="mb-3">LOCATE US</h5>
            <h6>
              Roshan Mansoor & Co.,
              Chartered Accountants,
              D - 06, 6th floor, Jain Heights - Solus 1 JC Road cross, Bangalore – 560 027
            </h6>
            <br/>
            <h5 className="mb-3">REACH US</h5>
            <h6>
            080-41231220 / 22221220 
            <br/> 
            rm@roshanmansoor.com
            </h6>
          </Col>
        </Row>
    </Container>
    </div>
)