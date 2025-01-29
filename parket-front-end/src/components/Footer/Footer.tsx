import React from "react";
import { useTranslations } from "next-intl";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t("contact_us")}</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span>📧</span> {t("email")}
              </p>
              <p className="contact-item">
                <span>📱</span> {t("phone")}
              </p>
              <p className="contact-item">
                <span>📍</span> {t("address")}
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t("quick_links")}</h3>
            <ul className="quick-links">
              {["about_us", "services", "contact", "privacy_policy"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace("_", "-")}`}>{t(item)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t("follow_us")}</h3>
            <div className="social-grid">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a key={social} href={`#${social.toLowerCase()}`} className="social-link">
                  {t(social)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {t("all_rights_reserved")}.<span>{t("made_by")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
