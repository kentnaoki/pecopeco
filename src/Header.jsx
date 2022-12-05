import "./Header.css";
export const Header = () => {
  return (
    <header id="main-header" className="main-header">
      <div className="navigation-wrapper">
        <div className="main-nav-desktop">
          <div className="container">
            <div className="row">
              <div className="logo">
                <a
                  href="https://markdoor.net/pecopecopenguin/"
                  className="custom-logo-link"
                  rel="home"
                  aria-current="page"
                >
                  <img
                    src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/cropped-cropped-彦摩呂NFTPJ-3P-3.png"
                    class="custom-logo"
                    alt="Peco Peco Penguin"
                    decoding="async"
                    srcset="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/cropped-cropped-彦摩呂NFTPJ-3P-3.png 512w, https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/cropped-cropped-彦摩呂NFTPJ-3P-3-300x229.png 300w"
                    sizes="(max-width: 512px) 100vw, 512px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav-mobile"></div>
      </div>
    </header>
  );
};
