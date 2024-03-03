import React from "react";

const Extra = ({ title, content }) => {
  return (
    <div className="row">
      <div className="col-4">
        <h4 className="fw-700">{title}</h4>
      </div>
      <div className="col-8">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Extra;
