import React, { Component } from 'react';


import GameplayContainer from './containers/GameplayContainer'
import SettingsContainer from './containers/SettingsContainer'

class App extends Component {
  render() {
    return (
      <div>

        <h1>Play!</h1>
        <GameplayContainer />
        <SettingsContainer />

      </div>

    );
  }
}

export default App;
