import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import {Container, Row, Col, Breadcrumb, Card, Button, Collapse, Modal} from 'react-bootstrap'

const careerAds = [
  {
    id:1,
    name:"RESEARCH ASSOCIATE",
    type:"FULL TIME",
    requirements:[
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      "There are many variations of passages of Lorem Ipsum available",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      "There are many variations of passages of Lorem Ipsum available",
    ],
    location: "Berlin"
  },
  {
    id:2,
    name:"SOFTWARE DEVELOPER",
    type:"FREELANCER",
    requirements:[
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      "There are many variations of passages of Lorem Ipsum available",
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
      "There are many variations of passages of Lorem Ipsum available",
    ],
    location: "Istanbul"
  }
]

class MyVerticallyCenteredModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="px-5">
            APPLY NOW
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="px-5">
          <Col className="col-md-6">
          <label className="label" htmlFor={"name"} >Your name</label>
            <input className="input py-3" type={"text"} name={"name"} onChange={this.props.handleChange} id={"name"} required={true} /> 
          </Col>
          <Col className="col-md-6">
            <label className="label" htmlFor={"email"} >Email</label>
            <input className="input py-3" type={"text"} name={"email"} onChange={this.props.handleChange} id={"email"} required={true} /> 
          </Col>
          <Col className="col-md-12 mt-3">
          <label className="label" htmlFor={"message"} >Message</label>
          <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
          </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-orange" onClick={this.props.onHide}>SEND</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class CareerPage extends React.Component{

  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, console.log(this.state));
  };

  render(){
    let toggleModal = () => this.setState({ modalShow: !this.state.modalShow });
    return (
      <Layout>
        <div>
        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={toggleModal}
          handleChange={this.handleChange}
        />
        </div>
        <div className="bg-darkgray">
        <Container fluid={true} className="px-0">
          <Card className="bg-dark text-white text-center">
            <Card.Img src="https://via.placeholder.com/1200x650" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header"><h1>Join our team!</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>
        <Container fluid={true} className="mt-3 p-5">
          <Row>
            <Col className="px-0">
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/career">Careers</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            </Col>
          </Row>
          <Row className="bg-white">        
            <Col className="py-4 px-0 col-md-12">
              <h1 className="font-weight-bold mb-3 mx-5">
                CAREERS
              </h1>
              <h4 className="text-secondary mx-5">
                We are looking for brilliant, passionate people to join us. As a member of our team, we promise you an exciting journey building ground breaking technologies. Even if there is no openings that fits your profile, please reach out to us - we would love to hear from you!
              </h4>
              <br/>
              <h3 className="text-secondary font-weight-bold py-3 border-bottom-1">
                <span className="mx-5">
                  We are Hiring
                </span>
              </h3>
              { careerAds.map(ad=>(
                <Row key={ad.id} className="my-4 pb-5 border-bottom-1 mx-0">
                <Col xs={6} sm={7} md={9} className="px-5">
                  <h5>
                    {ad.name}
                  </h5>
                  <p>{ad.type}</p>
                  </Col>
                  <Col xs={4} sm={3} md={2}>
                    <h4 className="mr-3">{ad.location}</h4>
                  </Col>
                  <Col xs={2} sm={2} md={1}>
                    <Button
                      onClick={() => this.setState({ [`status_${ad.id}`]: !this.state[`status_${ad.id}`] })}
                      aria-controls="example-collapse-text"
                      className="bg-orange"
                      aria-expanded={this.state[`status_${ad.id}`]}
                    >
                      {this.state[`status_${ad.id}`] ? '▲' : '▼'}
                    </Button>
                </Col>
                <Col md={12} className="px-5">
                  <Collapse in={this.state[`status_${ad.id}`]}>
                    <div id="example-collapse-text">
                    <h6 className="font-weight-bold">Responsibilities</h6>
                      <ul className="bullet-list text-secondary">
                        { ad.requirements.map(requirement => (
                          <li className="ml-4">{requirement}</li>
                        ))}
                    </ul>
                    <Button className="float-right px-4 bg-orange"
                      onClick={toggleModal}>
                      Apply
                    </Button>
                    </div>
                    </Collapse>                
                  </Col>
                </Row>
              ))
              }
            </Col>
          </Row>
        </Container>
        </div>
      </Layout>
    )
  }
}

export default CareerPage

