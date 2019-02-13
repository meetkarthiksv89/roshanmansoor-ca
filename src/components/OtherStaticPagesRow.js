import React from 'react';
import { Link } from 'gatsby'
import {Container, Row, Col, Card} from 'react-bootstrap'

const OtherStaticPagesRow = (props) => {
  return (
    <div className="bg-dark text-light py-5">
    <Container>
    <Row>
        <Col className="col-md-12 my-3">
        <h1>{props.mainHeader}</h1>
        </Col>
        <Col>
        <Card>
        <Link to={props.link1}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
          <Card.Body style={{"min-height":"290px"}}className="my-4 py-4">
            <Card.Title>{props.cardHeader1}</Card.Title>
            <Card.Text>
              {props.cardText1}
              <br/>
              <Link to={props.link1}>Read More </Link>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col>
        <Card>
        <Link to={props.link2}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
          <Card.Body style={{"min-height":"290px"}}className="my-4 py-4">
            <Card.Title>{props.cardHeader2}</Card.Title>
            <Card.Text>
              {props.cardText2}
              <br/>
              <Link to={props.link2}>Read More </Link>
            </Card.Text>
          </Card.Body>
        </Link>
        </Card>
        </Col>
        <Col>
        <Card>
          <Link to={props.link3}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
          <Card.Body style={{"min-height":"290px"}}className="my-4 py-4">
            <Card.Title>{props.cardHeader3}</Card.Title>
            <Card.Text>
              {props.cardText3}
              <br/>
              <Link to={props.link3}>Read More </Link>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default OtherStaticPagesRow