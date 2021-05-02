import React from "react";

import { Image } from "components";

const Gallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-gallery md:grid-rows-gallery-full gap-1.5">
    <Image src="img/gallery_1.jpg" alt="Golden Burlesque with champagne" />
    <Image src="img/gallery_2.jpg" alt="Golden Burlesque posing in boudoir" />
  </div>
);

export default Gallery;
