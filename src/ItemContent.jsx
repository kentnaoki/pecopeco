import styled from "styled-components";

const ItemStyle = styled.div`
  .item-content {
    display: flex;
    justify-content: center;
    align-items: center;
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
                <li key={element.id}>
                  <div className="list-image-container">
                    <img src={element.image} alt={element.text} />
                  </div>
                  <div className="list-text-container">{element.text}</div>
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
