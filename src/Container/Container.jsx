import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`container px-3 lg:px-10 mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
