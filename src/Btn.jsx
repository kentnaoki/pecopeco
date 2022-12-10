export const Btn = (props) => {
  return (
    <div>
      {props.btn.map((e) => {
        return <button>{e}</button>;
      })}
    </div>
  );
};
