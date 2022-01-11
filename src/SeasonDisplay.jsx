const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const location = props.latitude;

  const season = (month, location) => {
    if (location >= 0) {
      if (month >= 0 && month <= 2) {
        return "Winter";
      } else if (month >= 3 && month <= 8) {
        return "Summer";
      } else {
        return "Winter";
      }
    } else {
      if (month >= 0 && month <= 2) {
        return "Summer";
      } else if (month >= 3 && month <= 8) {
        return "Winter";
      } else {
        return "Summer";
      }
    }
  };
  const seasonName = season(month, location);

  return (
    <div>
      <h1>This the current season: {seasonName}</h1>
    </div>
  );
};

export default SeasonDisplay;
