import { PostItems } from "./PostItems";
import styled from "styled-components";
import { ItemContent } from "./ItemContent";

const PostSectionStyle = styled.div`
  .post-section {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .items-container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .items-container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .items-container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .items-container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .items-container {
      max-width: 1140px;
    }
  }
  .post-items {
    box-shadow: 0px 0px 9.4px 0.6px rgb(152 152 152 / 63%);
    border-radius: 4px;
    padding: 20px;
  }
  h2 {
    text-align: center;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .post-item {
    box-sizing: border-box;
    padding: 2rem;
    margin: 10px auto;
  }
  .zero {
    background: linear-gradient(to right bottom, #eecbd3, #e20333);
  }
  .one {
    background: linear-gradient(to right bottom, white, grey);
  }
  .two {
    background: linear-gradient(to right bottom, #eecbd3, #e20333);
  }
  .three {
    background: linear-gradient(to right bottom, #b9b9b9, #202020);
  }
  .four {
    background: linear-gradient(to right bottom, #eecbd3, #e20333);
  }
`;

export const PostSection = () => {
  return (
    <PostSectionStyle>
      <section className="post-section">
        <div className="items-container">
          <article className="post-items">
            {PostItems.map((e) => {
              return (
                <div className={"post-item " + e.id}>
                  {e.header !== null ? <h2>{e.header}</h2> : null}
                  <ItemContent e={e} />
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </PostSectionStyle>
  );
};
