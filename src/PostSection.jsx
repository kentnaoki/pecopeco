import "./PostSection.css";
import { PostItems } from "./PostItems";

export const PostSection = () => {
  return (
    <div>
      <section className="post-section">
        <div className="container">
          <article className="post-items">
            {PostItems.map((e) => {
              return (
                <div className="post-item">
                  {e.header !== null ? <h2>{e.header}</h2> : null}
                  <div className="post-item-wrapper">{e.content}</div>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </div>
  );
};
