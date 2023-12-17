import "./progress-bar.css";
export const ProgressBar = (props: { completedPercentage: number }) => {
  /* methods */
  const getProgressBarStyles = () => {
    if (props.completedPercentage > 0 && props.completedPercentage <= 20) {
      return "progress-bar error";
    } else if (
      props.completedPercentage > 20 &&
      props.completedPercentage <= 50
    ) {
      return "progress-bar warning";
    } else if (
      props.completedPercentage > 50 &&
      props.completedPercentage <= 70
    ) {
      return "progress-bar good";
    } else if (
      props.completedPercentage > 70 &&
      props.completedPercentage <= 100
    ) {
      return "progress-bar completed";
    }
  };

  return (
    <div>
      {" "}
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={getProgressBarStyles()}
          style={{ width: `${props.completedPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};
