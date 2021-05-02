import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="object-cover h-full" />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
