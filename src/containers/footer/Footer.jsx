import React from 'react';

import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step up better than others ?</h1>
    </div>

    <div className="footer-btn">
      <p>Get Started On Your Coding Journey</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">

        <p>Manipal University Jaipur <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>

        <p>Social Media</p>
        <p>Linktree</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>085-132567</p>
        <p>CodeHive@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 Code Hive. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
