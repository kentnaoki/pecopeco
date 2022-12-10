import hikomaro from "./img/hikomaro.png";
import restaurant from "./img/restaurant.png";
import smartphone from "./img/smartphone.png";
import discord from "./img/discord.png";
import twitter from "./img/twitter.png";
import { Btn } from "./Btn";

const buttonList = [<strong>ご購入はこちら☚</strong>, <strong>開発用B</strong>];
const iconButtonList = [
  <img className="discord-image" src={discord} alt="discord" />,
  <img className="twitter-image" src={twitter} alt="twitter" />,
];

export const PostItems = [
  {
    id: 0,
    header: "Peco Peco Penguinってなに？",
    content: (
      <div>
        次世代の食コミュニティに所属することを表すNFT型会員権です。この会員権があることで入れるdiscordチャネルにて食レビューなどをすることでコミュニティトークンを得られるようになったり、その他特典を享受できます。すでに他著名人の方も参加が確定しております。
      </div>
    ),
  },
  {
    id: 1,
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
    id: 2,
    header: null,
    content: (
      <div className="block-button-container">
        <Btn btn={buttonList} />
      </div>
    ),
  },
  {
    id: 3,
    header: null,
    content: (
      <div className="icons">
        <Btn btn={iconButtonList} />
      </div>
    ),
  },
  {
    id: 4,
    header: null,
    content: (
      <div className="block-button-row">
        <Btn btn={[buttonList[0]]} />
      </div>
    ),
  },
];
