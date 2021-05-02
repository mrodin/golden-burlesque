import React from "react";
import PropTypes from "prop-types";

const Logo = ({ src, alt }) => (
  <div className="flex justify-center">
    <img src={src} alt={alt} />
  </div>
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
