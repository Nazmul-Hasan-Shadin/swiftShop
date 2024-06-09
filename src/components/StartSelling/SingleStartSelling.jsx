import React from "react";

const SingleStartSelling = ({ heading, text, logo }) => {
  return (
    <div>
      <img  className="w-10 h-10" src={logo} alt="" />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold"></h2>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default SingleStartSelling;
