import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "../../Handle/Search";
import { Button, Dropdown, Space } from "antd";

import T01 from "../../../assets/T01.jpg";
import T02 from "../../../assets/T02.jpg";
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
            <div className="logo">CLOUD</div>
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
                  <div className="category">
                    <div className="sub-category">
                      <img src={T01} width="100%" />
                    </div>
                    <div>
                      Over 100 worksheets to guide you through each step of
                      planning your big day. Hundreds of reviews can't be wrong!
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Gói sinh nhật theo chủ đề
                      </div>
                      <Link to="product">
                        Trang trí trọn gói backgr siêu anh hùng
                      </Link>
                      <Link to="product">
                        Trang trí trọn gói backgr Elsa-Frozen
                      </Link>
                      <Link to="product">
                        Trang trí trọn gói backgr khủng long
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Gói đồng giá 1tr5
                      </div>
                      <Link to="product">
                        Gói Background mini chủ đề đám mây
                      </Link>
                      <Link to="product">
                        Gói Background mini chủ đề chuột Jerry
                      </Link>
                      <Link to="product">
                        Gói Background mini chủ đề cừu dễ thương
                      </Link>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Gói sinh nhật theo chủ đề
                      </div>
                      <Link to="product">
                        Trang trí trọn gói backgr siêu anh hùng
                      </Link>
                      <Link to="product">
                        Trang trí trọn gói backgr Elsa-Frozen
                      </Link>
                      <Link to="product">
                        Trang trí trọn gói backgr khủng long
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        Gói đồng giá 1tr5
                      </div>
                      <Link to="product">
                        Gói Background mini chủ đề đám mây
                      </Link>
                      <Link to="product">
                        Gói Background mini chủ đề chuột Jerry
                      </Link>
                      <Link to="product">
                        Gói Background mini chủ đề cừu dễ thương
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                TRANG TRÍ
                <div className="underline"></div>
              </div>
              <div className="dropdown">
                <div className="row">
                  <div className="category">
                    <div className="sub-category">
                      <img src={T02} width="100%" />
                    </div>
                    <div>
                      Over 100 worksheets to guide you through each step of
                      planning your big day. Hundreds of reviews can't be wrong!
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">COMBO TRANG TRÍ</div>
                      <Link to="decorate">
                        Trang trí trọn gói backgr siêu anh hùng (T01)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr Elsa-Frozen (T02)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr khủng long (T03)
                      </Link>
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">BONG BÓNG</div>
                      <Link to="decorate">
                        Trang trí trọn gói backgr siêu anh hùng (T01)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr Elsa-Frozen (T02)
                      </Link>
                      <Link to="decorate">
                        Trang trí trọn gói backgr khủng long (T03)
                      </Link>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="category">
                    <div className="sub-category">
                      <div className="sub-category_title">
                        TRANG TRÍ PHÔNG NỀN{" "}
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
                    </div>
                    <div className="sub-category">
                      <div className="sub-category_title">
                        PHỤ KIỆN BÀN TIỆC
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
