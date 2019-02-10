import React from 'react'
import { Carousel } from 'react-bootstrap';

const Slider = () => {
   return (
    <Carousel
      controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x450"
          alt="First slide"
        />
        <Carousel.Caption className="custom-carousel-caption">
          <h1>First slide label</h1>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x450"
          alt="Second slide"
        />
        <Carousel.Caption className="custom-carousel-caption">
          <h1>Second slide label</h1>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/1200x450"
          alt="Third slide"
        />

        <Carousel.Caption className="custom-carousel-caption">
          <h1>Third slide label</h1>
          <h3>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   )
}

export default Slider
