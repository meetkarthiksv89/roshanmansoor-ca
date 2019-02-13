import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import {Container, Row, Col, Breadcrumb, Card, Button, Collapse} from 'react-bootstrap'

class CarrerPage extends React.Component{

  state = {
    open: false,
  };

  render(){
    const {open} = this.state;
    return (
      <Layout>
      <div className="bg-darkgray">
      <Container fluid={true} className="px-0">
        <Card className="bg-dark text-white text-center">
          <Card.Img src="https://via.placeholder.com/1200x650" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="page-image-card-header"><h1>Join our team!</h1></Card.Title>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <Container className="mt-3 pb-5">
        <Row>
          <Col>
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/services">Services</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          </Col>
        </Row>
        <Row className="bg-white">        
          <Col className="py-5 pl-5 pr-4 col-md-12">
            <h1 className="my-3">
              CAREERS
            </h1>
            <p className="text-secondary">
              We are looking for brilliant, passionate people to join us. As a member of our team, we promise you an exciting journey building ground breaking technologies. Even if there is no openings that fits your profile, please reach out to us - we would love to hear from you!
            </p>
            <br/>
            <h3 className="text-secondary">
              We are Hiring
            </h3>
            <Row>
              <Col className="col-md-11 mt-4">
                <h5>
                  RESEARCH ASSOCIATE
                </h5>
                </Col>
                <Col className="col-md-1">
                <span className="float-right">
                <span className="mr-3">LOCATION</span>
                <Button
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  style={{backgroundColor:'orange'}}
                >
                  click
                </Button>
              </span>
              </Col>
              <Col className="col-md-12">
                <Collapse in={this.state.open}>
                  <div id="example-collapse-text">
                    <ul className="bullet-list text-secondary">
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look</li>
                    <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</li>
                  </ul>
                  <Button className="float-right px-4" style={{backgroundColor:'orange'}}>Apply</Button>
                  </div>
                </Collapse>                
              </Col>
              </Row>
          </Col>
        </Row>
      </Container>
      </div>
      </Layout>
    )
  }
}

export default CarrerPage

