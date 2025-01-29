import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span>📧</span> info@example.com
              </p>
              <p className="contact-item">
                <span>📱</span> +1 234 567 890
              </p>
              <p className="contact-item">
                <span>📍</span> 123 Street Name, City
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="quick-links">
              {["About Us", "Services", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-grid">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a key={social} href={`#${social.toLowerCase()}`} className="social-link">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} All Rights Reserved.
            <span>Made with ♥️ by Effect Parquet</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
