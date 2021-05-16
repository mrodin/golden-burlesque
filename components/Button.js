import React from "react";
import PropTypes from "prop-types";

const Button = React.forwardRef(({ children, href, newTab }, ref) => (
  <a
    className="font-serif text-white text-base text-center uppercase border-2 border-white py-6 px-10 rounded-full transition duration-500 hover:bg-white hover:text-black"
    href={href}
    target={newTab ? "_blank" : undefined}
    rel={newTab ? "noopener noreferrer" : undefined}
    ref={ref}
  >
    {children}
  </a>
));

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  newTab: PropTypes.bool,
};

Button.defaultProps = {
  newTab: false,
  href: undefined,
};

export default Button;
