import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import IndustriesKeyNotes from '../../components/IndustriesKeyNotes'
import TextContents from '../../TextContents';

export const RealEstatePage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img src="https://via.placeholder.com/1200x650" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Manufaturing</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container className="mt-3 pb-5">
      <Row>
        <Col className="px-0">
        <Breadcrumb>
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/industries"> &nbsp;Industries</Link>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="bg-white">        
        <Col className="py-5 pl-5 pr-4 col-md-8">
          <h1 className="my-3">
            {TextContents.industries_manufaturing.manufaturing}
          </h1>
          <p className="text-secondary">
            {TextContents.industries_manufaturing.text1}
          </p>
          <br/>
          <p className="text-secondary">
          {TextContents.industries_manufaturing.text2}
          </p>
        </Col>
        <IndustriesKeyNotes />
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER INDUSTRIES YOU MAY LIKE"
      link1="/industries/realestate"
      link2="/industries/informationtechnology"
      link3="/industries/retail"
      cardHeader1="REAL ESTATE ENGINEERING & CONSTRUCTION"
      cardHeader2="INFORMATION TECHNOLOGY"
      cardHeader3="RETAIL"
      cardText1="Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry..."
      cardText2="Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical...."
      cardText3="Retail industry has gone through enormous changes after E-Com- merce disrupted the industry as a whole, which enabled as to in- troduce better ERP system with our clients which results in better accounting system, financial
      and tax planning and better management of cash flow..."
    />
    </Layout>
  )
}

export default RealEstatePage

