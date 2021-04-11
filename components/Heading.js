import React from "react";
import PropTypes from "prop-types";

const Heading = ({ children }) => (
  <p className="font-heading text-white text-center uppercase text-6xl leading-tight">
    {children}
  </p>
);

Heading.propTypes = {};

export default Heading;
