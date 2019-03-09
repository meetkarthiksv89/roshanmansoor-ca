import React from 'react'
import { Carousel } from 'react-bootstrap';
import Slider1 from '../img/slider1.jpg'
import Slider2 from '../img/slider2.jpg'
import Slider3 from '../img/slider3.png'

const Slider = () => {
   return (
    <Carousel
      controls={false}>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x450"
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x450"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Second slide label</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hidden-sm-down">
          <img
            className="d-block w-100"
            src={Slider3}
            alt="Third slide"
          />
        </div>
        <div className="hidden-sm-up">
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/400x450"
            alt="Third slide"
          />
        </div>
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Third slide label</h1>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   )
}

export default Slider
