import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Card} from 'react-bootstrap'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Slider/>
        <section className="section">
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
          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
            <Card.Body className="my-4 py-4">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                <br/>
                <a style={{color:'orange'}}>Read More </a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '34%' }}>
            <Card.Body className="my-4 py-4">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                <br/>
                <a style={{color:'orange'}}>Read More </a>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
          </Card>
          <Card style={{ width: '33%' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/300x180" />
            <Card.Body className="my-4 py-4">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                <br/>
                <a style={{color:'orange'}}>Read More </a>
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
          </div>
          <div className="content mt-5">
          <Container>
            <Row>
                <Col>
                  <h1 className="has-text-weight-bold is-size-2">WHO WE SERVES</h1>
                </Col>
                <Col>
                  <h1 className="d-flex justify-content-end">SEE ALL INDUSTRIES</h1>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="container">  
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
          </div>
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
