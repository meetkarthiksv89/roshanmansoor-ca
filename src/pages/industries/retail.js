import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import TextContents from '../../TextContents';

export const RealEstatePage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img 
        className="hidden-sm-down"
        src="https://via.placeholder.com/1200x650" 
        alt="Card image" />
        <Card.Img 
        className="hidden-sm-up"
        src="https://via.placeholder.com/400x450" 
        alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Retails</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container className="mt-3 pb-5">
      <Row className="mx-1 mx-sm-0">
        <Col>
        <Breadcrumb>
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/industries"> &nbsp;Industries</Link>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="mx-1 mx-sm-0 bg-white">        
        <Col className="py-5 px-sm-5 col-md-8">
          <h2 className="my-3">
          {TextContents.industries_retail.retail}
          </h2>
          <p className="text-secondary">
            {TextContents.industries_retail.text1}
          </p>
          <p className="text-secondary">
            {TextContents.industries_retail.text2}
          </p>
        </Col>
        <Col className="p-0 col-md-4 p-5">
          <h3 className="my-5">KEY NOTES</h3>
          <img src="https://via.placeholder.com/400x300" alt=""/>
          <div className="m-4">
            <ul className="bullet-list text-secondary">
              <li>Banks and mutual banks</li>
              <li>Investment management funds</li>
              <li>Listed and unlisted real estate investment trusts Insurers</li>
              <li>Providers of products and services to the financial</li>
              <li>services industry.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER INDUSTRIES YOU MAY LIKE"
      link1="/industries/manufaturing"
      link2="/industries/informationtechnology"
      link3="/industries/realestate"
      cardHeader1="MANUFATURING"
      cardHeader2="INFORMATION TECHNOLOGY"
      cardHeader3="REAL ESTATE ENGINEERING & CONSTRUCTION"
      cardText1="We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives..."
      cardText2="Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical...."
      cardText3="Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry..."
    />
    </Layout>
  )
}

export default RealEstatePage

