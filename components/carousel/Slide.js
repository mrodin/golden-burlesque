import React from "react";
import PropTypes from "prop-types";

const Slide = ({ imgSrc, imgAlt }) => (
  <div className="embla__slide">
    <div className="embla__slide__inner">
      <img className="embla__slide__img" src={imgSrc} alt={imgAlt} />
    </div>
  </div>
);

Slide.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Slide;
