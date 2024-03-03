import React from "react";

const RegisterForm = () => {
  return (
    <div className="main_body_content">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                ĐĂNG KÝ
              </h5>
              <form>
                <div className="form-floating mb-3">
                  <label htmlFor="floatingInput">Họ *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    required
                  />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="floatingInput">Tên *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    required
                  />
                </div>
                <div className="form-floating mb-3">
                  <label htmlFor="floatingInput">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    required
                  />
                </div>

                <div className="form-floating mb-3">
                  <label htmlFor="floatingPassword">Mật khẩu *</label>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    required
                  />
                </div>

                <div className="justify-content-center d-flex">
                  <button
                    className="btn btn-login fw-bold"
                    type="submit"
                    style={{ backgroundColor: "#4d9fff", color: "white" }}
                  >
                    Đăng ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
