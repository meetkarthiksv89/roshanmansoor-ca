import React from 'react';
import { Link } from 'gatsby'
import {Container, Row, Col, Card} from 'react-bootstrap'

const OtherStaticPagesRow = (props) => {
  return (
    <div className="bg-dark text-light py-sm-5 py-3">
    <Container>
    <Row>
        <Col className="col-md-12 my-3">
        <h1>{props.mainHeader}</h1>
        </Col>
        <Col xs={12} sm={4}>
        <Card className="bg-dark box-shadow-none">
        <Link to={props.link1}>
          <Card.Img variant="top" src={props.cardImage1} />
          <Card.Body style={{"minHeight":"290px"}} className="my-4 py-4">
            <Card.Title className="font-weight-bold text-white">{props.cardHeader1}</Card.Title>
            <Card.Text className="text-white">
              {props.cardText1}
              <br/>
              <span className="text-orange font-weight-bold px-sm-3 py-1 float-right" to={props.link1}>Read More </span>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
        </Col>
        <Col xs={12} sm={4}>
        <Card className="bg-dark box-shadow-none">
        <Link to={props.link2}>
          <Card.Img variant="top" src={props.cardImage2} />
          <Card.Body style={{"minHeight":"290px"}} className="my-4 py-4">
            <Card.Title className="font-weight-bold text-white">{props.cardHeader2}</Card.Title>
            <Card.Text className="text-white">
              {props.cardText2}
              <br/>
              <span className="text-orange font-weight-bold px-sm-3 py-1 float-right" to={props.link2}>Read More </span>
            </Card.Text>
          </Card.Body>
        </Link>
        </Card>
        </Col>
        <Col xs={12} sm={4}>
        <Card className="bg-dark box-shadow-none">
          <Link to={props.link3}>
          <Card.Img variant="top" src={props.cardImage3} />
          <Card.Body style={{"minHeight":"290px"}} className="my-4 py-4">
            <Card.Title className="font-weight-bold text-white">{props.cardHeader3}</Card.Title>
            <Card.Text className="text-white">
              {props.cardText3}
              <br/>
              <span className="text-orange font-weight-bold px-sm-3 py-1 float-right" to={props.link3}>Read More </span>
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