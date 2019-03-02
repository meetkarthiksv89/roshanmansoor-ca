import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import orangeArrow from '../../img/orange-arrow.png'
import TextContents from '../../TextContents';


const OrangeArrowComp = (props) => (
  <img className="ml-2" width={props.width} src={orangeArrow} alt="arrow-btn"/>
)

export const ServicesPage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img src="https://via.placeholder.com/1200x300" 
          srcSet="https://via.placeholder.com/400x350 568w, https://via.placeholder.com/700x450 780w , https://via.placeholder.com/1000x450 1000w"
          alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>SERVICES</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container fluid={true} className="pb-5 px-0 px-sm-5">
      <Row className="mx-4">
        <Col className="px-0">
        <Breadcrumb>
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/services"> &nbsp;Services</Link>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="mx-4 bg-white">
        <Col xs={12} sm={4} className="px-0">
          <img src="https://via.placeholder.com/500x420" alt=""/>
        </Col>
        <Col xs={12} sm={5} className="px-3 px-sm-5 pt-5 service-link">
        <Link to="services/auditing">
          <h4 className="font-weight-bold">
          {TextContents.services_index.auditing}
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          {TextContents.services_index.auditing_text}
          </p>
        </Link>
        </Col>
        <Col xs={12} sm={3} className="py-3 px-3 pt-5 mt-0 mt-sm-5">
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.auditing_opt1} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.auditing_opt2} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.auditing_opt3} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.auditing_opt4} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.auditing_opt5} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
      </Row>
      <Row className="mx-4 bg-white mt-5">        
        <Col xs={12} sm={5} className="py-5 px-3 pr-sm-0 pl-sm-5 pr-0 service-link">
        <Link to="services/taxation">
          <h4 className="font-weight-bold">
            {TextContents.services_index.taxation}
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          {TextContents.services_index.taxation_text}
          </p>
          </Link>
        </Col>
        <Col xs={12} sm={3} className="py-sm-5 py-3 px-sm-5 px-3 mt-0 mt-sm-5">
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.taxation_opt1}  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>{TextContents.services_index.taxation_opt2}  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
        <Col xs={12} sm={4} className="p-0 col-md-4 ">
          <img src="https://via.placeholder.com/500x420" alt=""/>
        </Col>
      </Row>
      <Row className="mx-4 bg-white mt-5">
        <Col xs={12} sm={4} className="p-0 col-md-4">
          <img src="https://via.placeholder.com/500x420" alt=""/>
        </Col>
        <Col xs={12} sm={5} className="pl-3 pl-sm-5 py-5 service-link">
        <Link to="services/advisory">
          <h4 className="font-weight-bold">
          {TextContents.services_index.advisory}
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          {TextContents.services_index.advisory_text}
          </p>
          </Link>
        </Col>
        <Col xs={12} sm={3} className="py-5 px-sm-0 px-3 mt-0 mt-sm-5">
          <h6 className="font-weight-bold" style={{"width":"220px"}}>{TextContents.services_index.advisory_opt1} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"220px"}}>{TextContents.services_index.advisory_opt2} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"220px"}}>{TextContents.services_index.advisory_opt3} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"220px"}}>{TextContents.services_index.advisory_opt4} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
      </Row>
      <Row className="mx-4 bg-white mt-5">        
        <Col xs={12} sm={3} className="py-5 px-3 pr-sm-0 pl-sm-5 pr-0 service-link">
          <Link to="services/otherservices">
            <h4 className="font-weight-bold">
              {TextContents.services_index.other_services}
              <OrangeArrowComp width="20px"/>
            </h4>
            <br/>
            <h6 className="font-weight-bold" style={{"width":"300px"}}>{TextContents.services_index.other_services_opt1} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
            <h6 className="font-weight-bold" style={{"width":"300px"}}>{TextContents.services_index.other_services_opt2} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
            <h6 className="font-weight-bold" style={{"width":"300px"}}>{TextContents.services_index.other_services_opt3} <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          </Link>
        </Col>
        <Col xs={12} sm={5} className="py-sm-5 py-3 px-sm-5 px-3 mt-0 mt-sm-5">
          
        </Col>
        <Col xs={12} sm={4} className="p-0 col-md-4 ">
          <img src="https://via.placeholder.com/500x420" alt=""/>
        </Col>
      </Row>
    </Container>
    </div>
    </Layout>
  )
}

export default ServicesPage

