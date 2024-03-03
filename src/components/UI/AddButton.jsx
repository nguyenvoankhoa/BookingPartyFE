import React from "react";

const AddButton = () => {
  return (
    <span
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid rgb(0 123 194)",
        display: "inline-block",
      }}
      className="p-2 mt-3 btn_add"
    >
      {" "}
      <i className="fa-solid fa-cart-shopping mr-2"></i>
      <span className="fw-600">Thêm vào giỏ</span>
    </span>
  );
};

export default AddButton;
