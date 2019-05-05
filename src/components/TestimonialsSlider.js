import React from 'react'
import { Carousel } from 'react-bootstrap';
import {Container, Row, Col, Breadcrumb, Card, Image} from 'react-bootstrap'
import Excellence_Banner from '../img/Roshan_Mansoor&Co_Excellence.png';
import Growth_Banner from '../img/Roshan_Mansoor_Growth_Banner.png';
import Confidentiality_Banner from '../img/Roshan_Mansoor_Confidentiality.png';
import Objectivity_Banner from '../img/Roshan_Mansoor_Objectivity.png';
import Trust_Banner from '../img/Roshan_Mansoor_Trust.png';
import Diligence_Banner from '../img/Roshan_Mansoor_Diligence.png';
import Excellence_Banner_Mobile from '../img/Roshan_Mansoor&Co_Excellence_Mobile.png';
import Growth_Banner_Mobile from '../img/Roshan_Mansoor_Growth_Banner_Mobile.png';
import Confidentiality_Banner_Mobile from '../img/Roshan_Mansoor_Confidentiality_Mobile.png';
import Objectivity_Banner_Mobile from '../img/Roshan_Mansoor_Objectivity_Mobile.png';
import Trust_Banner_Mobile from '../img/Roshan_Mansoor_Trust_Mobile.png';
import Diligence_Banner_Mobile from '../img/Roshan_Mansoor_Diligence_Mobile.png';

const Slider = () => {
  return (
    <Carousel
      controls={false}>
      <Carousel.Item>
      <Container fluid={true} className="bg-white mt-sm-5">
        <Row className="px-5 py-4 mx-sm-5">
          <Col xs={12}>
            <h1>Testinomials</h1>
          </Col>
          <Col xs={12} sm={9}>
          <h4>Raghavendra HV, Co-Founder, Bizprout Corporate Solutions Pvt Ltd.</h4>
          </Col>
          <Col xs={12} sm={9}>
            Roshan Mansoor and Co are a professional firem of chartered accontants. Proud to be assosiated with them. 
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container fluid={true} className="bg-white mt-sm-5">
        <Row className="px-5 py-4 mx-sm-5">
          <Col xs={12}>
            <h1>Testinomials</h1>
          </Col>
          <Col xs={12} sm={9}>
          <h4>Sanath Udupa</h4>
          </Col>
          <Col xs={12} sm={9}>
            It was overall a fantastic experience when it came to handling our companies. VAT issues which went to litigation. Team gave us all the advices and handled our litigation with VAT department and helped us close the matters well.
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container fluid={true} className="bg-white mt-sm-5">
        <Row className="px-5 py-4 mx-sm-5">
          <Col xs={12}>
            <h1>Testinomials</h1>
          </Col>
          <Col xs={12} sm={9}>
          <h4>Siddharth Suchdev</h4>
          </Col>
          <Col xs={12} sm={9}>
            Roshan's been the CA for my companies for the last 3 years and he's been an excellent resource. A complete professional. I have no qualms in recommending his services.
          </Col>
        </Row>
      </Container>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
