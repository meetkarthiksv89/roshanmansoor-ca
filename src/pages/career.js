import React from 'react'
import { Link } from 'gatsby'
import { navigate } from "gatsby-link";
import Layout from '../components/Layout'
import {Container, Row, Col, Breadcrumb, Card, Button, Collapse, Modal} from 'react-bootstrap'
import CarrerAds from '../careerAds';
import TextContents from '../TextContents';
import Career_Banner from '../img/Roshan_Mansoor_Career_Banner.png'


function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

class CareerPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      modalShow: false,
      attachmentInProgress: false,
      attachmentName:false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0], attachmentInProgress:true, attachmentName:e.target.files[0].name });
    setTimeout((e) => {
      this.setState({attachmentInProgress:false})
    }, 3000);
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render(){
    let toggleModal = () => this.setState({ modalShow: !this.state.modalShow });
    return (
      <Layout>
        <div>
          <Modal
            show={this.state.modalShow}
            onHide={toggleModal}
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
              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                style={{width:"100%"}}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <Row>
                  <Col xs={12} sm={6}>
                  <label className="label" htmlFor={"name"} >Your name</label>
                    <input className="input py-3" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} /> 
                  </Col>
                  <Col xs={12} sm={6}>
                    <label className="label" htmlFor={"email"} >Email</label>
                    <input className="input py-3" type={"text"} name={"email"} onChange={this.handleChange} id={"email"} required={true} /> 
                  </Col>
                  <Col xs={12} className="mt-3">
                  <label className="label" htmlFor={"message"} >Message</label>
                  <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                  </Col>
                </Row>
                <div className="file mt-2">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      name="attachment"
                      onChange={this.handleAttachment}
                    />
                    <span className="file-cta">
                      <span className="file-label">
                        {this.state.attachmentInProgress ? "Uploading…": "Choose a file…" }
                      </span>
                    </span>
                    <h5 className="mx-2 my-1">{this.state.attachmentName && !this.state.attachmentInProgress ? this.state.attachmentName: ''}</h5>
                  </label>
                </div>
                <Modal.Footer>
                  <Button className="bg-orange" type="submit" onClick={this.props.onHide}>SEND</Button>
                </Modal.Footer>
              </form>
              </Row>
            </Modal.Body>
            
          </Modal>
        </div>
        <div className="bg-darkgray">
        <Container fluid={true} className="px-0">
          <Card className="bg-dark text-white text-center">
            <Card.Img 
            className="hidden-sm-down"
            src={Career_Banner} 
            alt="Card image" />
            <Card.Img 
            className="hidden-sm-up"
            src={Career_Banner}  
            alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header"><h1>Join our team!</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Container>
        <Container fluid={true} className="mt-3 p-sm-5">
          <Row className="mx-1 mx-sm-0">
            <Col className="px-0">
            <Breadcrumb>
              <Link to="/">Home&nbsp;></Link> 
              <Link to="/career"> &nbsp;Careers</Link>
            </Breadcrumb>
            </Col>
          </Row>
          <Row className="bg-white mx-1 mx-sm-0">        
            <Col className="py-4 px-0 col-md-12">
              <h1 className="font-weight-bold mb-3 mx-3 mx-sm-5">
              {TextContents.careers.careers}
              </h1>
              <h4 className="text-secondary mx-3 mx-sm-5">
              {TextContents.careers.text1}
              </h4>
              <br/>
              <h3 className="text-secondary font-weight-bold py-3 border-bottom-1">
                <span className="mx-3 mx-sm-5">
                {TextContents.careers.text2}
                </span>
              </h3>
              { CarrerAds.map(ad=>(
                <Row key={ad.id} className="my-4 pb-5 border-bottom-1 mx-0">
                <Col xs={6} sm={7} md={9} className="px-sm-5">
                  <h5>
                    {ad.name}
                  </h5>
                  <p>{ad.type}</p>
                  </Col>
                  <Col xs={3} sm={3} md={2}>
                    <h4 className="mr-3">{ad.location}</h4>
                  </Col>
                  <Col xs={3} sm={2} md={1} className="text-center">
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
                        { ad.requirements.map((requirement,index) => (
                          <li key={`${index}-req`} className="ml-4">{requirement}</li>
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

