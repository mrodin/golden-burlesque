import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const VerticalSpace = ({ size }) => (
  <div
    className={cn({
      "my-2": size === VerticalSpace.SIZE.SM,
      "my-5": size === VerticalSpace.SIZE.LG,
    })}
  />
);

VerticalSpace.SIZE = Object.freeze({
  SM: "sm",
  LG: "lg",
});

VerticalSpace.propTypes = {
  size: PropTypes.oneOf(Object.values(VerticalSpace.SIZE)),
};

VerticalSpace.defaultProps = {
  size: VerticalSpace.SIZE.LG,
};

export default VerticalSpace;
