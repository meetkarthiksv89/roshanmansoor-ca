import React from 'react'
import { Carousel } from 'react-bootstrap';
import Excellence_Banner from '../img/Roshan_Mansoor&Co_Excellence.png';
import Growth_Banner from '../img/Roshan_Mansoor_Growth_Banner.png';
import Confidentiality_Banner from '../img/Roshan_Mansoor_Confidentiality.png';
import Objectivity_Banner from '../img/Roshan_Mansoor_Objectivity.png';
import Trust_Banner from '../img/Roshan_Mansoor_Trust.png';
import Diligence_Banner from '../img/Roshan_Mansoor_Diligence.png';
import Excellence_Banner_Mobile from '../img/Roshan_Mansoor&Co_Excellence_Mobile.png';
import Growth_Banner_Mobile from '../img/Roshan_Mansoor_Growth_Banner_Mobile.png';
import Confidentiality_Banner_Mobile from '../img/Roshan_Mansoor_Confidentiality_Mobile.png';
import Objectivity_Banner_Mobile from '../img/Roshan_Mansoor_Objectivity_Mobile.png';
import Trust_Banner_Mobile from '../img/Roshan_Mansoor_Trust_Mobile.png';
import Diligence_Banner_Mobile from '../img/Roshan_Mansoor_Diligence_Mobile.png';

const Slider = () => {
  return (
    <Carousel
      controls={false}>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Excellence_Banner}
            alt="First slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Excellence_Banner_Mobile}
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption fadeIn">
          <h1 style={{color:"black"}}>Excellence</h1>
          <h4 style={{color:"black"}}>We strive towards building a large team of finance enthusiasts who are equally passionate and qualified as our firm’s current strong team of Chartered Accountants, Company Secretaries, and Certified Management Accountants.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Growth_Banner}
            alt="Second slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Growth_Banner_Mobile}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption fadeIn">
          <h1>Growth</h1>
          <h3>To broaden our horizons towards growing our team exponentially in different spheres of financial services.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Confidentiality_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Confidentiality_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption fadeIn">
          <h1>Confidentiality</h1>
          <h3>We uphold high standards of honesty and promise to handle all our client interactions with 100% confidentiality.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Trust_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Trust_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption fadeIn">
          <h1 style={{color:"black"}}>Trust</h1>
          <h3 style={{color:"black"}}>To build trust with customers through excellent products and services and ethical practices in all our client interactions. </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Objectivity_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Objectivity_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption fadeIn">
          <h1>Diligence</h1>
          <h3>At Roshan Mansoor & Co, our well-qualified team has an excellent eye for details and we take genuine responsibility to conduct every financial service with due diligence. </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Diligence_Banner}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src={Diligence_Banner_Mobile}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption fadeIn">
          <h1>Objectivity</h1>
          <h4>Our approach towards all financial advices and services is solely based on the book of accounts and solid unbiased evidence and not based on our perception, emotion or imagination. </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
