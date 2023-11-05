import "./CircularProgress.scss";
const CirlcularProgress = (props) => {
  return (
    <div
      style={{
        background: `conic-gradient(red 0% ${props.value}%, blue ${props.value}% 100%)`,
      }}
    >
      <div>
        <span>{props.value}%</span>
      </div>
    </div>
  );
};

export default CirlcularProgress;
