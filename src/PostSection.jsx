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
    </div>
  );
};
