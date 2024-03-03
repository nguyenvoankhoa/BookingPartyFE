import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import T01 from "../assets/T01.jpg";
import { Radio } from "antd";
import AddButton from "../components/UI/AddButton";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import { Image } from "antd";
import Handbook from "../components/UI/Body/Handbook";
import Description from "../components/UI/Body/Description";
import FAQ from "../components/UI/Body/FAQ";
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
const tab = [
  {
    label: "Mô tả sản phẩm",
    key: "descrition",
    children: <Description />,
  },
  { label: "Cẩm nang trang trí", key: "handbook", children: <Handbook /> },
  {
    label: "Câu hỏi thường gặp",
    key: "faq",
    children: <FAQ />,
  },
];

const ItemPage = () => {
  const handleSizeChange = (e) => {
    console.log(e.target.value);
  };
  const onChange = (key) => {
    console.log(key);
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
            title: "Sản phẩm abc",
          },
        ]}
      />

      <div className="row">
        <div className="col-3">
          <h5>DANH MỤC</h5>
          <Menu mode="inline" items={items2} className="pl" />
        </div>
        <div className="col-9 js_bet">
          <div className="row mb-5 mt-4">
            <div className="col-5 modal_img">
              <Image src={T01} width="100%" />
            </div>

            <div className="col-6 pl-3">
              <h4 className="mb-4">
                <strong>Combo mini trang trí Blue Silver (T21)</strong>
              </h4>
              <h4 className="mb-4">499,000₫</h4>
              <Radio.Group
                onChange={handleSizeChange}
                defaultValue="large"
                className="mb-4"
              >
                <Radio.Button value="large" className="option">
                  Xanh
                </Radio.Button>
                <Radio.Button value="middle" className="option">
                  Đỏ
                </Radio.Button>
                <Radio.Button value="small" className="option">
                  Hồng
                </Radio.Button>
              </Radio.Group>
              <div className="mb-1">Số lượng</div>
              <div className="input  mb-4">
                <input type="number" min={1} defaultValue={1} />
              </div>
              <AddButton />
              <span>
                &nbsp; hoặc <Link>&nbsp;Mua ngay</Link>
              </span>
            </div>
          </div>
          <Tabs onChange={onChange} type="card" items={tab} />
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
