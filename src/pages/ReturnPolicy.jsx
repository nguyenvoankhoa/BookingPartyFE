import { Breadcrumb } from "antd";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";
const ReturnPolicy = () => {
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
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 " id="layout-page">
          <span className="header-page clearfix">
            <h1>Chính sách đổi trả</h1>
          </span>
          <div className="content-page">
            <p>&nbsp;</p>
            <table width="100%" border={3}>
              <tbody>
                <tr style={{ height: 53 }}>
                  <td style={{ height: 53, textAlign: "center" }}>&nbsp;</td>
                  <td style={{ height: 53, textAlign: "left" }}>
                    Sản Phẩm Lỗi (Từ phía nhà cung cấp)
                  </td>
                  <td style={{ height: 53, textAlign: "left" }}>
                    Sản Phẩm Lỗi(Từ phía người sử dụng)
                  </td>
                  <td style={{ height: 53, textAlign: "left" }}>
                    <span>Sản Phẩm Không Lỗi</span>
                  </td>
                </tr>
                <tr style={{ height: 57 }}>
                  <td style={{ height: 57, textAlign: "center" }}>
                    <span>1 – 3 ngày</span>
                  </td>
                  <td style={{ height: 57, textAlign: "left" }}>
                    <span>Đổi mới Trả không thu phí</span>
                  </td>
                  <td style={{ height: 57, textAlign: "left" }}>
                    <span>Không hỗ trợ đổi trả</span>
                  </td>
                  <td style={{ height: 57, textAlign: "left" }}>
                    <span>Đổi mới</span>
                  </td>
                </tr>
                <tr style={{ height: 54 }}>
                  <td style={{ height: 54, textAlign: "center" }}>
                    4 Ngày trở đi
                  </td>
                  <td colSpan={3} style={{ height: 54, textAlign: "left" }}>
                    <span>Không hỗ trợ đổi trả</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                QUY ĐỊNH ĐỔI TRẢ SẢN PHẨM:
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                <strong>
                  <span style={{ color: "rgb(0, 128, 128)" }}>
                    1. Các trường hợp nhận đổi trả:
                  </span>
                </strong>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm mắc lỗi từ phía nhà sản xuất (hỏng hóc, đổ vỡ sản
                phẩm, bị lỗi kĩ thuật…).
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm bị hư hỏng do quá trình vận chuyển của nhân viên giao
                hàng.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm không đúng như yêu cầu của khách hàng do{" "}
                <strong>Cloud</strong> soạn sai sản phẩm hoặc lấy nhầm tông màu
                , loại sản phẩm.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm còn nguyên vỏ, tem nhãn và chưa qua sử dụng.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                <strong>
                  <span style={{ color: "rgb(0, 128, 128)" }}>
                    2. Các trường hợp không áp dụng đổi trả.
                  </span>
                </strong>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm quà tặng, các sảm phẩm trong chương trình giảm giá
                đặc biệt.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm đã quá hạn đổi trả (3 ngày).
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm khách đã thử hoặc qua sử dụng từ 1 lần trở lên.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Bao bì, vỏ hộp sản phẩm bị hư hỏng, trầy xước do lỗi từ phía
                khách hàng.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Sản phẩm không phải mua từ bên <strong>Cloud</strong>.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                <strong>
                  <span style={{ color: "rgb(0, 128, 128)" }}>
                    3. Cách thức đổi trả:
                  </span>
                </strong>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Cloud nhận đổi trả sản phẩm cho khách hàng trong vòng 3 ngày,
                tính kể từ ngày khách hàng mua hoặc nhận được sản phẩm từ bên
                giao hàng.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Khách hàng cần phải thông báo cho nhân viên Cloud lí do đổi
                trả và địa chỉ, số điện thoại liên lạc chính xác để Cloud có thể
                thực hiện quy trình đổi trả sản phẩm một cách nhanh chóng nhất
                theo yêu cầu của quý khách.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                - Cloud quan tâm đến sự hài lòng của khách hàng và mong muốn
                nâng cao chất lượng dịch vụ, Cloud nhận đổi trả sản phẩm miễn
                phí cho khách hàng theo đúng quy định nêu trên . Khách ở khu vực
                Hồ Chí Minh , Cloud khuyến khích khách đến Cửa hàng&nbsp;để nhân
                viên có thể check lại sản phẩm và khách có thể xem &amp; lựa
                chọn đổi sản phẩm đúng theo ý của quý khách. Với các khách tỉnh,
                Quý khách có thể chuyển hàng qua bưu điện &amp; Liên hệ với
                Cloud về sản phẩm đổi, mã bưu điện,… để Cloud có thể xử lý và
                gửi hàng lại sớm nhất khi nhận được sản phẩm.
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                <strong>
                  <span style={{ color: "rgb(0, 128, 128)" }}>
                    4. Thông tin liên hệ và Trung tâm dịch vụ khách hàng:
                  </span>
                </strong>
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                Mọi thắc mắc và ý kiến đóng góp vui lòng liên hệ:
              </span>
            </p>
            <p>
              <span style={{ fontSize: "12pt" }}>
                Hotline : (+84) 868837207 (hoặc Zalo)
              </span>
            </p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
