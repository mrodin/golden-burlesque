import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Heading = ({ children, color, size }) => (
  <p
    className={cn("font-serif", "text-center", "uppercase", "leading-tight", {
      "text-white": color === Heading.COLOR.WHITE,
      "text-gold": color === Heading.COLOR.GOLD,
      "text-3xl md:text-6xl": size === Heading.SIZE.XL,
      "text-2xl": size === Heading.SIZE.LG,
    })}
  >
    {children}
  </p>
);

Heading.COLOR = Object.freeze({
  WHITE: "white",
  GOLD: "gold",
});

Heading.SIZE = Object.freeze({
  LG: "md",
  XL: "xl",
});

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(Heading.COLOR)),
  size: PropTypes.oneOf(Object.values(Heading.SIZE)),
};

Heading.defaultProps = {
  color: Heading.COLOR.WHITE,
  size: Heading.SIZE.LG,
};

export default Heading;
