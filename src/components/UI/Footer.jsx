import React from "react";
import Information from "./Body/Information";

const Footer = () => {
  return (
    <>
      <Information />
      <footer className="container-fluid footer_section">
        <div className="container">
          <div className="col-md-11 col-lg-8 mx-auto">
            <p>
              © <span id="displayYear" /> All Rights Reserved By
              <a href="https://html.design/"> Cloud</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
