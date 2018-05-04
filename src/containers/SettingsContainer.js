import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetLimits from '../components/setLimits';

export class SettingsContainer extends Component {
  render() {
    return (
      <div>
        <p><strong>Game Config</strong></p>
        <SetLimits />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameParams: state.gameParams
  }
}

const SettingsContainerStore = connect(
  mapStateToProps
)(SettingsContainer)

export default SettingsContainerStore;