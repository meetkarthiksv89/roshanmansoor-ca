import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import AuditingStayConnected from '../../components/AuditingStayConnected'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import TextContents from '../../TextContents';

export const InformationTechnologyPage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img src="https://via.placeholder.com/1200x650" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Auditing</h1></Card.Title>
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
        <Col className="py-5 pl-sm-5 pr-sm-4">
          <h1 className="my-3">
            {TextContents.services_auditing.auditing}
          </h1>
          <p className="text-secondary">
            {TextContents.services_auditing.main_text1}
          </p>
          <br/>
          <p className="text-secondary">
            {TextContents.services_auditing.main_text2}
          </p>
          <Row>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>{TextContents.services_auditing.paragprah1_header}</h3>
            <p>{TextContents.services_auditing.paragprah1_text1}</p>
            <p>{TextContents.services_auditing.paragprah1_text2}</p>
            </Col>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>{TextContents.services_auditing.paragprah2_header}</h3>
            <p>{TextContents.services_auditing.paragprah2_text1}</p>
            </Col>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>{TextContents.services_auditing.paragprah3_header}</h3>
            <p>{TextContents.services_auditing.paragprah3_text1}</p>
            </Col>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>{TextContents.services_auditing.paragprah4_header}</h3>
            <p>{TextContents.services_auditing.paragprah4_text1}</p>
            </Col>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>{TextContents.services_auditing.paragprah5_header}</h3>
            <p>{TextContents.services_auditing.paragprah5_text1}</p>
            </Col>
          </Row>
        </Col>
        <AuditingStayConnected />
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER SERVICES YOU MAY LIKE"
      link1="/services/taxation"
      link2="/services/advisory"
      link3="/services/otherservices"
      cardHeader1="TAXATION"
      cardHeader2="ADVISORY"
      cardHeader3="OTHER SERVICES"
      cardText1="We undertake evaluation services of a company’s or individual’s financial information which can be produced
      as evidence in court..."
      cardText2="We help our clients take an informed decision while closing any large business deals such as merger and
      acquisition..."
      cardText3="We provide an integrated service consultancy for all issue related to Foreign Exchange Management Act
      (FEMA) – the entity that oversees..."
    />
    </Layout>
  )
}

export default InformationTechnologyPage

