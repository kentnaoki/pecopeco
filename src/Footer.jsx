import "./Footer.css";
import { footerItems } from "./FooterItems";

export const Footer = () => {
  return (
    <footer
      id="footer-section"
      style={{
        background: `url(
          "https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/スクリーンショット-2022-11-19-235629.png"
        )`,
        backgroundSize: `cover`,
      }}
    >
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
          <div className="copyright">
            Copyright © 2022 Peco Peco Penguin |<br></br> Powered by Appetizer
          </div>
          <div className="contact">
            <div>
              <a href="./">お問い合わせ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
