import "./SeasonDisplay.css";

const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const location = props.latitude;

  const seasonConfig = {
    Summer: {
      text: "Let's hit the beach",
      iconName: "sun",
    },
    Winter: {
      text: "Burr, it is chilly",
      iconName: "snowflake",
    },
  };

  const season = (month, location) => {
    if (month > 2 && month < 9) {
      return location > 0 ? "Summer" : "Winter";
    } else {
      return location > 0 ? "Winter" : "Summer";
    }
  };

  const seasonName = season(month, location);
  const { text, iconName } = seasonConfig[seasonName];
  return (
    <div className={`season-display ${seasonName}`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
