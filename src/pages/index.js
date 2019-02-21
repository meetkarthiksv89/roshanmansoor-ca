import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import {Container, Row, Col, Card, Image, Button} from 'react-bootstrap'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <Slider/>
        <section className="pt-5 bg-lightgray">
          <div className="content">
          <Container fluid={true} className="px-5">
            <Row className="m-3">
                <Col>
                  <h1 className="font-weight-bold is-size-2 ml-5">WHAT WE DO</h1>
                </Col>
                <Col>
                  <Link to="/services"><h2 className="section-header-link d-flex justify-content-end">SEE ALL SERVICES</h2></Link>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
          <Row className="text-center mx-0">
          <Col xs={12} md={4} className="px-0">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
              <Card.Body className="py-4" style={{height:'250px'}}>
                <Card.Title className="font-weight-bold text-black">Card Title</Card.Title>
                <Card.Text className="text-black">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <br/>
                  <a href="#" className="px-3 py-1 text-orange font-weight-bold">Read More » </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="px-0">
            <Card>
              <Card.Body className="py-4" style={{height:'250px'}}>
                <Card.Title className="font-weight-bold text-black">Card Title</Card.Title>
                <Card.Text className="text-black">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <br/>
                  <a href="#" className="px-3 py-1 text-orange font-weight-bold">Read More » </a>
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
            </Card>
          </Col>
          <Col xs={12} md={4} className="px-0">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/420x250" style={{height:'250px'}} />
              <Card.Body className="py-4" style={{height:'250px'}}>
                <Card.Title className="font-weight-bold text-black">Card Title</Card.Title>
                <Card.Text className="text-black">
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <br/>
                  <a href="#" className="px-3 py-1 text-orange font-weight-bold">Read More » </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          </div>
          <div className="py-5  bg-dark">
          <Container fluid={true} className="px-5">
            <Row className="mb-5 mt-3 mx-3">
                <Col>
                  <h2 className="font-weight-bold is-size-2 text-light">WHO WE SERVES</h2>
                </Col>
                <Col>
                  <Link to="/industries"><h2 className="section-header-link d-flex justify-content-end text-light">SEE ALL INDUSTRIES</h2></Link>
                </Col>
              </Row>
              <Row className="mx-3">
              <Col>
              <Card className="bg-dark">
              <Link to="/industries/informationtechnology">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"min-height":"400px"}}className="my-4 py-4">
                  <Card.Title>INFORMATION TECHNOLOGY</Card.Title>
                  <Card.Text>
                    Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical....
                    <br/>
                    <a href="#" className="text-orange font-weight-bold px-3 py-1 float-right">Read More </a>
                  </Card.Text>
                </Card.Body>
              </Link>
                </Card>
              </Col>
              <Col>
              <Card className="bg-dark">
              <Link to="/industries/realestate">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"min-height":"400px"}}className="my-4 py-4">
                  <Card.Title>REAL ESTATE ENGINEERING & CONSTRUCTION</Card.Title>
                  <Card.Text>
                    Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry...
                    <br/>
                    <a href="#" className="text-orange font-weight-bold px-3 py-1 float-right">Read More </a>
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>
              </Col>
              <Col>
              <Card className="bg-dark">
              <Link to="/industries/manufaturing">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"min-height":"400px"}}className="my-4 py-4">
                  <Card.Title>MANUFATURING</Card.Title>
                  <Card.Text>
                    We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives...
                    <br/>
                    <a href="#" className="text-orange font-weight-bold px-3 py-1 float-right">Read More </a>
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>
              </Col>
              <Col>
              <Card className="bg-dark">
                <Link to="/industries/retail">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"min-height":"400px"}}className="my-4 py-4">
                  <Card.Title>RETAIL</Card.Title>
                  <Card.Text>
                  Retail industry has gone through enormous changes after E-Com- merce disrupted the industry as a whole, which enabled as to in- troduce better ERP system with our clients which results in better accounting system, financial
                  and tax planning and better management of cash flow
                    <br/>
                    <a href="#" className="text-orange font-weight-bold px-3 py-1 float-right">Read More </a>
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>
              </Col>
            </Row>
            </Container>
          </div>
          <Container fluid={true} className="bg-white p-5">
            <Row className="m-3">
              <Col xs={12} md={8}>
                <h1 className="font-weight-bold is-size-2">ABOUT US</h1>
                <br/>
                <h2>A little history</h2>
                <p>We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick.</p>
                <h3>A little history is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of</h3>
                <p>Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas parishes of Jamaica.</p>
                <Link to="/about"><Button className="float-right px-5 py-3 text-white font-weight-bold" variant="warning">KNOW MORE</Button></Link>
              </Col>
              <Col xs={12} md={4} className="mt-4">
              <Image src="https://via.placeholder.com/450x430" fluid />
              </Col>
            </Row>
          </Container>
          <div className="bg-darkblue p-5 text-light">
          <Container fluid={false} className="" >
              <Row>
                <Col>
                  <h1 className="font-weight-bold is-size-2">LATEST INSIGHTS</h1>
                </Col>
                <Col>
                  <h4 className="d-flex justify-content-end">SEE ALL LATEST INSIGHTS</h4>
                </Col>
              </Row>
            <Row className="my-5">
              <Col className="col-xs-12 col-md-7">
                <h1 className="font-weight-bold">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a</h1>
              </Col>
              <Col className="col-xs-12 col-md-5">
              {posts[0] ? (
              <Card className="bg-lightblue">
              <Link className="text-black" to={posts[0].node.fields.slug}>
                <Card.Body >
                  <Card.Title className="text-black">{posts[0].node.frontmatter.title}</Card.Title>
                  <Card.Text className="text-light font-weight-bold">
                    {posts[0].node.excerpt.substring(0,200) + '...'}
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>) : null
              }
              {posts[1] ? (
              <Card className="bg-lightblue mt-5">
              <Link className="text-black" to={posts[1].node.fields.slug}>
                <Card.Body >
                  <Card.Title className="text-black">{posts[1].node.frontmatter.title}</Card.Title>
                  <Card.Text className="text-light font-weight-bold">
                  {posts[1].node.excerpt.substring(0,200)+ '...'}
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>) : null
              }
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
