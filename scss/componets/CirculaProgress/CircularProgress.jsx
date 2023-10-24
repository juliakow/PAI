const CirlcularProgress = (props) => {
  return (
    <div className="circular-progress">
      <div>
        <span>{props.value}%</span>
      </div>
    </div>
  );
};

export default CirlcularProgress;
