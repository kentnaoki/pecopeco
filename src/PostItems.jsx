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

// export const PostItems = () => {
//     const postItems = [];
//     return (
//         <div className="post-content">
// <div className="post-item" id="first-item">
//   <h2>PPPとは</h2>
// </div>
//               <div className="post-item" id="second-item">
//                 <h2>PPPの特徴</h2>
//                 <div className="post-item-wrapper">
//                   <ul className="post-second-list">
//                     <li className="post-second-list-item">
//                       <div className="post-second-image-container">
//                         <img src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/profile_img-300x300.png" />
//                       </div>
//                       <div className="post-second-text-container">
//                         <p>芸能人/著名人も参加する食コミュニティ</p>
//                       </div>
//                     </li>
//                     <li className="post-second-list-item">
//                       <div className="post-second-image-container">
//                         <img src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/スクリーンショット-2022-11-28-080412-300x294.png" />
//                       </div>
//                       <div className="post-second-text-container">
//                         <p>NFTを出したい飲食店の支援</p>
//                       </div>
//                     </li>
//                     <li className="post-second-list-item">
//                       <div className="post-second-image-container">
//                         <img src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/スクリーンショット-2022-11-28-074659-1-300x294.png" />
//                       </div>
//                       <div className="post-second-text-container">
//                         <p>会員限定レビューの公開/食べ物勝手にコンテスト実施</p>
//                       </div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="post-item" id="third-item">
//                 <div className="block-button-container">
//                   <div className="block-button">
//                     <a href="./" className="block-button-link">
//                       <strong>ご購入はこちら☚</strong>
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="post-item" id="fourth-item">
//                 <div className="icons">
//                   <div className="icon-container">
//                     <a href="./" className="discord-link">
//                       <img
//                         className="discord-image"
//                         src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/ダウンロード-1.png"
//                       />
//                     </a>
//                   </div>
//                   <div className="icon-container">
//                     <a href="./" className="twitter-link">
//                       <img
//                         className="twitter-image"
//                         src="https://markdoor.net/pecopecopenguin/wp-content/uploads/2022/11/ダウンロード-2.png"
//                       />
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               <div className="post-item" id="fifth-item">
//                 <div className="block-button-row">
//                   <div className="fifth-post-button-container">
//                     <a href="./" className="row-button-link">
//                       <strong>ご購入はこちら☚</strong>
//                     </a>
//                   </div>
//                   <div className="fifth-post-button-container">
//                     <a href="./" className="row-button-link">
//                       <strong>開発用B</strong>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     )
// }
