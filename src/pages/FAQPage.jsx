import { Breadcrumb } from "antd";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";

const FAQPage = () => {
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
            title: <span>Chính sách</span>,
          },
        ]}
      />
      <div className="col-md-12 col-sm-12 col-xs-12 " id="layout-page">
        <span className="header-page clearfix">
          <h1>Câu hỏi thường gặp</h1>
        </span>
        <div className="content-page">
          <p>&nbsp;</p>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "20pt" }}>
              <strong>
                <span style={{ color: "rgb(0, 128, 128)" }}>
                  Tổng hợp các câu hỏi thường gặp của khách hàng tại Glow Party
                  Store
                </span>
              </strong>
            </span>
          </p>
          <p style={{ textAlign: "center" }}>&nbsp;</p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "15pt", color: "rgb(0, 128, 128)" }}>
              <strong>I. Glow có chính sách giao hàng tận nơi không?</strong>
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "12pt", color: "rgb(0, 0, 0)" }}>
              Hiện Glow có chính sách giao hàng tận nơi.
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "12pt", color: "rgb(0, 0, 0)" }}>
              - Với hàng hóa sản phẩm mua sẽ giao tới các khu vực thuộc lãnh thổ
              Việt Nam
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "12pt", color: "rgb(0, 0, 0)" }}>
              - Với sản phẩm cho thuê chỉ phục vụ trong phạm vi TP.HCM
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "12pt", color: "rgb(0, 0, 0)" }}>
              Chi tiết cụ thể cho biểu phí cùng thời gian giao hàng quý khách có
              thể tham khảo trực tiếp tại{" "}
              <span
                style={{
                  textDecoration: "underline",
                  color: "rgb(0, 128, 128)",
                }}
              >
                <em>
                  <strong>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="chinh-sach-giao-hang"
                      style={{
                        color: "rgb(0, 128, 128)",
                        textDecoration: "underline",
                      }}
                      href="https://glowstore.vn/pages/chinh-sach-giao-hang"
                    >
                      đây
                    </a>
                  </strong>
                </em>
              </span>
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "12pt", color: "rgb(0, 0, 0)" }}>
              <span style={{ fontSize: "15pt", color: "rgb(0, 128, 128)" }}>
                <strong>
                  II. Ngoài bán đồ trang trí, Glow có cung cấp các dịch vụ trang
                  trí Setup tiệc trọn gói không?
                </strong>
              </span>
            </span>
          </p>
          <p style={{ textAlign: "left" }}>
            <span style={{ fontSize: "12pt", color: "rgb(0, 0, 0)" }}>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                Hiện Glow có triển khai dịch vụ trang trí Setup tiệc sinh nhật
                trọn gói cũng như tiệc kỷ niệm, khai trương ..vv
              </span>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              Để đáp ứng nhu cầu ngày càng đa dạng của khách hàng, Glow đã triển
              khai việc Trang trí tiệc trọn gói ra làm 2 dạng:
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              <b>1. Gói trang trí nhanh&nbsp;</b>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              - Là hình thức trang trí tiệc theo mẫu có sẵn hoặc sử dụng các sản
              phẩm đã có sẵn, chỉ cần ít thời gian chuẩn bị do không sử dụng
              hoặc ít các yếu tố liên quan đến thiết kế riêng.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              <b>2. Gói trang trí thiết kế riêng</b>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              - Là các gói trang trí đề cao tính cá nhân hóa, có sử dụng các sản
              phẩm được thiết kế riêng ứng với từng chủ đề, tone màu theo yêu
              cầu cụ thể của chủ tiệc. Đó có thể là từng chi tiết nhỏ trên bàn
              trang trí Gallery, có thể là Backdrop được thiết kế riêng, cho đến
              các phụ kiện khác như mô hình Pinata, cổng bong bóng...
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              Chi tiết về hình thức dịch vụ trang trí tiệc trọn gói của Glow,
              quý khách có thể tham khảo thông tin chi tiết ở{" "}
              <span
                style={{
                  textDecoration: "underline",
                  color: "rgb(0, 128, 128)",
                }}
              >
                <em>
                  <strong>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title="trang-tri-va-setup-tiec-tron-goi"
                      style={{
                        color: "rgb(0, 128, 128)",
                        textDecoration: "underline",
                      }}
                      href="https://glowstore.vn/pages/trang-tri-va-setup-tiec-tron-goi"
                    >
                      đây
                    </a>
                  </strong>
                </em>
              </span>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              <span style={{ fontSize: "15pt", color: "rgb(0, 128, 128)" }}>
                <strong>
                  III. Tôi có thể đặt hàng hoặc dịch vụ qua các kênh nào?
                </strong>
              </span>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              Hiện có các kênh sau Quý khách có thể liên hệ trực tiếp
              Glow&nbsp;để được hướng dẫn đặt hàng.
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>- Hotline : 0934.688.777</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>- Zalo : 0934.688.777</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              - Fanpage :&nbsp;
              <a href="https://www.facebook.com/GlowPartyStore/">
                https://www.facebook.com/GlowPartyStore/
              </a>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              - Website :&nbsp;
              <a href="https://glowstore.vn/">https://glowstore.vn</a>
            </span>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontSize: "12pt" }}>
              - Email : glowpartystore@gmail.com
            </span>
          </p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
