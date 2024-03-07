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
import T26 from "../assets/Bong bóng/T26.jpg";
import T27 from "../assets/Bong bóng/T27.jpg";
import T28 from "../assets/Bong bóng/T28.jpg";
import T29 from "../assets/Bong bóng/T29.jpg";
import T30 from "../assets/Bong bóng/T30.jpg";
import T36 from "../assets/Phụ kiện bàn tiệc/T36.jpg";
import T37 from "../assets/Phụ kiện bàn tiệc/T37.jpg";
import T39 from "../assets/Phụ kiện bàn tiệc/T39.jpg";
import T21 from "../assets/Combo/T21.png";
import T22 from "../assets/Combo/T22.jpg";
import T23 from "../assets/Combo/T23.jpg";
import T24 from "../assets/Combo/T24.jpg";


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
const LIST_4Balloon = [
  {
    id: 1,
    name: "Balloon Bouquets",
    image_src: T26,
    price: "15,000đ",
  },
  // {
  //   id: 2,
  //   name: "Brown Bear Balloon",
  //   image_src: T27,
  //   price: "20,000đ",
  // },
  {
    id: 3,
    name: "Mickey Balloon",
    image_src: T28,
    price: "30,000đ",
  },
  {
    id: 4,
    name: "300ct Red Rose Petals",
    image_src: T29,
    price: "40,000đ",
  },
  {
    id: 5,
    name: "Balloon Bouquets",
    image_src: T30,
    price: "90,000đ",
  },
];
const LIST_4Decor = [
  {
    id: 1,
    name: "Balloon Bouquets",
    image_src: T36,
    price: "45,000đ",
  },
  {
    id: 2,
    name: "Brown Bear Balloon",
    image_src: T37,
    price: "45,000đ",
  },
  {
    id: 3,
    name: "Heart Paper String Decor",
    image_src: T39,
    price: "150,000đ",
  },
  {
    id: 4,
    name: "300ct Red Rose Petals",
    image_src: T04,
    price: "30,000đ",
  },
  
];
const LIST_4Combo = [
  {
    id: 1,
    name: "Combo 1",
    image_src: T21,
    price: "44,000,000đ",
  },
  {
    id: 2,
    name: "Combo 2",
    image_src: T22,
    price: "48,300,000đ",
  },
  {
    id: 3,
    name: "Combo 3",
    image_src: T23,
    price: "9,600,000đ",
  },
  {
    id: 4,
    name: "Combo 4",
    image_src: T24,
    price: "30,000,000đ",
  },
  
];

const HomePage = () => {
  return (
    <div className="main_body_content">
      <Banner />
      <Title name="Bong bóng" />
      <ContainFour list_card={LIST_4Balloon} fw="fw-600" center="true" fs="1rem" />
      <Title name="TRANG TRÍ PHÔNG" />
      <ContainFour list_card={LIST_4} fw="fw-600" center="true" fs="1rem" />
      <Title name="PHỤ KIỆN BÀN TIỆC" />
      <ContainFour
        list_card={LIST_4Decor}
        fw="fw-600"
        center="true"
        fs="1rem"
      />
      <Title name="COMBO TỔ CHỨC SINH NHẬT TRỌN GÓI" />
      <ContainFour list_card={LIST_4Combo} fw="fw-600" center="true" fs="1rem" />
    </div>
  );
};

export default HomePage;
