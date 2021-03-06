import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import { Container, Row, Col, Breadcrumb, Card } from 'react-bootstrap'
import orangeArrow from '../../img/orange-arrow.png'
import TextContents from '../../TextContents';
import Services_Banner from '../../img/Roshan_Mansoor_Services_Banner.png'
import Auditing_Tile from '../../img/Roshan_Mansoor_Auditing_Tile.png'
import Advisory_Tile from '../../img/Roshan_Mansoor_Advisory_Tile.png'
import OtherServices_Tile from '../../img/Roshan_Mansoor_OtherServices_Tile.png'
import Taxation_Tile from '../../img/Roshan_Mansoor_Taxation_Tile.png'


const OrangeArrowComp = (props) => (
  <img className="ml-2" width={props.width} src={orangeArrow} alt="arrow-btn" />
)

export const ServicesPage = () => {
  return (
    <Layout>
      <div className="bg-darkgray">
        <Container fluid={true} className="px-0">
          <Card className="bg-dark text-white text-center">
            <Card.Img
              className="hidden-sm-down"
              src={Services_Banner}
              alt="Card image" />
            <Card.Img
              className="hidden-sm-up"
              src={Services_Banner}
              alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header"><h1>Services</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>
        <Container fluid={true} className="pb-5 px-0 px-sm-5 mt-4 mt-sm-0">
          <Row className="mx-4 hidden-sm-down">
            <Col className="px-0">
              <Breadcrumb>
                <Link to="/">Home&nbsp;></Link>
                <Link to="/services"> &nbsp;Services</Link>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mx-4 bg-white">
            <Col xs={12} sm={4} className="px-0">
              <img src={Auditing_Tile} alt="" />
            </Col>
            <Col xs={12} sm={5} className="px-3 px-sm-5 pt-5 service-link">
              <Link to="services/auditing">
                <h4 className="font-weight-bold">
                  {TextContents.services_index.auditing}
                  <OrangeArrowComp width="20px" />
                </h4>
                <p>
                  {TextContents.services_index.auditing_text}
                </p>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="py-3 px-3 pt-5 mt-0 mt-sm-5">
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.auditing_opt1} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.auditing_opt2} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.auditing_opt3} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.auditing_opt4} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.auditing_opt5} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
            </Col>
          </Row>
          <Row className="mx-4 bg-white mt-5 hidden-sm-down">
            <Col xs={12} sm={5} className="py-5 px-3 pr-sm-0 pl-sm-5 pr-0 service-link">
              <Link to="services/taxation">
                <h4 className="font-weight-bold">
                  {TextContents.services_index.taxation}
                  <OrangeArrowComp width="20px" />
                </h4>
                <p>
                  {TextContents.services_index.taxation_text}
                </p>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="py-sm-5 py-3 px-sm-5 px-3 mt-0 mt-sm-5">
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.taxation_opt1}  <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.taxation_opt2}  <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
            </Col>
            <Col xs={12} sm={4} className="p-0">
              <img src={Taxation_Tile} alt="" />
            </Col>
          </Row>
          <Row className="mx-4 bg-white mt-5 hidden-sm-up">
            <Col xs={12} sm={4} className="p-0">
              <img src={Taxation_Tile} alt="" />
            </Col>
            <Col xs={12} sm={5} className="py-5 px-3 pr-sm-0 pl-sm-5 pr-0 service-link">
              <Link to="services/taxation">
                <h4 className="font-weight-bold">
                  {TextContents.services_index.taxation}
                  <OrangeArrowComp width="20px" />
                </h4>
                <p>
                  {TextContents.services_index.taxation_text}
                </p>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="py-sm-5 py-3 px-sm-5 px-3 mt-0 mt-sm-5">
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.taxation_opt1}  <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "150px" }}>{TextContents.services_index.taxation_opt2}  <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
            </Col>
          </Row>
          <Row className="mx-4 bg-white mt-5">
            <Col xs={12} sm={4} className="p-0 col-md-4">
              <img src={Advisory_Tile} alt="" />
            </Col>
            <Col xs={12} sm={5} className="pl-3 pl-sm-5 py-5 service-link">
              <Link to="services/advisory">
                <h4 className="font-weight-bold">
                  {TextContents.services_index.advisory}
                  <OrangeArrowComp width="20px" />
                </h4>
                <p>
                  {TextContents.services_index.advisory_text}
                </p>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="py-5 px-sm-0 px-3 mt-0 mt-sm-5">
              <h6 className="font-weight-bold" style={{ "width": "220px" }}>{TextContents.services_index.advisory_opt1} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "220px" }}>{TextContents.services_index.advisory_opt2} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "220px" }}>{TextContents.services_index.advisory_opt3} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              <h6 className="font-weight-bold" style={{ "width": "220px" }}>{TextContents.services_index.advisory_opt4} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
            </Col>
          </Row>
          <Row className="mx-4 bg-white mt-5 hidden-sm-down">
            <Col xs={12} sm={5} className="pl-3 pl-sm-5 py-5 service-link">
              <Link to="services/otherservices">
                <h4 className="font-weight-bold">
                  {TextContents.services_index.other_services}
                  <OrangeArrowComp width="20px" />
                </h4>
                <br />
                <h6 className="font-weight-bold" style={{ "width": "300px" }}>{TextContents.services_index.other_services_opt1} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
                <h6 className="font-weight-bold" style={{ "width": "300px" }}>{TextContents.services_index.other_services_opt2} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
                <h6 className="font-weight-bold" style={{ "width": "300px" }}>{TextContents.services_index.other_services_opt3} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              </Link>
            </Col>
            <Col xs={12} sm={3} className="py-5 px-sm-0 px-3 mt-0 mt-sm-5">
            </Col>
            <Col xs={12} sm={4} className="p-0 col-md-4">
              <img src={OtherServices_Tile} alt="" />
            </Col>
          </Row>
          <Row className="mx-4 bg-white mt-5 hidden-sm-up">
            <Col xs={12} sm={4} className="p-0">
              <img src={OtherServices_Tile} alt="" />
            </Col>
            <Col xs={12} sm={3} className="py-5 px-3 pr-sm-0 pl-sm-5 pr-0 service-link">
              <Link to="services/otherservices">
                <h4 className="font-weight-bold">
                  {TextContents.services_index.other_services}
                  <OrangeArrowComp width="20px" />
                </h4>
                <br />
                <h6 className="font-weight-bold" style={{ "width": "300px" }}>{TextContents.services_index.other_services_opt1} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
                <h6 className="font-weight-bold" style={{ "width": "300px" }}>{TextContents.services_index.other_services_opt2} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
                <h6 className="font-weight-bold" style={{ "width": "300px" }}>{TextContents.services_index.other_services_opt3} <span className="float-right"> <OrangeArrowComp width="18px" /></span></h6>
              </Link>
            </Col>
            <Col xs={12} sm={5} className="py-sm-5 py-3 px-sm-5 px-3 mt-0 mt-sm-5">
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default ServicesPage

