import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Card } from 'react-bootstrap'
import TextContents from '../../TextContents';

export default class IndustriesPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <Layout>
        <section>
          <Card className="bg-dark text-white text-center">
            <Card.Img src="https://via.placeholder.com/1000x600" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header"><h1>INDUSTRIES</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>
          <div>
          <Container fluid={true} className="p-5">
            <Row>
                <Col>
                  <h1 className="has-text-weight-bold is-size-2">{TextContents.industries_index.industries}</h1>
                </Col>
              </Row>
              <Row>
              <Col>
              <Card>
              <Link to="/industries/informationtechnology">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}} className="my-4 py-4">
                  <Card.Title className="font-weight-bold text-dark">INFORMATION TECHNOLOGY</Card.Title>
                  <Card.Text className="text-dark">
                    Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical....
                    <br/>
                    <span className="text-orange px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Card.Text>
                </Card.Body>
              </Link>
                </Card>
              </Col>
              <Col>
              <Card>
              <Link to="/industries/realestate">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}} className="my-4 py-4">
                  <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.real_estate}</Card.Title>
                  <Card.Text className="text-dark">
                  {TextContents.industries_index.real_estate_text}
                    <br/>
                    <span className="text-orange px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>
              </Col>
              <Col>
              <Card>
              <Link to="/industries/manufaturing">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}} className="my-4 py-4">
                  <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.manufaturing}</Card.Title>
                  <Card.Text className="text-dark">
                  {TextContents.industries_index.manufaturing_text}
                    <br/>
                    <span className="text-orange px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>
              </Col>
              <Col>
              <Card>
                <Link to="/industries/retail">
                <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                <Card.Body style={{"minHeight":"400px"}} className="my-4 py-4">
                  <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.retail}</Card.Title>
                  <Card.Text className="text-dark">
                    {TextContents.industries_index.retail_text}
                    <br/>
                    <span className="text-orange px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Card.Text>
                </Card.Body>
                </Link>
              </Card>
              </Col>
            </Row>
            </Container>
          </div>
          <div className="bg-darkblue p-5 text-light">
          <Container fluid={false} >
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
                <h1 className="has-text-weight-bold">{TextContents.industries_index.latest_insights_header}</h1>
              </Col>
              <Col className="col-xs-12 col-md-5">
              {posts[0] ? (
              <Card className="bg-lightblue">
              <Link className="text-black" to={posts[0].node.fields.slug}>
                <Card.Body>
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
              <Link className="text-black" to={posts[1].node.fields.slug}>
                <Card.Body>
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
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery2 {
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
