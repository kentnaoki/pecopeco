import styled from "styled-components";
import { footerItems } from "./FooterItems";
import email from "../img/email.png";

const FooterStyle = styled.div`
  .footer-section {
    background-color: black;
    color: #999999;
  }
  .footer-section a {
    color: #999999;
    text-decoration: none;
    display: flex;
  }
  .footer-section a:hover {
    text-decoration: underline;
    color: white;
    cursor: pointer;
  }
  .footer-content {
    padding-top: 40px;
    padding-bottom: 20px;
  }
  .footer-main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .row-content {
    display: flex;
    align-items: center;
    background-color: #303030;
  }
  .row-content:hover {
    background-color: #676464;
  }
  .icon img {
    max-width: 50px;
    max-height: auto;
    padding: 10px;
  }
  .footer-info {
    padding-right: 10px;
  }
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 10px;
    gap: 5px;
  }
  .contact-img-container {
    display: flex;
  }
  .contact-img-container img {
    max-width: 30px;
    max-height: auto;
  }
  .copyright {
    text-align: center;
  }
`;

export const Footer = () => {
  return (
    <FooterStyle>
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-main">
            {footerItems.map((e) => {
              return (
                <div className="row-content" key={e.id}>
                  <div className="icon">
                    <a href="./">
                      <img src={e.img} />
                    </a>
                  </div>
                  <div className="footer-info">
                    <a href="./">{e.text}</a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="footer-copyright">
            <div className="contact">
              <div className="contact-img-container">
                <a>
                  <img src={email} />
                </a>
              </div>
              <div>
                <a href="./">お問い合わせ</a>
              </div>
            </div>
            <div className="copyright">
              Copyright © 2022 Peco Peco Penguin | Powered by Appetizer
            </div>
          </div>
        </div>
      </footer>
    </FooterStyle>
  );
};
