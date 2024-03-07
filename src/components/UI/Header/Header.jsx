import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "../../Handle/Search";
import { Button, Dropdown, Space } from "antd";

import T01 from "../../../assets/T01.jpg";
import T02 from "../../../assets/T02.jpg";
import Logo from "../../../assets/Logo và banner/Cute Cloud Love and Toys Logo (4).png"
const items = [
  { key: "1", label: <Link to="delivery-policy">CHÍNH SÁCH GIAO HÀNG</Link> },
  { key: "2", label: <Link to="return-policy">CHÍNH SÁCH ĐỔI TRẢ</Link> },
  { key: "3", label: <Link to="faq">CÂU HỎI THƯỜNG GẶP</Link> },
];
const Header = () => {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container js_bet">
          <NavLink className="navbar-brand" to="">
            <div className="logo">
              <img src={Logo} />
            </div>
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                TRANG CHỦ
                <div className="underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                SẢN PHẨM <div className="underline"></div>
              </div>

              <div className="dropdown">
                <div className="row">
                  <div className="category-img">
                    <div className="sub-category mb-3">
                      <img src={T01} width="100%" />
                    </div>
                    <div className="intro">
                      Danh sách sản phẩm combo trang trí, bong bóng, và trang
                      trí phông nền mang đến sự phong phú và đa dạng để tạo
                      không gian ấn tượng cho bất kỳ sự kiện nào.
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">COMBO TRANG TRÍ</div>
                      <Link to="product">
                        Combo mini trang trí Blue Silver (T21)
                      </Link>
                      <Link to="product">
                        Combo mini trang trí Hàn quốc mẫu 22 (T22)
                      </Link>
                      <Link to="product">
                        Combo mini trang trí Hàn quốc mẫu 23 (T23)
                      </Link>
                      <Link to="product">
                        Combo mini trang trí Hàn quốc mẫu 24 (T24)
                      </Link>
                      <Link to="product">
                        Combo mini trang trí Sunshine (T25)
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">BONG BÓNG</div>
                      <Link to="product">Bóng 60cm Pastel (T26)</Link>
                      <Link to="product">Bóng Nhũ (10 Trái) (T27)</Link>
                      <Link to="product">Bóng nhôm (T28)</Link>
                      <Link to="product">Bóng Confetti (10 trái) (T29)</Link>
                      <Link to="product">
                        Trụ cắm bóng - 11 nhánh 135cm (T30)
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        TRANG TRÍ PHÔNG NỀN
                      </div>
                      <Link to="product">
                        Bộ Cờ Tam Giác Ép Kim 12 Lá (T31)
                      </Link>
                      <Link to="product">
                        Dây cờ Happy Birthday đuôi cá mix màu (T32)
                      </Link>
                      <Link to="product">
                        Dây đèn led vàng cắm điện - 8m (T33)
                      </Link>
                      <Link to="product">
                        Rèm Background kim tuyến - Bạc (T34)
                      </Link>
                      <Link to="product">
                        Rèm Background Sequin - Hồng nhạt (T35)
                      </Link>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">
                        PHỤ KIỆN BÀN TIỆC
                      </div>
                      <Link to="product">
                        Bộ 10 dĩa ăn in họa tiết trang trí bàn tiệc (T36)
                      </Link>
                      <Link to="product">
                        Bộ 10 Ly giấy in họa tiết trang trí bàn tiệc (T37)
                      </Link>
                      <Link to="product">
                        Bộ khăn trải bàn + chân váy quấn bàn nhiều màu
                      </Link>
                      <Link to="product">
                        Kệ bánh 3 tầng - Ép kim nan hoa (T39)
                      </Link>
                      <Link to="product">Ống Hút Giấy - Hoạt hình (T40)</Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">ĐỒ CHƠI PARTY</div>
                      <Link to="product">Bình xịt dây sinh nhật (T41)</Link>
                      <Link to="product">Pháo bông que cầm tay (T42)</Link>
                      <Link to="product">
                        Bộ 12 Props chụp hình chủ đề (T43)
                      </Link>
                      <Link to="product">Pháo giấy Confetti (T44)</Link>
                      <Link to="product">Bong Bóng Nước 111 Trái (T45)</Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        NÓN, KÍNH, BĂNG ĐÔ
                      </div>
                      <Link to="product">Băng đeo Sash lấp lánh (T46)</Link>
                      <Link to="product">Vương miện ép kim (T47)</Link>
                      <Link to="product">Set 5 Nón Tiệc (T48)</Link>
                      <Link to="product">
                        Kính HPBD Cupcake Selfie chụp hình (T49)
                      </Link>
                      <Link to="product">
                        Băng Đô Cài Đầu Happy Birthday (T50)
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                DỊCH VỤ
                <div className="underline"></div>
              </div>
              <div className="dropdown">
                <div className="row">
                  <div className="category-img">
                    <div className="sub-category mb-3">
                      <img src={T02} width="100%" />
                    </div>
                    <div className="intro">
                      Đa dạng gói trang trí sinh nhật từ siêu anh hùng đến Elsa
                      Frozen, phù hợp cho cả bé trai và bé gái, giúp tạo không
                      gian sinh nhật đặc biệt và ấn tượng.
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Gói sinh nhật theo chủ đề
                      </div>
                      <Link to="decorate">
                        Trang trí trọn gói backgr siêu anh hùng (T01)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr Elsa-Frozen (T02)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr khủng long (T03)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr thỏ con (T04)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr hoàng tử bé (T05)
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Gói đồng giá 1tr5
                      </div>
                      <Link to="decorate">
                        Gói Background mini chủ đề đám mây ( T06)
                      </Link>
                      <Link to="decorate">
                        Gói Background mini chủ đề chuột Jerry ( T07)
                      </Link>
                      <Link to="decorate">
                        Gói Background mini chủ đề cừu dễ thương ( T08)
                      </Link>
                      <Link to="decorate">
                        Gói Background mini chủ đề Elsa ( T09)
                      </Link>
                      <Link to="decorate">
                        Gói Background mini chủ đề gấu trúc ( T10)
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Sinh nhật bé trai
                      </div>
                      <Link to="decorate">
                        Trang trí trọn gói backgr doraemon mẫu 11 (T11)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 12 (T12)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr hổ con mẫu 13 (T13)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr phi hành gia mẫu 14 (T14)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 15 (T15)
                      </Link>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">Sinh nhật bé gái</div>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 16 (T16)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 17 (T17)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 18 (T18)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 19 (T19)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr mẫu 20 (T20)
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        TỔ CHỨC SINH NHẬT TRỌN GÓI
                      </div>
                      <Link to="decorate">Combo 1</Link>
                      <Link to="decorate">Combo 2</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="introduce">
                GIỚI THIỆU
                <div className="underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="news">
                TIN TỨC
                <div className="underline"></div>
              </NavLink>
            </li>
            <li className="nav-item">
              <Dropdown
                menu={{
                  items,
                }}
              >
                <div className="nav-link" to="">
                  CHÍNH SÁCH
                  <div className="underline"></div>
                </div>
              </Dropdown>
            </li>
          </ul>
          <div className="d-flex fl-end">
            <div className="quote_btn-container">
              <NavLink to="cart">
                <i className="fa-solid fa-cart-shopping" aria-hidden="true" />
              </NavLink>

              <NavLink to="login">
                <i className="fa fa-user" aria-hidden="true" />
              </NavLink>
            </div>
          </div>
        </nav>
      </div>

      <nav className="navbar navbar-expand-lg custom_nav-container js">
        <Search />
      </nav>
    </header>
  );
};

export default Header;
