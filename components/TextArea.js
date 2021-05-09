import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ name, label }) => (
  <>
    <label
      className="font-serif tracking-wider text-lg text-gold"
      htmlFor={name}
    >
      {label}
    </label>
    <br />
    <textarea
      className="block w-full rounded px-3 py-2"
      id={name}
      name={name}
      rows={5}
    />
  </>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextArea;
