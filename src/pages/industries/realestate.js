import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import IndustriesKeyNotes from '../../components/IndustriesKeyNotes'
import TextContents from '../../TextContents';
import Real_Estate_Banner from '../../img/Roshan_Mansoor_Real_Estate_Banner.png'
import Manufacturing_Tile from '../../img/Roshan_Mansoor_Manufacturing_Tile.png'
import Technology_Tile from '../../img/Roshan_Mansoor_Information_Technology_Tile.png'
import Retail_Tile from '../../img/Roshan_Mansoor_Retail_Tile.png'

export const RealEstatePage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img 
        className="hidden-sm-down"
        src={Real_Estate_Banner} 
        alt="Card image" />
        <Card.Img 
        className="hidden-sm-up"
        src="https://via.placeholder.com/400x450" 
        alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Real Estate Engineering & Construction</h1></Card.Title>
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
          {TextContents.industries_real_estate.real_estate}
          </h2>
          <p className="text-secondary">
            {TextContents.industries_real_estate.text1}
          </p>
          <br/>
          <p className="text-secondary">
            {TextContents.industries_real_estate.text2}
          </p>
        </Col>
        <IndustriesKeyNotes />
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER INDUSTRIES YOU MAY LIKE"
      link1="/industries/manufacturing"
      link2="/industries/informationtechnology"
      link3="/industries/retail"
      cardHeader1="manufacturing"
      cardHeader2="INFORMATION TECHNOLOGY"
      cardHeader3="RETAIL"
      cardText1="We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives..."
      cardText2="Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical...."
      cardText3="Retail industry has gone through enormous changes after E-Com- merce disrupted the industry as a whole, which enabled as to in- troduce better ERP system with our clients which results in better accounting system, financial
      and tax planning and better management of cash flow..."
      cardImage1={Manufacturing_Tile}
      cardImage2={Technology_Tile}
      cardImage3={Retail_Tile}
    />
    </Layout>
  )
}

export default RealEstatePage

