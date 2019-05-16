import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import IndustriesKeyNotes from '../../components/IndustriesKeyNotes'
import TextContents from '../../TextContents';
import Manufacturing_Banner from '../../img/Roshan_Mansoor_Manufacturing_Banner.png'
import Real_Estate_Tile from '../../img/Roshan_Mansoor_Real_Estate_Tile.png'
import Manufacturing_Tile from '../../img/Roshan_Mansoor_Manufacturing_Tile.png'
import Retail_Tile from '../../img/Roshan_Mansoor_Retail_Tile.png'
import Technology_Tile from '../../img/Roshan_Mansoor_Information_Technology_Tile.png'

export const RealEstatePage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img 
        className="hidden-sm-down"
        src={Manufacturing_Banner}
        alt="Card image" />
        <Card.Img 
        className="hidden-sm-up"
        src={Manufacturing_Banner}
        alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Manufacturing</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container className="mt-3 pb-5">
      <Row className="mx-1 mx-sm-0">
        <Col className="px-0">
        <Breadcrumb>
          <Link to="/">Home&nbsp;></Link> 
          <Link to="/industries"> &nbsp;Industries</Link>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="mx-1 mx-sm-0 bg-white">        
        <Col className="py-3 px-sm-5">
          <h2 className="py-3 my-3">
            {TextContents.industries_manufacturing.manufacturing}
          </h2>
          <p className="text-secondary">
            {TextContents.industries_manufacturing.text1}
          </p>
          <br/>
          <p className="text-secondary">
          {TextContents.industries_manufacturing.text2}
          </p>
        </Col>
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
      cardImage1={Real_Estate_Tile}
      cardImage2={Technology_Tile}
      cardImage3={Retail_Tile}
    />
    </Layout>
  )
}

export default RealEstatePage

