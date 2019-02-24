import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SocialMediaImages from './components/SocialMediaImages'
import TextContents from '.././TextContents';


export default () => (
  <Col className="col-md-5 p-3 p-sm-5">
    <h4 className="my-sm-5">{TextContents.auditing_stay_connected.stay_connected_us}</h4>
    <img src="https://via.placeholder.com/400x300" alt=""/>
    <div className="m-4">
    <h5>{TextContents.auditing_stay_connected.name}</h5>
    <p>{TextContents.auditing_stay_connected.title}</p>
      <ul className="bullet-list text-secondary">
        <li>{TextContents.auditing_stay_connected.list1}</li>
        <li>{TextContents.auditing_stay_connected.list2}</li>
        <li>{TextContents.auditing_stay_connected.list3}</li>
        <li>{TextContents.auditing_stay_connected.list4}</li>
        <li>{TextContents.auditing_stay_connected.list5}</li>
        <li>{TextContents.auditing_stay_connected.list6}</li>
      </ul>
    </div>
    <Row>
      <Col>
        <SocialMediaImages/>
      </Col>
    </Row>
  </Col>
)