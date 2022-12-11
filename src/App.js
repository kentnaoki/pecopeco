import "./App.css";
import { LogoSection } from "./LogoSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PostSection } from "./PostSection";

function App() {
  return (
    <div className="App">
      <a className="skip-link screen-reader-text" href="#content">
        コンテンツへスキップ
      </a>
      <Header />
      <LogoSection />
      <PostSection />
      <Footer />
    </div>
  );
}

export default App;
