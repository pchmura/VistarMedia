import React, { Component } from 'react';
import { connect } from 'react-redux';

import GuessInput from '../components/guessInput';
import Feedback from '../components/feedback';

export class GameplayContainer extends Component {
  render() {
    return (
      <div>
        <p>Guess the number between {this.props.gameParams.lowerLimit} and {this.props.gameParams.upperLimit}</p>
        <div>Last guess: {this.props.gameParams.lastGuess}</div>
        <Feedback />
        <GuessInput />    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameParams: state.gameParams
  }
}

const GameplayContainerStore = connect(mapStateToProps)(GameplayContainer)

export default GameplayContainerStore;