import React from "react";
import ContainFour from "../components/UI/Body/ContainFour";
import Banner from "../components/UI/Body/Banner";

import T01 from "../assets/T01.jpg";
import T02 from "../assets/T02.jpg";
import T03 from "../assets/T03.jpg";
import T04 from "../assets/T04.jpg";
import T05 from "../assets/T05.png";
import T06 from "../assets/T06.jpg";
import T07 from "../assets/T07.png";
import T08 from "../assets/T08.png";
import Title from "../components/UI/Title";

const LIST_4 = [
  {
    id: 1,
    name: "Balloon Bouquets",
    image_src: T01,
    price: "499,000đ",
  },
  {
    id: 2,
    name: "Brown Bear Balloon",
    image_src: T02,
    price: "499,000đ",
  },
  {
    id: 3,
    name: "Heart Paper String Decor",
    image_src: T03,
    price: "499,000đ",
  },
  {
    id: 4,
    name: "300ct Red Rose Petals",
    image_src: T04,
    price: "499,000đ",
  },
  {
    id: 5,
    name: "Balloon Bouquets",
    image_src: T05,
    price: "499,000đ",
  },
  {
    id: 6,
    name: "Brown Bear Balloon",
    image_src: T06,
    price: "499,000đ",
  },
  {
    id: 7,
    name: "Heart Paper String Decor",
    image_src: T07,
    price: "499,000đ",
  },
  {
    id: 8,
    name: "300ct Red Rose Petals",
    image_src: T08,
    price: "499,000đ",
  },
];

const HomePage = () => {
  return (
    <div className="main_body_content">
      <Banner />
      <Title name="Bong bóng" />
      <ContainFour list_card={LIST_4} fw="fw-600" center="true" fs="1rem" />
      <Title name="TRANG TRÍ PHÔNG" />
      <ContainFour list_card={LIST_4} fw="fw-600" center="true" fs="1rem" />
      <Title name="PHỤ KIỆN BÀN TIỆC" />
      <ContainFour
        title_name="Bong bóng"
        list_card={LIST_4}
        fw="fw-600"
        center="true"
        fs="1rem"
      />
    </div>
  );
};

export default HomePage;
