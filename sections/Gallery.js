import React from "react";

import { Carousel, Slide } from "components";

const Gallery = () => (
  <Carousel>
    <Slide
      imgSrc="img/gallery-1.jpg"
      imgAlt="Golden Burlesque with champagne"
    />
    <Slide
      imgSrc="img/gallery-2.jpg"
      imgAlt="Golden Burlesque posing in boudoir"
    />
    <Slide
      imgSrc="img/gallery-3.jpg"
      imgAlt="Golden Burlesque posing in boudoir"
    />
    <Slide
      imgSrc="img/gallery-4.jpg"
      imgAlt="Golden Burlesque posing in boudoir"
    />
  </Carousel>
);

export default Gallery;
