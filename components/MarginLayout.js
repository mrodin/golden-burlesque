import React from "react";

const MarginLayout = ({ children }) => (
  <div className="flex flex-col items-center px-8">
    <div className="max-w-5xl">{children}</div>
  </div>
);

export default MarginLayout;
