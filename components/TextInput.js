import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label, required }) => (
  <div>
    <label
      className="font-serif tracking-wider text-lg text-gold"
      htmlFor={name}
    >
      {label}
    </label>
    <br />
    <input
      className="block w-full rounded px-3 py-2"
      type="text"
      id={name}
      name={name}
      required={required}
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  required: false,
};

export default TextInput;
