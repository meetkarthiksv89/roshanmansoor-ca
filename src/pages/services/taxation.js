import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import SocialMediaImages from '../../components/SocialMediaImages'
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
            AUDITING
          </h1>
          <p className="text-secondary">
            We are committed to serving our clients with highest possible assurance through our systematic approach. Our relentless endeavour is to deploy newer methods and approaches to enhance the quality of our audit. We focus on by deciphering comprehensive and pertinent audit findings that not only help streamline but also create far reaching impact for our client businesses.
          </p>
          <br/>
          <p className="text-secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <Row>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>Internal Audit</h3>
            <p>Our independent, objective assurance and con- sulting service aims at adding value and improv- ing our clients’ internal operations through real- istic approaches that evaluate the effectiveness of risk management, control and governance processes currently deployed in their business- es.</p>
            <p>Our scalable risk assessment tactics offers an integrated solution that spans across initiating an internal audit function to auditing risk as- sessments, devising risk-based assurance plans, detecting Key Risk Indicators (KRI) among others.</p>
            </Col>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>Statutory Audit</h3>
            <p>We undertake a complete and comprehensive review of all your financial records to detect any glitches in terms of accuracy. Our endeavour is to ensure the most viable representation of our clients’ financial position through our in depth appraisal of information gathered from sources such as bank balances, bookkeeping records and financial transactions. Our internal audit reports, verification of financial information, and other documents are in accordance with the specifications of the Government. Our utmost effort is to minimise any possibilities of fraud and create maximum transparency.</p>
            </Col>
            <Col xs={12} className="ml-0 ml-sm-4 bg-lightgray p-4 my-4">
            <h3>Bank Audit</h3>
            <p>Our bank audit service helps you comply with all the statutory requirement. In addition we also partner with you in getting a bird’s eye view of not only the complete gamut of procedures and services you offer but also the accuracy of all your records. Our review process encompasses examining of records such as financial transac- tions. Bank wires, bank account monetary flow among others to ascertain completeness of all your financial activities.</p>
            </Col>
          </Row>
        </Col>
        <Col className="col-md-5 p-3 p-sm-5">
          <h4 className="my-sm-5">STAY CONNECTED WITH US</h4>
          <img src="https://via.placeholder.com/400x300" alt=""/>
          <div className="m-4">
          <h5>Roshan Mansoor</h5>
          <p>Managing Partner</p>
            <ul className="bullet-list text-secondary">
              <li>Qualified Chartered Accountant in 2010 and Fellow Chartered Accountant in 2017</li>
              <li>Graduated executive program from IIMB in Private equity & negotiations skills</li>
              <li>Bachelors Degree from JAIN University and Diploma In Finance and Stock Market</li>
              <li>Certification on Mergers and Acquisitions: Wharton University</li>
              <li>Previously Worked for Big 4 Consulting firms like: E&Y and PWC.</li>
              <li>Expertise in Corporate , International Taxation and Mergers & Acquisitions.</li>
            </ul>
          </div>
          <Row>
            <Col>
              <SocialMediaImages/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER SERVICES YOU MAY LIKE"
      link1="/services/foresnicaudit"
      link2="/services/auditing"
      link3="/services/duedeligance"
      cardHeader1="FORESNSIC AUDIT"
      cardHeader2="AUDITING"
      cardHeader3="DUE DELIGANCE"
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

