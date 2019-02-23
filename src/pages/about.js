import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import {Container, Row, Col, Breadcrumb, Card, Image} from 'react-bootstrap'
import linkedinBlueImg from '../img/linkedin-blue.png'

export const AboutPageTemplate = () => {
  return (
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img src="https://via.placeholder.com/1200x300" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>ABOUT US</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Container fluid={true} className="mt-3 px-sm-5">
      <Row className="mx-3">
        <Col className="px-0">
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/about">About Us</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="mx-sm-3">
        <Col className="col-12 col-sm-8 mb-3 mb-sm-3">
        <Card style={{minHeight:"450px"}}>
        <Card.Img className="p-2 bg-lightgray" variant="top" src="https://via.placeholder.com/840x300" />
          <Card.ImgOverlay>
            <Card.Title className="font-weight-bold mt-4 ml-4">OVERVIEW</Card.Title>
          </Card.ImgOverlay>
          <Card.Body className="bg-lightgray">
            <Card.Text >
              Roshan Mansoor & Co is a chartered accountancy firm delivering integrated consulting services across auditing, financial services, company legal matters, import & export and taxes. Headquartered in the Indian city of Bengaluru, Roshan & Mansoor is powered by a strong team of chartered accountants who have been placed at leading firms including PricewaterhouseCoopers, ING Group and Goldman Sachs.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className="col-xs-12 col-md-4">
        <Card style={{minHeight:"450px"}}>
          <Card.Img className="p-2 bg-lightgray" variant="top" src="https://via.placeholder.com/400x300" />
          <Card.Body className="bg-lightgray">
            <Card.Text className="pb-4">
              Thanks to the team’s impeccable business acumen, the firm has been able to capture a niche market in India and overseas.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-3 px-sm-5">
        <Col className="col-12 col-sm-7 bg-lightgray p-5">
          <h1 className="pt-5 mt-2 mb-3">
            WHAT WE PASSIONATE ABOUT
          </h1>
          <p className="pb-5">
            As a firm that adheres to all the standard operational norms and practices as specified by ICAI and other statutory bodies, we are driven by the mission of creating an overall busi- ness impact for the clients we work with. As we partner with our clients in their organiza- tional finance planning and audit journey, our ultimate goal is to create make a wholesome difference in their bottom line. Buoyed by the overwhelming response from our clients in India, we have recently gone a step further and added to our portfolio Incorporation ser- vices for setting up business in Singapore and Hong Kong. We have partnered with a lead- ing consulting firm in Singapore to deliver this service.
          </p>
        </Col>
        <Col className="col-12 col-sm-5 p-0">
        <img src="https://via.placeholder.com/600x660" alt=""/>
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="bg-dark py-5 text-center text-light">
    <Row className="mx-sm-5 px-5">
      <Col xs={12}>
        <h3 className="my-3">MEET THE PILLARS OF OUR COMPANY</h3>
        <p className="mb-4 mx-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-xs-0">
        <Image src="https://via.placeholder.com/300x300" roundedCircle />
        <div>
          <h4 className="mt-2">Roshan Mansoor</h4>
          <p className="font-weight-bold">Founder and Managing Partner</p>
          <img width="30px" src={linkedinBlueImg} alt="linkedin-profile"/>
        </div>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-xs-0">
        <Image src="https://via.placeholder.com/300x300" roundedCircle />
        <div>
          <h4 className="mt-2">Prashant Bansal</h4>
          <p className="font-weight-bold">Has previously worked for E&Y</p>
          <img width="30px" src={linkedinBlueImg} alt="linkedin-profile"/>
        </div>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-xs-0">
        <Image src="https://via.placeholder.com/300x300" roundedCircle />
        <div>
          <h4 className="mt-2">Shahid Rokadiya</h4>
          <p className="font-weight-bold">Partner - Hyderabad</p>
          <img width="30px" src={linkedinBlueImg} alt="linkedin-profile"/>
        </div>
      </Col>
      </Row>
    </Container>
    </Container>
    </div>
  )
}

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

export default AboutPage
