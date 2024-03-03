import React from "react";
import { Carousel } from "antd";
import T01 from "../../../assets/T01.jpg";
import T02 from "../../../assets/T02.jpg";
import T03 from "../../../assets/T03.jpg";
import T04 from "../../../assets/T04.jpg";
const Banner = () => {
  return (
    <div className="main_body_content">
      <Carousel autoplay autoplaySpeed={2000}>
        <img src={T01} className="banner" />
        <img src={T02} className="banner" />
        <img src={T03} className="banner" />
        <img src={T04} className="banner" />
      </Carousel>
    </div>
  );
};

export default Banner;
