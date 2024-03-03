import React from "react";
import Button from "../Button";
const Hero = ({
  img_src,
  title,
  description,
  button,
  link,
  background,
  color,
}) => {
  return (
    <div className="row d-flex">
      <div className="col-6 p-0">
        <img src={img_src} alt="" width="100%" />
      </div>
      <div
        className="col-6 js al d-flex p-0"
        style={{ backgroundColor: background, color: color }}
      >
        <div className="wrapper">
          <h1 className="fw-600">{title}</h1>
          <p className="text-center">{description}</p>
          <Button link={link} button={button} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
