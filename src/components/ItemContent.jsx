import styled from "styled-components";

const ItemStyle = styled.div`
  .item-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list-item {
    display: flex;
    margin: 1.5rem auto;
  }

  .list-item:nth-child(even) {
    flex-direction: row-reverse;
  }
  .list-image-container {
    width: 300px;
  }
  .list-text-container {
    width: 300px;
    display: flex;
    align-items: center;
  }
  .list-text-container p {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const ItemContent = (props) => {
  return (
    <ItemStyle>
      <div className="item-content">
        {Array.isArray(props.e.content) ? (
          <ul>
            {props.e.content.map((element) => {
              return (
                <li className="list-item" key={element.id}>
                  <div className="list-image-container">
                    <img src={element.image} alt={element.text} />
                  </div>
                  <div className="list-text-container">
                    <p>{element.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          props.e.content
        )}
      </div>
    </ItemStyle>
  );
};
