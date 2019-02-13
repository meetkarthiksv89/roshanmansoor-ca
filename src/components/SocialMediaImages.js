import React from 'react';
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'

export default () => (
  <span>
    <img
      src={facebook}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3"
      alt="Facebook"
    />
      <img
      src={twitter}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3"
      alt="Twitter"
    />
      <img
      src={linkedin}
      height="60"
      width="60"
      className="d-inline-block align-top mx-3"
      alt="Linkedin"
    />
  </span>
)