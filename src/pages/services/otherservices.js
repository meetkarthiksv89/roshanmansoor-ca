import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import AuditingStayConnected from '../../components/AuditingStayConnected'
import TextContents from '../../TextContents';
import Banner_image from '../../img/Other_Services_Banner.png';

export const InformationTechnologyPage = () => {
  return (
    <Layout>
      <div className="bg-darkgray">
        <Container fluid={true} className="px-0">
          <Card className="bg-dark text-white text-center">
            <Card.Img
              className="hidden-sm-down"
              src={Banner_image}
              alt="Card image" />
            <Card.Img
              className="hidden-sm-up"
              src={Banner_image}
              alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header"><h1>Other Services</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>
        <Container className="mt-3 pb-5">
          <Row className="mx-3">
            <Col className="px-0">
              <Breadcrumb>
                <Link to="/">Home&nbsp;></Link>
                <Link to="/services"> &nbsp;Services</Link>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="bg-white mx-3">
            <Col className="py-3 pl-sm-5 pr-sm-4">
              <h1 className="py-3 my-1">
                {TextContents.other_services.other_services}
              </h1>
              <Row>
                <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
                  <h3>{TextContents.other_services.paragprah1_header}</h3>
                  <p>{TextContents.other_services.paragprah1_text1}</p>
                  <p>{TextContents.other_services.paragprah1_text2}</p>
                </Col>
                <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
                  <h3>{TextContents.other_services.paragprah2_header}</h3>
                  <p>{TextContents.other_services.paragprah2_text1}</p>
                </Col>
                <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
                  <h3>{TextContents.other_services.paragprah3_header}</h3>
                  <p>{TextContents.other_services.paragprah3_text1}</p>
                </Col>
              </Row>
            </Col>
            <AuditingStayConnected />
          </Row>
        </Container>
      </div>
      <OtherStaticPagesRow
        mainHeader="OTHER SERVICES YOU MAY LIKE"
        link1="/services/advisory"
        link2="/services/auditing"
        link3="/services/taxation"
        cardHeader1="ADVISORY"
        cardHeader2="AUDITING"
        cardHeader3="TAXATION"
        cardText1="We provide consultation and advisory services in relation to domestic and international taxation, restructuring and reorganization of companies, acquisitions, and foreign exchange laws."
        cardText2="We are committed to serving our clients with the highest possible assurance through our systematic approach. Our relentless endeavor is to deploy newer methods and approaches to enhance the quality of our audit."
        cardText3="We offer end-to-end solutions for all taxation needs from tax planning, documentation to representations. We have previously represented tax matters from Assessing Officer (Scrutiny) till ITAT level."
      />
    </Layout>
  )
}

export default InformationTechnologyPage

