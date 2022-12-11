export const Btn = (props) => {
  return (
    <div className="button-container">
      {props.btn.map((e) => {
        return <button key={e.id}>{e.content}</button>;
      })}
    </div>
  );
};
