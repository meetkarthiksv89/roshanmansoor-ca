import React from "react"
import { navigate } from "gatsby-link"
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import SocialMediaImages from '../../components/SocialMediaImages'

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
        <Row>
          <Col>
          <Breadcrumb>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/contact">Contact Us</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          </Col>
        </Row>  
        <Row className="bg-white"> 
        <Col className="col-md-8">
          <div className="section">
            <div className="container">
              <div className="content">
          <h1>Contact</h1>
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
            <Row className="py-3">
            <Col>
            <div className="field">
              <label className="label" htmlFor={"name"} >First name</label>
              <div className="control">
                <input className="input" type={"text"} name={"firstname"} onChange={this.handleChange} id={"firstname"} required={true} />
              </div>
            </div>
            </Col>
            <Col>
            <div className="field">
              <label className="label" htmlFor={"name"} >Last name</label>
              <div className="control">
                <input className="input" type={"text"} name={"lastname"} onChange={this.handleChange} id={"lastname"} required={true} />
              </div>
            </div>
            </Col>
            </Row>
            <Row className="py-3">
              <Col>
            <div className="field">
              <label className="label" htmlFor={"email"}>Your Email</label>
                <div className="control">
                  <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                </div>
            </div>
              </Col>
              <Col>
              <div className="field">
              <label className="label" htmlFor={"email"}>Your Phone</label>
                <div className="control">
                  <input className="input" type={"phone"} name={"phone"} onChange={this.handleChange} id={"phone"} required={true} />
                </div>
            </div>
              </Col>
            </Row>
            <Row className="py-3">
              <Col>
            <div className="field">
              <label className="label" htmlFor={"email"}>Your Company</label>
                <div className="control">
                  <input className="input" type={"text"} name={"company"} onChange={this.handleChange} id={"compay"} required={true} />
                </div>
            </div>
              </Col>
              <Col>
              <div className="field">
              <label className="label" htmlFor={"email"}>Subject</label>
                <div className="control">
                  <input className="input" type={"text"} name={"subject"} onChange={this.handleChange} id={"subject"} required={true} />
                </div>
            </div>
              </Col>
            </Row>
            <div className="field py-3">
              <label className="label" htmlFor={"message"}>Message</label>
              <div className="control">
                <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
              </div>
            </div>
            <div className="field text-right">
              <button className="button is-link bg-orange px-5" type="submit">Send</button>
            </div>
          </form>
          </div>
          </div>
          </div>
          </Col>     
          <Col className="col-md-4 p-5 bg-orange">
            <div>
              <h4>EMAIL</h4>
              <p className="py-3">
              Info@roshanmansoor.com
              </p>
              <h5 className="py-3">STAY CONNECTED WITH US</h5>
              <SocialMediaImages/>
            </div>
          </Col>
          </Row>
          </Container>
        </div>
      </Layout>
    );
  }
}