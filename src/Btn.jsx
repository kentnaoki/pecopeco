import { useState } from "react";
import styled from "styled-components";
import { Popup } from "./Popup";

const PopupStyle = styled.div`
  .popup-background {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .popup-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 30vh;
    background-color: rgba(255, 255, 255);
  }
  .content-container {
    position: relative;
    width: 30vw;
    height: 30vh;
  }
  .close-button {
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    box-shadow: none;
    background-color: white;
    color: grey;
    margin: 5px;
    font-size: 20px;
    padding: 0 2px;
  }
  .close-button:hover {
    border-radius: 2px;
  }
  .input-mint {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  select {
    text-align: right;
  }
  .mint-button {
    padding: 0;
    font-size: 16px;
    display: block;
    margin: 10px auto auto;
    padding: 3px 20px;
    border-radius: 2px;
    background-color: #cacaca;
    border: 1px black solid;
  }
`;

export const Btn = (props) => {
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup((prev) => !prev);
  };
  return (
    <div className="button-container">
      {props.btn.map((e) => {
        return (
          <PopupStyle>
            <button key={e.id} onClick={e.id === 2 ? handlePopup : null}>
              {e.content}
            </button>
            {popup && e.id === 2 && <Popup handlePopup={handlePopup} />}
          </PopupStyle>
        );
      })}
    </div>
  );
};
