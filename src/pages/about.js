import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import {Container, Row, Col, Breadcrumb, Card, Image} from 'react-bootstrap'
import linkedinBlueImg from '../img/linkedin-blue.png'
import TextContents from '../TextContents';

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
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/about"> &nbsp;About Us</Link>
        </Breadcrumb>
        </Col>
      </Row>
      </Container>
      <Container fluid={true} className="bg-yellow">
        <Row className="px-5 py-4 mx-sm-5 mb-sm-5">
          <Col xs={12}>
            <h1>{TextContents.aboutpage.testimonials}</h1>
          </Col>
          <Col xs={3}>
            <img src="https://via.placeholder.com/240x200" alt=""/>
          </Col>
          <Col xs={9}>
            {TextContents.aboutpage.testimonials_text}
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="mt-3 px-sm-5">
      <Row className="mx-0">
        <Col className="col-12 col-sm-8 mb-3 mb-sm-3">
        <Card style={{minHeight:"450px"}}>
        <Card.Img className="p-2 bg-lightgray" variant="top" src="https://via.placeholder.com/840x300" />
          <Card.ImgOverlay>
            <Card.Title className="font-weight-bold mt-4 ml-4">{TextContents.aboutpage.overview}</Card.Title>
          </Card.ImgOverlay>
          <Card.Body className="bg-lightgray">
            <Card.Text >
              {TextContents.aboutpage.overview_text_1}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col className="col-xs-12 col-md-4">
        <Card style={{minHeight:"450px"}}>
          <Card.Img className="p-2 bg-lightgray" variant="top" src="https://via.placeholder.com/400x300" />
          <Card.Body className="bg-lightgray">
            <Card.Text className="pb-4">
              {TextContents.aboutpage.overview_text_2}
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <Row className="mt-5 mb-3 mx-3 mx-sm-3">
        <Col className="col-12 col-sm-7 bg-lightgray p-5">
          <h1 className="pt-5 mt-2 mb-3">
          {TextContents.aboutpage.passionate}
          </h1>
          <p className="pb-5">
            {TextContents.aboutpage.passionate_text}
          </p>
        </Col>
        <Col className="col-12 col-sm-5 p-0">
        <img src="https://via.placeholder.com/600x840" alt=""/>
        </Col>
      </Row>
    </Container>
    <Container fluid={true} className="bg-dark py-5 text-center text-light">
    <Row className="mx-sm-5 px-5">
      <Col xs={12}>
        <h3 className="my-3">{TextContents.aboutpage.meet_pillars}</h3>
        <p className="mb-4 mx-5">{TextContents.aboutpage.meet_pillars_text}</p>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-xs-0">
        <Image src="https://via.placeholder.com/300x300" roundedCircle />
        <div>
          <h4 className="mt-2">{TextContents.aboutpage.pillar_1_name}</h4>
          <p className="font-weight-bold">{TextContents.aboutpage.pillar_1_title}</p>
          <img width="30px" src={linkedinBlueImg} alt="linkedin-profile"/>
        </div>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-xs-0">
        <Image src="https://via.placeholder.com/300x300" roundedCircle />
        <div>
          <h4 className="mt-2">{TextContents.aboutpage.pillar_2_name}</h4>
          <p className="font-weight-bold">{TextContents.aboutpage.pillar_2_title}</p>
          <img width="30px" src={linkedinBlueImg} alt="linkedin-profile"/>
        </div>
      </Col>
      <Col xs={12} sm={4} className="mb-4 mb-xs-0">
        <Image src="https://via.placeholder.com/300x300" roundedCircle />
        <div>
          <h4 className="mt-2">{TextContents.aboutpage.pillar_3_name}</h4>
          <p className="font-weight-bold">{TextContents.aboutpage.pillar_3_title}</p>
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
