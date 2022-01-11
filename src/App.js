import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
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

  renderContent() {
    if (this.state.error && !this.state.latitude) {
      return <div>Error: {this.state.error}</div>;
    }

    if (!this.state.error && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <Spinner message="Please accept the location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
