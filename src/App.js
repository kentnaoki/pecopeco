import "./App.css";
import { LogoSection } from "./components/LogoSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostSection } from "./components/PostSection";

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
