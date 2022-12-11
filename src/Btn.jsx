export const Btn = (props) => {
  return (
    <div className="button-container">
      {props.btn.map((e) => {
        return <button>{e}</button>;
      })}
    </div>
  );
};
