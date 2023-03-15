import React from "react";
import Instagram from "../images/icons/Instagram.svg";
import CopyRight from "../images/icons/copyright.svg";
import { useNavigate } from "react-router-dom";
// import email from "../images/icons/email.svg";
// import Email from "./Email";

import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "var(--clr-grad)", width: "100%" }}>
      <div className="center-div Footer">
        <div
          onClick={() => navigate("https://www.instagram.com/myself_shriram/")}
        >
          <img
            src={Instagram}
            alt="instagram"
            style={{ marginRight: "0.5rem" }}
          />
          <a
            href="https://www.instagram.com/myself_shriram/"
            style={{ textDecoration: "none" }}
          >
            <span>Contact with us on Instagram</span>
          </a>
        </div>
        {/* <div className="FooterEmail">
          <Email />
        </div> 
        <button>
          Subscribe to our newsletter <img src={email} alt="email" />
  </button>*/}
        <div>
          <img src={CopyRight} alt="copyright" style={{ margin: "1rem 0" }} />
          EMS Library , All rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
