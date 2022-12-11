import hikomaro from "./img/hikomaro.png";
import restaurant from "./img/restaurant.png";
import smartphone from "./img/smartphone.png";
import discord from "./img/discord-trimmed.png";
import twitter from "./img/twitter.png";
import { Btn } from "./Btn";
import styled from "styled-components";

const buttonList = [
  "ご購入はこちら☚",
  "開発用B",
  "仮想通貨_保有ユーザー",
  "仮想通貨_非保有ユーザー",
];
const iconButtonList = [
  <img className="discord-image" src={discord} alt="discord" />,
  <img className="twitter-image" src={twitter} alt="twitter" />,
];

const ButtonStyle = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }
  button {
    font-size: 30px;
    cursor: pointer;
    border-radius: 17px;
    border: none;
    padding: 1rem;
    box-shadow: 0px 0px 9.4px 0.6px rgb(152 152 152 / 63%);
  }
  button:hover {
    background-color: #c4c1c1;
    box-shadow: 0px 0px 9.4px 0.6px rgb(0 0 0);
  }
`;

const ButtonStyleHorizontal = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 100px;
  }
`;

const IconButtonStyleHorizontal = styled.div`
  button {
    cursor: pointer;
    padding: 0;
    margin: 0;
    border: none;
  }
  button:hover {
    box-shadow: 0px 0px 9.4px 0.6px rgb(0 0 0);
  }
  img {
    display: block;
  }
`;

export const PostItems = [
  {
    id: "zero",
    header: "Peco Peco Penguinってなに？",
    content: (
      <div>
        <p>
          次世代の食コミュニティに所属することを表すNFT型会員権です。この会員権があることで入れるdiscordチャネルにて食レビューなどをすることでコミュニティトークンを得られるようになったり、その他特典を享受できます。すでに他著名人の方も参加が確定しております。
        </p>
      </div>
    ),
  },
  {
    id: "one",
    header: "Peco Peco Penguinの特徴",
    content: [
      {
        id: 0,
        text: "食レポ王彦摩呂が各業界の食好きの皆様と食コミュニティを立ち上げます",
        image: hikomaro,
      },
      {
        id: 1,
        text: "食に関する課題解決を支援",
        image: restaurant,
      },
      {
        id: 2,
        text: "会員限定レビューの公開/食べ物勝手にコンテスト実施",
        image: smartphone,
      },
    ],
  },
  {
    id: "two",
    header: "ご購入はこちら☚",
    content: (
      <div>
        <ButtonStyle>
          <ButtonStyleHorizontal>
            <Btn btn={buttonList.slice(2, 4)} />
          </ButtonStyleHorizontal>
        </ButtonStyle>
      </div>
    ),
  },
  {
    id: "three",
    header: null,
    content: (
      <ButtonStyleHorizontal>
        <IconButtonStyleHorizontal>
          <Btn btn={iconButtonList} />
        </IconButtonStyleHorizontal>
      </ButtonStyleHorizontal>
    ),
  },
  {
    id: "four",
    header: null,
    content: (
      <ButtonStyle>
        <Btn btn={buttonList.slice(0, 2)} />
      </ButtonStyle>
    ),
  },
];
