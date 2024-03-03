import React from "react";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer";
import { Outlet } from "react-router-dom";
import { FloatButton, Popover } from "antd";
const content = (
  <div class="wrapper">
    <div class="chat-form">
      <textarea class="form-control" placeholder="Your Text Message"></textarea>
      <button class="btn btn-success btn-block">Send</button>
    </div>
  </div>
);
const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <FloatButton.Group shape="circle" style={{ right: 34 }}>
        <FloatButton.BackTop icon={<i class="fa-solid fa-arrow-up"></i>} />
        <Popover content={content} title="Chat with AI" trigger="click">
          <FloatButton
            icon={<i class="fa-brands fa-facebook-messenger"></i>}
            style={{ backgroundColor: "#de3163" }}
          />
        </Popover>
      </FloatButton.Group>
      <Footer />
    </>
  );
};

export default RootLayout;
