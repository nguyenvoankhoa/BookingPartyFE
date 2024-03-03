import React from "react";
import { HomeOutlined } from "@ant-design/icons";

import { Breadcrumb, Menu } from "antd";
import ContainThree from "../components/UI/Body/ContainThree";
import T01 from "../assets/T01.jpg";
import T02 from "../assets/T02.jpg";
import T03 from "../assets/T03.jpg";
import T04 from "../assets/T04.jpg";
import T05 from "../assets/T05.png";
import T06 from "../assets/T06.jpg";
import T07 from "../assets/T07.png";
import T08 from "../assets/T08.png";
import { Pagination } from "antd";
import { Select } from "antd";

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
const items2 = [
  {
    key: 1,
    label: "COMBO TRANG TRÍ",
    children: [
      { key: 1.1, label: "Combo mini trang trí Blue Silver (T21)" },
      { key: 1.2, label: "Combo mini trang trí Hàn quốc mẫu 22 (T22)" },
      { key: 1.3, label: "Combo mini trang trí Hàn quốc mẫu 23 (T23)" },
      { key: 1.4, label: "Combo mini trang trí Sunshine (T25)" },
    ],
  },
  {
    key: 2,
    label: "BONG BÓNG",
    children: [
      { key: 2.1, label: "Bóng 60cm Pastel (T26)" },
      { key: 2.2, label: "Bóng Nhũ  (10 Trái) (T27)" },
      { key: 2.3, label: "Bóng nhôm (T28)" },
      { key: 2.4, label: "Bóng Confetti (10 trái) (T29)" },
    ],
  },

  {
    key: 3,
    label: "TRANG TRÍ PHÔNG NỀN",
    children: [
      { key: 3.1, label: "Combo mini trang trí Blue Silver (T21)" },
      { key: 3.2, label: "Combo mini trang trí Hàn quốc mẫu 22 (T22)" },
      { key: 3.3, label: "Combo mini trang trí Hàn quốc mẫu 23 (T23)" },
      { key: 3.4, label: "Combo mini trang trí Sunshine (T25)" },
    ],
  },
  {
    key: 4,
    label: "PHỤ KIỆN BÀN TIỆC",
    children: [
      { key: 4.1, label: "Combo mini trang trí Blue Silver (T21)" },
      { key: 4.2, label: "Combo mini trang trí Hàn quốc mẫu 22 (T22)" },
      { key: 4.3, label: "Combo mini trang trí Hàn quốc mẫu 23 (T23)" },
      { key: 4.4, label: "Combo mini trang trí Sunshine (T25)" },
    ],
  },
  {
    key: 5,
    label: "ĐỒ CHƠI PARTY",
    children: [
      { key: 5.1, label: "Combo mini trang trí Blue Silver (T21)" },
      { key: 5.2, label: "Combo mini trang trí Hàn quốc mẫu 22 (T22)" },
      { key: 5.3, label: "Combo mini trang trí Hàn quốc mẫu 23 (T23)" },
      { key: 5.4, label: "Combo mini trang trí Sunshine (T25)" },
    ],
  },
];
const DecoratePage = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="main_body_content">
      <Breadcrumb
        className="mt-2 mb-5"
        items={[
          {
            href: "/",
            title: <HomeOutlined />,
          },
          {
            href: "",
            title: <span>Danh mục</span>,
          },
          {
            title: "Trang trí",
          },
        ]}
      />

      <div className="row">
        <div className="col-3">
          <h5>DANH MỤC</h5>
          <Menu mode="inline" items={items2} className="pl" />
        </div>
        <div className="col-9 js_bet">
          <div className="row mb-2">
            <div className="col-6">
              <span>TRANG TRÍ</span>
            </div>
            <div className="col-6">
              <div className="sort-collection">
                <span>Sắp xếp theo &nbsp;</span>
                <Select
                  defaultValue="Mới nhất"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: "Mới nhất", label: "Mới nhất" },
                    { value: "Giá: Tăng dần", label: "Giá: Tăng dần" },
                    { value: "Giá: Giảm dần", label: "Giá: Giảm dần" },
                  ]}
                />
              </div>
            </div>
          </div>

          <ContainThree
            list_card={LIST_4}
            fw="fw-600"
            center="true"
            fs="1rem"
          />
          <Pagination
            defaultCurrent={1}
            total={50}
            className="js d-flex mt-3 mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default DecoratePage;
