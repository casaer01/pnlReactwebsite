import React ,{ Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import './Slideshow.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import conca from '../../images/slideImages/msldr1a.png';
import tortillasPic from '../../images/slideImages/msldr2a.png';
import veganPic from '../../images/slideImages/msldr4a.png';
import cupcakePic from '../../images/slideImages/msldr5a.png';



class Slideshow extends Component{
    render() {
        return <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={conca}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tortillasPic}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={veganPic}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cupcakePic}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        
      </Carousel>
    }
}

export default Slideshow;