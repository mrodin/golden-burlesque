import React from "react";
import PropTypes from "prop-types";

const SubmitButton = React.forwardRef(({ children }) => (
  <button
    className="font-serif text-white text-base text-center uppercase border-2 border-white py-6 px-10 rounded-full transition duration-500 hover:bg-white hover:text-black"
    type="submit"
  >
    {children}
  </button>
));

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubmitButton;
