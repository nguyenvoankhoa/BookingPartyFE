import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Modal } from "antd";
import AddButton from "./AddButton";
const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Bong bóng"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="row">
          <div className="col-4 modal_img">
            <img src={props.img_src} />
          </div>
          <div className="col-8 modal_info">
            <h3>{props.price}</h3>
            <div className="mt-3 mb-3">
              <span>Số lượng &nbsp;&nbsp;</span>
              <input type="number" min={1} defaultValue={1} />
            </div>

            <AddButton />
            <span>
              &nbsp; hoặc <Link to="/item">&nbsp;Xem chi tiết</Link>
            </span>
          </div>
        </div>
      </Modal>

      <div className="card_img">
        <div className="card_img_wrapper">
          <NavLink to="/item" title="abc">
            <img src={props.img_src} alt="" />
          </NavLink>

          <div className="icon">
            <i className="fa-solid fa-eye" onClick={showModal}></i>
            <i className="fa-solid fa-cart-plus"></i>
          </div>
        </div>
      </div>
      <NavLink to="/item">
        <div className="card_title">
          <h3
            className={`${props.center ? "text-center" : ""} mt-3 ${
              props.fw ? props.fw : ""
            }`}
            style={{ color: "black", fontSize: props.fs }}
          >
            {props.name}
          </h3>
          <p className="text-center" style={{ color: "black" }}>
            {props.price}
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default Card;
