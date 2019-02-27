import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'gatsby'
import SocialMediaImages from '../components/SocialMediaImages'

export default () => (
  <div className="bg-footer p-5 text-light">
    <Container fluid={true} className="" >
        <Row>
          <Col className="col-12 col-sm-4 mb-5 mb-sm-0">
            <SocialMediaImages/>
          </Col>
          <Col className="col-12 col-sm-3 pl-sm-2 pl-md-3 pl-lg-5 pb-5 pb-sm-0 footer-links footer-text">
            <Link to="/"><h5>HOME</h5></Link>
            <Link to="/about"><h5>ABOUT</h5></Link>
            <Link to="/services"><h5>SERVICES</h5></Link>
            <Link to="/career"><h5>CAREERS</h5></Link>
            <Link to="/blog"><h5>BLOG</h5></Link>
            <Link to="/contact"><h5>CONTACT US</h5></Link>
          </Col>
          <Col className="col-12 col-sm-5 pl-sm-2 pl-md-3 pl-lg-5 pb-5 pb-sm-0 footer-text">
            <h5 className="mb-3 font-weight-bold">LOCATE US</h5>
            <h6>
              Roshan Mansoor & Co.,
              <br/>
              Chartered Accountants,
              <br/>
              D - 06, 6th floor, Jain Heights - Solus 1,
              <br/>
              JC Road cross, Bangalore – 560 027
            </h6>
            <br/>
            <h5 className="mb-3">REACH US</h5>
            <h6 className="font-weight-bold">
            080-41231220 / 22221220 
            <br/> 
            rm@roshanmansoor.com
            </h6>
          </Col>
        </Row>
    </Container>
    </div>
)