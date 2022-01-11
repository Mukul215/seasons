import React from "react";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  // initialize the state object
  state = { latitude: null, longitude: null, error: "" };

  componentDidMount() {
    // get current location of user
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => this.setState({ latitude: position.coords.latitude }),
      // error callback
      (error) => this.setState({ error: error.message })
    );
  }

  // componentDidUpdate() {
  //   console.log("Component updated");
  // }

  render() {
    return (
      <div>
        <SeasonDisplay latitude={this.state.latitude} />
        {this.state.error === "" ? (
          <p>Latitude: {this.state.latitude}</p>
        ) : (
          <p>Error: {this.state.error}</p>
        )}
      </div>
    );
  }
}

export default App;
