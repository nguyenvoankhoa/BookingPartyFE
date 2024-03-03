import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Table } from "antd";
import T01 from "../assets/T01.jpg";
import T04 from "../assets/T04.jpg";
import T08 from "../assets/T08.png";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Ảnh",
    dataIndex: "image",
    key: "image",
    render: (image) => <img src={image} />,
  },
  {
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Số lượng",
    key: "quantity",
    dataIndex: "quantity",
  },
  {
    title: "Giá tiền",
    key: "price",
    dataIndex: "price",
  },
  {
    title: "",
    key: "delete",
    dataIndex: "delete",
  },
];
const data = [
  {
    key: "1",
    image: T01,
    name: "Trang trí trọn gói backgr siêu anh hùng (T01)",
    quantity: 1,
    price: "567,100đ",
    delete: <i class="fa-solid fa-trash"></i>,
  },
  {
    key: "2",
    image: T04,
    name: "Gói Background mini chủ đề đám mây ( T06)",
    quantity: 1,
    price: "567,100đ",
    delete: <i class="fa-solid fa-trash"></i>,
  },
  {
    key: "3",
    image: T08,
    name: "Trang trí trọn gói backgr mẫu 12 (T12)",
    quantity: 1,
    price: "567,100đ",
    delete: <i class="fa-solid fa-trash"></i>,
  },
  {
    key: "4",
    image: null,
    quantity: <strong>Tổng cộng:</strong>,
    price: <strong>1,234,000đ</strong>,
  },
];
const CartPage = () => {
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
            title: "Giỏ hàng",
          },
        ]}
      />
      <h4>GIỎ HÀNG</h4>
      <Table columns={columns} dataSource={data} />
      <div className="row mb-5">
        <div className="col-6">
          <div>Ghi chú</div>
          <textarea class="form-control"></textarea>
          <div className="mt-3">
            <Link to="/">
              <i class="fa-solid fa-backward">&nbsp;&nbsp;</i>Tiếp tục mua hàng
            </Link>
          </div>
        </div>
        <div className="col-6 ">
          <button
            type="button"
            class="float-right mt-4 p-3 rounded"
            style={{
              backgroundColor: "#de3163",
              color: "white",
              border: "none",
            }}
          >
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
