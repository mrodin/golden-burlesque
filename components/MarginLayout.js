import React from "react";
import PropTypes from "prop-types";

const MarginLayout = ({ children }) => (
  <div className="flex flex-col mx-96">{children}</div>
);

MarginLayout.propTypes = {};

export default MarginLayout;
