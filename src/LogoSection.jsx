import { ConnectButton } from "web3uikit";
import styled from "styled-components";
import logo from "./img/logo.png";

const LogoSectionStyle = styled.div`
  .logo-section {
    background-image: url(${logo});
    width: 100%;
    position: relative;
    z-index: 1;
    height: 240px;
    display: block;
    background-size: auto 200px;
    background-repeat: no-repeat;
    background-color: black;
    background-position: center bottom;
  }
  .background-black-logo {
    background-color: rgba(0, 0, 0, 0.2);
    height: 240px;
  }
  .background-black {
    background-color: black;
    font-weight: bold;
    color: #999999;
    font-size: larger;
    text-align: center;
  }
  #title {
    font-size: 40px;
  }
  .heading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .connect-wallet {
    right: 0;
    position: absolute;
  }
`;

export const LogoSection = (props) => {
  return (
    <LogoSectionStyle>
      <section className="logo-section">
        <div className="background-black-logo"></div>
      </section>
      <div className="background-black">
        <div id="title">Peco Peco Penguin</div>
        <div className="heading-container">
          <div className="heading-text-container">
            <div>食の三味一体を彦摩呂が実現</div>
            <div>三方よしの食コミュニティを目指します</div>
          </div>
          <div className="connect-wallet">
            <ConnectButton moralisAuth={false} />
          </div>
        </div>
      </div>
    </LogoSectionStyle>
  );
};
