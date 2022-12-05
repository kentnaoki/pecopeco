import "./App.css";
import { BreadcrumbSection } from "./BreadcrumbSection";
import { Header } from "./Header";
import { PostSection } from "./PostSection";

function App() {
  return (
    <div className="App">
      <a className="skip-link screen-reader-text" href="#content">
        コンテンツへスキップ
      </a>
      <Header />
      <BreadcrumbSection />
      <PostSection />
    </div>
  );
}

export default App;
