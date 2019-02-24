import React from "react"
import { navigate } from "gatsby-link"
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import SocialMediaImages from '../../components/SocialMediaImages'
import TextContents from '../../TextContents';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <div className="bg-darkgray">
          <Container fluid={true} className="px-0">
            <Card className="bg-dark text-white text-center">
              <Card.Img src="https://via.placeholder.com/1200x450" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="page-image-card-header"><h1>REACH US</h1></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Container>
          <Container className="mt-3 pb-5">
            <Row className="mx-3">
              <Col className="px-0">
              <Breadcrumb>
                <Link to="/">Home&nbsp;></Link> 
                <Link to="/contact"> &nbsp;Contact Us</Link>
              </Breadcrumb>
              </Col>
            </Row>  
            <Row className="bg-white pt-5 pb-4 mx-3">
              <Col className="col-md-12 ml-3">
                <h1>{TextContents.contact.connect}</h1>
                <p>
                {TextContents.contact.please_call}
                </p>
              </Col>
            </Row>
            <Row className="bg-white mx-3"> 
            <Col className="col-md-8">
              <div className="pb-5">
                <div className="container">
                  <div className="content">
              <form
                key="contact-form"
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <Row className="pb-3">
            <Col>
            <div className="field">
              <div className="control">
                <input className="input py-3" placeholder="First name" type={"text"} name={"firstname"} onChange={this.handleChange} id={"firstname"} required={true} />
              </div>
            </div>
            </Col>
            <Col>
            <div className="field">
              <div className="control">
                <input className="input py-3" placeholder="Last name" type={"text"} name={"lastname"} onChange={this.handleChange} id={"lastname"} required={true} />
              </div>
            </div>
            </Col>
            </Row>
            <Row className="py-3">
              <Col>
            <div className="field">
                <div className="control">
                  <input className="input py-3" placeholder="Your Email" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                </div>
            </div>
              </Col>
              <Col>
              <div className="field">
                <div className="control">
                  <input className="input py-3" placeholder="Your Phone" type={"phone"} name={"phone"} onChange={this.handleChange} id={"phone"} required={true} />
                </div>
            </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
            <div className="field">
                <div className="control">
                  <input className="input py-3" placeholder="Your Company" type={"text"} name={"company"} onChange={this.handleChange} id={"compay"} required={true} />
                </div>
            </div>
              </Col>
              <Col>
              <div className="field">
                <div className="control">
                  <input className="input py-3" placeholder="Subject" type={"text"} name={"subject"} onChange={this.handleChange} id={"subject"} required={true} />
                </div>
            </div>
              </Col>
            </Row>
            <div className="field py-3">
              <div className="control">
                <textarea className="textarea" placeholder="Go ahead, we're listening" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
              </div>
            </div>
            <div className="text-right">
              <button className="button is-link bg-orange px-5 py-2 font-weight-bold" style={{height:'55px'}} type="submit">SEND</button>
            </div>
          </form>
          </div>
          </div>
          </div>
          </Col>     
          <Col className="col-md-4 p-5 bg-orange">
            <div>
              <h4 className="text-light">{TextContents.contact.email_header}</h4>
              <i className="py-3 text-light">
              {TextContents.contact.email_adress}
              </i>
              <h5 className="py-3 text-light mt-4">{TextContents.contact.stay_connected}</h5>
              <SocialMediaImages/>
            </div>
          </Col>
          </Row>
          </Container>
          <Container fluid={true} className="px-0 mt-5">
            <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1594555297233!2d77.58364311493887!3d12.961646490862412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ddc8849f59%3A0x227484e866104ca5!2sRoshan+mansoor+%26+Co!5e0!3m2!1str!2sde!4v1550791701577" width="100%" height="450" frameBorder="0" style={{"border":"0"}} allowFullScreen></iframe>
          </Container>
        </div>
      </Layout>
    );
  }
}