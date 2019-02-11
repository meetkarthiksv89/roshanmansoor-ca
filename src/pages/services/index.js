import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card, Image} from 'react-bootstrap'
import orangeArrow from '../../img/orange-arrow.png'

const OrangeArrowComp = (props) => (
  <img className="ml-2" width={props.width} src={orangeArrow} alt="arrow-btn"/>
)

export const ServicesPage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img src="https://via.placeholder.com/1200x300" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>SERVICES</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container className="mt-3 pb-5">
      <Row>
        <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/about">
            Services
          </Breadcrumb.Item>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="bg-white">
      <Col className="p-0">
        <img src="https://via.placeholder.com/400x500" alt=""/>
        </Col>
        <Col className="p-5">
          <h4>
            AUDITING
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          We are committed to serving our clients with highest possible assurance through our systematic ap- proach. Our relentless endeavour is to deploy newer methods and approaches to enhance the quality of our audit. We focus on by deciphering comprehen- sive and pertinent audit findings that not only help streamline but also create far reaching impact for our client businesses.
          </p>
        </Col>
        <Col className="p-5 mt-5">
          <h6 style={{"width":"150px"}}>Internal Audit  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 style={{"width":"150px"}}>Statutory Audit  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 style={{"width":"150px"}}>Bank Audit  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
      </Row>
      <Row className="bg-white mt-5">        
        <Col className="py-5 pl-5 pr-4 col-md-5">
          <h4>
            TAXATION
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          We offer end to end solutions for all your taxation needs from tax planning, documentation to representations. Our clients for tax preparation service include individuals, firms, Indians sta- tioned overseas, non-Indian nationals, among others.
          We also represent our clients at various offices including that of the assessing officer, Appellate authorities and Tribunal. Our tax planning and assistance services span across personal and corporate entities in terms of acquiring Permanent Ac- count Number (PAN), Tax Deduction Account Number, TDS or withholding taxes, filing of e-Income tax and e-TDS returns. We also offer international tax planning services to obtain inbound
          </p>
        </Col>
        <Col className="py-5 mt-5 col-md-3">
          <h6 style={{"width":"150px"}}>Income Tax  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 style={{"width":"150px"}}>GST  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
        <Col className="p-0 col-md-4 ">
          <img src="https://via.placeholder.com/400x500" alt=""/>
        </Col>
      </Row>
      <Row className="bg-white mt-5">
      <Col className="p-0 col-md-4">
        <img src="https://via.placeholder.com/400x530" alt=""/>
        </Col>
        <Col className="py-5 pl-5 col-md-5">
          <h4>
            ADVISORY
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          We undertake evaluation services of a company’s or individual’s financial information which can be produced as evidence in court. Our multifaceted forensic audit consultancy assists our clients charged with litigations that have high stakes by rendering advisories across independent disputes, assistance in investigations, data ac- quisition and analysis.
          Apart from assessing the extent of damages, we also support in pro- viding testimonies in cases involving our clients. Our state of art forensic accounting service extricates complicated financial transac- tions.
          Our independent information collection methods are presented in digital formats easing the analysis of data. Our real time responsive team ensures hundred percent confidentiality and addressing the
          </p>
        </Col>
        <Col className="py-5 mt-5 col-md-3">
          <h6 style={{"width":"220px"}}>Due diligence  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 style={{"width":"220px"}}>FEMA  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 style={{"width":"220px"}}>Corporate Restructuring  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 style={{"width":"220px"}}>Valuation  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
      </Row>
    </Container>
    </div>
    </Layout>
  )
}

export default ServicesPage

