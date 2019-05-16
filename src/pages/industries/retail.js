import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'
import TextContents from '../../TextContents';
import Retail_Banner from '../../img/Roshan_Mansoor_Retail_Services_Banner.png'
import Manufacturing_Tile from '../../img/Roshan_Mansoor_Manufacturing_Tile.png'
import Technology_Tile from '../../img/Roshan_Mansoor_Information_Technology_Tile.png'
import Real_Estate_Tile from '../../img/Roshan_Mansoor_Real_Estate_Tile.png'

export const RealEstatePage = () => {
  return (
    <Layout>
      <div className="bg-darkgray">
        <Container fluid={true} className="px-0">
          <Card className="bg-dark text-white text-center">
            <Card.Img
              className="hidden-sm-down"
              src={Retail_Banner}
              alt="Card image" />
            <Card.Img
              className="hidden-sm-up"
              src={Retail_Banner}
              alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header text-black"><h1>Retail</h1></Card.Title>
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
          </Row>
        </Container>
      </div>
      <OtherStaticPagesRow
        mainHeader="OTHER INDUSTRIES YOU MAY LIKE"
        link1="/industries/manufacturing"
        link2="/industries/informationtechnology"
        link3="/industries/realestate"
        cardHeader1="MANUFACTURING"
        cardHeader2="INFORMATION TECHNOLOGY"
        cardHeader3="REAL ESTATE ENGINEERING & CONSTRUCTION"
        cardText1="We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives..."
        cardText2="Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical...."
        cardText3="Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry..."
        cardImage1={Manufacturing_Tile}
        cardImage2={Technology_Tile}
        cardImage3={Real_Estate_Tile}
      />
    </Layout>
  )
}

export default RealEstatePage

