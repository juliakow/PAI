import "./ProgressBrar.scss";

const ProgressBar = (props) => {
  return (
    <div
      className="progressbar"
      style={{
        width: `${props.value}%`,
      }}
    ></div>
  );
};

export default ProgressBar;
