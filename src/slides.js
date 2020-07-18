import React from 'react';
import { Slide } from 'react-slideshow-image';
import './slides.css';
import 'react-slideshow-image/dist/styles.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import banner from './bbanner.png'

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
          <div className="each-slide">
            <div>
              <img alt='!' src={banner} />
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img alt='!' src={image1} />
            </div>
            <footer>Marble tile floor installation</footer>
          </div>
          <div className="each-slide">
            <div>
              <img alt='!' src={image2} />
            </div>
            <footer>Hardwood floor remodeling</footer>
          </div>
          <div className="each-slide">
            <div>
              <img alt='!' src={image3} />
            </div>
            <footer>Drywall sealing and light installation</footer>
          </div>
      </Slide>
    )
}

export default Slideshow;