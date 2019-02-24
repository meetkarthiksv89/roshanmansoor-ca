import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
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
    <Container className="pb-5">
      <Row className="mx-3">
        <Col className="px-0">
        <Breadcrumb>
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/services"> &nbsp;Services</Link>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="mx-3 bg-white">
        <Col xs={12} sm={4} className="px-0">
          <img src="https://via.placeholder.com/400x530" alt=""/>
        </Col>
        <Col xs={12} sm={5} className="px-3 px-sm-5 pt-5 service-link">
        <Link to="services/auditing">
          <h4 className="font-weight-bold">
            AUDITING
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          We are committed to serving our clients with highest possible assurance through our systematic ap- proach. Our relentless endeavour is to deploy newer methods and approaches to enhance the quality of our audit. We focus on by deciphering comprehen- sive and pertinent audit findings that not only help streamline but also create far reaching impact for our client businesses.
          </p>
        </Link>
        </Col>
        <Col xs={12} sm={3} className="py-3 px-3 pt-5 mt-0 mt-sm-5">
          <h6 className="font-weight-bold" style={{"width":"150px"}}>Internal Audit  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>Statutory Audit  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>Bank Audit  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
      </Row>
      <Row className="mx-3 bg-white mt-5">        
        <Col xs={12} sm={5} className="py-5 px-3 pr-sm-0 pl-sm-5 pr-0 service-link">
        <Link to="services/taxation">
          <h4 className="font-weight-bold">
            TAXATION
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          We offer end to end solutions for all your taxation needs from tax planning, documentation to representations. Our clients for tax preparation service include individuals, firms, Indians sta- tioned overseas, non-Indian nationals, among others.
          We also represent our clients at various offices including that of the assessing officer, Appellate authorities and Tribunal. Our tax planning and assistance services span across personal and corporate entities in terms of acquiring Permanent Ac- count Number (PAN), Tax Deduction Account Number, TDS or withholding taxes, filing of e-Income tax and e-TDS returns. We also offer international tax planning services to obtain inbound
          </p>
          </Link>
        </Col>
        <Col xs={12} sm={3} className="py-sm-5 py-3 px-sm-5 px-3 mt-0 mt-sm-5">
          <h6 className="font-weight-bold" style={{"width":"150px"}}>Income Tax  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"150px"}}>GST  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
        <Col xs={12} sm={4} className="p-0 col-md-4 ">
          <img src="https://via.placeholder.com/400x600" alt=""/>
        </Col>
      </Row>
      <Row className="mx-3 bg-white mt-5">
        <Col xs={12} sm={4} className="p-0 col-md-4">
          <img src="https://via.placeholder.com/400x740" alt=""/>
        </Col>
        <Col xs={12} sm={4} className="pl-3 pl-sm-5 py-5 service-link">
        <Link to="services/advisory">
          <h4 className="font-weight-bold">
            ADVISORY
            <OrangeArrowComp width="20px"/>
          </h4>
          <p>
          We undertake evaluation services of a company’s or individual’s financial information which can be produced as evidence in court. Our multifaceted forensic audit consultancy assists our clients charged with litigations that have high stakes by rendering advisories across independent disputes, assistance in investigations, data ac- quisition and analysis.
          Apart from assessing the extent of damages, we also support in pro- viding testimonies in cases involving our clients. Our state of art forensic accounting service extricates complicated financial transac- tions.
          Our independent information collection methods are presented in digital formats easing the analysis of data. Our real time responsive team ensures hundred percent confidentiality and addressing the
          </p>
          </Link>
        </Col>
        <Col xs={12} sm={4} className="py-5 px-sm-0 px-3 mt-0 mt-sm-5">
          <h6 className="font-weight-bold" style={{"width":"220px"}}>Due diligence  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"220px"}}>FEMA  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"220px"}}>Corporate Restructuring  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
          <h6 className="font-weight-bold" style={{"width":"220px"}}>Valuation  <span className="float-right"> <OrangeArrowComp width="18px"/></span></h6>
        </Col>
      </Row>
    </Container>
    </div>
    </Layout>
  )
}

export default ServicesPage

