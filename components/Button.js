import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, href, newTab }) => (
  <a
    className="font-serif text-white text-base uppercase border-2 border-white py-6 px-10 rounded-full transition duration-500 hover:bg-white hover:text-black"
    href={href}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
  >
    {children}
  </a>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
};

Button.defaultProps = {
  newTab: false,
};

export default Button;
