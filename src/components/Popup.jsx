export const Popup = (props) => {
  return (
    <div className="popup-background">
      <div className="popup-container">
        <div className="content-container">
          <button className="close-button" onClick={props.handlePopup}>
            ✖
          </button>
          <div className="input-mint">
            mint枚数：
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            枚<button className="mint-button">決定</button>
          </div>
        </div>
      </div>
    </div>
  );
};
