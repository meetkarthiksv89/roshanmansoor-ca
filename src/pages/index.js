import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import '../assets/style/all.sass'
import '../assets/style/bootstrap.css'
import {Container, Row, Col, Card, Image, Button} from 'react-bootstrap'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)

    return (
      <Layout>
        <Slider/>
        <section className="mt-5">
          <div className="content">
          <Container>
            <Row>
                <Col>
                  <h1 className="has-text-weight-bold is-size-2">WHAT WE DO</h1>
                </Col>
                <Col>
                  <h1 className="d-flex justify-content-end">SEE ALL SERVICES</h1>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
          <Row className="text-center">
          <Col className="p-0">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body className="my-4 py-4">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <br/>
                  <a href="#" style={{color:'orange'}}>Read More </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-0">
            <Card>
              <Card.Body className="my-4 py-4">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <br/>
                  <a href="#" style={{color:'orange'}}>Read More </a>
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
            </Card>
          </Col>
          <Col className="p-0">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
              <Card.Body className="my-4 py-4">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                  <br/>
                  <a href="#" style={{color:'orange'}}>Read More </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </Row>
          </div>
          <div className="content mt-5 bg-dark">
          <Container fluid={true} className="p-5">
            <Row>
                <Col>
                  <h1 className="has-text-weight-bold is-size-2 text-light">WHO WE SERVES</h1>
                </Col>
                <Col>
                  <h1 className="d-flex justify-content-end text-light">SEE ALL INDUSTRIES</h1>
                </Col>
              </Row>
              <Row className="text-center">
              <Col>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body className="my-4 py-4">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br/>
                    <a href="#" style={{color:'orange'}}>Read More </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body className="my-4 py-4">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br/>
                    <a href="#" style={{color:'orange'}}>Read More </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body className="my-4 py-4">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br/>
                    <a href="#" style={{color:'orange'}}>Read More </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body className="my-4 py-4">
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    <br/>
                    <a href="#" style={{color:'orange'}}>Read More </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
            </Container>
          </div>
          <Container fluid={false} className="my-5">
            <Row>
              <Col xs={8}>
                <h1 className="has-text-weight-bold is-size-2">ABOUT US</h1>
                <br/>
                <h2>A little history</h2>
                <p>We expect the shipment of a limited quantity of green beans next Monday. We’ll be offering the roasted beans from Tuesday, but quantities are limited, so be quick.</p>
                <h3>A little history is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of</h3>
                <p>Blue Mountain Peak is the highest mountain in Jamaica and one of the highest peaks in the Caribbean at 7,402 ft. It is the home of Blue Mountain coffee and their famous tours. It is located on the border of the Portland and Saint Thomas parishes of Jamaica.</p>
                <Button className="float-right" variant="warning">Read More</Button>
              </Col>
              <Col xs={4}>
              <Image src="https://via.placeholder.com/450x700" fluid />
              </Col>
            </Row>
          </Container>
          <div className="bg-darkblue mt-5 p-5 text-light">
          <Container fluid={false} className="" >
              <Row>
                <Col>
                  <h1 className="has-text-weight-bold is-size-2">LATEST INSIGHTS</h1>
                </Col>
                <Col>
                  <h4 className="d-flex justify-content-end">SEE ALL LATEST INSIGHTS</h4>
                </Col>
              </Row>
            <Row className="my-5">
              <Col className="col-xs-12 col-md-7">
                <h1 className="has-text-weight-bold is-size-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a</h1>
              </Col>
              <Col className="col-xs-12 col-md-5">
              {posts[0] ? (
              <Card className="bg-lightblue">
              <Link className="text-black" to={posts[0].node.fields.slug}>
                <Card.Body >
                  <Card.Title className="text-black">{posts[0].node.frontmatter.title}</Card.Title>
                  <Card.Text className="text-light">
                    {posts[0].node.excerpt.substring(0,200) + '...'}
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>) : null
              }
              {posts[1] ? (
              <Card className="bg-lightblue mt-5">
              <Link className="text-black" to={posts[0].node.fields.slug}>
                <Card.Body >
                  <Card.Title className="text-black">{posts[1].node.frontmatter.title}</Card.Title>
                  <Card.Text className="text-light">
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
