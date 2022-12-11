import "./BreadcrumbSection.css";
import "./Header.css";
import { ConnectButton } from "web3uikit";

export const BreadcrumbSection = (props) => {
  return (
    <div>
      <section className="breadcrumb-section">
        <div className="background-black">
          <div className="breadcrumb-heading">
            <div className="heading-text-container">
              <div>- Peco Peco Penguin -</div>
              <div>食の三味一体を彦摩呂が実現</div>
              <div>三方よしの食コミュニティを目指します</div>
            </div>
            <div className="connect-wallet">
              <ConnectButton moralisAuth={false} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
