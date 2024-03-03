import { Breadcrumb } from "antd";
import React from "react";
import { HomeOutlined } from "@ant-design/icons";

const DeliPolicyPage = () => {
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
            <h1>Chính sách giao hàng</h1>
          </span>
          <div className="content-page">
            <div className="title_fck " style={{ textAlign: "center" }}>
              <span style={{ fontSize: 26 }}>
                <span style={{ color: "rgb(51, 102, 255)" }}>
                  <strong>Chính sách giao hàng tại Cloud Store</strong>
                </span>
              </span>
            </div>
            <div className="title_fck ">&nbsp;</div>
            <div className="">
              <p>
                <span style={{ fontSize: 15 }}>
                  <strong>I Giao nhanh, giao hỏa tốc&nbsp;</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  - Khu vực&nbsp;
                  <strong>nội thành thành phố Hồ Chí Minh</strong>
                  :&nbsp;Freeship cho đơn hàng gửi giao thông thường (hàng gọn
                  nhẹ)&nbsp;trên 600.000đ. Với các đơn hàng cồng kềnh cần gửi
                  bằng ô tô, Glow sẽ hỗ trợ phí Ship tối đa 30k cho khách hàng.
                  Các đơn hàng dưới 600.000đ&nbsp;sẽ tính theo giá App (Ahamove,
                  Lalamove, ...)
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  - Khu vực&nbsp;
                  <strong>ngoại&nbsp;thành thành phố Hồ Chí Minh</strong>,{" "}
                  <strong>tỉnh thành khác</strong>: Đặt các đơn vị vận chuyển
                  sẵn sàng giao xa (Grab Bike, Lalamove...) hoặc gửi cho các
                  chành xe đi tỉnh. Hỗ trợ&nbsp;tối đa 50k cho các đơn hàng giá
                  trị trên 1.000.000đ.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  <strong>II Giao thường</strong>
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  - Khu vực<strong>&nbsp;thành phố Hồ Chí Minh</strong>
                  :&nbsp;Freeship cho đơn hàng gửi giao thông thường (hàng gọn
                  nhẹ)&nbsp;trên 600.000đ, tối đa 30k. Lưu ý phương thức giao
                  thường không sử dụng được cho các&nbsp;đơn hàng cồng
                  kềnh.&nbsp;Các đơn hàng dưới 600.000đ&nbsp;sẽ tính theo giá
                  App (Topship, Giaohangtietkiem, ...)
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  - Khu vực&nbsp;
                  <strong>ngoại&nbsp;thành thành phố Hồ Chí Minh</strong>,{" "}
                  <strong>tỉnh thành khác</strong>: Đặt các đơn vị vận chuyển
                  sẵn sàng giao xa (Topship, Giaohangtietkiem...), nếu là hàng
                  cồng kềnh sẽ&nbsp;gửi cho các chành xe đi tỉnh. Hỗ trợ tối đa
                  50k cho các đơn hàng giá trị trên 1.000.000đ.
                </span>
              </p>
              <p>
                <strong>
                  <span style={{ color: "#c0392b" }}>
                    <span style={{ fontSize: 15 }}>Lưu ý:&nbsp;</span>
                  </span>
                </strong>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  a.&nbsp;Cloud&nbsp;sẽ&nbsp;
                  <strong>
                    giao hàng trong thời gian từ 24h đến 48h giờ với chế độ giao
                    thường&nbsp;(khu vực nội thành Hồ Chí Minh và Hà Nội)&nbsp;
                  </strong>
                  làm kể từ lúc quý khách đặt hàng.&nbsp; Tuy nhiên, vẫn có
                  những sự chậm trễ do nguyên nhân khách quan (lễ, tết, địa chỉ
                  nhận hàng khó tìm, sự chậm trễ từ dịch vụ chuyển phát…), rất
                  mong bạn có thể thông cảm vì những lý do ngoài sự chi phối của
                  chúng tôi.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  b. Nếu quý khách không thể có mặt trong đợt nhận hàng thứ
                  nhất, Glow sẽ liên lạc lại với quý khách để sắp xếp thời gian
                  giao hàng hoặc hướng dẫn bạn đến công ty vận chuyển để nhận
                  hàng.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  c. Nếu việc giao và nhận hàng không thành công do không thể
                  liên lạc được với quý khách trong vòng 3 ngày, chúng tôi sẽ
                  thông báo đến bạn về việc hủy đơn hàng và hoàn trả các chi phí
                  mà bạn đã thanh toán trong vòng 30 ngày.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  d. Glow&nbsp;sẽ báo ngay đến bạn nếu có sự chậm trễ khi giao
                  hàng, nhưng trong phạm vi pháp luật cho phép, chúng tôi sẽ
                  không chịu trách nhiệm cho bất cứ tổn thất nào, các khoản nợ,
                  thiệt hại hoặc chi phí phát sinh từ việc giao hàng trễ.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  e. Glow lưu ý với bạn rằng có một số địa điểm mà dịch vụ
                  chuyển phát không thể giao hàng được. Khi đó, Glow sẽ thông
                  báo đến bạn qua thông tin liên lạc mà bạn đã cung cấp khi đặt
                  hàng. Chúng tôi có thể sắp xếp giao hàng đến một địa chỉ khác
                  thuận tiện hơn hoặc tiến hành hủy đơn hàng.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  f. Khi nhận sản phẩm, quý khách vui lòng kiểm tra kỹ sản phẩm
                  trước khi ký nhận hàng hóa. Bạn nên giữ lại biên lai mua hàng
                  để làm bằng chứng trong trường hợp muốn liên hệ lại về sản
                  phẩm đã mua.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  g. Quý khách nên cẩn thận khi sử dụng vật sắc nhọn để mở sản
                  phẩm vì bạn có thể làm hỏng sản phẩm. Glow không chịu bất cứ
                  rủi ro, tổn thất, hư hại về sản phẩm sau khi bạn đã kiểm tra
                  kỹ lưỡng và ký nhận sản phẩm.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  h. Sản phẩm được đóng gói theo tiêu chuẩn đóng gói của Glow
                  Party. Nếu bạn có nhu cầu đóng gói đặc biệt khác, vui lòng
                  cộng thêm phí phát sinh.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  i. Trong trường hợp những đơn hàng đã xác nhận của quý khách
                  được đặt ở những ngày gần nhau, Cloud&nbsp;sẽ cố gắng bổ sung
                  vào đơn hàng và giao chung một lần cho quý khách.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  j. Mọi thông tin về việc thay đổi hay hủy bỏ đơn hàng đề nghị
                  quý khách thông báo sớm để Cloud có thể hủy hoặc
                  chỉnh&nbsp;sửa đơn hàng cho bạn.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  k. Chỉ nhận đổi trả sản phẩm khi lỗi đến từ nhà sản xuất hoặc
                  bị hư hỏng trong quá trình vận chuyển với điều kiện không quá
                  3&nbsp;ngày sau khi giao hàng.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  l. Cloud&nbsp;nhận giao sản phẩm đến tận tay khách hàng và
                  thanh toán khi nhận hàng hoặc quý khách hàng có thể chọn
                  phương thức thanh toán chuyển khoản&nbsp;khi đặt hàng (nếu
                  muốn).&nbsp;
                  <strong>Lưu ý</strong>&nbsp;các đơn hàng có phụ kiện thiết kế
                  riêng theo yêu cầu, cần phối cảnh demo sẽ cần có khoản cọc
                  trước 50% giá trị đơn hàng.
                </span>
              </p>
              <p>
                <span style={{ fontSize: 15 }}>
                  Mọi thắc mắc khác quý khách vui lòng liên hệ&nbsp;
                  <b>(+84) 868837207</b>&nbsp;để được hỗ trợ trực tiếp.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliPolicyPage;
