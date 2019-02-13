import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import {Container, Row, Col, Breadcrumb, Card} from 'react-bootstrap'
import OtherStaticPagesRow from '../../components/OtherStaticPagesRow'

export const InformationTechnologyPage = () => {
  return (
    <Layout>
    <div className="bg-darkgray">
    <Container fluid={true} className="px-0">
      <Card className="bg-dark text-white text-center">
        <Card.Img src="https://via.placeholder.com/1200x650" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="page-image-card-header"><h1>Information Technology</h1></Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Container>
    <Container className="mt-3 pb-5">
      <Row>
        <Col>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/industries">Industries</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        </Col>
      </Row>
      <Row className="bg-white">        
        <Col className="py-5 pl-5 pr-4 col-md-8">
          <h1 className="my-3">
            INFORMATION TECHNOLOGY
          </h1>
          <p className="text-secondary">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, writ- ten in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
          <br/>
          <p className="text-secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </Col>
        <Col className="p-0 col-md-4 p-5">
          <h3 className="my-5">KEY NOTES</h3>
          <img src="https://via.placeholder.com/400x300" alt=""/>
          <div className="m-4">
            <ul className="bullet-list text-secondary">
              <li>Banks and mutual banks</li>
              <li>Investment management funds</li>
              <li>Listed and unlisted real estate investment trusts Insurers</li>
              <li>Providers of products and services to the financial</li>
              <li>services industry.</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    <OtherStaticPagesRow
      mainHeader="OTHER INDUSTRIES YOU MAY LIKE"
      link1="/industries/realestate"
      link2="/industries/manufaturing"
      link3="/industries/retail"
      cardHeader1="REAL ESTATE ENGINEERING & CONSTRUCTION"
      cardHeader2="MANUFATURING"
      cardHeader3="RETAIL"
      cardText1="Engineering and construction companies have a need for on-going audits to ascertain all aspects of internal operations meet the standards set by the statutory bodies. We understand this and have dedicated re- sources catering to the needs of this industry..."
      cardText2="We undertake financial manage- ment for business operating in diverse industries. Our goal is to provide effective solutions that enable our clients to to accom- plish their objectives..."
      cardText3="Retail industry has gone through enormous changes after E-Com- merce disrupted the industry as a whole, which enabled as to in- troduce better ERP system with our clients which results in better accounting system, financial
      and tax planning and better management of cash flow..."
    />
    </Layout>
  )
}

export default InformationTechnologyPage

