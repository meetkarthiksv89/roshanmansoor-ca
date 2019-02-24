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
        <Col xs={12} sm={4}>
        <Card className="bg-dark box-shadow-none">
        <Link to={props.link1}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
          <Card.Body style={{"min-height":"290px"}} className="my-4 py-4">
            <Card.Title className="font-weight-bold">{props.cardHeader1}</Card.Title>
            <Card.Text>
              {props.cardText1}
              <br/>
              <Link className="text-orange font-weight-bold px-sm-3 py-1 float-right" to={props.link1}>Read More </Link>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col xs={12} sm={4}>
        <Card className="bg-dark box-shadow-none">
        <Link to={props.link2}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
          <Card.Body style={{"min-height":"290px"}} className="my-4 py-4">
            <Card.Title className="font-weight-bold">{props.cardHeader2}</Card.Title>
            <Card.Text>
              {props.cardText2}
              <br/>
              <Link className="text-orange font-weight-bold px-sm-3 py-1 float-right" to={props.link2}>Read More </Link>
            </Card.Text>
          </Card.Body>
        </Link>
        </Card>
        </Col>
        <Col xs={12} sm={4}>
        <Card className="bg-dark box-shadow-none">
          <Link to={props.link3}>
          <Card.Img variant="top" src="https://via.placeholder.com/250x220" />
          <Card.Body style={{"min-height":"290px"}} className="my-4 py-4">
            <Card.Title className="font-weight-bold">{props.cardHeader3}</Card.Title>
            <Card.Text>
              {props.cardText3}
              <br/>
              <Link className="text-orange font-weight-bold px-sm-3 py-1 float-right" to={props.link3}>Read More </Link>
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