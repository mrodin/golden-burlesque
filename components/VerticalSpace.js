import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const VerticalSpace = ({ size }) => (
  <div
    className={cn({
      "py-2": size === VerticalSpace.SIZE.SM,
      "py-5": size === VerticalSpace.SIZE.LG,
      "py-7": size === VerticalSpace.SIZE.XL,
    })}
  />
);

VerticalSpace.SIZE = Object.freeze({
  SM: "sm",
  LG: "lg",
  XL: "xl",
});

VerticalSpace.propTypes = {
  size: PropTypes.oneOf(Object.values(VerticalSpace.SIZE)),
};

VerticalSpace.defaultProps = {
  size: VerticalSpace.SIZE.LG,
};

export default VerticalSpace;
