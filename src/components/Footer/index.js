import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__logo-footer-container">
          <Logo />
        </div>
        <div className="footer__container__links-footer-container">
          <div className="footer__container__links-footer-container__links-box">
            <div>Product</div>
            <div>Features</div>
            <div>Pricing</div>
            <div>Book a demo</div>
          </div>

          <div className="footer__container__links-footer-container__links-box">
            <div>Product</div>
            <div>Features</div>
            <div>Pricing</div>
            <div>Book a demo</div>
          </div>

          <div className="footer__container__links-footer-container__links-box">
            <div>Product</div>
            <div>Features</div>
            <div>Pricing</div>
            <div>Book a demo</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
