import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Text = ({ children, color, size, uppercase }) => (
  <p
    className={cn("font-serif", "tracking-wider", {
      "text-white": color === Text.COLOR.WHITE,
      "text-xl": size === Text.SIZE.XL,
      "text-sm": size === Text.SIZE.SM,
      uppercase: uppercase,
    })}
  >
    {children}
  </p>
);

Text.COLOR = Object.freeze({
  WHITE: "white",
  GOLD: "gold",
});

Text.SIZE = Object.freeze({
  SM: "sm",
  XL: "xl",
});

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(Text.COLOR)),
  size: PropTypes.oneOf(Object.values(Text.SIZE)),
  uppercase: PropTypes.bool,
};

Text.defaultProps = {
  color: Text.COLOR.WHITE,
  size: Text.SIZE.XL,
  uppercase: false,
};

export default Text;
