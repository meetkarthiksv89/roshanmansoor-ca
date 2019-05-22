import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Card} from 'react-bootstrap'

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Container>
          <Row className="mb-5 mt-3">
          {posts
            .map(({ node: post }) => (
              <Col xs={6} sm={4} key={post.id}>
                <Card className="bg-dark box-shadow-none">
                  <Link to={post.fields.slug}>
                    <Card.Body style={{minHeight:"450px"}}className="my-4 py-4">
                      <Card.Title>{post.frontmatter.title} {post.frontmatter.date}</Card.Title>
                      <Card.Text>
                      {post.excerpt}
                        <br/>
                        <Link to={post.fields.slug} className="text-orange font-weight-bold px-sm-3 py-1 float-right">Read More </Link>
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    )
  }
}

// export const pageQuery = graphql`
//   query IndexQuery3 {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] },
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `
