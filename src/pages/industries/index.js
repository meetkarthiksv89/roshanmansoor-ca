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
            <Card.Img 
            className="hidden-sm-down"
            src="https://via.placeholder.com/1200x650" 
            alt="Card image" />
            <Card.Img 
            className="hidden-sm-up"
            src="https://via.placeholder.com/400x450" 
            alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="page-image-card-header"><h1>INDUSTRIES</h1></Card.Title>
            </Card.ImgOverlay>
          </Card>
          <div>
          <Container fluid={true} className="p-sm-5 p-2">
            <Row>
              <Col xs={12} sm={4} className="mb-5">
                <Card>
                <Link to="/industries/informationtechnology">
                  <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                  <Card.Body style={{"minHeight":"260px"}} className="my-3 py-2">
                    <Card.Title className="font-weight-bold text-dark">INFORMATION TECHNOLOGY</Card.Title>
                    <Card.Text className="text-dark">
                      Information Technology is the most dynamic industry of today with constant transformations, growth, mergers and acquisi- tions. Our expert team caters to this industry by keeping in mind the constantly changing dynam- ics of the companies operating in this vertical....
                      <br/>
                    </Card.Text>
                  </Card.Body>
                  <span className="text-orange-black px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                </Link>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-5">
                <Card>
                <Link to="/industries/realestate">
                  <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                  <Card.Body style={{"minHeight":"260px"}} className="my-3 py-2">
                    <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.real_estate}</Card.Title>
                    <Card.Text className="text-dark">
                    {TextContents.industries_index.real_estate_text}
                      <br/>
                    </Card.Text>
                  </Card.Body>
                  <span className="text-orange-black px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Link>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-5">
                <Card>
                <Link to="/industries/manufacturing">
                  <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                  <Card.Body style={{"minHeight":"260px"}} className="my-3 py-2">
                    <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.manufacturing}</Card.Title>
                    <Card.Text className="text-dark">
                    {TextContents.industries_index.manufacturing_text}
                      <br/>
                    </Card.Text>
                  </Card.Body>
                  <span className="text-orange-black px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Link>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-5">
                <Card>
                  <Link to="/industries/retail">
                  <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                  <Card.Body style={{"minHeight":"260px"}} className="my-3 py-2">
                    <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.retail}</Card.Title>
                    <Card.Text className="text-dark">
                      {TextContents.industries_index.retail_text}
                      <br/>
                    </Card.Text>
                  </Card.Body>
                  <span className="text-orange-black px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Link>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-5">
                <Card>
                  <Link to="/industries/biotechnology">
                  <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                  <Card.Body style={{"minHeight":"260px"}} className="my-3 py-2">
                    <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.bio_technology}</Card.Title>
                    <Card.Text className="text-dark">
                      {TextContents.industries_index.bio_technology_text}
                      <br/>
                    </Card.Text>
                  </Card.Body>
                  <span className="text-orange-black px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Link>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-5">
                <Card>
                  <Link to="/industries/media">
                  <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
                  <Card.Body style={{"minHeight":"260px"}} className="my-3 py-2">
                    <Card.Title className="font-weight-bold text-dark">{TextContents.industries_index.media}</Card.Title>
                    <Card.Text className="text-dark">
                      {TextContents.industries_index.media_text}
                      <br/>
                    </Card.Text>
                  </Card.Body>
                  <span className="text-orange-black px-3 py-2 font-weight-bold mt-2 float-right"> Read More </span>
                  </Link>
                </Card>
              </Col>
            </Row>
            </Container>
          </div>
          <div className="bg-darkblue p-sm-5 p-2 text-light">
          <Container fluid={false} >
              <Row>
                <Col>
                  <h1 className="has-text-weight-bold is-size-2">LATEST INSIGHTS</h1>
                </Col>
                <Col>
                  <h4 className="d-flex justify-content-end">SEE ALL LATEST INSIGHTS</h4>
                </Col>
              </Row>
              <Row className="mb-3">
              {posts.length > 0 && posts
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
