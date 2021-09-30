import React from "react";

const MarginLayout = ({ children }) => (
  <div className="flex justify-center px-3 md:px-8">
    <div className="w-5xl">{children}</div>
  </div>
);

export default MarginLayout;
