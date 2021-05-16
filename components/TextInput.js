import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, label }) => (
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
    />
  </div>
);

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
