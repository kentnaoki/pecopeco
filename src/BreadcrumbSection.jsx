import "./BreadcrumbSection.css";
import "./Header.css";

export const BreadcrumbSection = (props) => {
  return (
    <div>
      <section
        id="breadcrumb-section"
        className="breadcrumb-area breadcrumb-center"
        style={{
          backgroundImage: `url("https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/スクリーンショット-2022-11-19-235227.png")`,
        }}
      >
        <div className="background-black">
          <div className="container">
            <div className="breadcrumb-heading">
              <div className="heading-text-container">
                <div>- Peco Peco Penguin -</div>
                <div>食の三味一体を彦摩呂が実現</div>
                <div>三方よしの食コミュニティを目指します</div>
              </div>
              <div className="connect-wallet">
                <button
                  onClick={props.handleClick}
                  className="connect-wallet-button"
                >
                  connect wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
