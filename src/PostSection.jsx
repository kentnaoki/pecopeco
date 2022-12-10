import "./PostSection.css";
import { PostItems } from "./PostItems";
import styled from "styled-components";

const PostSectionStyle = styled.div`
  .post-section {
    margin: 100px auto;
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
                <div className="post-item" key={e.id}>
                  {e.header !== null ? <h2>{e.header}</h2> : null}
                  {Array.isArray(e.content)
                    ? e.content.map((element) => {
                        return (
                          <div key={element.id}>
                            <div>{element.text}</div>
                            <div>
                              <img src={element.image} alt={element.text} />
                            </div>
                          </div>
                        );
                      })
                    : e.content}
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </PostSectionStyle>
  );
};
