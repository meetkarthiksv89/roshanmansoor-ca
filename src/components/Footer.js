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
          <Col className="col-12 col-sm-4 pl-sm-2 pl-md-3 pl-lg-5 pb-5 pb-sm-0 footer-links footer-text">
            <Link to="/"><h6 className="ml-sm-3 mb-sm-4 font-weight-bold" >HOME</h6></Link>
            <Link to="/about"><h6 className="ml-sm-3 mb-sm-4 font-weight-bold" >ABOUT</h6></Link>
            <Link to="/services"><h6 className="ml-sm-3 mb-sm-4 font-weight-bold" >SERVICES</h6></Link>
            <Link to="/career"><h6 className="ml-sm-3 mb-sm-4 font-weight-bold" >CAREERS</h6></Link>
            <Link to="/blog"><h6 className="ml-sm-3 mb-sm-4 font-weight-bold" >BLOG</h6></Link>
            <Link to="/contact"><h6 className="ml-sm-3 font-weight-bold" >CONTACT US</h6></Link>
          </Col>
          <Col className="col-12 col-sm-4 pl-sm-2 pl-md-3 pl-lg-5 pb-5 pb-sm-0 footer-text">
            <h5 className="mb-4 font-weight-bold ml-sm-3">LOCATE US</h5>
            <h6 className="ml-sm-3">
              Roshan Mansoor & Co.,
              <br/>
              Chartered Accountants,
              <br/>
              D - 06, 6th floor, Jain Heights - Solus 1,
              <br/>
              JC Road cross, Bangalore – 560 027
            </h6>
            <br/>
            <h5 className="mb-4 ml-sm-3">REACH US</h5>
            <h6 className="font-weight-bold ml-sm-3">
            080-41231220 / 22221220 
            <br/> 
            rm@roshanmansoor.com
            </h6>
          </Col>
        </Row>
    </Container>
    </div>
)