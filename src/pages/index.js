import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import {Container, Row, Col, Card, Image, Button} from 'react-bootstrap'
import TextContents from '../TextContents';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <Slider/>
        <section className="pt-3 pt-sm-5 bg-lightgray">
          <div className="content">
          <Container fluid={true} className="px-md-5 px-sm-0">
            <Row className="m-3">
                <Col className="col-12 col-md-6">
                  <h1 className="font-weight-bold section-header-main">WHAT WE DO</h1>
                </Col>
                <Col className="col-12 col-md-6">
                  <Link to="/services"><h2 className="section-header-link">SEE ALL SERVICES</h2></Link>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
          <Row className="text-center mx-0">
          <Col xs={12} md={4} className="px-0">
            <Card>
              <Card.Img src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
              <Card.Body className="py-4" style={{height:'250px'}}>
                <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_1}</Card.Title>
                <Card.Text className="text-black">
                  {TextContents.homepage.services_card_text_1}
                  <br/>
                  <br/>
                </Card.Text>
                <p to="/services/auditing" className="px-3 py-1 text-orange font-weight-bold">Read More </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="px-0 hidden-sm-up">
            <Card>
              <Card.Img src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
                <Card.Body className="py-4" style={{height:'250px'}}>
                  <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_3}</Card.Title>
                  <Card.Text className="text-black">
                    {TextContents.homepage.services_card_text_3}
                    <br/>
                    <br/>
                  </Card.Text>
                  <p to="/services/advisory" className="px-3 py-1 text-orange font-weight-bold">Read More </p>
                </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="px-0 hidden-sm-down">
            <Card>
                <Card.Body className="py-4" style={{height:'250px'}}>
                  <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_3}</Card.Title>
                  <Card.Text className="text-black">
                    {TextContents.homepage.services_card_text_3}
                    <br/>
                    <br/>
                  </Card.Text>
                  <p to="/services/advisory" className="px-3 py-1 text-orange font-weight-bold">Read More </p>
                </Card.Body>
                <Card.Img src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
            </Card>
          </Col>
          <Col xs={12} md={4} className="px-0 ">
            <Card>
              <Card.Img src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
                <Card.Body className="py-4" style={{height:'250px'}}>
                  <Card.Title className="font-weight-bold text-black">{TextContents.homepage.services_card_title_3}</Card.Title>
                  <Card.Text className="text-black">
                    {TextContents.homepage.services_card_text_3}
                    <br/>
                    <br/>
                  </Card.Text>
                  <p to="/services/advisory" className="px-3 py-1 text-orange font-weight-bold">Read More </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </div>
          <div className="pt-5 pb-2 bg-dark">
          <Container fluid={true} className="px-md-5">
            <Row className="mt-3 mx-3">
                <Col>
                  <h2 className="font-weight-bold is-size-2 text-light">WHO WE SERVES</h2>
                </Col>
                <Col>
                <Link to="/industries"><h2 className="section-header-link d-flex justify-content-end text-light">SEE ALL INDUSTRIES</h2></Link>
                </Col>
              </Row>
              <Row className="mx-sm-3">
              <Col xs={12} sm={3}>
              <Card className="bg-dark box-shadow-none">
              <Link to="/industries/informationtechnology">
                <Card.Img src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}}className="my-2">
                  <Card.Title style={{minHeight:"44px"}}>{TextContents.homepage.industries_card_title_1}</Card.Title>
                  <Card.Text>
                    {TextContents.homepage.industries_card_text_1}
                    <br/>
                  </Card.Text>
                  <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                </Card.Body>
              </Link>
                </Card>
              </Col>
              <Col xs={12} sm={3}>
              <Card className="bg-dark box-shadow-none">
              <Link to="/industries/realestate">
                <Card.Img src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}}className="my-2">
                  <Card.Title style={{minHeight:"44px"}}>{TextContents.homepage.industries_card_title_2}</Card.Title>
                  <Card.Text>
                    {TextContents.homepage.industries_card_text_2}
                    <br/>
                  </Card.Text>
                  <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                </Card.Body>
                </Link>
              </Card>
              </Col>
              <Col xs={12} sm={3}>
              <Card className="bg-dark box-shadow-none">
              <Link to="/industries/manufaturing">
                <Card.Img src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}}className="my-2">
                  <Card.Title style={{minHeight:"44px"}}>{TextContents.homepage.industries_card_title_3}</Card.Title>
                  <Card.Text>
                  {TextContents.homepage.industries_card_text_3}
                    <br/>
                  </Card.Text>
                  <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                </Card.Body>
                </Link>
              </Card>
              </Col>
              <Col xs={12} sm={3}>
              <Card className="bg-dark box-shadow-none">
                <Link to="/industries/retail">
                <Card.Img src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}}className="my-2">
                  <Card.Title style={{minHeight:"44px"}}>{TextContents.homepage.industries_card_title_4}</Card.Title>
                  <Card.Text>
                    {TextContents.homepage.industries_card_text_4}
                    <br/>
                  </Card.Text>
                  <p className="text-orange font-weight-bold px-sm-3 py-1 text-center">Read More </p>
                </Card.Body>
                </Link>
              </Card>
              </Col>
            </Row>
            </Container>
          </div>
          <Container fluid={true} className="bg-white px-md-5 py-5">
            <Row className="m-3">
              <Col xs={12}>
                <h1 className="font-weight-bold is-size-2">{TextContents.homepage.about_us}</h1>
              </Col>
              <Col xs={12} md={4} className="mt-4">
                <Image src="https://via.placeholder.com/450x430" fluid />
              </Col>
              <Col xs={12} md={8}>
                <br/>
                <h2>{TextContents.homepage.about_us_title}</h2>
                <p>{TextContents.homepage.about_us_text1}</p>
                <h3>{TextContents.homepage.about_us_text2}</h3>
                <p>{TextContents.homepage.about_us_text3}</p>
                <Link to="/about"><Button className="float-right px-5 py-3 mr-4 text-white font-weight-bold know-more-btn">KNOW MORE</Button></Link>
              </Col>
            </Row>
          </Container>
          <div className="bg-darkblue px-lg-5 py-5 text-light">
          <Container fluid={false} className="" >
              <Row>
                <Col>
                  <h1 className="font-weight-bold is-size-2">LATEST INSIGHTS</h1>
                </Col>
                <Col>
                  <h4 className="d-flex justify-content-end">SEE ALL LATEST INSIGHTS</h4>
                </Col>
              </Row>
            <Row className="mb-3">
              {posts
              .map(({ node: post }) => (
                <Col xs={12} md={6} key={post.id}>
                  <Card className="bg-lightblue mt-5">
                    <Link className="text-black" to={post.fields.slug}>
                      <Card.Body style={{minHeight:"250px"}}>
                        <Card.Title className="text-black">
                          <div>{post.frontmatter.title} </div>
                          <div className="mt-2">{post.frontmatter.date}</div>
                        </Card.Title>
                        <Card.Text className="text-light font-weight-bold">
                        { post.excerpt.substring(0,200)+ '...'}
                        </Card.Text>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              ))}
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
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
