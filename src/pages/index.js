import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap'
import TextContents from '../TextContents';
import AssuranceImage from '../img/RoshanMansoor&Co_Auditing.jpg';
import TaxImage from '../img/RoshanMansoor&Co_Taxation.jpg';
import AdvisoryImage from '../img/RoshanMansoor&Co_Advisory.jpg';
import ITImage from '../img/RoshanMansoor&Co_IT_Services.jpg';
import ManufacturingImage from '../img/RoshanMansoor&Co_Manufacturing_Services.jpg';
import Retail from '../img/RoshanMansoor&Co_Retail_Services.jpg';
import RealEstateImage from '../img/RoshanMansoor&Co_RealEstate_Services.jpg';
import RoshanMansoorImage from '../img/Roshan_Mansoor.jpg';


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <Slider />
        <section className="pt-3 pt-sm-5 bg-lightgray">
          <div className="content">
            <Container fluid={true} className="px-md-5 px-sm-0">
              <Row className="m-3">
                <Col xs={12} sm={6}>
                  <h1 className="font-weight-bold section-header-main">WHAT WE DO</h1>
                </Col>
                <Col xs={12} sm={6} className="hidden-sm-down flex-right">
                  <Link to="/services"><h2 className="section-header-link">SEE ALL SERVICES</h2></Link>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <Row className="text-center mx-0">
              <Col xs={12} md={4} className="px-0">
                <Card>

                  <Card.Img src={AssuranceImage} style={{ height: '250px' }} />
                  <Card.Body className="py-4" style={{ height: '250px' }}>
                    <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_1}</Card.Title>
                    <Card.Text className="text-black">
                      {TextContents.homepage.services_card_text_1}
                      <br />
                      <br />
                    </Card.Text>
                    <Link to="/services/auditing">
                    <p to="/services/auditing" className="py-1 text-orange-black font-weight-bold">Read More </p>
                    </Link>
                    
                  </Card.Body>

                </Card>
              </Col>
              <Col xs={12} md={4} className="px-0 hidden-sm-up">
                <Card>

                  <Card.Img src={TaxImage} style={{ height: '250px' }} />
                  <Card.Body className="py-4" style={{ height: '250px' }}>
                    <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_2}</Card.Title>
                    <Card.Text className="text-black">
                      {TextContents.homepage.services_card_text_3}
                      <br />
                      <br />
                    </Card.Text>
                    <Link to="/services/taxation">
                    <p to="/services/advisory" className="px-3 py-1 text-orange-black font-weight-bold">Read More123 </p>
                    </Link>
                  </Card.Body>

                </Card>
              </Col>
              <Col xs={12} md={4} className="px-0 hidden-sm-down flex-right">
                <Card>

                  <Card.Body className="py-4" style={{ height: '250px' }}>
                    <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_2}</Card.Title>
                    <Card.Text className="text-black">
                      {TextContents.homepage.services_card_text_3}
                      <br />
                    </Card.Text>
                    <Link to="/services/taxation">
                    <p to="/services/advisory" style={{ marginBottom: 20 }} className="px-3 py-1 text-orange-black font-weight-bold">Read More </p>
                    </Link>
                  </Card.Body>
                  <Card.Img src={TaxImage} style={{ height: '250px' }} />

                </Card>
              </Col>
              <Col xs={12} md={4} className="px-0 ">
                <Card>

                  <Card.Img src={AdvisoryImage} style={{ height: '250px' }} />
                  <Card.Body className="py-4" style={{ height: '250px' }}>
                    <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_3}</Card.Title>
                    <Card.Text className="text-black">
                      {TextContents.homepage.services_card_text_3}
                      <br />
                      <br />
                    </Card.Text>
                    <Link to="/services/advisory">
                    <p to="/services/advisory" className="px-3 py-1 text-orange-black font-weight-bold">Read More </p>
                    </Link>
                  </Card.Body>

                </Card>
              </Col>
              <Col xs={12} className="bg-white pb-3 hidden-sm-up">
                <div className="mobile-section-button px-0">
                  <Link to="/services"><Button className="px-5 py-3 text-white font-weight-bold know-more-btn">SEE ALL SERVICES</Button></Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className="pt-sm-5 pt-2 pb-2 bg-dark">
            <Container fluid={true} className="px-md-5">
              <Row className="mb-sm-0 mx-3">
                <Col xs={12} sm={6}>
                  <h2 style={{ marginBottom: 20 }} className="font-weight-bold text-light mobile-header">WHO WE SERVE</h2>
                </Col>
                <Col xs={12} sm={6} className="hidden-sm-down flex-right">
                  <Link to="/industries"><h2 className="section-header-link d-flex justify-content-end text-light">SEE ALL INDUSTRIES</h2></Link>
                </Col>
              </Row>
              <Row className="mx-sm-3">
                <Col xs={12} sm={3}>
                  <Card className="bg-dark box-shadow-none">
                    <Link to="/industries/informationtechnology">
                      <Card.Img src={ITImage} />
                      <Card.Body style={{ "minHeight": "260px" }} className="my-2 px-0">
                        <Card.Title style={{ minHeight: "44px" }} className="text-white text-center">{TextContents.homepage.industries_card_title_1}</Card.Title>
                        <Card.Text className="text-white">
                          {TextContents.homepage.industries_card_text_1}
                          <br />
                        </Card.Text>
                      </Card.Body>
                      <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                    </Link>
                  </Card>
                </Col>
                <Col xs={12} sm={3}>
                  <Card className="bg-dark box-shadow-none">
                    <Link to="/industries/realestate">
                      <Card.Img src={RealEstateImage} />
                      <Card.Body style={{ "minHeight": "260px" }} className="my-2 px-0">
                        <Card.Title style={{ minHeight: "44px" }} className="text-white text-center">{TextContents.homepage.industries_card_title_2}</Card.Title>
                        <Card.Text className="text-white">
                          {TextContents.homepage.industries_card_text_2}
                          <br />
                        </Card.Text>
                      </Card.Body>
                      <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                    </Link>
                  </Card>
                </Col>
                <Col xs={12} sm={3}>
                  <Card className="bg-dark box-shadow-none">
                    <Link to="/industries/manufacturing">
                      <Card.Img src={ManufacturingImage} />
                      <Card.Body style={{ "minHeight": "260px" }} className="my-2 px-0">
                        <Card.Title style={{ minHeight: "44px" }} className="text-white text-center">{TextContents.homepage.industries_card_title_3}</Card.Title>
                        <Card.Text className="text-white">
                          {TextContents.homepage.industries_card_text_3}
                          <br />
                        </Card.Text>
                      </Card.Body>
                      <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                    </Link>
                  </Card>
                </Col>
                <Col xs={12} sm={3}>
                  <Card className="bg-dark box-shadow-none">
                    <Link to="/industries/retail">
                      <Card.Img src={Retail} />
                      <Card.Body style={{ "minHeight": "260px" }} className="my-2 px-0">
                        <Card.Title className="text-orange" style={{ minHeight: "44px" }} className="text-white text-center">{TextContents.homepage.industries_card_title_4}</Card.Title>
                        <Card.Text className="text-white">
                          {TextContents.homepage.industries_card_text_4}
                          <br />
                        </Card.Text>
                      </Card.Body>

                      <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                    </Link>
                  </Card>
                </Col>
                <Col xs={12} className="bg-dark pb-3 hidden-sm-up">
                  <div className="mobile-section-button px-0">
                    <Link to="/industries"><Button className="px-5 py-3 text-white font-weight-bold know-more-btn">SEE ALL INDUSTRIES</Button></Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Container fluid={true} className="bg-white px-md-5 py-5">
            <Row className="m-sm-3">
              <Col xs={12} className="mobile-header">
                <h1 className="font-weight-bold">{TextContents.homepage.about_us}</h1>
              </Col>
              <Col xs={12} md={4} className="mt-4">
                <Image src={RoshanMansoorImage} fluid />
              </Col>
              <Col xs={12} md={8} className="mobile-header">
                <br />
                <h6 className="font-weight-bold" style={{ marginBottom: 20 }}>{TextContents.homepage.about_us_title}</h6>
                <p>{TextContents.homepage.about_us_text1}</p>
                <h6 className="font-weight-bold" style={{ marginBottom: 20 }}>{TextContents.homepage.about_us_text2}</h6>
                <p style={{ marginBottom: 40 }}>{TextContents.homepage.about_us_text3}</p>
                <div className="float-right hidden-sm-down">
                  <Link to="/about"><Button className="px-5 py-3 text-white font-weight-bold know-more-btn">KNOW MORE</Button></Link>
                </div>
              </Col>
              <Col xs={12} className="bg-white hidden-sm-up">
                <div className="mobile-section-button px-0">
                  <Link to="/about"><Button className="px-5 py-3 text-white font-weight-bold know-more-btn">KNOW MORE</Button></Link>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="bg-darkblue px-lg-5 py-5 text-light">
            <Container fluid={false}>
              <Row>
                <Col xs={12} sm={6} className="mobile-header">
                  <h1 className="font-weight-bold">LATEST INSIGHTS</h1>
                </Col>
                <Col xs={12} sm={6} className="hidden-sm-down justify-content-end">
                  <h4 className="d-flex justify-content-end">SEE ALL LATEST INSIGHTS</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                {posts.length > 0 && posts
                  .map(({ node: post }) => (
                    <Col xs={12} md={6} key={post.id}>
                      <Card className="bg-lightblue mt-5">
                        <Link className="text-black" to={post.fields.slug}>
                          <Card.Body style={{ minHeight: "250px" }}>
                            <Card.Title className="text-black">
                              <div>{post.frontmatter.title} </div>
                              <div className="mt-2">{post.frontmatter.date}</div>
                            </Card.Title>
                            <Card.Text className="text-light font-weight-bold">
                              {post.excerpt.substring(0, 200) + '...'}
                            </Card.Text>
                          </Card.Body>
                        </Link>
                      </Card>
                    </Col>
                  ))}
              </Row>
              <Row>
                <Col xs={12} className="bg-darkblue pt-3 hidden-sm-up">
                  <div className="mobile-section-button px-0">
                    <Link to="/about"><Button className="px-5 py-3 text-white font-weight-bold know-more-btn">SEE ALL LATEST INSIGHTS</Button></Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* <div className="container">  
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: '1px solid #333', padding: '2em 4em' }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    <Link className="button is-small" to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </p>
                </div>
              ))}
          </div> */}
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
            allMarkdownRemark(
              sort: {order: DESC, fields: [frontmatter___date] },
      filter: {frontmatter: {templateKey: {eq: "blog-post" } }}
    ) {
            edges {
          node {
            excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`
