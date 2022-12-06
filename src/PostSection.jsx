import "./PostSection.css";

export const PostSection = () => {
  return (
    <div>
      <section className="post-section">
        <div className="container">
          <article className="post-items">
            <div className="post-content">
              <div className="post-item" id="first-item">
                test1
              </div>
              <div className="post-item" id="second-item">
                test2
              </div>
              <div className="post-item" id="third-item">
                <div className="block-button-container">
                  <div className="block-button">
                    <a href="./" className="block-button-link">
                      <strong>ご購入はこちら☚</strong>
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <div className="icons">
                  <div className="icon-container">
                    <a href="./" className="discord-link">
                      <img
                        className="discord-image"
                        src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/ダウンロード-1.png"
                      />
                    </a>
                  </div>
                  <div className="icon-container">
                    <a href="./" className="twitter-link">
                      <img
                        className="twitter-image"
                        src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/ダウンロード-2.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="post-item">
                <div className="block-button-row">
                  <div className="purchase-button-container">
                    <a href="./" className="row-button-link">
                      <strong>ご購入はこちら☚</strong>
                    </a>
                  </div>
                  <div className="dev-button-container">
                    <a href="./" className="row-button-link">
                      <strong>開発用B</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
