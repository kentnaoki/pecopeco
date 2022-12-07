import "./App.css";
import { BreadcrumbSection } from "./BreadcrumbSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostSection } from "./PostSection";
import { useState } from "react";
import { ConnectWallet } from "./ConnectWallet";

function App() {
  const [connectWallet, setConnectWallet] = useState(false);
  const handleClickConnectWallet = () => {
    setConnectWallet((prev) => !prev);
  };
  return (
    <div className="App">
      <a className="skip-link screen-reader-text" href="#content">
        コンテンツへスキップ
      </a>
      <Header />
      <BreadcrumbSection handleClick={handleClickConnectWallet} />
      {connectWallet && <ConnectWallet />}
      <PostSection />
      <Footer />
    </div>
  );
}

export default App;
