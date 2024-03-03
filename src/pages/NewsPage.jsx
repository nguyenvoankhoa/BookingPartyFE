import { Breadcrumb } from "antd";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import T01 from "../assets/T01.jpg";
import T02 from "../assets/T02.jpg";
import T03 from "../assets/T03.jpg";
import T04 from "../assets/T04.jpg";

const ARR = [
  {
    img: T01,
    title: "Dịch vụ trang trí cầu hôn, trang trí tình nhân 14/2",
    content:
      "Mèo Hello Kitty xuất hiện như thế nào, tại sao cô nàng lại được nhiều người yêu thích trong khoảng thời gian dài như vậy?I. Cô mèo Hello Kitty là ai?Bây giờ khi nhắc đến nhân vật Hello Kitty gần...",

    date: "18/07/2018",
    key: "1",
  },
  {
    img: T02,
    title: "Dịch vụ trang trí cầu hôn, trang trí tình nhân 14/2",
    content:
      "Mèo Hello Kitty xuất hiện như thế nào, tại sao cô nàng lại được nhiều người yêu thích trong khoảng thời gian dài như vậy?I. Cô mèo Hello Kitty là ai?Bây giờ khi nhắc đến nhân vật Hello Kitty gần...",

    date: "18/07/2018",
    key: "2",
  },
  {
    img: T03,
    title: "Dịch vụ trang trí cầu hôn, trang trí tình nhân 14/2",
    content:
      "Mèo Hello Kitty xuất hiện như thế nào, tại sao cô nàng lại được nhiều người yêu thích trong khoảng thời gian dài như vậy?I. Cô mèo Hello Kitty là ai?Bây giờ khi nhắc đến nhân vật Hello Kitty gần...",

    date: "18/07/2018",
    key: "3",
  },
];

const NewsPage = () => {
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
            title: <span>Tin tức</span>,
          },
        ]}
      />

      {ARR.map((i) => (
        <div className="row mb-3" key={i.key}>
          <div className="col-4 news_img">
            <img src={i.img} width="100%" alt="News" />
          </div>
          <div className="col-8 pl-5">
            <h3>{i.title}</h3>
            <i className="fa-solid fa-calendar-days"></i>
            <span>&nbsp;{i.date}</span>
            <p>{i.content}</p>
            <button
              type="button"
              className="mt-4 p-3 rounded"
              style={{
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid #000000",
              }}
            >
              Xem tiếp&nbsp;<i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
