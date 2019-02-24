import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Card } from 'react-bootstrap'

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
                  <h1 className="has-text-weight-bold is-size-2">INDUSTRIES</h1>
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
                  <Card.Title className="font-weight-bold text-dark">REAL ESTATE ENGINEERING & CONSTRUCTION</Card.Title>
                  <Card.Text className="text-dark">
                    Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry...
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
                  <Card.Title className="font-weight-bold text-dark">MANUFATURING</Card.Title>
                  <Card.Text className="text-dark">
                    We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives...
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
                  <Card.Title className="font-weight-bold text-dark">RETAIL</Card.Title>
                  <Card.Text className="text-dark">
                  Retail industry has gone through enormous changes after E-Com- merce disrupted the industry as a whole, which enabled as to in- troduce better ERP system with our clients which results in better accounting system, financial
                  and tax planning and better management of cash flow
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
                <h1 className="has-text-weight-bold">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a</h1>
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
