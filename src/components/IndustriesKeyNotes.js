import React from 'react'
import { Col } from 'react-bootstrap'
import TextContents from '../TextContents';

export default () => (
<Col className="p-0 col-md-4 p-5">
  <h3 className="my-5">{TextContents.industries_key_notes.key_notes}</h3>
  <img src="https://via.placeholder.com/400x300" alt=""/>
  <div className="m-4">
    <ul className="bullet-list text-secondary">
      <li>{TextContents.industries_key_notes.list1}</li>
      <li>{TextContents.industries_key_notes.list2}</li>
      <li>{TextContents.industries_key_notes.list3}</li>
      <li>{TextContents.industries_key_notes.list4}</li>
      <li>{TextContents.industries_key_notes.list5}</li>
    </ul>
  </div>
</Col>
)
